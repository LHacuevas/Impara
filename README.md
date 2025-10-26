# Impara con Alex

Un'applicazione innovativa per esercitarsi con la lingua italiana (livello B1-C1) attraverso quiz intelligenti e conversazioni in tempo reale con un tutor AI.

## Funzionalità Principali

L'app è divisa in due modalità di apprendimento principali, progettate per coprire sia la conoscenza teorica che la pratica orale.

### 🧠 Modalità Esercizi (Quiz)

Una sezione completa per testare e migliorare la conoscenza della grammatica, del lessico e dei modi di dire italiani.

-   **Quiz Predefiniti**: Vasta selezione di quiz organizzati per argomenti specifici (es. Congiuntivo, Preposizioni, Lessico da ristorante), con livelli da B1 a C1.
-   **✨ Quiz Infinito (IA)**: Una modalità che genera 15 domande completamente nuove e uniche ogni volta, create al momento dall'IA di Gemini. Offre una varietà di esercizi virtualmente illimitata.
-   **🎯 Esercizi Mirati (IA)**: La funzionalità più potente. L'app analizza la cronologia dei tuoi risultati e identifica le tue aree di debolezza. Successivamente, chiede all'IA di creare un quiz personalizzato, focalizzato proprio sugli argomenti in cui hai più bisogno di migliorare.
-   **Feedback Immediato**: Ogni domanda include una spiegazione chiara e concisa, che ti aiuta a capire l'errore e a imparare la regola.
-   **Tracciamento dei Punteggi**: I risultati vengono salvati localmente per alimentare la modalità "Esercizi Mirati" e monitorare i tuoi progressi.

### 🎙️ Modalità Conversazione

Una sezione immersiva per praticare l'italiano parlato con un tutor AI, sfruttando l'API Gemini Live per un'interazione fluida e a bassa latenza.

-   **Conversazione in Tempo Reale**: Parla direttamente con "Alex" usando il microfono e ricevi risposte vocali immediate, simulando un dialogo naturale.
-   **Doppia Modalità di Interazione**:
    -   **Modalità Professoressa**: Alex agisce come un'insegnante paziente, correggendo gentilmente i tuoi errori grammaticali e di lessico mentre parli.
    -   **Conversazione Libera**: Alex si comporta come un amico, per una pratica più informale e rilassata.
-   **Trascrizione Live**: Tutta la conversazione viene trascritta e mostrata a schermo in tempo reale.
-   **Analisi Post-Conversazione**: Al termine della conversazione, puoi richiedere un'analisi dettagliata. L'IA fornirà un feedback scritto sui tuoi errori specifici, i tuoi punti di forza e le aree generali su cui concentrarti per migliorare.

## Tecnologie Utilizzate

-   **Frontend**: React, TypeScript, Tailwind CSS
-   **Intelligenza Artificiale**:
    -   **Google Gemini API (`gemini-2.5-flash`)**: Per la generazione dinamica dei quiz e l'analisi testuale delle conversazioni.
    -   **Google Gemini Live API (`gemini-2.5-flash-native-audio-preview-09-2025`)**: Per la gestione delle conversazioni audio in tempo reale.
-   **Browser API**:
    -   **Web Audio API**: Per l'acquisizione dell'audio dal microfono e la riproduzione dell'output vocale dell'IA.
    -   **LocalStorage**: Per la persistenza dei risultati dei quiz.

## Come Utilizzare l'App

1.  **Scegli la modalità**: Seleziona "Esercizi" o "Conversazione" dall'header.
2.  **Se sei in modalità Esercizi**:
    -   Scegli un argomento dal menu a tendina.
    -   Puoi optare per i quiz predefiniti, il "Quiz Infinito (IA)" o gli "Esercizi Mirati (IA)" (disponibili dopo aver completato almeno due quiz).
    -   Clicca su "Inizia Quiz" e rispondi alle domande.
3.  **Se sei in modalità Conversazione**:
    -   Scegli tra "Modalità Professoressa" o "Conversazione Libera".
    -   Dai il consenso all'utilizzo del microfono quando richiesto.
    -   Inizia a parlare. Per terminare, clicca sul pulsante di stop.
    -   Alla fine, puoi decidere di analizzare la conversazione o iniziarne una nuova.
