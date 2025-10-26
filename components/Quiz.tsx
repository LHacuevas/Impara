import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { groupedQuestions, allQuestions } from '../data/allQuestions';
import type { Question } from '../types';
import { CheckCircleIcon, XCircleIcon, SparklesIcon } from './Icons';
import { get, shuffle } from 'lodash-es';

type QuizHistory = {
  [key: string]: { score: number; total: number };
};

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  const [selectedPrimaryTopic, setSelectedPrimaryTopic] = useState<string>('Misto');
  const [selectedQuizPath, setSelectedQuizPath] = useState<string>('');
  const [quizHistory, setQuizHistory] = useState<QuizHistory>({});
  
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('quizResults');
      if (storedHistory) {
        setQuizHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error("Failed to parse quiz history from localStorage", error);
    }
  }, []);

  const generateAIQuestions = async (puntiDeboli?: string): Promise<Question[]> => {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable is not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let prompt = `Sei una professoressa di italiano esperta per studenti di livello B1-B2. Il tuo compito è creare un quiz. Per ogni domanda, fornisci:
1.  "question": Il testo della domanda.
2.  "options": Un array di 4 stringhe con le possibili risposte, di cui solo una corretta.
3.  "correctAnswer": La stringa esatta della risposta corretta.
4.  "explanation": Una breve ma chiara spiegazione del perché la risposta è corretta, utile per l'apprendimento.
Assicurati che "correctAnswer" sia sempre una delle stringhe presenti in "options".`;

    if (puntiDeboli) {
      prompt += `\nLo studente ha mostrato difficoltà nelle seguenti aree: ${puntiDeboli}. Per favore, crea un quiz di 15 domande in cui almeno la metà sia focalizzata su questi argomenti per aiutarlo a migliorare. Le altre domande possono coprire altri argomenti di livello B1-B2 per mantenere la varietà.`;
    } else {
      prompt += `\nGenera un array di 15 domande a risposta multipla uniche e variegate che coprano grammatica (es. congiuntivo, preposizioni, pronomi), lessico comune e modi di dire.`;
    }
    
    prompt += `\nFornisci la risposta esclusivamente in formato JSON, all'interno di un oggetto con una singola chiave "questions" che contiene l'array di domande.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              description: 'Un array di 15 oggetti domanda per il quiz.',
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING, description: 'Il testo della domanda.' },
                  options: { type: Type.ARRAY, description: 'Un array di 4 possibili risposte.', items: { type: Type.STRING } },
                  correctAnswer: { type: Type.STRING, description: 'La risposta corretta.' },
                  explanation: { type: Type.STRING, description: 'La spiegazione.' }
                },
                required: ['question', 'options', 'correctAnswer', 'explanation']
              }
            }
          },
          required: ['questions']
        },
      },
    });

    const jsonStr = response.text.trim();
    const result = JSON.parse(jsonStr);
    
    if (!result.questions || !Array.isArray(result.questions) || result.questions.length === 0) {
      throw new Error("Formato JSON non valido o vuoto ricevuto dall'IA.");
    }
    return result.questions;
  };

  const analizzaPuntiDeboli = (history: QuizHistory): string => {
    const performance = Object.entries(history).map(([path, { score, total }]) => ({
      path,
      percentage: (score / total) * 100,
    }));

    const weakTopics = performance
      .filter(item => item.percentage < 75) // Considera un'area debole se il punteggio è inferiore al 75%
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3) // Prende le 3 aree peggiori
      .map(item => item.path.split('.').pop())
      .filter(Boolean); // Rimuove eventuali undefined

    return weakTopics.join(', ');
  };


  const handleStartQuiz = async () => {
    let questionsForQuiz: Question[] = [];
    
    setIsGenerating(true);
    try {
      if (selectedPrimaryTopic === 'AI') {
        questionsForQuiz = await generateAIQuestions();
      } else if (selectedPrimaryTopic === 'IA_Mirato') {
          const puntiDeboli = analizzaPuntiDeboli(quizHistory);
          if (!puntiDeboli) {
            alert("Complimenti! Sembra che tu non abbia particolari difficoltà. Ti preparo un quiz misto avanzato per metterti alla prova!");
            questionsForQuiz = await generateAIQuestions();
          } else {
            questionsForQuiz = await generateAIQuestions(puntiDeboli);
          }
      } else if (selectedPrimaryTopic === 'Misto') {
        questionsForQuiz = shuffle(allQuestions).slice(0, 15);
      } else {
        const questionSet = get(groupedQuestions, selectedQuizPath.split('.'));
        if (Array.isArray(questionSet)) {
            questionsForQuiz = shuffle(questionSet);
        } else {
            console.error("Il percorso selezionato non punta a un array di domande:", questionSet);
        }
      }
    } catch (error) {
       console.error("Errore durante la generazione delle domande:", error);
       alert("Oops! Qualcosa è andato storto nella creazione del quiz. Riprova più tardi.");
       setIsGenerating(false);
       return;
    } finally {
       setIsGenerating(false);
    }
    
    if (!questionsForQuiz || questionsForQuiz.length === 0) {
      alert("Nessuna domanda trovata per questo argomento. Selezionane un altro.");
      return;
    }

    setQuestions(questionsForQuiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      const topicPath = selectedPrimaryTopic === 'Misto' || selectedPrimaryTopic.startsWith('IA') ? null : selectedQuizPath;
      if (topicPath) {
        const newHistory = {
          ...quizHistory,
          [topicPath]: { score, total: questions.length },
        };
        setQuizHistory(newHistory);
        localStorage.setItem('quizResults', JSON.stringify(newHistory));
      }
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setSelectedPrimaryTopic('Misto');
    setSelectedQuizPath('');
  };

  const renderSubTopicOptions = (obj: any, parentKey = '', level = 0, pathPrefix = ''): React.ReactElement[] => {
    return Object.entries(obj).flatMap(([key, value]) => {
      const currentPath = pathPrefix ? `${pathPrefix}.${key}` : key;
      const labelPrefix = ' '.repeat(level * 2);
      
      if (Array.isArray(value)) {
        const history = quizHistory[currentPath];
        const historyString = history ? ` - Ultimo: ${history.score}/${history.total}` : '';
        return (
          <option key={currentPath} value={currentPath}>
            {labelPrefix}{parentKey} {'>'} {key} ({value.length} domande){historyString}
          </option>
        );
      }
      
      if (typeof value === 'object' && value !== null) {
        const newParentKey = level === 0 ? key : `${parentKey} > ${key}`;
        return renderSubTopicOptions(value, newParentKey, level + 1, currentPath);
      }
      return [];
    });
  };

  if (isGenerating) {
    return (
      <div className="max-w-2xl mx-auto py-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          <SparklesIcon className="h-12 w-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Generazione del quiz...</h2>
          <p className="text-slate-600 mb-6">Alex sta preparando delle domande nuove solo per te. Attendi un momento!</p>
          <div className="w-24 h-2 border-4 border-slate-200 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    const subTopics = !['Misto', 'AI', 'IA_Mirato'].includes(selectedPrimaryTopic) ? get(groupedQuestions, selectedPrimaryTopic) : null;
    const isMiratoDisabled = Object.keys(quizHistory).length < 2;

    return (
      <div className="max-w-2xl mx-auto py-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Scegli un argomento</h2>
          <p className="text-slate-600 mb-6">Scegli un quiz, mettiti alla prova con domande casuali, o fatti creare un quiz su misura dall'IA!</p>
          <div className="space-y-4 mb-6">
             <select
              value={selectedPrimaryTopic}
              onChange={(e) => {
                setSelectedPrimaryTopic(e.target.value);
                setSelectedQuizPath(''); // Reset sub-topic on primary change
              }}
              className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              aria-label="Scegli un tema principale"
            >
              <option value="Misto">Misto (15 domande casuali)</option>
              <option value="AI">✨ Quiz Infinito (Generato da IA)</option>
              <option value="IA_Mirato" disabled={isMiratoDisabled} title={isMiratoDisabled ? "Completa almeno due quiz diversi per sbloccare questa modalità" : "L'IA crea un quiz basato sui tuoi errori passati"}>
                🧠 Esercizi Mirati (IA)
              </option>
              {Object.keys(groupedQuestions).map(key => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>

            {subTopics && (
                 <select
                    value={selectedQuizPath}
                    onChange={(e) => setSelectedQuizPath(e.target.value)}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    aria-label="Scegli un argomento specifico"
                >
                    <option value="" disabled>Seleziona un argomento specifico...</option>
                    {renderSubTopicOptions(subTopics, '', 0, selectedPrimaryTopic)}
                </select>
            )}
          </div>
          <button
            onClick={handleStartQuiz}
            disabled={(selectedPrimaryTopic !== 'Misto' && !selectedPrimaryTopic.startsWith('IA')) && !selectedQuizPath}
            className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            Inizia Quiz
          </button>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="max-w-2xl mx-auto py-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Quiz Completato!</h2>
          <p className="text-lg text-slate-600 mb-6">
            Il tuo punteggio è: <span className="font-bold text-emerald-600">{score}</span> / {questions.length}
          </p>
          <button
            onClick={handleRestartQuiz}
            className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Scegli un altro Argomento
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="mb-4">
          <p className="text-sm font-semibold text-emerald-600">Domanda {currentQuestionIndex + 1} di {questions.length}</p>
          <h2 className="text-xl font-bold text-slate-800 mt-1">{currentQuestion.question}</h2>
        </div>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = option === currentQuestion.correctAnswer;
            const isSelected = option === selectedAnswer;
            
            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-colors duration-200 flex items-center justify-between';

            if (isAnswered) {
              if (isCorrect) {
                buttonClass += ' bg-emerald-100 border-emerald-500 text-emerald-800 font-bold';
              } else if (isSelected && !isCorrect) {
                buttonClass += ' bg-red-100 border-red-500 text-red-800';
              } else {
                buttonClass += ' bg-slate-50 border-slate-200 text-slate-500 opacity-60';
              }
            } else {
              buttonClass += ' bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-emerald-500';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <span>{option}</span>
                {isAnswered && isCorrect && <CheckCircleIcon className="text-emerald-600"/>}
                {isAnswered && isSelected && !isCorrect && <XCircleIcon className="text-red-600"/>}
              </button>
            );
          })}
        </div>
        {isAnswered && (
          <div className="mt-6">
            <div className="p-4 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-800">Spiegazione:</p>
                <p className="text-sm text-slate-700 mt-1">{currentQuestion.explanation}</p>
            </div>
            <button
              onClick={handleNextQuestion}
              className="w-full mt-4 bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Prossima Domanda' : 'Vedi Risultati'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;