import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import type { TranscriptionEntry, QuizHistory } from "../types";

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

export async function correctTextStream(text: string, apiKey: string): Promise<AsyncGenerator<GenerateContentResponse>> {
    if (!apiKey) {
        throw new Error("Errore: Chiave API non fornita.");
    }
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';

    const prompt = `Sei un esperto correttore di bozze per la lingua italiana. Correggi il seguente testo per renderlo grammaticalmente perfetto, naturale e stilisticamente appropriato. Apporta correzioni a grammatica, sintassi, scelta delle parole e punteggiatura.
    Restituisci SOLO il testo corretto, senza alcuna spiegazione, commento o saluto.

    Testo da correggere:
    ---
    ${text}
    ---
    `;

    try {
        const response = await ai.models.generateContentStream({
            model: model,
            contents: prompt,
        });
        return response;
    } catch (error) {
        console.error("Error correcting text:", error);
        throw new Error("Si è verificato un errore durante la correzione. Controlla che la tua API Key sia corretta e riprova.");
    }
}

export async function explainCorrections(originalText: string, correctedText: string, apiKey: string): Promise<string> {
    if (!apiKey) {
        return "Errore: Chiave API non fornita.";
    }
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';

    const prompt = `Sei un'insegnante di italiano estremamente precisa e concisa. Analizza il testo originale e quello corretto e fornisci una spiegazione schematica delle modifiche.
Segui ESATTAMENTE questo formato, senza aggiungere introduzioni, commenti, saluti o altre informazioni.

**Spiegazione grammaticale:**

«[parola/frase sbagliata]» → «[parola/frase corretta]»
[Spiegazione molto breve della regola]
Esempio: [frase di esempio con la correzione].

(Ripeti la sezione sopra per ogni errore significativo)

**Struttura corretta:**
[Spiegazione molto breve sulla struttura generale della frase]
Quindi: [La frase completa e corretta].

---
ESEMPIO DI OUTPUT PERFETTO:
**Spiegazione grammaticale:**

«Antes» → «prima»
«Antes» è una parola spagnola. In italiano si usa «prima».
Esempio: Questo passa prima del capitolo otto.

«Dil» → «del»
La preposizione articolata corretta è «del» («di» + «il»).
Esempio: Ho bisogno del libro.

**Struttura corretta:**
In italiano, la forma più naturale è 'passa prima di qualcosa'.
Quindi: Questo passa prima del capitolo otto?
---

**Testo Originale dello Studente:**
---
${originalText}
---

**Testo Corretto:**
---
${correctedText}
---

Ora, fornisci la tua spiegazione seguendo rigorosamente le regole e l'esempio forniti.
`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error explaining corrections:", error);
        return "Si è verificato un errore during la generazione della spiegazione. Riprova.";
    }
}


export async function analyzeQuizHistory(history: QuizHistory, apiKey: string): Promise<string> {
    if (!apiKey) {
        return "Errore: Chiave API non fornita.";
    }
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    const historyData = Object.entries(history)
        .map(([topic, data]) => `- Argomento: ${topic.replace(/\./g, ' > ')}\n  Punteggio: ${data.score}/${data.total} (${data.percentage}%)`)
        .join('\n');

    if (!historyData) {
        return "Non ci sono ancora abbastanza dati per un'analisi. Completa qualche quiz!";
    }

    const prompt = `Sei un'insegnante di italiano esperta e incoraggiante. Analizza i seguenti risultati dei quiz di uno studente (livello B1-B2).
Basandoti su questi dati, prepara un'analisi chiara e utile. La tua analisi deve includere:
1.  **Panoramica Generale**: Un breve commento sulla performance complessiva dello studente.
2.  **Punti di Forza**: Elenca 2-3 argomenti in cui lo studente ha ottenuto i punteggi più alti (sopra l'85%), complimentandoti per i buoni risultati.
3.  **Aree di Miglioramento**: Elenca 2-3 argomenti in cui lo studente ha mostrato maggiori difficoltà (sotto il 70%). Sii gentile e costruttivo.
4.  **Consigli Pratici**: Fornisci un consiglio specifico e attuabile per ogni area di miglioramento. Ad esempio, "Per le preposizioni, prova a creare delle frasi di esempio ogni giorno".

Formatta la risposta in modo chiaro usando markdown (es. grassetto per i titoli). Non essere troppo lunga, l'analisi deve essere concisa e facile da leggere.

Ecco i dati dei quiz:
---
${historyData}
---
`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error analyzing quiz history:", error);
        return "Si è verificato un errore during l'analisi dei tuoi risultati. Controlla che la tua API Key sia corretta e riprova più tardi.";
    }
}