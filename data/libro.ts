import type { Question } from '../types';

const cadavereInCucinaQuestions: Question[] = [
    {
        question: "Qual è il luogo dove il PM Manrico Spinori stava trascorrendo le vacanze quando viene richiamato d'urgenza a Roma?",
        options: ['Umago, Croazia', 'Fregene', 'Sabaudia (litorale pontino)', 'Monti Simbruini'],
        correctAnswer: 'Sabaudia (litorale pontino)',
        explanation: "Manrico Spinori stava assaporando l'\"oblio del luglio pontino\" sprofondato sulla sua sdraio preferita a Sabaudia quando il procuratore Gaspare Melchiorre lo chiamò per farlo rientrare a Roma."
    },
    {
        question: "Chi è la vittima che, dopo aver manifestato sintomi di intossicazione al Controcorrente, muore circa quarantott’ore dopo?",
        options: ['Chef Cesare Marini', 'Il Colonnello Vladimiro Micheli', 'Guido Zulian', 'Il critico gastronomico'],
        correctAnswer: 'Il Colonnello Vladimiro Micheli',
        explanation: "La notizia è che un cliente, un colonnello dell’esercito, muore dopo quarantott’ore dall'intossicazione. La vittima viene poi identificata come Vladimiro Micheli."
    },
    {
        question: "Quale sostanza allucinogena, inizialmente ritenuta la causa dell'intossicazione di massa, è presente nel fungo Psilocybe semilanceata?",
        options: ['Alfa-amanitina', 'Psilocibina', 'Morfina', 'Belladonna'],
        correctAnswer: 'Psilocibina',
        explanation: "Dagli accertamenti iniziali risulta che i piatti incriminati contenevano psilocibina, una sostanza presente in alcuni funghi allucinogeni. Manrico Spinori apprende che si tratta specificamente della Psilocybe semilanceata."
    },
    {
        question: "Qual è il nome del piatto servito al Controcorrente che ha causato l'intossicazione, a base di porcini neri e pesce azzurro?",
        options: ['Il Ritratto di Dorian Gray', 'Il Maestro e Margherita', 'Alice nel Paese delle Meraviglie', 'Green Deal'],
        correctAnswer: 'Alice nel Paese delle Meraviglie',
        explanation: "Il piatto incriminato era una \"fantasia di porcini neri con ‘croce’ di pesce azzurro\" chiamato \"Alice nel Paese delle Meraviglie\"."
    },
    {
        question: "Quale oggetto scopre l'ispettrice Deborah Cianchetti al ristorante che trasforma l'indagine da un caso di negligenza in un potenziale scenario di spionaggio?",
        options: ['Un coltello da chef insanguinato', 'Una microspia (cimice) sotto un tavolo', 'Un diario segreto dello chef', 'La ricevuta di un pagamento sospetto'],
        correctAnswer: 'Una microspia (cimice) sotto un tavolo',
        explanation: "Cianchetti, usando un rilevatore professionale, trova una microspia sotto il tavolo dove Micheli aveva cenato. La scoperta fa sì che la figura di Micheli assuma \"tutt’altra luce\", introducendo il tema dello spionaggio."
    },
    {
        question: "Chi è la persona che Manrico Spinori incarica di badare alla madre Elena a Sabaudia dopo la partenza del maggiordomo Camillo?",
        options: ["L'ispettore Diego Cosenza", 'La Svedese', 'Fatma Harouf', 'Rachele, la figlia del collega'],
        correctAnswer: 'Fatma Harouf',
        explanation: "Manrico prende l'iniziativa di chiamare Fatma Harouf, l'interprete, che aveva maltrattato la Zevatti, e le propone di occuparsi della madre Elena."
    },
    {
        question: "Quale fungo contiene il veleno (alfa-amanitina) che ha effettivamente causato la morte del Colonnello Micheli?",
        options: ['Psilocybe semilanceata', 'Porcino nero', 'Amanita Falloide', 'Tartufaia'],
        correctAnswer: 'Amanita Falloide',
        explanation: "Nonostante l'intossicazione iniziale, la dottoressa Dubois conferma che Micheli è morto per l'ingestione di Amanita Falloide, un fungo che contiene l'alfa-amanitina, un veleno ritenuto mortale."
    },
    {
        question: "Quale sintomo peculiare del delirio allucinogeno del Colonnello Micheli viene ripreso dal video virale di 'NDOSPIOSPIO?",
        options: ['Si toglieva la gonna e distribuiva baci', 'Gridava che vedeva la luce', 'Urlava "I ragni! I ragni!"', 'Cercava di innaffiare il suo commensale'],
        correctAnswer: 'Urlava "I ragni! I ragni!"',
        explanation: "Nel video del ’NDOSPIOSPIO, il Colonnello (l'uomo vestito di bianco) urlava: \"I ragni! I ragni! Sei pieno di ragni\", sintomo coerente con le allucinazioni indotte dalla psilocibina."
    },
    {
        question: "Alla fine del Capitolo 8, qual è lo status dello Chef Cesare Marini, dimesso dall'ospedale?",
        options: ['È ricoverato in terapia intensiva', 'È stato fermato dalla polizia', 'È irreperibile/scomparso', 'È tornato a lavorare in cucina'],
        correctAnswer: 'È irreperibile/scomparso',
        explanation: "Dopo le dimissioni dall'ospedale, Donati riferisce che Marini è \"sparito\". Articoli online lo definiscono \"Irreperibile\", e Cianchetti dispone le ricerche (perquisizione e ordine di ricerca) perché si è \"eclissato\"."
    },
    {
        question: "Qual è il motivo principale per cui Manrico Spinori cambia l'ipotesi di reato da omicidio colposo a omicidio volontario (contro ignoti)?",
        options: ["Per evitare che il procuratore Melchiorre torni in Croazia.", "Per ottenere un mandato di cattura contro lo chef Marini.", "Per avere l'autorizzazione del Gip per le intercettazioni.", "Per accusare il sous chef Donati, unico custode dei funghi."],
        correctAnswer: "Per avere l'autorizzazione del Gip per le intercettazioni.",
        explanation: "Manrico decide di procedere per omicidio volontario (contro ignoti) per poter preparare le richieste per le intercettazioni telefoniche e ambientali, strumenti che non sarebbero stati concessi per un reato di omicidio colposo."
    },
    {
        question: "Chi è il PM (Pubblico Ministero) che aveva gestito inizialmente il caso dell'intossicazione, prima di essere sostituito da Manrico Spinori?",
        options: ['Gaspare Melchiorre', 'Malavento', 'Gatteschi', 'Viti'],
        correctAnswer: 'Malavento',
        explanation: "Il procuratore Melchiorre rivela a Manrico di aver chiamato Malavento, che era di turno, il quale aveva poi autorizzato la riapertura del locale dopo i primi accertamenti, prima che si scoprisse la morte del colonnello."
    },
    {
        question: "Chi è il maggiordomo storico di Manrico Spinori e di sua madre Donna Elena a Sabaudia?",
        options: ['Alex', 'Filippo', 'Camillo', 'Guido'],
        correctAnswer: 'Camillo',
        explanation: "Camillo è il maggiordomo che Manrico deve congedare per la sua assenza, dato che deve presenziare al matrimonio della nipote. Camillo è con la famiglia da cinquant'anni."
    },
    {
        question: "Qual è il nome dell'ispettore superiore e compagno di Deborah Cianchetti che le presta il rilevatore di microspie?",
        options: ['Guido Zulian', 'Achille Bonetti', 'Diego Cosenza', 'Lino Lanzillotta'],
        correctAnswer: 'Diego Cosenza',
        explanation: "Cianchetti trova la microspia grazie a un \"rilevatore professionale di microspie di ultima generazione\" che le è stato prestato dal suo compagno, l'ispettore superiore Diego Cosenza, impegnato in un'inchiesta sotto copertura in Puglia."
    },
    {
        question: "Quale capo d'abbigliamento si sfila e lancia all'uomo vestito di bianco (Micheli) la signora non più giovane, secondo il video del ’NDOSPIOSPIO?",
        options: ['Un foulard di seta', 'Le mutandine', 'Una giacca da smoking', 'Il Fedora rosa'],
        correctAnswer: 'Le mutandine',
        explanation: "Il video mostra una signora non più giovanissima che \"con moto repentino, si sollevava la gonna e si sfilava le mutandine, che lanciava all’uomo in bianco\"."
    },
    {
        question: "Quale professione o ruolo ricopre Stella Dubois, la persona che sostituisce il professor Gatteschi a Medicina Legale?",
        options: ['Ispettore capo della Mobile', 'Sostituto procuratore', 'Critico gastronomico', 'Dottoressa/Vice di Medicina legale'],
        correctAnswer: 'Dottoressa/Vice di Medicina legale',
        explanation: "Il professor Gatteschi, il titolare di Medicina Legale, è in ferie e viene sostituito dalla Dubois, che Manrico ha una relazione complessa. Lei è la persona che ha fatto l'autopsia e identificato l'Amanita Falloide."
    },
    {
        question: "Quale era il ruolo specifico di Giovanni Donati all'interno della brigata di cucina del Controcorrente?",
        options: ['Capocameriere', 'Sous chef', 'Tournant', 'Sommelier'],
        correctAnswer: 'Sous chef',
        explanation: "Giovanni Donati è il sous chef del locale e socio di minoranza. Ha accesso alle dispense a combinazione dove sono custodite le \"materie prime\" più sensibili, come i funghi."
    },
    {
        question: "Secondo i calcoli dell'ispettrice Cianchetti, quanti euro spendeva mensilmente il Colonnello Micheli in cene al Controcorrente, un importo ritenuto sospetto?",
        options: ['Circa 450 euro', '5.000 euro (tutto lo stipendio)', '1.500-2.000 euro', '500 euro (una sola cena)'],
        correctAnswer: '1.500-2.000 euro',
        explanation: "Cianchetti, analizzando lo stipendio di Micheli (circa 4.000 euro), nota che il Colonnello lasciava \"millecinque, duemila al mese qua\" al ristorante, una spesa che \"nun me torna\"."
    }
];

export const libroGroup = {
    'Un Cadavere in Cucina (Cap 1-8)': cadavereInCucinaQuestions,
};
