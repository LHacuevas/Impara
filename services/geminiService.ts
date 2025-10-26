import { GoogleGenAI, Type } from "@google/genai";
import type { TranscriptionEntry } from "../types";

export async function analyzeConversation(transcript: TranscriptionEntry[], apiKey: string): Promise<string> {
    if (!apiKey) {
        return "Errore: Chiave API non fornita.";
    }
    const ai = new GoogleGenAI({ apiKey });

    const model = 'gemini-2.5-flash';
    const formattedTranscript = transcript.map(entry => `${entry.speaker === 'user' ? 'Studente' : 'AI'}: ${entry.text}`).join('\n');

    const prompt = `Sei una professoressa di italiano esperta. Analizza la seguente conversazione tra uno studente (livello B1-B2) e un'AI. Fornisci un feedback costruttivo e dettagliato.
    La tua analisi deve includere:
    1.  **Errori Specifici**: Elenca gli errori grammaticali, di lessico o di sintassi commessi dallo studente. Per ogni errore, cita la frase sbagliata, fornisci la correzione e una breve spiegazione del perché è un errore.
    2.  **Punti di Forza**: Menziona uno o due aspetti positivi della conversazione dello studente.
    3.  **Aree di Miglioramento**: Riassumi 3 aree principali su cui lo studente dovrebbe concentrarsi per migliorare (es. uso del congiuntivo, preposizioni, lessico specifico).

    Ecco la conversazione:
    ---
    ${formattedTranscript}
    ---
    Fornisci la tua analisi in italiano, formattata in modo chiaro e leggibile.`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error analyzing conversation:", error);
        return "Si è verificato un errore durante l'analisi della conversazione. Controlla che la tua API Key sia corretta e riprova più tardi.";
    }
}

export async function getReplySuggestions(transcript: TranscriptionEntry[], apiKey: string): Promise<string[]> {
    if (!apiKey) {
        throw new Error("API Key not provided.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    const formattedTranscript = transcript.map(entry => `${entry.speaker === 'user' ? 'Studente' : 'AI'}: ${entry.text}`).join('\n');

    const prompt = `Basandoti sulla seguente conversazione in italiano tra uno studente e un'AI, genera 2 o 3 brevi risposte o domande in italiano (massimo 10 parole ciascuna) che lo studente potrebbe dire per continuare la conversazione in modo naturale.
    Le risposte devono essere pertinenti all'ultimo intervento dell'AI.
    
    Conversazione:
    ---
    ${formattedTranscript}
    ---
    
    Fornisci la risposta esclusivamente come un array JSON di stringhe.`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                }
            }
        });
        const jsonStr = response.text.trim();
        const result = JSON.parse(jsonStr);
        return Array.isArray(result) ? result : [];
    } catch (error) {
        console.error("Error getting reply suggestions:", error);
        return [];
    }
}