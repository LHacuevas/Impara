import React, { useState, useEffect, useMemo } from 'react';
import type { QuizHistory, AIQuizSession, Question } from '../types';
import { analyzeQuizHistory } from '../services/geminiService';
import { ChartBarIcon, SparklesIcon, EyeIcon, CheckCircleIcon } from './Icons';

interface CampionatoProps {
    apiKey: string;
    isOnline: boolean;
}

const QuizReviewModal: React.FC<{ session: AIQuizSession, onClose: () => void }> = ({ session, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-slate-800">Rivedi Quiz</h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800">&times;</button>
                </div>
                <div className="text-sm text-slate-600 mb-6">
                    <p><strong>Tipo:</strong> {session.type === 'AI' ? 'Quiz Infinito' : 'Esercizi Mirati'}</p>
                    <p><strong>Data:</strong> {new Date(session.date).toLocaleString('it-IT')}</p>
                    <p><strong>Punteggio:</strong> <span className="font-bold">{session.score} / {session.total}</span></p>
                </div>
                <div className="space-y-6">
                    {session.questions.map((q, index) => (
                        <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                            <p className="font-semibold text-slate-800 mb-2">{index + 1}. {q.question}</p>
                            <ul className="space-y-1 text-sm mb-3">
                                {q.options.map((opt, i) => (
                                    <li key={i} className={`flex items-center p-2 rounded ${opt === q.correctAnswer ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-700'}`}>
                                        {opt === q.correctAnswer && <CheckCircleIcon className="h-4 w-4 mr-2 text-emerald-600" />}
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                            <div className="p-2 bg-slate-50 rounded text-xs text-slate-600">
                                <strong className="text-slate-800">Spiegazione:</strong> {q.explanation}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Campionato: React.FC<CampionatoProps> = ({ apiKey, isOnline }) => {
    const [quizHistory, setQuizHistory] = useState<QuizHistory>({});
    const [aiSessions, setAiSessions] = useState<AIQuizSession[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [selectedSession, setSelectedSession] = useState<AIQuizSession | null>(null);

    useEffect(() => {
        try {
            const storedHistory = localStorage.getItem('quizResults');
            if (storedHistory) setQuizHistory(JSON.parse(storedHistory));
            
            const storedAnalysis = localStorage.getItem('quizAnalysis');
            if (storedAnalysis) setAnalysis(storedAnalysis);

            const storedAiSessions = localStorage.getItem('aiQuizSessions');
            if (storedAiSessions) {
                const sessions: AIQuizSession[] = JSON.parse(storedAiSessions);
                sessions.sort((a, b) => b.id - a.id); // Mostra i più recenti prima
                setAiSessions(sessions);
            }
        } catch (error) {
            console.error("Failed to parse data from localStorage", error);
        }
    }, []);

    const stats = useMemo(() => {
        const historyEntries: { score: number; total: number }[] = Object.values(quizHistory);
        if (historyEntries.length === 0) {
            return { totalQuizzes: 0, totalQuestions: 0, totalCorrect: 0, overallPercentage: 0 };
        }
        const totalQuizzes = historyEntries.length;
        const totalQuestions = historyEntries.reduce((sum, item) => sum + item.total, 0);
        const totalCorrect = historyEntries.reduce((sum, item) => sum + item.score, 0);
        const overallPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        return { totalQuizzes, totalQuestions, totalCorrect, overallPercentage };
    }, [quizHistory]);

    const handleAnalyze = async () => {
        if (!isOnline || !apiKey) {
            alert("Questa funzionalità richiede una connessione a internet e una API key valida.");
            return;
        }
        setIsLoading(true);
        setAnalysis(null);
        const result = await analyzeQuizHistory(quizHistory, apiKey);
        setAnalysis(result);

        const isError = result.includes("Errore:") || result.includes("Si è verificato un errore");
        if (!isError) {
             try {
                localStorage.setItem('quizAnalysis', result);
            } catch (e) { console.error("Failed to save analysis to localStorage", e); }
        }
        setIsLoading(false);
    };

    const formatDate = (isoString: string) => {
        if (!isoString) return '';
        const date = new Date(isoString);
        return date.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };
    
    const formatTopicName = (topicPath: string) => topicPath.replace(/\./g, ' > ');

    const hasData = stats.totalQuizzes > 0 || aiSessions.length > 0;

    return (
        <div className="max-w-4xl mx-auto py-8">
            {selectedSession && <QuizReviewModal session={selectedSession} onClose={() => setSelectedSession(null)} />}
            
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Grammacampionato</h1>
            <p className="text-slate-600 mb-8">Tieni traccia dei tuoi progressi e analizza le tue performance.</p>

            {hasData ? (
                <>
                    {stats.totalQuizzes > 0 && (
                        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Riepilogo Generale (Quiz Predefiniti)</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                                <div><p className="text-3xl font-bold text-emerald-600">{stats.totalQuizzes}</p><p className="text-sm text-slate-500">Quiz Completati</p></div>
                                <div><p className="text-3xl font-bold text-emerald-600">{stats.totalCorrect} / {stats.totalQuestions}</p><p className="text-sm text-slate-500">Risposte Corrette</p></div>
                                <div><div className="text-3xl font-bold text-emerald-600 mb-1">{stats.overallPercentage}%</div><div className="w-full bg-slate-200 rounded-full h-2.5"><div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${stats.overallPercentage}%` }}></div></div><p className="text-sm text-slate-500 mt-1">Percentuale Totale</p></div>
                            </div>
                        </div>
                    )}

                    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center"><SparklesIcon className="h-6 w-6 mr-2 text-emerald-500"/> Analisi IA Personalizzata</h2>
                        <p className="text-slate-600 mb-6">Ottieni un'analisi dettagliata basata sui tuoi quiz predefiniti. L'ultima analisi resta disponibile anche offline!</p>
                        <button onClick={handleAnalyze} disabled={!isOnline || isLoading || stats.totalQuizzes === 0} className="flex items-center justify-center gap-2 w-full sm:w-auto bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed">
                            <ChartBarIcon className="h-5 w-5"/>{isLoading ? 'Analizzando...' : 'Spiega il mio italiano'}
                        </button>
                        {isLoading && <div className="mt-6 text-center text-slate-600"><p>Alex sta analizzando i tuoi risultati...</p><div className="w-16 h-1 mt-4 mx-auto border-2 border-slate-200 border-t-emerald-500 rounded-full animate-spin"></div></div>}
                        {analysis && !isLoading && <div className="mt-6 p-4 bg-slate-50 rounded-lg text-slate-700 whitespace-pre-wrap text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: analysis.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></div>}
                    </div>

                    {aiSessions.length > 0 && (
                         <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Cronologia Quiz IA</h2>
                            <ul className="space-y-3">
                                {aiSessions.map((session) => (
                                    <li key={session.id} className="p-4 border border-slate-200 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                        <div>
                                            <p className="font-semibold text-slate-700">{session.type === 'AI' ? '✨ Quiz Infinito' : '🧠 Esercizi Mirati'}</p>
                                            <p className="text-sm text-slate-500">{new Date(session.date).toLocaleString('it-IT')}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-medium text-slate-600">{session.score} / {session.total} ({Math.round(session.score/session.total*100)}%)</span>
                                            <button onClick={() => setSelectedSession(session)} className="flex items-center gap-1.5 text-sm text-emerald-600 font-semibold hover:text-emerald-800">
                                                <EyeIcon className="h-4 w-4"/> Rivedi
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {stats.totalQuizzes > 0 && (
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Cronologia Quiz Predefiniti</h2>
                            <ul className="space-y-3">
                                {Object.entries(quizHistory).map(([path, data]) => {
                                    const typedData = data as { score: number; total: number; percentage: number; date: string };
                                    return (
                                    <li key={path} className="p-4 border border-slate-200 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                        <span className="font-semibold text-slate-700">{formatTopicName(path)}</span>
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="font-medium text-slate-600">{typedData.score} / {typedData.total} ({typedData.percentage}%)</span>
                                            <span>{formatDate(typedData.date)}</span>
                                        </div>
                                    </li>
                                    );
})}
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                 <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-slate-700 mb-2">Nessun dato da mostrare</h2>
                    <p className="text-slate-500">Non hai ancora completato nessun quiz. Inizia subito dalla sezione "Esercizi" per vedere i tuoi progressi qui!</p>
                </div>
            )}
        </div>
    );
};

export default Campionato;
