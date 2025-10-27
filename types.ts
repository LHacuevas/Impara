export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export type AppMode = 'quiz' | 'conversation' | 'campionato';

export type ConversationMode = 'teacher' | 'normal';

export interface TranscriptionEntry {
  speaker: 'user' | 'model';
  text: string;
}

export type QuizHistory = {
  [key: string]: { 
    score: number; 
    total: number;
    percentage: number;
    date: string; // ISO string
  };
};

export interface AIQuizSession {
  id: number; // e.g., Date.now()
  type: 'AI' | 'IA_Mirato';
  date: string; // ISO string
  score: number;
  total: number;
  questions: Question[];
}
