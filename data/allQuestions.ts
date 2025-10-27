import { verbiGroup } from './verbi';
import { lessicoGroup } from './lessico';
import { modiDiDireGroup } from './modiDiDire';
import { libroGroup } from './libro';
import type { Question } from '../types';

// Funzione ricorsiva per appiattire la struttura delle domande
const flattenQuestions = (obj: any): Question[] => {
    return Object.values(obj).flatMap((value: any) => {
        if (Array.isArray(value)) {
            return value;
        }
        if (typeof value === 'object' && value !== null) {
            return flattenQuestions(value);
        }
        return [];
    }) as Question[];
};

// Oggetto con le domande raggruppate per argomento e sotto-argomento, per il menu di selezione
export const groupedQuestions: { [key: string]: any } = {
  'Verbi e Grammatica': verbiGroup,
  'Lessico': lessicoGroup,
  'Modi di Dire': modiDiDireGroup,
  'Libro': libroGroup,
};

// Un unico array con tutte le domande, per la modalità "Misto"
export const allQuestions: Question[] = flattenQuestions(groupedQuestions);
