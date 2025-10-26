import type { Question } from '../types';

const preposizioniQuestions: Question[] = [
    {
        question: "Completa con la preposizione corretta: 'Vado ____ Roma la prossima settimana.'",
        options: ['in', 'a', 'da', 'per'],
        correctAnswer: 'a',
        explanation: "Con i nomi di città si usa generalmente la preposizione 'a'.",
    },
    {
        question: "Completa: 'Il libro è ____ scrivania.'",
        options: ['in', 'a', 'sulla', 'con'],
        correctAnswer: 'sulla',
        explanation: "'Sulla' (su + la) si usa per indicare che qualcosa si trova sopra una superficie.",
    },
    {
        question: "Scegli la preposizione: 'Vengo ____ Stati Uniti.'",
        options: ['da', 'dagli', 'dai', 'da'],
        correctAnswer: 'dagli',
        explanation: "Si usa 'dagli' (da + gli) per indicare la provenienza da un paese con nome plurale maschile che inizia per vocale o s+consonante.",
    },
    {
        question: "Completa: 'Parliamo ____ politica.'",
        options: ['di', 'a', 'con', 'su'],
        correctAnswer: 'di',
        explanation: "Il verbo 'parlare' seguito da un argomento richiede la preposizione 'di'.",
    },
    {
        question: "Scegli la preposizione: 'Abito ____ via Garibaldi.'",
        options: ['a', 'in', 'su', 'per'],
        correctAnswer: 'in',
        explanation: "Con i nomi delle vie si usa la preposizione 'in'.",
    },
    {
        question: "Completa con la preposizione: 'Questo è un film ___ paura!'",
        options: ['con', 'per', 'di', 'da'],
        correctAnswer: 'da',
        explanation: "Si usa 'da' per descrivere un film o un libro che provoca una sensazione forte (es. da ridere, da piangere, da paura).",
    },
    {
        question: "Completa: 'Vado a fare la spesa ___ supermercato.'",
        options: ['in', 'al', 'nel', 'dal'],
        correctAnswer: 'al',
        explanation: "'Al' (a + il) si usa con 'supermercato'. 'Vado al supermercato'.",
    },
    {
        question: "Scegli la preposizione: 'Questa borsa è ___ pelle.'",
        options: ['di', 'in', 'con', 'da'],
        correctAnswer: 'di',
        explanation: "La preposizione 'di' si usa per specificare il materiale di cui è fatto un oggetto.",
    },
    {
        question: "Completa: 'Il treno parte ___ binario 5.'",
        options: ['sul', 'al', 'dal', 'nel'],
        correctAnswer: 'dal',
        explanation: "'Dal' (da + il) si usa per indicare il punto di partenza, in questo caso il binario.",
    },
    {
        question: "Scegli la preposizione: 'Ci vediamo ___ un'ora.'",
        options: ['in', 'a', 'per', 'tra'],
        correctAnswer: 'tra',
        explanation: "'Tra' (o 'fra') si usa per indicare un periodo di tempo nel futuro. 'Ci vediamo tra un'ora' significa 'ci vediamo dopo un'ora'.",
    },
    {
        question: "Completa la frase: 'Lavoro ___ lunedì ___ venerdì.'",
        options: ['da...a', 'di...in', 'per...con', 'in...su'],
        correctAnswer: 'da...a',
        explanation: "Per indicare un intervallo di tempo o di spazio si usa la coppia di preposizioni 'da... a...'.",
    },
    {
        question: "Completa: 'Ho comprato un regalo ___ mia madre.'",
        options: ['a', 'per', 'di', 'con'],
        correctAnswer: 'per',
        explanation: "La preposizione 'per' si usa per indicare il destinatario di un'azione o di un regalo.",
    },
    {
        question: "Scegli la preposizione: 'Sono stato in vacanza ___ Sicilia.'",
        options: ['a', 'in', 'su', 'da'],
        correctAnswer: 'in',
        explanation: "Con i nomi di regioni e grandi isole si usa la preposizione 'in'.",
    },
    {
        question: "Completa: 'Questo dolce è stato fatto ___ me.'",
        options: ['con', 'da', 'di', 'per'],
        correctAnswer: 'da',
        explanation: "Nelle frasi passive, 'da' introduce l'agente che compie l'azione.",
    },
    {
        question: "Scegli la preposizione: 'Sono bravo ___ matematica.'",
        options: ['a', 'di', 'in', 'con'],
        correctAnswer: 'in',
        explanation: "L'espressione 'essere bravo' è seguita dalla preposizione 'in' per indicare una materia o un'abilità.",
    },
    {
        question: "Completa: 'Ho iniziato ___ studiare l'italiano due anni fa.'",
        options: ['di', 'a', 'da', 'per'],
        correctAnswer: 'a',
        explanation: "Il verbo 'iniziare' è seguito dalla preposizione 'a' quando c'è un altro verbo all'infinito.",
    },
    {
        question: "Scegli: 'Dipende ___ tempo che avrò.'",
        options: ['dal', 'del', 'al', 'col'],
        correctAnswer: 'dal',
        explanation: "Il verbo 'dipendere' richiede la preposizione 'da'.",
    },
    {
        question: "Completa: 'Il film è stato diretto ___ un regista famoso.'",
        options: ['con', 'da', 'per', 'di'],
        correctAnswer: 'da',
        explanation: "Nella forma passiva, 'da' introduce chi compie l'azione (complemento d'agente).",
    },
    {
        question: "Scegli: 'È un esperto ___ storia antica.'",
        options: ['di', 'in', 'a', 'su'],
        correctAnswer: 'di',
        explanation: "L'espressione 'esperto' è seguita dalla preposizione 'di' per specificare il campo di competenza.",
    },
    {
        question: "Completa: 'Mi sono trasferito ___ Milano per lavoro.'",
        options: ['a', 'in', 'da', 'per'],
        correctAnswer: 'a',
        explanation: "Con i nomi di città si usa sempre la preposizione 'a'.",
    },
];

const congiuntivoQuestions: Question[] = [
    {
        question: "Completa la frase: 'Credo che lui ____ ragione.'",
        options: ['ha', 'abbia', 'avesse', 'avrebbe'],
        correctAnswer: 'abbia',
        explanation: "Il verbo 'credere che' richiede l'uso del congiuntivo presente. 'Abbia' è il congiuntivo presente del verbo 'avere'.",
    },
    {
        question: "Qual è il congiuntivo imperfetto del verbo 'essere' per la terza persona singolare (lui/lei)?",
        options: ['sia', 'sarebbe', 'fosse', 'era'],
        correctAnswer: 'fosse',
        explanation: "Il congiuntivo imperfetto di 'essere' è 'che io fossi, che tu fossi, che lui/lei fosse...'. Si usa per esprimere dubbi, desideri o ipotesi nel passato.",
    },
    {
        question: "Completa: 'Spero che voi ____ presto.'",
        options: ['arrivate', 'arriverete', 'arriviate', 'foste arrivati'],
        correctAnswer: 'arriviate',
        explanation: "Il verbo 'sperare che' richiede il congiuntivo. 'Arriviate' è il congiuntivo presente per 'voi'.",
    },
    {
        question: "Completa: 'Nonostante ____ stanco, continuò a lavorare.'",
        options: ['era', 'fosse', 'sarebbe stato', 'è'],
        correctAnswer: 'fosse',
        explanation: "La congiunzione 'nonostante' richiede l'uso del congiuntivo. In questo caso, il congiuntivo imperfetto 'fosse'.",
    },
    {
        question: "Scegli la forma corretta: 'È necessario che tu ____ i compiti.'",
        options: ['fai', 'faccia', 'facessi', 'farai'],
        correctAnswer: 'faccia',
        explanation: "Le espressioni impersonali come 'è necessario che' richiedono il congiuntivo presente.",
    },
    {
        question: "Scegli la forma corretta: 'Benché ____ pochi soldi, era una persona generosa.'",
        options: ['aveva', 'ha', 'avesse', 'avrebbe'],
        correctAnswer: 'avesse',
        explanation: "La congiunzione 'benché' (sebbene, nonostante) richiede sempre l'uso del congiuntivo. In questo caso, il congiuntivo imperfetto.",
    },
    {
        question: "Completa la frase: 'È il film più bello che io ____ mai visto.'",
        options: ['ho', 'avevo', 'abbia', 'avessi'],
        correctAnswer: 'abbia',
        explanation: "Nelle frasi al superlativo relativo (il più... che), si usa il congiuntivo. Qui si usa il congiuntivo passato.",
    },
    {
        question: "Completa: 'Ti chiamo prima che tu ____.'",
        options: ['esci', 'esca', 'uscirai', 'saresti uscito'],
        correctAnswer: 'esca',
        explanation: "La locuzione 'prima che' richiede il congiuntivo. 'Esca' è il congiuntivo presente del verbo 'uscire' per 'tu'.",
    },
    {
        question: "Scegli la forma corretta: 'Se io ____ ricco, viaggerei di più.'",
        options: ['sono', 'ero', 'sarei', 'fossi'],
        correctAnswer: 'fossi',
        explanation: "Questa è una frase ipotetica del secondo tipo (possibilità). Si forma con 'Se + congiuntivo imperfetto, condizionale presente'.",
    },
    {
        question: "Completa: 'Mi sembra che loro non ____ ancora arrivati.'",
        options: ['sono', 'siano', 'erano', 'fossero'],
        correctAnswer: 'siano',
        explanation: "'Sembrare che' esprime un dubbio o un'opinione personale e richiede il congiuntivo. 'Siano' è il congiuntivo presente di 'essere' per 'loro'.",
    },
    {
        question: "Scegli la forma corretta: 'Qualunque cosa tu ____, io ti ascolterò.'",
        options: ['dici', 'dirai', 'dica', 'dicessi'],
        correctAnswer: 'dica',
        explanation: "Le espressioni indefinite come 'qualunque cosa' richiedono il congiuntivo.",
    },
     {
        question: "Completa: 'È importante che tutti ____ le regole.'",
        options: ['rispettano', 'rispettino', 'rispetteranno', 'rispettassero'],
        correctAnswer: 'rispettino',
        explanation: "Le espressioni impersonali come 'è importante che' sono seguite dal congiuntivo presente.",
    },
    {
        question: "Scegli la forma corretta: 'Temo che non ____ tempo per finire.'",
        options: ['c\'è', 'ci sia', 'ci sarà', 'ci fosse'],
        correctAnswer: 'ci sia',
        explanation: "Il verbo 'temere che' esprime paura o dubbio e richiede il congiuntivo.",
    },
    {
        question: "Completa: 'Mi aspettavo che tu mi ____ la verità.'",
        options: ['dicessi', 'dici', 'dirai', 'avessi detto'],
        correctAnswer: 'dicessi',
        explanation: "Il verbo principale è al passato ('aspettavo'), quindi nella subordinata si usa il congiuntivo imperfetto per esprimere contemporaneità nel passato.",
    },
    {
        question: "Scegli la forma corretta: 'A condizione che tu ____ sincero, ti aiuterò.'",
        options: ['sei', 'sarai', 'sia', 'fossi'],
        correctAnswer: 'sia',
        explanation: "La locuzione 'a condizione che' introduce una condizione e richiede il congiuntivo presente.",
    },
    {
        question: "Completa: 'Vorrei che tu ____ più attento.'",
        options: ['eri', 'saresti', 'fossi', 'sia'],
        correctAnswer: 'fossi',
        explanation: "Il verbo 'volere' al condizionale (vorrei) per esprimere un desiderio è seguito dal congiuntivo imperfetto.",
    },
    {
        question: "Scegli la forma corretta: 'Non sono sicuro che Marco ____ la decisione giusta.'",
        options: ['ha preso', 'prendeva', 'abbia preso', 'avesse preso'],
        correctAnswer: 'abbia preso',
        explanation: "L'espressione 'non essere sicuro che' introduce un dubbio e richiede il congiuntivo. Il congiuntivo passato si usa per un'azione passata.",
    },
    {
        question: "Completa: 'È strano che non mi ____ ancora chiamato.'",
        options: ['ha', 'abbia', 'avesse', 'avrebbe'],
        correctAnswer: 'abbia',
        explanation: "Le espressioni impersonali come 'è strano che' sono seguite dal congiuntivo.",
    },
    {
        question: "Scegli la forma corretta: 'Si dice che quel film ____ molto interessante.'",
        options: ['è', 'sia', 'sarebbe', 'fosse'],
        correctAnswer: 'sia',
        explanation: "La forma impersonale 'si dice che', usata per riportare un'opinione comune, richiede il congiuntivo.",
    },
    {
        question: "Completa: 'Può darsi che ____ un malinteso.'",
        options: ['è stato', 'fosse stato', 'sarebbe stato', 'ci sia stato'],
        correctAnswer: 'ci sia stato',
        explanation: "L'espressione 'può darsi che', che indica una possibilità, è seguita dal congiuntivo.",
    },
];

const imperativoPronomiQuestions: Question[] = [
    {
        question: "Scegli la forma corretta dell'imperativo: '(tu) ____ la porta!'",
        options: ['Apri', 'Apre', 'Aprire', 'Apra'],
        correctAnswer: 'Apri',
        explanation: "L'imperativo informale (tu) del verbo 'aprire' è 'Apri!'.",
    },
    {
        question: "Hai visto Maria? 'Sì, ____ vista ieri.'",
        options: ["gli", "le", "la", "l'ho"],
        correctAnswer: "l'ho",
        explanation: "Il pronome diretto femminile 'la' si unisce al verbo 'avere' formando 'l'ho' (la ho).",
    },
    {
        question: "Cosa hai detto a Marco? '____ ho detto la verità.'",
        options: ['Le', 'Gli', 'Lo', 'Lui'],
        correctAnswer: 'Gli',
        explanation: "'Gli' è il pronome indiretto maschile singolare e significa 'a lui'.",
    },
    {
        question: "Trasforma all'imperativo con il pronome: 'Compra il pane!'",
        options: ['Compralo!', 'Lo compra!', 'Compragli!', 'Comprati!'],
        correctAnswer: 'Compralo!',
        explanation: "Nell'imperativo informale, il pronome diretto si attacca alla fine del verbo.",
    },
    {
        question: "Parla a me! -> ...",
        options: ['Parlami!', 'Mi parla!', 'Parlagli!', 'Parlale!'],
        correctAnswer: 'Parlami!',
        explanation: "Il pronome indiretto 'mi' si unisce alla fine del verbo all'imperativo informale.",
    },
    {
        question: "Hai comprato le mele? 'Sì, ____ ho comprate.'",
        options: ['le', 'gli', 'li', 'loro'],
        correctAnswer: 'le',
        explanation: "'Le' è il pronome diretto femminile plurale per 'le mele'.",
    },
    {
        question: "Trasforma all'imperativo negativo (tu) con il pronome: 'Non guardare la TV!'",
        options: ['Non la guardare!', 'Non guardarla!', 'Entrambe sono corrette', 'Nessuna è corretta'],
        correctAnswer: 'Entrambe sono corrette',
        explanation: "Con l'imperativo negativo informale (tu), il pronome può essere messo prima del verbo ('Non la guardare!') o attaccato all'infinito ('Non guardarla!').",
    },
    {
        question: "Come si dice 'Give it to me!' (il libro) in modo informale?",
        options: ['Me lo dai!', 'Dammelo!', 'Daglielo!', 'Lo mi dai!'],
        correctAnswer: 'Dammelo!',
        explanation: "È la combinazione dell'imperativo 'Da'' con i pronomi combinati 'me' e 'lo'. 'Da' + me + lo -> Dammelo!",
    },
    {
        question: "Scegli la forma corretta per l'imperativo formale (Lei): 'Signora, ____ pure.'",
        options: ['si siede', 'si sieda', 'siediti', 'sieda Lei'],
        correctAnswer: 'si sieda',
        explanation: "L'imperativo formale (Lei) si forma con il congiuntivo presente. Il pronome riflessivo 'si' precede il verbo.",
    },
    {
        question: "Cosa hai regalato a Maria e Lucia? '____ ho regalato dei fiori.'",
        options: ['Gli', 'Le', 'Loro', 'Li'],
        correctAnswer: 'Loro',
        explanation: "Il pronome indiretto femminile plurale è 'loro' e di solito segue il verbo. Nell'italiano parlato è comune usare 'gli', ma 'loro' è più corretto.",
    },
    {
        question: "Hai visto i miei occhiali? 'No, non ____ visti.'",
        options: ['ne', 'ci', 'li', 'gli'],
        correctAnswer: 'li',
        explanation: "'Li' è il pronome diretto maschile plurale, che sostituisce 'i miei occhiali'.",
    },
    {
        question: "Trasforma all'imperativo: 'Di' la verità a noi!'",
        options: ['Diccela!', 'Dilla a noi!', 'Ce la dici!', 'Dicci!'],
        correctAnswer: 'Diccela!',
        explanation: "È la combinazione dell'imperativo irregolare 'Di'' con i pronomi combinati 'ce' (a noi) e 'la' (la verità).",
    },
    {
        question: "Vuoi un po' di pizza? 'Sì, ____ voglio un pezzo.'",
        options: ['lo', 'la', 'ne', 'ci'],
        correctAnswer: 'ne',
        explanation: "Il pronome partitivo 'ne' si usa per indicare 'una parte di qualcosa'.",
    },
    {
        question: "Scegli l'opzione corretta: 'Quante sorelle hai?' '____ ho due.'",
        options: ['Le', 'Ne', 'Ci', 'Gliene'],
        correctAnswer: 'Ne',
        explanation: "Il pronome partitivo 'ne' si usa anche per indicare una quantità specificata.",
    },
    {
        question: "Imperativo formale (Lei): 'Mi dica la verità!' -> ...",
        options: ['Dimmela!', 'Me la dica!', 'Me la dice!', 'Dicamela!'],
        correctAnswer: 'Me la dica!',
        explanation: "Nell'imperativo formale (Lei), i pronomi combinati precedono il verbo.",
    },
    {
        question: "Hai bisogno di aiuto? Sì, ____ ho molto bisogno.",
        options: ['ne', 'ci', 'lo', 'gli'],
        correctAnswer: 'ne',
        explanation: "'Ne' può sostituire un'intera frase introdotta da 'di', in questo caso 'di aiuto'.",
    },
    {
        question: "Siete andati a Roma? 'Sì, ____ siamo andati l'anno scorso.'",
        options: ['ne', 'la', 'gli', 'ci'],
        correctAnswer: 'ci',
        explanation: "'Ci' si usa come pronome per sostituire un luogo introdotto da 'a', 'in', 'su'. In questo caso, 'a Roma'.",
    },
    {
        question: "Parliamo dei nostri problemi! -> ...",
        options: ['Parliamone!', 'Parliamoli!', 'Ce ne parliamo!', 'Ne parliamo!'],
        correctAnswer: 'Parliamone!',
        explanation: "Imperativo per 'noi' (Parliamo) + 'ne' (dei nostri problemi). Il pronome si attacca alla fine.",
    },
];

const passatoProssimoImperfettoQuestions: Question[] = [
    {
        question: "Completa la frase: 'Ieri, io ______ al cinema.'",
        options: ['vado', 'sono andato', 'andrò', 'andassi'],
        correctAnswer: 'sono andato',
        explanation: "'Ieri' indica un'azione passata, specifica e conclusa. Si usa il passato prossimo.",
    },
    {
        question: "Scegli il tempo corretto: 'Mentre ____ la TV, il telefono ha squillato.'",
        options: ['guardavo', 'ho guardato', 'guarderò', 'guardai'],
        correctAnswer: 'guardavo',
        explanation: "L'imperfetto ('guardavo') si usa per descrivere un'azione continuata nel passato, interrotta da un'azione puntuale (passato prossimo: 'ha squillato').",
    },
    {
        question: "Completa: 'Da bambino, ____ sempre in quel parco.'",
        options: ['ho giocato', 'giocai', 'giocavo', 'giocherò'],
        correctAnswer: 'giocavo',
        explanation: "L'imperfetto si usa per descrivere abitudini passate.",
    },
    {
        question: "Scegli la forma corretta: 'L'anno scorso, noi ____ in Spagna.'",
        options: ['siamo stati', 'eravamo', 'stiamo', 'fummo'],
        correctAnswer: 'siamo stati',
        explanation: "'L'anno scorso' indica un periodo di tempo concluso nel passato, quindi si usa il passato prossimo.",
    },
    {
        question: "Completa: 'Che cosa ____ ieri sera?'",
        options: ['facevi', 'hai fatto', 'facesti', 'fai'],
        correctAnswer: 'hai fatto',
        explanation: "'Ieri sera' indica un momento preciso nel passato. Si chiede di un'azione specifica e conclusa, quindi si usa il passato prossimo.",
    },
    {
        question: "Completa: 'Quando ____ piccolo, ____ una bicicletta rossa.'",
        options: ['sono stato, ho avuto', 'ero, avevo', 'fui, ebbi', 'ero, ho avuto'],
        correctAnswer: 'ero, avevo',
        explanation: "L'imperfetto si usa per descrivere stati, condizioni e situazioni abituali nel passato.",
    },
    {
        question: "Scegli la forma corretta: 'Mentre ____ la pasta, ____ al telefono con un'amica.'",
        options: ['cucinavo, ho parlato', 'ho cucinato, parlavo', 'cucinavo, parlavo', 'ho cucinato, ho parlato'],
        correctAnswer: 'cucinavo, parlavo',
        explanation: "Si usa l'imperfetto per entrambe le azioni perché descrivono due attività che si svolgevano contemporaneamente nel passato.",
    },
    {
        question: "Completa: 'Alle otto di sera, la lezione non ____ ancora finita.'",
        options: ['ha', 'aveva', 'era', 'è stata'],
        correctAnswer: 'era',
        explanation: "Si usa l'imperfetto per descrivere una situazione o uno stato in un momento specifico del passato.",
    },
    {
        question: "Scegli la forma corretta: 'Non ti ____ perché ____ la musica troppo alta.'",
        options: ['ho sentito, tenevo', 'sentivo, ho tenuto', 'ho sentito, ho tenuto', 'sentivo, tenevo'],
        correctAnswer: 'ho sentito, tenevo',
        explanation: "L'azione puntuale di 'non sentire' (passato prossimo) avviene a causa di una situazione continuata 'tenere la musica alta' (imperfetto).",
    },
    {
        question: "Completa la frase: 'Tre anni fa, ____ l'università.'",
        options: ['finivo', 'ho finito', 'finirò', 'finissi'],
        correctAnswer: 'ho finito',
        explanation: "L'espressione 'tre anni fa' colloca l'azione in un momento preciso e concluso del passato, richiedendo il passato prossimo.",
    },
    {
        question: "Scegli la forma corretta: 'Il cielo ____ grigio e ____ freddo.'",
        options: ['è stato, ha fatto', 'era, faceva', 'fu, fece', 'era, ha fatto'],
        correctAnswer: 'era, faceva',
        explanation: "L'imperfetto è il tempo verbale usato per le descrizioni nel passato (del tempo, di luoghi, di persone).",
    },
    {
        question: "Completa: 'Quando sono arrivato, loro ____ già da un'ora.'",
        options: ['discutevano', 'hanno discusso', 'discuterono', 'discutono'],
        correctAnswer: 'discutevano',
        explanation: "L'imperfetto si usa per descrivere un'azione in corso di svolgimento nel passato quando un'altra azione (al passato prossimo) è avvenuta.",
    },
    {
        question: "Scegli: 'Stamattina non ____ colazione perché ____ tardi.'",
        options: ['facevo, ero', 'ho fatto, ero', 'facevo, sono stato', 'ho fatto, sono stato'],
        correctAnswer: 'ho fatto, ero',
        explanation: "L'azione puntuale di 'non fare colazione' (passato prossimo) è causata dallo stato di 'essere in ritardo' (imperfetto).",
    },
    {
        question: "Completa: 'Finalmente ____ le chiavi che ____ da ore.'",
        options: ['ho trovato, cercavo', 'trovavo, ho cercato', 'ho trovato, ho cercato', 'trovavo, cercavo'],
        correctAnswer: 'ho trovato, cercavo',
        explanation: "L'azione conclusa di 'trovare' (passato prossimo) interrompe l'azione prolungata di 'cercare' (imperfetto).",
    },
];

const futuroCondizionaleQuestions: Question[] = [
    {
        question: "Completa la frase: 'Se avessi più tempo, ______ di più.'",
        options: ['leggerei', 'leggevo', 'ho letto', 'legga'],
        correctAnswer: 'leggerei',
        explanation: "Questa è una frase ipotetica del secondo tipo (periodo ipotetico della possibilità). Si forma con 'Se + congiuntivo imperfetto, condizionale presente'.",
    },
    {
        question: "Qual è il futuro semplice di 'vedere' per la prima persona plurale (noi)?",
        options: ['vediamo', 'vedremo', 'vedemmo', 'vedremmo'],
        correctAnswer: 'vedremo',
        explanation: "Il futuro semplice del verbo 'vedere' per 'noi' è 'vedremo'.",
    },
    {
        question: "Completa: 'Domani ____ una bella giornata.'",
        options: ['è', 'sarà', 'sarebbe', 'fosse'],
        correctAnswer: 'sarà',
        explanation: "Per fare previsioni sul futuro, si usa il futuro semplice.",
    },
    {
        question: "Cosa rispondi a 'Vorrei un caffè'?",
        options: ['Lo prendo subito', 'Lo prenderei subito', 'Lo prenderò subito', 'Lo prendessi subito'],
        correctAnswer: 'Lo prendo subito',
        explanation: "'Vorrei' è un condizionale di cortesia. La risposta più naturale è al presente indicativo o futuro semplice. 'Lo prendo' è comune.",
    },
    {
        question: "Scegli la forma corretta: 'Al posto tuo, non ____ così.'",
        options: ['parlerò', 'parlo', 'parlerei', 'parlassi'],
        correctAnswer: 'parlerei',
        explanation: "Per dare un consiglio o esprimere un'opinione in una situazione ipotetica, si usa il condizionale presente.",
    },
    {
        question: "Completa: 'Senza il tuo aiuto, non ce l'____ mai fatta.'",
        options: ['farò', 'farei', 'avrei', 'avessi'],
        correctAnswer: 'avrei',
        explanation: "Questa è una frase al condizionale passato ('avrei fatta'). Si usa per esprimere qualcosa che sarebbe accaduto nel passato a determinate condizioni (implicite).",
    },
    {
        question: "Scegli la forma corretta: 'Mi ____ un bicchiere d'acqua, per favore?'",
        options: ['porti', 'porterai', 'porteresti', 'portassi'],
        correctAnswer: 'porteresti',
        explanation: "Il condizionale ('porteresti') si usa per fare richieste in modo gentile.",
    },
    {
        question: "Completa la frase: 'Se avessi studiato di più, ____ l'esame.'",
        options: ['passerei', 'passerò', 'avrei passato', 'passavo'],
        correctAnswer: 'avrei passato',
        explanation: "Periodo ipotetico del terzo tipo (impossibilità nel passato). 'Se + congiuntivo trapassato, condizionale passato'.",
    },
    {
        question: "Scegli la forma corretta: 'Secondo le previsioni, domani ____.'",
        options: ['pioverebbe', 'pioverà', 'piovesse', 'ha piovuto'],
        correctAnswer: 'pioverà',
        explanation: "Il futuro semplice si usa per esprimere previsioni o supposizioni sul futuro.",
    },
    {
        question: "Completa: 'Quando ____ grande, ____ l'astronauta.'",
        options: ['sarò, farò', 'sarei, farei', 'fossi, facessi', 'ero, facevo'],
        correctAnswer: 'sarò, farò',
        explanation: "Per parlare di progetti e intenzioni future si usa il futuro semplice.",
    },
    {
        question: "Scegli la forma corretta: 'Prometto che da domani ____ di più.'",
        options: ['studierò', 'studierei', 'studio', 'studiassi'],
        correctAnswer: 'studierò',
        explanation: "Il futuro semplice si usa per fare promesse.",
    },
    {
        question: "Completa: 'Non so che ore sono, ma ____ le tre.'",
        options: ['saranno', 'sarebbero', 'siano', 'sono'],
        correctAnswer: 'saranno',
        explanation: "Il futuro si usa anche per esprimere un'ipotesi o un dubbio nel presente.",
    },
    {
        question: "Scegli la forma corretta: 'Mi hanno detto che ____ un nuovo film di quell'attore.'",
        options: ['uscirebbe', 'uscirà', 'esca', 'è uscito'],
        correctAnswer: 'uscirà',
        explanation: "Qui il futuro esprime un'informazione appresa da altri, quasi come un discorso indiretto.",
    },
    {
        question: "Scegli la forma corretta: 'Non avresti dovuto parlargli così, si ____.'",
        options: ['offenderà', 'sarebbe offeso', 'sarà offeso', 'offenderebbe'],
        correctAnswer: 'sarà offeso',
        explanation: "Il futuro anteriore ('sarà offeso') si usa per esprimere una supposizione su un evento passato.",
    },
    {
        question: "Completa: 'Appena ____ a casa, ti chiamerò.'",
        options: ['arriverò', 'arrivo', 'sarei arrivato', 'arrivassi'],
        correctAnswer: 'arriverò',
        explanation: "Nelle frasi temporali introdotte da 'appena', 'quando', 'dopo che', se la frase principale è al futuro, anche la subordinata deve essere al futuro (semplice o anteriore).",
    },
];

const periodoIpoteticoQuestions: Question[] = [
    {
        question: "Completa la frase: 'Se ____ bel tempo, andremo al mare.'",
        options: ['fa', 'facesse', 'farà', 'abbia fatto'],
        correctAnswer: 'farà',
        explanation: "Periodo ipotetico del primo tipo (realtà): Futuro semplice nell'ipotesi e futuro semplice nella conseguenza. È comune anche l'uso del presente: 'Se fa bel tempo...'.",
    },
    {
        question: "Completa: 'Se studiassi di più, ____ voti migliori.'",
        options: ['prenderei', 'prenderò', 'ho preso', 'prendessi'],
        correctAnswer: 'prenderei',
        explanation: "Periodo ipotetico del secondo tipo (possibilità): Se + congiuntivo imperfetto, condizionale presente.",
    },
    {
        question: "Scegli la forma corretta: 'Se mi avessi chiamato, ____.'",
        options: ['verrei', 'sarei venuto', 'vengo', 'venissi'],
        correctAnswer: 'sarei venuto',
        explanation: "Periodo ipotetico del terzo tipo (impossibilità nel passato): Se + congiuntivo trapassato, condizionale passato.",
    },
    {
        question: "Completa: 'Ti aiuterei, se ____ tempo.'",
        options: ['avevo', 'avessi', 'avrò', 'avrei'],
        correctAnswer: 'avessi',
        explanation: "Periodo ipotetico del secondo tipo (possibilità): la conseguenza è al condizionale presente, quindi l'ipotesi vuole il congiuntivo imperfetto.",
    },
    {
        question: "Scegli la forma corretta: 'Se non avesse piovuto, ____ una passeggiata.'",
        options: ['faremmo', 'faremo', 'avremmo fatto', 'facessimo'],
        correctAnswer: 'avremmo fatto',
        explanation: "Periodo ipotetico del terzo tipo (impossibilità nel passato): Se + congiuntivo trapassato, condizionale passato.",
    },
    {
        question: "Completa: 'Se vincessi alla lotteria, ____ una casa al mare.'",
        options: ['comprerò', 'comprerei', 'avrei comprato', 'comprassi'],
        correctAnswer: 'comprerei',
        explanation: "Periodo ipotetico del secondo tipo (possibilità): Se + congiuntivo imperfetto, condizionale presente.",
    },
    {
        question: "Scegli: 'Se lo sapessi, te lo ____.'",
        options: ['dirò', 'dicessi', 'direi', 'avrei detto'],
        correctAnswer: 'direi',
        explanation: "Periodo ipotetico del secondo tipo (possibilità): la conseguenza di un'ipotesi possibile è espressa con il condizionale presente.",
    },
    {
        question: "Completa: 'Se farà freddo domani, ____ a casa.'",
        options: ['rimarremmo', 'rimanessi', 'rimarrò', 'sarei rimasto'],
        correctAnswer: 'rimarrò',
        explanation: "Periodo ipotetico del primo tipo (realtà): Se + futuro semplice, futuro semplice.",
    },
    {
        question: "Scegli la forma corretta per il periodo ipotetico misto: 'Se avessi seguito il consiglio, ora non ____ in questa situazione.'",
        options: ['saresti', 'fossi', 'saresti stato', 'eri'],
        correctAnswer: 'saresti',
        explanation: "Periodo ipotetico misto: l'ipotesi è impossibile e nel passato (congiuntivo trapassato 'avessi seguito'), ma la conseguenza è nel presente (condizionale presente 'saresti').",
    },
];

const formaPassivaQuestions: Question[] = [
    {
        question: "Trasforma la frase alla forma passiva: 'Leonardo ha dipinto la Gioconda.'",
        options: ['La Gioconda dipinse Leonardo.', 'La Gioconda è dipinta da Leonardo.', 'La Gioconda è stata dipinta da Leonardo.', 'La Gioconda dipingeva Leonardo.'],
        correctAnswer: 'La Gioconda è stata dipinta da Leonardo.',
        explanation: "Il complemento oggetto ('la Gioconda') diventa soggetto, si usa l'ausiliare 'essere' allo stesso tempo del verbo attivo ('ha dipinto' -> 'è stata') e il soggetto attivo diventa complemento d'agente introdotto da 'da'.",
    },
    {
        question: "Quale frase è passiva? 'Molti turisti visiteranno il Colosseo.'",
        options: ['Il Colosseo sarà visitato da molti turisti.', 'Il Colosseo visiterà molti turisti.', 'I turisti hanno visitato il Colosseo.', 'Nessuna delle precedenti.'],
        correctAnswer: 'Il Colosseo sarà visitato da molti turisti.',
        explanation: "Il futuro semplice 'visiteranno' diventa 'sarà visitato' nella forma passiva.",
    },
    {
        question: "Completa la frase passiva: 'Questo libro ____ da migliaia di persone.'",
        options: ['ha letto', 'legge', 'è stato letto', 'leggeva'],
        correctAnswer: 'è stato letto',
        explanation: "La forma passiva si costruisce con l'ausiliare 'essere' + il participio passato del verbo.",
    },
    {
        question: "Trasforma: 'I romani costruirono questo ponte.'",
        options: ['Questo ponte fu costruito dai romani.', 'Questo ponte costruì i romani.', 'Questo ponte era costruito dai romani.', 'Questo ponte ha costruito i romani.'],
        correctAnswer: 'Questo ponte fu costruito dai romani.',
        explanation: "Il passato remoto 'costruirono' diventa 'fu costruito' nella forma passiva.",
    },
    {
        question: "La forma passiva si può fare anche con il verbo 'venire' al posto di 'essere'. Quale frase è corretta?",
        options: ['La casa venne costruita nel 1950.', 'La casa ha venuto costruita nel 1950.', 'La casa sarebbe venuta costruita.', 'La casa viene a costruire.'],
        correctAnswer: 'La casa venne costruita nel 1950.',
        explanation: "Il verbo 'venire' può sostituire 'essere' nei tempi semplici (es. presente, imperfetto, futuro semplice, passato remoto) per formare il passivo.",
    },
    {
        question: "Trasforma al passivo: 'Il professore corregge i compiti.'",
        options: ['I compiti correggono il professore.', 'I compiti sono corretti dal professore.', 'I compiti erano corretti dal professore.', 'I compiti furono corretti dal professore.'],
        correctAnswer: 'I compiti sono corretti dal professore.',
        explanation: "Il presente indicativo 'corregge' diventa 'sono corretti' nella forma passiva.",
    },
];

const discorsoIndirettoQuestions: Question[] = [
    {
        question: "Trasforma al discorso indiretto: 'Marco dice: \"Domani vado al cinema.\"'",
        options: ['Marco dice che domani va al cinema.', 'Marco ha detto che ieri andava al cinema.', 'Marco dice che il giorno dopo andrà al cinema.', 'Marco dice che il giorno dopo sarebbe andato al cinema.'],
        correctAnswer: 'Marco dice che il giorno dopo andrà al cinema.',
        explanation: "Con il verbo introduttivo al presente ('dice'), l'avverbio 'domani' diventa 'il giorno dopo' e il presente 'vado' diventa futuro 'andrà'.",
    },
    {
        question: "Trasforma: 'Lucia ha detto: \"Ho finito i compiti ieri.\"'",
        options: ['Lucia ha detto che aveva finito i compiti ieri.', 'Lucia ha detto che aveva finito i compiti il giorno prima.', 'Lucia dice che finisce i compiti il giorno prima.', 'Lucia ha detto che avrebbe finito i compiti.'],
        correctAnswer: 'Lucia ha detto che aveva finito i compiti il giorno prima.',
        explanation: "Con il verbo introduttivo al passato ('ha detto'), il passato prossimo ('ho finito') diventa trapassato prossimo ('aveva finito') e 'ieri' diventa 'il giorno prima'.",
    },
    {
        question: "Trasforma: 'Lui mi ha chiesto: \"Verrai alla festa?\"'",
        options: ['Lui mi ha chiesto se verrò alla festa.', 'Lui mi ha chiesto se fossi venuto alla festa.', 'Lui mi ha chiesto se sarei venuto alla festa.', 'Lui mi chiede se verrai alla festa.'],
        correctAnswer: 'Lui mi ha chiesto se sarei venuto alla festa.',
        explanation: "Con il verbo introduttivo al passato ('ha chiesto'), il futuro 'verrai' diventa condizionale passato 'sarei venuto'. La domanda diretta diventa una frase introdotta da 'se'.",
    },
    {
        question: "Trasforma: 'L'insegnante ordina: \"State zitti!\"'",
        options: ["L'insegnante ordina di stare zitti.", "L'insegnante ha ordinato che stiate zitti.", "L'insegnante ordina se state zitti.", "L'insegnante diceva di stare zitti."],
        correctAnswer: "L'insegnante ordina di stare zitti.",
        explanation: "Quando si riporta un ordine (imperativo), si usa la struttura 'verbo + di + infinito'.",
    },
    {
        question: "Trasforma: 'Anna mi ha detto: \"Non posso uscire stasera.\"'",
        options: ["Anna mi ha detto che non poteva uscire stasera.", "Anna mi ha detto che non poteva uscire quella sera.", "Anna mi dice che non può uscire quella sera.", "Anna mi ha detto che non potrebbe uscire quella sera."],
        correctAnswer: "Anna mi ha detto che non poteva uscire quella sera.",
        explanation: "Con il verbo introduttivo al passato, 'posso' (presente) diventa 'poteva' (imperfetto) e 'stasera' diventa 'quella sera'.",
    },
];

const pronomiRelativiQuestions: Question[] = [
    {
        question: "Completa la frase: 'Il libro ____ sto leggendo è molto interessante.'",
        options: ['che', 'cui', 'il quale', 'di cui'],
        correctAnswer: 'che',
        explanation: "'Che' è il pronome relativo più comune e può funzionare sia da soggetto che da complemento oggetto. Qui è complemento oggetto ('sto leggendo il libro').",
    },
    {
        question: "Scegli il pronome corretto: 'La città in ____ abito è piccola.'",
        options: ['che', 'cui', 'la quale', 'dove'],
        correctAnswer: 'cui',
        explanation: "'Cui' si usa dopo una preposizione (in, a, di, da, con, per, su). Qui, 'in cui' significa 'nella quale'. 'Dove' sarebbe anche corretto.",
    },
    {
        question: "Completa: 'Ecco il motivo per ____ ti ho chiamato.'",
        options: ['che', 'cui', 'il quale', 'quale'],
        correctAnswer: 'cui',
        explanation: "'Cui' si usa dopo una preposizione. 'Per cui' significa 'per il quale'.",
    },
    {
        question: "Scegli la forma corretta: 'La ragazza ____ ti ho parlato è mia cugina.'",
        options: ['che', 'la quale', 'di cui', 'a cui'],
        correctAnswer: 'di cui',
        explanation: "Il verbo 'parlare' richiede la preposizione 'di' (parlare di qualcuno/qualcosa), quindi si usa 'di cui'.",
    },
    {
        question: "Completa: 'Non conosco la persona con ____ sei uscito ieri.'",
        options: ['che', 'il quale', 'la quale', 'cui'],
        correctAnswer: 'cui',
        explanation: "Dopo la preposizione 'con' si usa 'cui'. 'Con cui' = 'con la quale'.",
    },
];

const concordanzaTempiQuestions: Question[] = [
    {
        question: "Scegli il tempo corretto: 'Credo che Marco ____ già partito.'",
        options: ['è', 'sia', 'fosse', 'sarebbe'],
        correctAnswer: 'sia',
        explanation: "La frase principale è al presente ('Credo'). Per esprimere anteriorità rispetto al presente, nella subordinata si usa il congiuntivo passato ('sia partito').",
    },
    {
        question: "Completa: 'Speravo che tu ____ alla festa.'",
        options: ['vieni', 'verrai', 'venissi', 'saresti venuto'],
        correctAnswer: 'venissi',
        explanation: "La frase principale è al passato ('Speravo'). Per esprimere contemporaneità nel passato, si usa il congiuntivo imperfetto ('venissi').",
    },
    {
        question: "Scegli la forma corretta: 'Pensavo che voi ____ i compiti.'",
        options: ['avete già fatto', 'faceste', 'aveste già fatto', 'avreste già fatto'],
        correctAnswer: 'aveste già fatto',
        explanation: "La principale è al passato ('Pensavo'). Per esprimere anteriorità rispetto a quel momento passato, si usa il congiuntivo trapassato ('aveste fatto').",
    },
    {
        question: "Completa: 'Mi ha detto che ____ il giorno dopo.'",
        options: ['arriva', 'arriverà', 'fosse arrivato', 'sarebbe arrivato'],
        correctAnswer: 'sarebbe arrivato',
        explanation: "Nel discorso indiretto con il verbo introduttivo al passato ('ha detto'), un'azione futura viene espressa con il condizionale passato.",
    },
];

const formaImplicitaQuestions: Question[] = [
    {
        question: "Trasforma la frase usando il gerundio: 'Dato che ho studiato molto, ho passato l'esame.'",
        options: ['Studiando molto, ho passato l\'esame.', 'Per studiare molto, ho passato l\'esame.', 'Studiato molto, ho passato l\'esame.', 'A studiare molto, ho passato l\'esame.'],
        correctAnswer: 'Studiando molto, ho passato l\'esame.',
        explanation: "La frase causale 'Dato che ho studiato' può essere trasformata in una frase implicita con il gerundio 'Studiando', che mantiene lo stesso significato.",
    },
    {
        question: "Quale frase implicita sostituisce 'Dopo che abbiamo cenato, siamo usciti.'?",
        options: ['Cenando, siamo usciti.', 'Avendo cenato, siamo usciti.', 'Per cenare, siamo usciti.', 'A cena, siamo usciti.'],
        correctAnswer: 'Avendo cenato, siamo usciti.',
        explanation: "Per esprimere anteriorità, si usa il gerundio passato (avendo/essendo + participio passato). 'Avendo cenato' significa 'dopo aver cenato'.",
    },
    {
        question: "Trasforma usando il participio passato: 'Il libro, che è stato scritto da Eco, è un capolavoro.'",
        options: ['Il libro, scrivendo da Eco, è un capolavoro.', 'Il libro, scritto da Eco, è un capolavoro.', 'Il libro, avendo scritto da Eco, è un capolavoro.', 'Il libro da scrivere da Eco è un capolavoro.'],
        correctAnswer: 'Il libro, scritto da Eco, è un capolavoro.',
        explanation: "Una frase relativa passiva ('che è stato scritto') può essere sostituita dal solo participio passato con valore aggettivale.",
    },
    {
        question: "Scegli la forma implicita corretta per: 'Se leggi attentamente, capirai.'",
        options: ['Leggendo attentamente, capirai.', 'Letto attentamente, capirai.', 'Ad aver letto attentamente, capirai.', 'Per leggere attentamente, capirai.'],
        correctAnswer: 'Leggendo attentamente, capirai.',
        explanation: "Una frase ipotetica del primo tipo può essere espressa con il gerundio presente, che assume un valore condizionale.",
    },
];

const verbiPronominaliAvanzatiQuestions: Question[] = [
    {
        question: "Cosa significa 'arrovellarsi'?",
        options: ['Rilassarsi profondamente', 'Pensare intensamente a un problema senza trovare soluzione', 'Litigare con qualcuno', 'Sbrigarsi a fare qualcosa'],
        correctAnswer: 'Pensare intensamente a un problema senza trovare soluzione',
        explanation: "'Arrovellarsi il cervello' significa tormentarsi con pensieri insistenti e complessi.",
    },
    {
        question: "Completa la frase: 'Non riesco a ____ dall'idea che ci sia qualcosa di strano.'",
        options: ['sottrarmi', 'astenermi', 'imbattermi', 'arrendermi'],
        correctAnswer: 'sottrarmi',
        explanation: "'Sottrarsi a qualcosa' significa evitare, sfuggire a un pensiero, un obbligo o una situazione.",
    },
    {
        question: "Se una persona 'si impadronisce' di qualcosa, cosa fa?",
        options: ['La vende', 'La rompe', 'Ne prende possesso, spesso con la forza o l\'astuzia', 'La dimentica'],
        correctAnswer: 'Ne prende possesso, spesso con la forza o l\'astuzia',
        explanation: "'Impadronirsi' significa diventare padrone di qualcosa, prenderne il controllo.",
    },
    {
        question: "Completa la frase: 'Durante la riunione, preferisco ____ da commenti personali.'",
        options: ['astenersi', 'arrabattarmi', 'avvalermi', 'dileguarmi'],
        correctAnswer: 'astenersi',
        explanation: "'Astenersi da qualcosa' significa decidere volontariamente di non fare o dire qualcosa.",
    },
];


export const verbiGroup = {
    'Livello B1/B2': {
        'Preposizioni': preposizioniQuestions,
        'Congiuntivo': congiuntivoQuestions,
        'Imperativo e Pronomi': imperativoPronomiQuestions,
        'Passato Prossimo vs Imperfetto': passatoProssimoImperfettoQuestions,
        'Futuro e Condizionale': futuroCondizionaleQuestions,
        'Pronomi Relativi': pronomiRelativiQuestions,
        'Forma Passiva': formaPassivaQuestions,
    },
    'Livello C1': {
        'Periodo Ipotetico': periodoIpoteticoQuestions,
        'Discorso Indiretto': discorsoIndirettoQuestions,
        'Concordanza dei Tempi': concordanzaTempiQuestions,
        'Forma Implicita': formaImplicitaQuestions,
        'Verbi Pronominali Avanzati': verbiPronominaliAvanzatiQuestions,
    }
};