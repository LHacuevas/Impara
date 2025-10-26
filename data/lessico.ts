import type { Question } from '../types';

const inUfficioLessico: Question[] = [
    {
        question: "Come si chiama l'incontro di lavoro per discutere di un progetto?",
        options: ['Una festa', 'Una riunione', 'Una pausa', 'Una telefonata'],
        correctAnswer: 'Una riunione',
        explanation: "Una 'riunione' è un 'meeting' di lavoro.",
    },
    {
        question: "Quale oggetto usi per scrivere sul computer?",
        options: ['Il mouse', 'Lo schermo', 'La stampante', 'La tastiera'],
        correctAnswer: 'La tastiera',
        explanation: "La 'tastiera' è la 'keyboard' del computer.",
    },
    {
        question: "Il capo dell'azienda è...",
        options: ['Il collega', "L'impiegato", "L'amministratore delegato", 'Il cliente'],
        correctAnswer: "L'amministratore delegato",
        explanation: "L'amministratore delegato (o CEO) è la figura al vertice di un'azienda.",
    },
    {
        question: "Cosa fai quando finisci di lavorare per oggi?",
        options: ['Timbro il cartellino', 'Faccio colazione', 'Prendo un appuntamento', 'Scrivo una fattura'],
        correctAnswer: 'Timbro il cartellino',
        explanation: "'Timbrare il cartellino' ('to clock out') è l'azione di registrare l'orario di fine lavoro.",
    },
    {
        question: "Come si chiama il documento con il riassunto della tua carriera che invii per un lavoro?",
        options: ['Il contratto', 'La lettera di presentazione', 'Il curriculum vitae', 'Il preventivo'],
        correctAnswer: 'Il curriculum vitae',
        explanation: "Il 'curriculum vitae' (CV) o 'resume' è il documento usato per candidarsi a un lavoro.",
    },
    {
        question: "La persona con cui condividi l'ufficio è un...",
        options: ['parente', 'principale', 'collega', 'dipendente'],
        correctAnswer: 'collega',
        explanation: "Un 'collega' ('colleague') è una persona che lavora nella stessa azienda o ufficio.",
    },
    {
        question: "Se devi inviare un documento ufficiale, probabilmente usi una...",
        options: ['e-mail', 'lettera raccomandata', 'cartolina', 'chat'],
        correctAnswer: 'lettera raccomandata',
        explanation: "Una 'lettera raccomandata' ('registered mail') è un servizio postale che fornisce una prova legale dell'invio.",
    },
    {
        question: "La data entro cui un lavoro deve essere completato si chiama...",
        options: ['scadenza', 'urgenza', 'fattura', 'promemoria'],
        correctAnswer: 'scadenza',
        explanation: "La 'scadenza' ('deadline') è il termine ultimo per la consegna di un progetto.",
    },
    {
        question: "L'aumento di stipendio o di posizione si chiama...",
        options: ['licenziamento', 'stage', 'promozione', 'sciopero'],
        correctAnswer: 'promozione',
        explanation: "Una 'promozione' ('promotion') è un avanzamento di carriera.",
    },
    {
        question: "L'azienda che vende prodotti o servizi a un'altra azienda è un...",
        options: ['cliente', 'concorrente', 'fornitore', 'investitore'],
        correctAnswer: 'fornitore',
        explanation: "Un 'fornitore' ('supplier' o 'vendor') provvede beni o servizi.",
    },
];

const alRistoranteLessico: Question[] = [
    {
        question: "Al ristorante, cosa chiedi alla fine del pasto?",
        options: ['Il menu', "L'antipasto", 'Il conto', 'Il primo'],
        correctAnswer: 'Il conto',
        explanation: "Alla fine del pasto si chiede 'il conto' ('the bill').",
    },
    {
        question: "Cosa usi per pulirti la bocca a tavola?",
        options: ['La forchetta', 'Il coltello', 'Il cucchiaio', 'Il tovagliolo'],
        correctAnswer: 'Il tovagliolo',
        explanation: "Il 'tovagliolo' ('napkin') si usa per pulirsi la bocca.",
    },
    {
        question: "Chi serve ai tavoli in un ristorante?",
        options: ['Il cuoco', 'Il cassiere', 'Il cameriere', 'Il cliente'],
        correctAnswer: 'Il cameriere',
        explanation: "Il 'cameriere' ('waiter') è la persona che prende le ordinazioni e serve i piatti.",
    },
    {
        question: "Cosa ordini come 'primo piatto'?",
        options: ['Un dolce', 'Un caffè', 'Un piatto di pasta', 'Una bistecca'],
        correctAnswer: 'Un piatto di pasta',
        explanation: "In Italia, il 'primo piatto' è solitamente a base di carboidrati, come pasta, riso o zuppa.",
    },
    {
        question: "Come si chiama la mancia che si lascia al cameriere?",
        options: ['La ricevuta', 'La mancia', 'Lo sconto', 'Il resto'],
        correctAnswer: 'La mancia',
        explanation: "La 'mancia' ('tip') è una somma di denaro lasciata come ringraziamento per il servizio.",
    },
    {
        question: "Cosa si mangia di solito come 'dolce'?",
        options: ['La pasta', 'Il pane', 'Il tiramisù', "L'insalata"],
        correctAnswer: 'Il tiramisù',
        explanation: "Il 'dolce' ('dessert') è l'ultima portata del pasto. Il tiramisù è un dolce italiano famoso.",
    },
    {
        question: "L'elenco dei vini in un ristorante si chiama...",
        options: ['La lista della spesa', 'La carta dei vini', 'Il menu del giorno', 'Il ricettario'],
        correctAnswer: 'La carta dei vini',
        explanation: "La 'carta dei vini' ('wine list') elenca tutti i vini disponibili.",
    },
    {
        question: "La portata che si mangia dopo il primo si chiama...",
        options: ['secondo', 'contorno', 'antipasto', 'frutta'],
        correctAnswer: 'secondo',
        explanation: "Il 'secondo' è di solito un piatto a base di carne o pesce.",
    },
    {
        question: "Se vuoi riservare un tavolo, devi...",
        options: ['cucinare', 'pagare', 'prenotare', 'cancellare'],
        correctAnswer: 'prenotare',
        explanation: "'Prenotare' ('to book' o 'to reserve') significa riservare un posto in anticipo.",
    },
    {
        question: "Cosa significa cuocere la pasta 'al dente'?",
        options: ['Molto cotta e morbida', 'Cruda', 'Cotta ma ancora leggermente dura', 'Con il sugo al pomodoro'],
        correctAnswer: 'Cotta ma ancora leggermente dura',
        explanation: "La cottura 'al dente' è considerata la migliore per la pasta in Italia: cotta all'esterno ma con un'anima ancora soda.",
    },
    {
        question: "Cosa si beve alla fine del pasto per aiutare la digestione?",
        options: ['Un aperitivo', 'Un frullato', 'Un digestivo (o amaro)', "Un'aranciata"],
        correctAnswer: 'Un digestivo (o amaro)',
        explanation: "Un 'digestivo' come un amaro o un limoncello è una bevanda alcolica consumata a fine pasto.",
    },
    {
        question: "La voce 'coperto' che trovi sul conto si riferisce a...",
        options: ['La mancia per il cameriere', 'Il costo del dolce', 'Il pane e l\'uso di posate e tovagliolo', 'Una tassa comunale'],
        correctAnswer: 'Il pane e l\'uso di posate e tovagliolo',
        explanation: "Il 'coperto' è un costo fisso per persona che copre il servizio del tavolo, il pane, ecc. Non è la mancia.",
    },
    {
        question: "Se un piatto nel menu è 'del giorno', significa che...",
        options: ['È l\'unico piatto disponibile', 'È una specialità preparata con ingredienti freschi di oggi', 'È un piatto avanzato da ieri', 'Costa di più'],
        correctAnswer: 'È una specialità preparata con ingredienti freschi di oggi',
        explanation: "I 'piatti del giorno' sono proposte fuori menu basate sulla disponibilità stagionale degli ingredienti.",
    },
];

const inCucinaLessico: Question[] = [
    {
        question: "In cosa si fa bollire l'acqua per la pasta?",
        options: ['In una padella', 'In una teglia', 'In una pentola', 'In una ciotola'],
        correctAnswer: 'In una pentola',
        explanation: "La 'pentola' ('pot') è il recipiente alto usato per cuocere cibi in abbondante liquido, come la pasta.",
    },
    {
        question: "Come si chiama l'azione di cuocere il cibo in olio o burro caldi?",
        options: ['Bollire', 'Arrostire', 'Friggere', 'Infornare'],
        correctAnswer: 'Friggere',
        explanation: "'Friggere' ('to fry') significa cuocere immergendo il cibo in un grasso molto caldo.",
    },
    {
        question: "Lo strumento con tanti piccoli fori usato per scolare la pasta si chiama...",
        options: ['Un mestolo', 'Uno scolapasta', 'Un tagliere', 'Un mattarello'],
        correctAnswer: 'Uno scolapasta',
        explanation: "Lo 'scolapasta' ('colander' o 'strainer') serve per separare la pasta dall'acqua di cottura.",
    },
    {
        question: "Cosa usi per tagliare finemente aglio, cipolla e prezzemolo?",
        options: ['Un tritatutto', 'Una mezzaluna', 'Un coltello affilato', 'Tutte le precedenti'],
        correctAnswer: 'Tutte le precedenti',
        explanation: "Tutti questi strumenti sono adatti per 'tritare', cioè tagliare in pezzi molto piccoli.",
    },
    {
        question: "L'azione di unire diversi ingredienti girando con un cucchiaio si dice...",
        options: ['Affettare', 'Grattugiare', 'Mescolare', 'Impastare'],
        correctAnswer: 'Mescolare',
        explanation: "'Mescolare' ('to stir' o 'to mix') significa amalgamare più ingredienti insieme.",
    },
    {
        question: "Lo strumento che si usa per stendere la pasta della pizza è...",
        options: ['il mattarello', 'il cavatappi', 'la grattugia', 'il pelapatate'],
        correctAnswer: 'il mattarello',
        explanation: "Il 'mattarello' ('rolling pin') è un cilindro di legno usato per appiattire gli impasti.",
    },
    {
        question: "Qual è il verbo per l'azione di cuocere una torta nel forno?",
        options: ['Lessare', 'Grigliare', 'Infornare', 'Soffriggere'],
        correctAnswer: 'Infornare',
        explanation: "'Infornare' significa cuocere cibo nel forno.",
    },
    {
        question: "Lo strumento per ridurre il Parmigiano in piccoli pezzi è...",
        options: ['L\'apriscatole', 'La grattugia', 'Lo schiaccianoci', 'Il frullatore'],
        correctAnswer: 'La grattugia',
        explanation: "La 'grattugia' ('grater') si usa per 'grattugiare' formaggi duri, pane secco, ecc.",
    },
    {
        question: "La base di molte salse italiane, fatta con cipolla, carota e sedano cotti lentamente, si chiama...",
        options: ['Soffritto', 'Intingolo', 'Condimento', 'Macedonia'],
        correctAnswer: 'Soffritto',
        explanation: "Il 'soffritto' è la base aromatica essenziale per moltissimi piatti italiani.",
    },
];

const tipiDiCiboLessico: Question[] = [
    {
        question: "La mozzarella, il parmigiano e il gorgonzola sono tipi di...",
        options: ['Salumi', 'Verdure', 'Formaggio', 'Frutta'],
        correctAnswer: 'Formaggio',
        explanation: "Sono tutti formaggi italiani famosi.",
    },
    {
        question: "Il basilico, il prezzemolo e il rosmarino sono...",
        options: ['Spezie', 'Legumi', 'Erbe aromatiche', 'Cereali'],
        correctAnswer: 'Erbe aromatiche',
        explanation: "Le 'erbe aromatiche' ('aromatic herbs') si usano fresche o secche per dare sapore ai piatti.",
    },
    {
        question: "Il prosciutto, il salame e la mortadella sono...",
        options: ['Formaggi', 'Salumi', 'Pesce', 'Carne rossa'],
        correctAnswer: 'Salumi',
        explanation: "I 'salumi' ('cured meats') sono prodotti a base di carne lavorata e stagionata.",
    },
    {
        question: "Quale di questi non è un agrume?",
        options: ['L\'arancia', 'Il limone', 'Il mandarino', 'La mela'],
        correctAnswer: 'La mela',
        explanation: "Gli agrumi sono frutti come arance, limoni, mandarini e pompelmi. La mela è un pomo.",
    },
    {
        question: "Ceci, fagioli e lenticchie sono...",
        options: ['tuberi', 'cereali', 'legumi', 'frutti di bosco'],
        correctAnswer: 'legumi',
        explanation: "I 'legumi' ('legumes' o 'pulses') sono una fonte importante di proteine vegetali.",
    },
    {
        question: "La farina, l'acqua, il lievito e il sale sono gli ingredienti base per fare...",
        options: ['La pasta all\'uovo', 'Il pane', 'Il risotto', 'La polenta'],
        correctAnswer: 'Il pane',
        explanation: "Questi sono i quattro ingredienti fondamentali per l'impasto del pane e della pizza.",
    },
    {
        question: "Cosa sono le 'melanzane'?",
        options: ['Un tipo di frutta', 'Un ortaggio', 'Un tipo di pesce', 'Una spezia'],
        correctAnswer: 'Un ortaggio',
        explanation: "La melanzana ('eggplant' o 'aubergine') è un ortaggio molto usato nella cucina mediterranea, per esempio nella parmigiana.",
    },
    {
        question: "L'ingrediente principale del pesto alla genovese è...",
        options: ['Il prezzemolo', 'La menta', 'Il basilico', 'Il coriandolo'],
        correctAnswer: 'Il basilico',
        explanation: "Il pesto tradizionale si fa con basilico, pinoli, aglio, parmigiano, pecorino e olio d'oliva.",
    },
];

const piattiTipiciLessico: Question[] = [
    {
        question: "Quali sono gli ingredienti della vera pasta alla Carbonara (senza panna)?",
        options: ['Pancetta, panna, uova', 'Guanciale, pecorino, tuorli d\'uovo, pepe', 'Bacon, parmigiano, uova intere', 'Prosciutto, panna, parmigiano'],
        correctAnswer: 'Guanciale, pecorino, tuorli d\'uovo, pepe',
        explanation: "La ricetta originale romana della Carbonara è molto rigida e non prevede l'uso della panna.",
    },
    {
        question: "Il 'risotto alla milanese' è di colore giallo per la presenza di quale spezia?",
        options: ['La curcuma', 'Il curry', 'Lo zafferano', 'Il peperoncino'],
        correctAnswer: 'Lo zafferano',
        explanation: "Lo 'zafferano' ('saffron') conferisce al risotto il suo caratteristico colore e aroma.",
    },
    {
        question: "Le 'lasagne al forno' sono un piatto con strati di pasta, ragù e...",
        options: ['Panna', 'Ricotta', 'Besciamella', 'Crema pasticcera'],
        correctAnswer: 'Besciamella',
        explanation: "La besciamella è la salsa bianca a base di latte, burro e farina che lega gli strati delle lasagne.",
    },
    {
        question: "La 'ribollita' è una zuppa tradizionale di quale regione italiana?",
        options: ['Sicilia', 'Lombardia', 'Toscana', 'Puglia'],
        correctAnswer: 'Toscana',
        explanation: "La ribollita è una famosa zuppa toscana a base di pane raffermo, fagioli e verdure.",
    },
    {
        question: "Qual è l'ingrediente principale degli 'gnocchi di patate'?",
        options: ['Farina di mais', 'Semola', 'Riso', 'Patate lesse'],
        correctAnswer: 'Patate lesse',
        explanation: "Gli gnocchi si preparano con un impasto di patate schiacciate, farina e a volte uovo.",
    },
    {
        question: "La 'pizza Margherita' rappresenta la bandiera italiana con i suoi colori. Quali ingredienti li rappresentano?",
        options: ['Pomodoro, olive, aglio', 'Pomodoro, mozzarella, basilico', 'Peperoni, formaggio, rucola', 'Salsa rosa, funghi, prezzemolo'],
        correctAnswer: 'Pomodoro, mozzarella, basilico',
        explanation: "Il rosso del pomodoro, il bianco della mozzarella e il verde del basilico richiamano i colori della bandiera italiana.",
    },
];


const inViaggioLessico: Question[] = [
    {
        question: "Dove si comprano i biglietti del treno?",
        options: ['In farmacia', 'In edicola', 'In biglietteria', 'Al supermercato'],
        correctAnswer: 'In biglietteria',
        explanation: "La 'biglietteria' è il luogo dove si vendono i biglietti (ticket office).",
    },
    {
        question: "Come si chiama il treno ad alta velocità in Italia?",
        options: ['Regionale', 'Intercity', 'Frecciarossa', 'Metropolitana'],
        correctAnswer: 'Frecciarossa',
        explanation: "'Frecciarossa' è il nome commerciale dei treni ad alta velocità di Trenitalia.",
    },
    {
        question: "Dove aspetti il treno?",
        options: ['Sulla strada', 'Sul binario', "Sull'autobus", 'In aereo'],
        correctAnswer: 'Sul binario',
        explanation: "Si aspetta il treno sul 'binario' ('platform').",
    },
    {
        question: "Cosa devi fare con il biglietto prima di salire su un treno regionale?",
        options: ['Buttarlo', 'Convalidarlo', 'Fotografarlo', 'Regalarlo'],
        correctAnswer: 'Convalidarlo',
        explanation: "Bisogna 'convalidare' ('validate') il biglietto nelle apposite macchinette prima di salire.",
    },
    {
        question: "Dove alloggi quando sei in vacanza?",
        options: ['In ufficio', 'In fabbrica', 'In albergo', 'A scuola'],
        correctAnswer: 'In albergo',
        explanation: "L''albergo' ('hotel') è un luogo comune dove alloggiare durante un viaggio.",
    },
    {
        question: "Il documento necessario per viaggiare in aereo in un paese extra-europeo è...",
        options: ['La carta d\'identità', 'La patente', 'Il passaporto', 'Il codice fiscale'],
        correctAnswer: 'Il passaporto',
        explanation: "Il 'passaporto' è il documento di riconoscimento richiesto per i viaggi internazionali.",
    },
    {
        question: "Come si chiama il bagaglio che porti con te sull'aereo?",
        options: ['Il bagaglio da stiva', 'La valigia persa', 'Il bagaglio a mano', 'Il pacco postale'],
        correctAnswer: 'Il bagaglio a mano',
        explanation: "Il 'bagaglio a mano' ('carry-on luggage') è la valigia piccola che puoi portare in cabina.",
    },
    {
        question: "L'aereo parte dal...",
        options: ['gate', 'binario', 'molo', 'casello'],
        correctAnswer: 'gate',
        explanation: "Il 'gate' è la porta d'imbarco in aeroporto.",
    },
    {
        question: "Un viaggio di andata e ritorno si chiama...",
        options: ['solo andata', 'biglietto aperto', 'viaggio di A/R', 'itinerario'],
        correctAnswer: 'viaggio di A/R',
        explanation: "A/R è l'abbreviazione per 'Andata e Ritorno' ('round trip').",
    },
    {
        question: "Se il tuo volo non parte all'orario previsto, è...",
        options: ['cancellato', 'in orario', 'in ritardo', 'confermato'],
        correctAnswer: 'in ritardo',
        explanation: "Un volo 'in ritardo' ('delayed') parte dopo l'orario stabilito.",
    },
    {
        question: "Prima di salire in aereo, devi passare attraverso...",
        options: ['la dogana', 'i controlli di sicurezza', "l'ufficio immigrazione", 'il check-in'],
        correctAnswer: 'i controlli di sicurezza',
        explanation: "I 'controlli di sicurezza' ('security checks') sono obbligatori per tutti i passeggeri.",
    },
];

const inNegoziLessico: Question[] = [
    {
        question: "Dove vai per comprare il pane fresco ogni mattina?",
        options: ['In macelleria', 'In panetteria', 'In pescheria', 'In farmacia'],
        correctAnswer: 'In panetteria',
        explanation: "La 'panetteria' o 'panificio' è il negozio dove si produce e si vende il pane.",
    },
    {
        question: "Come si chiama la persona che lavora alla cassa di un negozio?",
        options: ['Il commesso', 'Il direttore', 'Il cassiere', 'Il magazziniere'],
        correctAnswer: 'Il cassiere',
        explanation: "Il 'cassiere' (o la 'cassiera') è la persona addetta alla cassa.",
    },
    {
        question: "Se vuoi provare un vestito prima di comprarlo, cerchi il...",
        options: ['magazzino', 'camerino', 'bancone', 'corridoio'],
        correctAnswer: 'camerino',
        explanation: "Il 'camerino' ('fitting room') è la stanza dove ci si prova i vestiti.",
    },
    {
        question: "Se pensi che un prezzo sia troppo alto, puoi chiedere...",
        options: ['un aumento', 'una garanzia', 'uno sconto', 'un regalo'],
        correctAnswer: 'uno sconto',
        explanation: "Uno 'sconto' ('discount') è una riduzione del prezzo.",
    },
    {
        question: "Cosa ti danno sempre dopo aver pagato?",
        options: ['Lo scontrino', 'Il menu', 'Il preventivo', 'La mancia'],
        correctAnswer: 'Lo scontrino',
        explanation: "Lo 'scontrino' ('receipt') è la ricevuta che attesta il pagamento.",
    },
    {
        question: "Il periodo dell'anno con i prezzi più bassi si chiama...",
        options: ['saldi', 'svendita', 'promozione', 'liquidazione'],
        correctAnswer: 'saldi',
        explanation: "I 'saldi' ('sales') sono i periodi di sconti stagionali, di solito in inverno e in estate.",
    },
    {
        question: "Dove si espongono i vestiti in un negozio?",
        options: ['In vetrina', 'In magazzino', 'Sul manichino', 'Tutte le precedenti'],
        correctAnswer: 'Tutte le precedenti',
        explanation: "La 'vetrina' ('shop window'), il 'manichino' ('mannequin') e altri espositori sono usati per mostrare la merce.",
    },
    {
        question: "Se un prodotto non ti piace, puoi fare...",
        options: ['un reclamo', 'un reso', 'una denuncia', 'un ordine'],
        correctAnswer: 'un reso',
        explanation: "'Fare un reso' ('to make a return') significa restituire un articolo al negozio.",
    },
];

const corpoUmanoLessico: Question[] = [
    {
        question: "Qual è l'organo che usiamo per pensare?",
        options: ['Il cuore', 'Lo stomaco', 'Il cervello', 'I polmoni'],
        correctAnswer: 'Il cervello',
        explanation: "Il 'cervello' ('brain') è l'organo principale del sistema nervoso, responsabile del pensiero.",
    },
    {
        question: "Con cosa ascoltiamo la musica?",
        options: ['Con gli occhi', 'Con le orecchie', 'Con il naso', 'Con la bocca'],
        correctAnswer: 'Con le orecchie',
        explanation: "Le 'orecchie' ('ears') sono gli organi dell'udito.",
    },
    {
        question: "Si usa per piegare il braccio.",
        options: ['Il ginocchio', 'La caviglia', 'Il gomito', 'Il polso'],
        correctAnswer: 'Il gomito',
        explanation: "Il 'gomito' ('elbow') è l'articolazione che collega il braccio all'avambraccio.",
    },
    {
        question: "Il medico specializzato nella cura dei bambini è...",
        options: ['il cardiologo', 'il dentista', 'il pediatra', "l'oculista"],
        correctAnswer: 'il pediatra',
        explanation: "Il 'pediatra' è il medico che si occupa della salute dei bambini.",
    },
    {
        question: "Se hai mal di testa, hai dolore alla...",
        options: ['pancia', 'gola', 'testa', 'schiena'],
        correctAnswer: 'testa',
        explanation: "'Mal di testa' ('headache') è un dolore localizzato alla testa.",
    },
    {
        question: "Le ossa che formano la cassa toracica si chiamano...",
        options: ['vertebre', 'costole', 'femori', 'dita'],
        correctAnswer: 'costole',
        explanation: "Le 'costole' ('ribs') proteggono organi vitali come il cuore e i polmoni.",
    },
    {
        question: "Qual è il muscolo più importante per la circolazione del sangue?",
        options: ['Il cervello', 'Il polmone', 'Il cuore', 'Il fegato'],
        correctAnswer: 'Il cuore',
        explanation: "Il 'cuore' ('heart') pompa il sangue in tutto il corpo.",
    },
    {
        question: "L'articolazione che collega la gamba al piede è...",
        options: ['il polso', 'la spalla', 'il ginocchio', 'la caviglia'],
        correctAnswer: 'la caviglia',
        explanation: "La 'caviglia' ('ankle') è l'articolazione della gamba.",
    },
];

const tecnologiaLessico: Question[] = [
    {
        question: "Come si chiama l'azione di copiare un file da internet sul tuo computer?",
        options: ['Caricare', 'Scaricare', 'Installare', 'Cancellare'],
        correctAnswer: 'Scaricare',
        explanation: "'Scaricare' ('to download') significa trasferire dati da un server remoto al proprio dispositivo.",
    },
    {
        question: "Il dispositivo portatile che usi per telefonare e navigare su internet è...",
        options: ['il tablet', 'il computer fisso', 'lo smartphone', 'la televisione'],
        correctAnswer: 'lo smartphone',
        explanation: "Lo 'smartphone' o 'cellulare' è il telefono intelligente che usiamo tutti i giorni.",
    },
    {
        question: "Per connetterti a internet senza fili, hai bisogno di una connessione...",
        options: ['cablata', 'Wi-Fi', 'satellitare', 'Bluetooth'],
        correctAnswer: 'Wi-Fi',
        explanation: "Il 'Wi-Fi' è la tecnologia che permette la connessione a internet in modalità wireless.",
    },
    {
        question: "Cosa usi per proteggere il tuo computer dai virus?",
        options: ['Un firewall', 'Un antivirus', 'Una password', 'Tutte le precedenti'],
        correctAnswer: 'Tutte le precedenti',
        explanation: "Firewall, antivirus e una password robusta sono tutti strumenti essenziali per la sicurezza informatica.",
    },
    {
        question: "Un'applicazione per smartphone si abbrevia comunemente in...",
        options: ['app', 'programma', 'software', 'file'],
        correctAnswer: 'app',
        explanation: "'App' è l'abbreviazione di 'applicazione'.",
    },
];

const saluteBenessereLessico: Question[] = [
    {
        question: "Se hai la febbre e la tosse, potresti avere...",
        options: ["un'allergia", "l'influenza", "il mal di schiena", "la gastrite"],
        correctAnswer: "l'influenza",
        explanation: "Febbre e tosse sono sintomi comuni dell''influenza' ('the flu').",
    },
    {
        question: "Dove compri le medicine?",
        options: ['In ospedale', 'In farmacia', "Dal medico di base", 'In erboristeria'],
        correctAnswer: 'In farmacia',
        explanation: "La 'farmacia' è il negozio specializzato nella vendita di farmaci.",
    },
    {
        question: "Un'alimentazione sana ed equilibrata si chiama...",
        options: ['dieta', 'ricetta', 'menu', 'digiuno'],
        correctAnswer: 'dieta',
        explanation: "Anche se 'dieta' può significare un regime restrittivo, il suo significato primario è quello di 'stile alimentare'.",
    },
    {
        question: "Cosa ti prescrive il medico per comprare una medicina specifica?",
        options: ['Una diagnosi', 'Una fattura', 'Una ricetta', 'Un certificato'],
        correctAnswer: 'Una ricetta',
        explanation: "La 'ricetta medica' ('prescription') è il documento necessario per acquistare alcuni farmaci.",
    },
];

const ambienteNaturaLessico: Question[] = [
    {
        question: "La pratica di separare carta, vetro e plastica si chiama...",
        options: ['riciclaggio', 'raccolta differenziata', 'inquinamento', 'smaltimento'],
        correctAnswer: 'raccolta differenziata',
        explanation: "La 'raccolta differenziata' ('waste sorting') è il primo passo per il 'riciclaggio' ('recycling').",
    },
    {
        question: "Il riscaldamento globale è causato principalmente da...",
        options: ['piogge acide', 'buco dell\'ozono', 'effetto serra', 'deforestazione'],
        correctAnswer: 'effetto serra',
        explanation: "L''effetto serra' ('greenhouse effect') è l'aumento della temperatura terrestre causato dai gas serra.",
    },
    {
        question: "L'energia prodotta dal sole si chiama...",
        options: ['energia eolica', 'energia idroelettrica', 'energia solare', 'energia nucleare'],
        correctAnswer: 'energia solare',
        explanation: "L'energia solare è una delle principali fonti di energia rinnovabile.",
    },
    {
        question: "La progressiva distruzione delle foreste si chiama...",
        options: ['desertificazione', 'deforestazione', 'inquinamento', 'urbanizzazione'],
        correctAnswer: 'deforestazione',
        explanation: "La 'deforestazione' è un grave problema ambientale globale.",
    },
];

const arteCulturaLessico: Question[] = [
    {
        question: "Un dipinto famoso di Leonardo da Vinci è...",
        options: ['La Nascita di Venere', 'La Gioconda', 'Il David', 'La Cappella Sistina'],
        correctAnswer: 'La Gioconda',
        explanation: "'La Gioconda' (o Monna Lisa) è uno dei quadri più famosi al mondo, esposto al Louvre.",
    },
    {
        question: "Dove si va per vedere un'opera lirica?",
        options: ['Al cinema', 'Allo stadio', 'A teatro', 'Al museo'],
        correctAnswer: 'A teatro',
        explanation: "Le opere liriche vengono rappresentate 'a teatro' ('at the theater').",
    },
    {
        question: "Come si chiama l'arte di scolpire il marmo?",
        options: ['Pittura', 'Architettura', 'Scultura', 'Fotografia'],
        correctAnswer: 'Scultura',
        explanation: "La 'scultura' è l'arte di creare forme tridimensionali. Michelangelo era un famoso scultore.",
    },
    {
        question: "Il regista del film 'La Dolce Vita' è...",
        options: ['Federico Fellini', 'Sergio Leone', 'Vittorio De Sica', 'Roberto Benigni'],
        correctAnswer: 'Federico Fellini',
        explanation: "Federico Fellini è uno dei più importanti registi della storia del cinema italiano.",
    },
];

const vitaQuotidianaLessico: Question[] = [
    {
        question: "L'azione di pulire i pavimenti con acqua e detersivo si chiama...",
        options: ['spolverare', 'lavare i piatti', 'lavare per terra', 'stirare'],
        correctAnswer: 'lavare per terra',
        explanation: "'Lavare per terra' ('to wash the floor') è una tipica faccenda domestica.",
    },
    {
        question: "Cosa fai la mattina appena ti alzi dal letto?",
        options: ['Faccio cena', 'Faccio colazione', 'Faccio merenda', 'Faccio un pisolino'],
        correctAnswer: 'Faccio colazione',
        explanation: "La 'colazione' ('breakfast') è il primo pasto della giornata.",
    },
    {
        question: "Il mezzo di trasporto pubblico che si muove su rotaie in città è...",
        options: ["l'autobus", 'la metropolitana', 'il tram', 'il taxi'],
        correctAnswer: 'il tram',
        explanation: "Il 'tram' si muove in superficie, a differenza della 'metropolitana' che è sotterranea.",
    },
];

const sentimentiEmozioniLessico: Question[] = [
    {
        question: "Se hai appena ricevuto una bella notizia, ti senti...",
        options: ['triste', 'arrabbiato', 'felice', 'annoiato'],
        correctAnswer: 'felice',
        explanation: "'Felice' ('happy') è l'emozione legata alla gioia.",
    },
    {
        question: "Come ti senti se hai paura di un esame?",
        options: ['Rilassato', 'Ansioso', 'Deluso', 'Contento'],
        correctAnswer: 'Ansioso',
        explanation: "L''ansia' ('anxiety') è una sensazione di preoccupazione intensa.",
    },
    {
        question: "Se qualcuno ti fa un torto, la tua reazione potrebbe essere...",
        options: ['la gioia', 'la rabbia', 'la noia', 'la sorpresa'],
        correctAnswer: 'la rabbia',
        explanation: "La 'rabbia' ('anger') è una reazione comune a un'ingiustizia.",
    },
];

const istruzioneScuolaLessico: Question[] = [
    {
        question: "Come si chiama la prova finale per ottenere un voto in una materia?",
        options: ['Una lezione', 'Un esame', 'Una ricreazione', 'Un compito'],
        correctAnswer: 'Un esame',
        explanation: "Un 'esame' ('exam') serve a valutare la preparazione dello studente.",
    },
    {
        question: "La persona che insegna all'università è...",
        options: ['il maestro', 'il professore', 'il preside', "l'alunno"],
        correctAnswer: 'il professore',
        explanation: "Il 'professore' è il docente universitario.",
    },
    {
        question: "Il luogo dove gli studenti seguono le lezioni è...",
        options: ["l'aula", 'la biblioteca', 'la mensa', 'la palestra'],
        correctAnswer: "l'aula",
        explanation: "L''aula' ('classroom') è la stanza dedicata all'insegnamento.",
    },
];

const sportTempoLiberoLessico: Question[] = [
    {
        question: "Lo sport più popolare in Italia è...",
        options: ['il basket', 'il nuoto', 'il calcio', 'il tennis'],
        correctAnswer: 'il calcio',
        explanation: "Il 'calcio' ('soccer/football') è lo sport nazionale in Italia.",
    },
    {
        question: "Come si chiama la persona che sostiene una squadra?",
        options: ['L\'arbitro', 'L\'allenatore', 'Il tifoso', 'Il giocatore'],
        correctAnswer: 'Il tifoso',
        explanation: "Il 'tifoso' ('fan'/'supporter') segue e incoraggia la sua squadra del cuore.",
    },
    {
        question: "Dove vai per sollevare pesi e fare esercizio fisico?",
        options: ['In piscina', 'In palestra', 'Al campo sportivo', 'In biblioteca'],
        correctAnswer: 'In palestra',
        explanation: "La 'palestra' ('gym') è il luogo attrezzato per l'attività fisica.",
    },
];

const politicaEconomiaLessico: Question[] = [
    {
        question: "Come si chiama l'aumento generale dei prezzi?",
        options: ['Deflazione', 'Stagnazione', 'Inflazione', 'Recessione'],
        correctAnswer: 'Inflazione',
        explanation: "L'inflazione rappresenta la diminuzione del potere d'acquisto della moneta.",
    },
    {
        question: "L'insieme di tutti i beni e servizi prodotti da un paese in un anno si chiama...",
        options: ['Debito pubblico', 'PIL (Prodotto Interno Lordo)', 'Deficit', 'Spread'],
        correctAnswer: 'PIL (Prodotto Interno Lordo)',
        explanation: "Il PIL è uno dei principali indicatori della ricchezza di un paese.",
    },
    {
        question: "In Italia, il capo del governo è...",
        options: ['Il Presidente della Repubblica', 'Il Presidente del Consiglio dei Ministri', 'Il Ministro degli Esteri', 'Il Presidente del Senato'],
        correctAnswer: 'Il Presidente del Consiglio dei Ministri',
        explanation: "Il Presidente della Repubblica è il capo dello Stato, mentre il Presidente del Consiglio guida il governo.",
    },
];

const burocraziaLessico: Question[] = [
    {
        question: "Il documento che attesta la tua nascita e residenza si chiama...",
        options: ['Contratto di lavoro', 'Certificato anagrafico', 'Patente di guida', 'Codice fiscale'],
        correctAnswer: 'Certificato anagrafico',
        explanation: "I certificati anagrafici (nascita, residenza, stato di famiglia) sono rilasciati dal Comune.",
    },
    {
        question: "Per presentare una domanda ufficiale a un ente pubblico, devi...",
        options: ['fare una proposta', 'fare istanza', 'fare un reclamo', 'fare una delega'],
        correctAnswer: 'fare istanza',
        explanation: "'Fare istanza' è il termine burocratico per presentare una richiesta formale.",
    },
    {
        question: "Come si chiama il piccolo francobollo adesivo che si applica su alcuni documenti per pagarne l'imposta?",
        options: ['Tassa di successione', 'Marca da bollo', 'Ricevuta fiscale', 'Canone'],
        correctAnswer: 'Marca da bollo',
        explanation: "La marca da bollo è un'imposta che si paga per la validità di certi atti e documenti.",
    },
];

const letteraturaLessico: Question[] = [
    {
        question: "Le prime parole di un romanzo costituiscono...",
        options: ["l'epilogo", "l'incipit", 'la trama', 'la morale'],
        correctAnswer: "l'incipit",
        explanation: "L'incipit è la parte iniziale di un'opera letteraria.",
    },
    {
        question: "La figura retorica che consiste nell'accostare due termini di senso opposto (es. 'un silenzio assordante') è...",
        options: ['una metafora', 'una sineddoche', 'un ossimoro', 'un\'iperbole'],
        correctAnswer: 'un ossimoro',
        explanation: "L'ossimoro unisce due concetti contraddittori per creare un effetto stilistico potente.",
    },
    {
        question: "L'autore de 'I Promessi Sposi' è...",
        options: ['Dante Alighieri', 'Giovanni Boccaccio', 'Ugo Foscolo', 'Alessandro Manzoni'],
        correctAnswer: 'Alessandro Manzoni',
        explanation: "'I Promessi Sposi' è considerato il romanzo più importante della letteratura italiana.",
    },
];


export const lessicoGroup = {
    'Livello B1/B2': {
        'Cibo e Ristorazione': {
            'Al Ristorante': alRistoranteLessico,
            'In Cucina': inCucinaLessico,
            'Tipi di Cibo': tipiDiCiboLessico,
            'Piatti Tipici': piattiTipiciLessico,
        },
        'Lavoro e Viaggi': {
            'In Ufficio': inUfficioLessico,
            'In Viaggio': inViaggioLessico,
        },
        'Vita Pratica': {
            'Shopping': inNegoziLessico,
            'Corpo Umano': corpoUmanoLessico,
            'Salute e Benessere': saluteBenessereLessico,
            'Vita Quotidiana': vitaQuotidianaLessico,
        },
        'Società e Cultura': {
            'Tecnologia': tecnologiaLessico,
            'Ambiente e Natura': ambienteNaturaLessico,
            'Arte e Cultura': arteCulturaLessico,
            'Istruzione e Scuola': istruzioneScuolaLessico,
            'Sport e Tempo Libero': sportTempoLiberoLessico,
            'Sentimenti ed Emozioni': sentimentiEmozioniLessico,
        }
    },
    'Livello C1': {
        'Linguaggi Settoriali': {
            'Politica ed Economia': politicaEconomiaLessico,
            'Burocrazia': burocraziaLessico,
            'Letteratura': letteraturaLessico,
        }
    }
};