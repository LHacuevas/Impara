export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export type AppMode = 'quiz' | 'conversation';

export type ConversationMode = 'teacher' | 'normal';

export interface TranscriptionEntry {
  speaker: 'user' | 'model';
  text: string;
}