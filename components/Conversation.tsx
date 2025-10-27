import { GoogleGenAI, LiveServerMessage, Modality, Session } from '@google/genai';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { encode, decode, decodeAudioData } from '../utils/audioUtils';
import type { TranscriptionEntry, ConversationMode } from '../types';
import { MicrophoneIcon, StopCircleIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, SparklesIcon, PencilSquareIcon, ClipboardIcon, ClipboardCheckIcon } from './Icons';
import { analyzeConversation, getReplySuggestions, correctTextStream, explainCorrections } from '../services/geminiService';

interface ConversationProps {
    apiKey: string;
}

const Conversation: React.FC<ConversationProps> = ({ apiKey }) => {
    const [conversationMode, setConversationMode] = useState<ConversationMode | null>(null);
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [transcriptionHistory, setTranscriptionHistory] = useState<TranscriptionEntry[]>([]);
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [suggestedReplies, setSuggestedReplies] = useState<string[]>([]);
    const [isSuggesting, setIsSuggesting] = useState(false);
    
    // State per il correttore testuale
    const [inputText, setInputText] = useState('');
    const [correctedText, setCorrectedText] = useState<string | null>(null);
    const [isCorrecting, setIsCorrecting] = useState(false);
    const [explanation, setExplanation] = useState<string | null>(null);
    const [isExplaining, setIsExplaining] = useState(false);
    const [isCopied, setIsCopied] = useState(false);


    const sessionPromiseRef = useRef<Promise<Session> | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const inputAudioContextRef = useRef<AudioContext | null>(null);
    const outputAudioContextRef = useRef<AudioContext | null>(null);
    const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
    const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
    
    const transcriptionPartsRef = useRef({ userInput: '', modelOutput: '' });
    const nextStartTimeRef = useRef(0);

    const cleanup = useCallback(() => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        if (scriptProcessorRef.current) scriptProcessorRef.current.disconnect();
        if(mediaStreamSourceRef.current) mediaStreamSourceRef.current.disconnect();
        if (inputAudioContextRef.current?.state !== 'closed') inputAudioContextRef.current?.close();
        if (outputAudioContextRef.current?.state !== 'closed') outputAudioContextRef.current?.close();

        if (sessionPromiseRef.current) {
            sessionPromiseRef.current.then(session => session.close()).catch(e => console.error("Error closing session:", e));
            sessionPromiseRef.current = null;
        }
        setIsSessionActive(false);
        setStatusMessage('Conversazione terminata.');
    }, []);

    const stopConversation = useCallback(() => cleanup(), [cleanup]);

    const startConversation = async (mode: ConversationMode) => {
        if (isSessionActive || mode === 'corrector') return;
        
        resetConversation();
        setConversationMode(mode);
        setStatusMessage('Inizializzazione...');
        
        try {
            const ai = new GoogleGenAI({ apiKey });
            
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            nextStartTimeRef.current = 0;
            
            setStatusMessage('Connessione...');

            const isTeacherMode = mode === 'teacher';
            const systemInstruction = isTeacherMode 
                ? 'Sei una professoressa di italiano esperta, severa ma giusta. Il tuo studente ha un livello B1-B2. Parla in italiano chiaro e corretto. Il tuo compito PRINCIPALE è correggere TUTTI gli errori significativi di grammatica, lessico o pronuncia. Non esitare a interrompere gentilmente la sua frase per correggerlo, spiegando brevemente (in 10-15 parole) l\'errore e fornendo la forma corretta. Poi, incoraggialo a continuare. Lo studente parlerà in italiano, interpreta il suo audio come lingua italiana.'
                : 'Sei un amico italiano che sta facendo una conversazione informale e amichevole. Parla in modo naturale di argomenti di tutti i giorni. Il tuo interlocutore sta imparando l\'italiano, quindi parla chiaramente ma non in modo innaturale. Sii curioso e fai domande.';
            const voiceName = isTeacherMode ? 'Kore' : 'Puck';


            sessionPromiseRef.current = ai.live.connect({
                model: 'gemini-2.5-flash-native-audio-preview-09-2025',
                config: {
                    responseModalities: [Modality.AUDIO],
                    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } },
                    systemInstruction,
                    inputAudioTranscription: {},
                    outputAudioTranscription: {},
                },
                callbacks: {
                    onopen: () => {
                        setIsSessionActive(true);
                        setStatusMessage('In ascolto... Parla pure!');
                        const source = inputAudioContextRef.current!.createMediaStreamSource(stream);
                        mediaStreamSourceRef.current = source;
                        const scriptProcessor = inputAudioContextRef.current!.createScriptProcessor(4096, 1, 1);
                        scriptProcessorRef.current = scriptProcessor;

                        scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
                            const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                            const l = inputData.length;
                            const int16 = new Int16Array(l);
                            for (let i = 0; i < l; i++) {
                                int16[i] = inputData[i] * 32768;
                            }
                            const pcmBlob = {
                                data: encode(new Uint8Array(int16.buffer)),
                                mimeType: 'audio/pcm;rate=16000',
                            };
                            sessionPromiseRef.current?.then(session => session.sendRealtimeInput({ media: pcmBlob }));
                        };
                        source.connect(scriptProcessor);
                        scriptProcessor.connect(inputAudioContextRef.current!.destination);
                    },
                    onmessage: (msg: LiveServerMessage) => handleServerMessage(msg),
                    onerror: (e: ErrorEvent) => {
                        console.error('Session error:', e);
                        setStatusMessage('Errore di connessione. Controlla la API Key e riprova.');
                        cleanup();
                    },
                    onclose: () => cleanup(),
                }
            });

        } catch (error) {
            console.error('Failed to start conversation:', error);
            setStatusMessage('Accesso al microfono negato o API key non valida. Controlla le autorizzazioni e la chiave API.');
            cleanup();
        }
    };
    
    const handleServerMessage = async (message: LiveServerMessage) => {
        if (message.serverContent?.inputTranscription) transcriptionPartsRef.current.userInput += message.serverContent.inputTranscription.text;
        if (message.serverContent?.outputTranscription) transcriptionPartsRef.current.modelOutput += message.serverContent.outputTranscription.text;
        
        if (message.serverContent?.turnComplete) {
            const newEntries: TranscriptionEntry[] = [];
            const { userInput, modelOutput } = transcriptionPartsRef.current;

            if (userInput.trim() !== '') {
                newEntries.push({ speaker: 'user', text: userInput });
            }
            if (modelOutput.trim() !== '') {
                newEntries.push({ speaker: 'model', text: modelOutput });
            }
            
            if (newEntries.length > 0) {
                setTranscriptionHistory(prev => [...prev, ...newEntries]);
            }
            
            transcriptionPartsRef.current = { userInput: '', modelOutput: '' };
        }

        const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
        if (base64Audio) {
            const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContextRef.current!, 24000, 1);
            const startTime = Math.max(outputAudioContextRef.current!.currentTime, nextStartTimeRef.current);
            const source = outputAudioContextRef.current!.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(outputAudioContextRef.current!.destination);
            source.start(startTime);
            nextStartTimeRef.current = startTime + audioBuffer.duration;
        }
    };

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        setAnalysis(null);
        setSuggestedReplies([]);
        const result = await analyzeConversation(transcriptionHistory, apiKey);
        setAnalysis(result);
        setIsAnalyzing(false);
    };
    
    const handleSuggest = async () => {
        setIsSuggesting(true);
        setAnalysis(null);
        setSuggestedReplies([]);
        const result = await getReplySuggestions(transcriptionHistory, apiKey);
        setSuggestedReplies(result);
        setIsSuggesting(false);
    }
    
    const handleCorrectText = async () => {
        if (!inputText.trim()) return;
        setIsCorrecting(true);
        setCorrectedText(''); // Inizializza come stringa vuota per lo streaming
        setExplanation(null);
        setIsCopied(false);
        try {
            const stream = await correctTextStream(inputText, apiKey);
            for await (const chunk of stream) {
                setCorrectedText(prev => (prev ?? '') + chunk.text);
            }
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : "Si è verificato un errore.";
            setCorrectedText(errorMessage);
        } finally {
            setIsCorrecting(false);
        }
    };
    
    const handleExplainCorrections = async () => {
        if (!inputText.trim() || !correctedText) return;
        setIsExplaining(true);
        setExplanation(null);
        try {
            const result = await explainCorrections(inputText, correctedText, apiKey);
            setExplanation(result);
        } catch (error) {
            console.error(error);
            setExplanation("Si è verificato un errore durante la spiegazione.");
        } finally {
            setIsExplaining(false);
        }
    };

    const handleCopy = () => {
        if (correctedText) {
            navigator.clipboard.writeText(correctedText);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    const resetConversation = () => {
        setConversationMode(null);
        setTranscriptionHistory([]);
        setAnalysis(null);
        setIsAnalyzing(false);
        setSuggestedReplies([]);
        setIsSuggesting(false);
        setInputText('');
        setCorrectedText(null);
        setIsCorrecting(false);
        setExplanation(null);
        setIsExplaining(false);
        setStatusMessage('Scegli una modalità per iniziare.');
    };
    
    useEffect(() => () => cleanup(), [cleanup]);
    
    if (!conversationMode) {
        return (
            <div className="flex flex-col justify-center items-center h-full p-4 text-center">
                 <h2 className="text-xl font-bold text-slate-700 mb-2">Scegli una modalità</h2>
                 <p className="text-slate-500 mb-8">Come vuoi praticare oggi?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                    <button onClick={() => startConversation('teacher')} className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                        <AcademicCapIcon className="mx-auto h-12 w-12 text-emerald-600 mb-3" />
                        <h3 className="font-semibold text-slate-800">Modalità Professoressa</h3>
                        <p className="text-sm text-slate-500 mt-1">Ricevi correzioni e spiegazioni mentre parli.</p>
                    </button>
                    <button onClick={() => startConversation('normal')} className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                        <ChatBubbleLeftRightIcon className="mx-auto h-12 w-12 text-sky-600 mb-3" />
                        <h3 className="font-semibold text-slate-800">Conversazione Libera</h3>
                        <p className="text-sm text-slate-500 mt-1">Parla liberamente come con un amico.</p>
                    </button>
                    <button onClick={() => setConversationMode('corrector')} className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                        <PencilSquareIcon className="mx-auto h-12 w-12 text-purple-600 mb-3" />
                        <h3 className="font-semibold text-slate-800">Correttore Testuale</h3>
                        <p className="text-sm text-slate-500 mt-1">Scrivi un testo e ottieni la versione corretta.</p>
                    </button>
                </div>
            </div>
        )
    }

    if (conversationMode === 'corrector') {
        return (
            <div className="max-w-3xl mx-auto p-4 flex flex-col h-full">
                <h2 className="text-xl font-bold text-slate-700 mb-6">Correttore Testuale</h2>
                <div className="bg-white p-6 rounded-xl shadow-lg flex-1 flex flex-col">
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Scrivi qui il testo da correggere..."
                        className="w-full flex-1 p-3 border-2 border-slate-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        rows={6}
                    />
                    {isCorrecting && correctedText === '' && (
                        <div className="mt-4 text-center text-slate-600">
                           <p>Correzione in corso...</p>
                           <div className="w-16 h-1 mt-2 mx-auto border-2 border-slate-200 border-t-purple-500 rounded-full animate-spin"></div>
                        </div>
                    )}
                    {correctedText !== null && (
                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold text-slate-800">Testo Corretto:</h3>
                                <button onClick={handleCopy} title="Copia testo" className="text-slate-500 hover:text-emerald-600 transition-colors">
                                    {isCopied ? <ClipboardCheckIcon className="h-5 w-5 text-emerald-600" /> : <ClipboardIcon className="h-5 w-5" />}
                                </button>
                            </div>
                            <div className="p-3 bg-emerald-50 text-emerald-900 rounded-lg whitespace-pre-wrap">{correctedText}</div>
                        </div>
                    )}
                    {isExplaining && (
                        <div className="mt-4 text-center text-slate-600">
                            <p>Sto preparando la spiegazione...</p>
                            <div className="w-16 h-1 mt-2 mx-auto border-2 border-slate-200 border-t-emerald-500 rounded-full animate-spin"></div>
                        </div>
                    )}
                    {explanation && !isExplaining && (
                         <div className="mt-4">
                            <h3 className="font-semibold text-slate-800">Spiegazione delle Correzioni:</h3>
                            <div className="p-4 mt-2 bg-slate-50 text-slate-800 rounded-lg whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: explanation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></div>
                        </div>
                    )}
                </div>
                <div className="mt-4 flex flex-col gap-4">
                    <button onClick={handleCorrectText} disabled={!inputText.trim() || isCorrecting} className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed">
                        {isCorrecting ? 'Correzione in corso...' : 'Correggi Testo'}
                    </button>
                    {correctedText && !isCorrecting && (
                         <button onClick={handleExplainCorrections} disabled={isExplaining || isCorrecting} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors disabled:bg-emerald-300 disabled:cursor-not-allowed">
                            <SparklesIcon className="h-5 w-5" />
                            {isExplaining ? 'Sto Spiegando...' : 'Spiega Correzioni'}
                        </button>
                    )}
                </div>
            </div>
        )
    }

    // Modalità Conversazione Audio
    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col h-full">
            <div className="bg-white p-4 rounded-xl shadow-lg flex-1 overflow-y-auto mb-4">
                <div className="space-y-4">
                {transcriptionHistory.length === 0 && (
                    <div className="text-center text-slate-500 py-10">
                        <p>La trascrizione della conversazione apparirà qui.</p>
                    </div>
                )}
                {transcriptionHistory.map((entry, index) => (
                    <div key={index} className={`flex ${entry.speaker === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                            entry.speaker === 'user' 
                            ? 'bg-emerald-600 text-white rounded-br-lg' 
                            : 'bg-slate-200 text-slate-800 rounded-bl-lg'
                        }`}>
                             <p className={`text-xs font-bold mb-1 ${entry.speaker === 'user' ? 'text-emerald-200' : 'text-emerald-800'}`}>
                                {entry.speaker === 'user' ? 'Tu' : 'AlexIA'}
                            </p>
                            <p>{entry.text}</p>
                        </div>
                    </div>
                ))}
                </div>
                {analysis && (
                    <div className="mt-6 pt-4 border-t border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center"><SparklesIcon className="h-5 w-5 mr-2 text-emerald-500" /> Analisi della Conversazione</h3>
                        <div className="p-4 bg-slate-50 rounded-lg text-slate-700 whitespace-pre-wrap text-sm">{analysis}</div>
                    </div>
                )}
                 {suggestedReplies.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Suggerimenti:</h3>
                        <div className="flex flex-wrap gap-2">
                            {suggestedReplies.map((reply, index) => (
                                <button key={index} className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">
                                    {reply}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {isAnalyzing && (
                    <div className="mt-6 text-center text-slate-600">
                        <p>Analisi in corso... attendi un momento.</p>
                    </div>
                )}
            </div>
            <div className="text-center">
                <p className="text-slate-600 mb-4 h-6">{statusMessage}</p>
                 {!isSessionActive && transcriptionHistory.length > 0 && (
                    <div className="flex flex-col items-center gap-4 mb-4">
                        <div className="flex justify-center gap-4">
                            <button onClick={resetConversation} className="px-6 py-2 bg-slate-500 text-white font-semibold rounded-lg shadow-md hover:bg-slate-600 transition-colors">Nuova Conversazione</button>
                            <button onClick={handleAnalyze} disabled={isAnalyzing || !!analysis || isSuggesting} className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition-colors disabled:bg-sky-300 disabled:cursor-not-allowed">
                                {isAnalyzing ? 'Analizzando...' : 'Analizza'}
                            </button>
                             <button onClick={handleSuggest} disabled={isSuggesting || isAnalyzing} className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors disabled:bg-purple-300 disabled:cursor-not-allowed">
                                {isSuggesting ? '...' : 'Suggerisci Risposte'}
                            </button>
                        </div>
                    </div>
                )}
                
                {isSessionActive ? (
                     <button 
                        onClick={stopConversation}
                        className="mx-auto flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 shadow-lg bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
                    >
                        <StopCircleIcon />
                    </button>
                ) : conversationMode && transcriptionHistory.length === 0 && (
                     <button 
                        onClick={() => startConversation(conversationMode)}
                        className="mx-auto flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 shadow-lg bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                    >
                        <MicrophoneIcon />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Conversation;