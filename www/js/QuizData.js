function setupQuiz() {

    let answers = [
        ["", "", "", ""]
    ];
    let questions = [];
    let solutions = [];
    let answerGroup = [];

    function getArrayLocalStorage(key) {
        const gespeichertesArray = localStorage.getItem(key);
        if (gespeichertesArray) {
            return JSON.parse(gespeichertesArray);
        } else {
            return null; // Wenn das Array nicht gefunden wurde
        }
    }

    const addQuestion = question => questions.push(question);
    

    function addTask(question, answer, solution) {
        if (Array.isArray(question)) {
            questions.push(...question);
        } else {
            questions.push(question);
        }

        if (Array.isArray(answer)) {
            answers.push(...answer);
        } else {
            answers.push(answer);
        }

        if (Array.isArray(solution)) {
            solutions.push(...solution);
        } else {
            solutions.push(solution);
        }
    }

    function raddTask(solution, answer, question) {
        if (Array.isArray(question)) {
            questions.push(...question);
        } else {
            questions.push(question);
        }

        if (Array.isArray(answer)) {
            answers.push(...answer);
        } else {
            answers.push(answer);
        }

        if (Array.isArray(solution)) {
            solutions.push(...solution);
        } else {
            solutions.push(solution);
        }
    }

    
    //Sortiert antworten, lösungen, fragen zufällig damit beim kürzen jedes mal andere Fragen auftreten beim Quiz. 
    function shuffleArrays(array1, array2, array3) {
        let currentIndex = array1.length,
            randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Elemente in allen Arrays gleichzeitig tauschen
            [array1[currentIndex], array1[randomIndex]] = [array1[randomIndex], array1[currentIndex]];
            [array2[currentIndex], array2[randomIndex]] = [array2[randomIndex], array2[currentIndex]];
            [array3[currentIndex], array3[randomIndex]] = [array3[randomIndex], array3[currentIndex]];
        }

        return [array1, array2, array3];
    }




    //Funktion wandelt alle arrays in Strings um, bei denen der jeweilige Index durch ein Ausrufezeichen getrennt wird um speichern im localStorage zu ermöglichen. 
    function transferChangeAnswer(answerGroup) {

        let answerDataString = "";
        for (let i = 0; i < answerGroup.length; i++) {
            answerDataString += answerGroup[i];
            answerDataString += "!";
        }
        return answerDataString;
    }
    //wandelt array mit Lösungen in String um
    function transferChangeSolution(solutions) {

        let solutionDataString = "";
        for (let i = 0; i < solutions.length; i++) {
            solutionDataString += solutions[i];
            solutionDataString += "!";
        }
        return solutionDataString;
    }
    //wandelt array mit fragen zu string um 
    function transferChangeQuestion(questions) {

        let questionDataString = "";
        for (let i = 0; i < questions.length; i++) {
            questionDataString += questions[i];
            questionDataString += "!";
        }

        return questionDataString;
    }

    let quizLength = document.getElementById("länge").value;
    let showAnswer = document.getElementById("correct").value;
    
          
    //Um Arrays auf länge des Quiz's anzupassen
    function shortenArray(array, questionLength) {
        while (array.length > questionLength) {
            array.pop();
        }
        return array;
    }
    //ruft schwierigkeit aus html dokument ab
    let difficulty = document.getElementById("schwierigkeit").value;
    let order = document.getElementById("reihenfolge").value;
    //prüft welche schwierigkeit gewählt ist und fügt dementsprechend die Fragen hinzu
    if (order === "Englisch/Deutsch" || order === "Gemischt") {
        if (difficulty === "Test Unit 3" || difficulty === "Alles") {

            addTask([
        "work experience",
        "(to) identify",
        "central processing unit(CPU)",
        "graphics card",
        "hard disk",
        "keyboard",
        "motherboard",
        "mouse",
        "mouses",
        "random access memory(RAM)",
        "(to) suppose",
        "(to) house",
        "(to) display",
        "screen",
        "mid-range",
        "(to) upgrade",
        "later on",
        "(to) turn sth into sth",
        "smooth",
        "not necessarily",
        "fast refresh rate",
        "unclear",
        "(to) process",
        "instruction",
        "brain",
        "input device",
        "(to) interact with sth",
        "version",
        "button",
        "(to) make a difference",
        "peripheral",
        "connectivity",
        "freelance",
        "graphic design",
        "(to) set up sth",
        "mostly",
        "hands-free",
        "(to) pair sth with sth",
        "convenient",
        "speaker",
        "via",
        "jack",
        "audio quality",
        "(to) plug",
        "(to) charge",
        "(to) come with sth",
        "in case",
        "port",
        "at least",
        "(to) stick",
        "(to) unplug",
        "(to) hook sth to sth",
        "backup"],"",[
            
            
            
            
        "Praktikum",
        "identifizieren",
        "Hauptprozessor",
        "Grafikkarte",
        "Festplatte",
        "Tastatur",
        "Motherboard",
        "Maus",
        "Mäuse",
        "Arbeitsspeicher",
        "vermuten",
        "unterbringen",
        "anzeigen",
        "Bildschirm",
        "Mittelklasse",
        "upgraden",
        "später",
        "etw in etw umwandeln",
        "reibungslos",
        "nicht unbedingt",
        "hohe Bildwiederholfrequenz",
        "unklar",
        "verarbeiten",
        "Befehl",
        "Gehirn",
        "Eingabegerät",
        "auf etw einwirken",
        "Ausführung",
        "Taste",
        "sich unterscheiden",
        "Peripheriegerät",
        "Anschlüsse",
        "selbstständig",
        "Grafikdesign",
        "etw einrichten",
        "meistens",
        "freihändig",
        "etw mit etw verbinden",
        "praktisch",
        "Lautsprecher",
        "mittels",
        "Buchse",
        "Tonqualität",
        "anschließen",
        "aufladen",
        "etw haben",
        "falls",
        "Anschluss",
        "mindestens",
        "stecken",
        "ausstecken",
        "etw mit etw verbinden",
        "Reserve"
    
    
    
    ]);
            

        }
    }
    if (order === "Deutsch/Englisch" || order === "Gemischt") {
        if (difficulty === "Test Unit 3" || difficulty === "Alles") {

            addTask([
                "Praktikum",
                "identifizieren, bestimmen",
                "Hauptprozessor",
                "Grafikkarte",
                "Festplatte",
                "Tastatur",
                "Motherboard",
                "Maus",
                "Mäuse",
                "Arbeitsspeicher",
                "vermuten, annehmen, glauben",
                "unterbringen,beherbergen,aufnehmen",
                "anzeigen(auf dem Bildschirm)",
                "Bildschirm",
                "Mittelklasse- im mittleren Preissegment",
                "upgraden, aufwerten",
                "später, zu einem späteren Zeitpunkt",
                "etw in etw umwandeln",
                "reibungslos",
                "nicht unbedingt",
                "hohe Bildwiederholfrequenz",
                "unklar, undeutlich",
                "verarbeiten",
                "Befehl, Kommando",
                "Hirn, Gehirn",
                "Eingabegerät",
                "auf etw einwirken, Informationen mit etw austauschen",
                "Ausführung, Modell",
                "Taste, Knopf, Schalter",
                "sich unterscheiden",
                "Peripheriegerät",
                "Anschlüsse",
                "selbstständig, freiberuflich",
                "Grafikdesign",
                "etw einrichten",
                "meistens, hauptsächlich",
                "freihändig, Freisprech-",
                "etw mit etw verbinden/koppeln",
                "praktisch, bequem",
                "Lautsprecher",
                "mittels,mit,über,durch",
                "Buchse",
                "Tonqualität",
                "anschließen,einstecken,verbinden",
                "aufladen,laden",
                "etw haben",
                "falls, für den Fall",
                "Anschluss",
                "mindestens",
                "stecken",
                "ausstecken, Kabel herausziehen",
                "etw mit etw verbinden",
                "Reserve/Ausweich-"
            


            ],"",[


                 "work experience",
        "identify",
        "central processing unit(CPU)",
        "graphics card",
        "hard disk",
        "keyboard",
        "motherboard",
        "mouse",
        "mouses",
        "random access memory(RAM)",
        "suppose",
        "house",
        "display",
        "screen",
        "mid-range",
        "upgrade",
        "later on",
        "turn sth into sth",
        "smooth",
        "not necessarily",
        "fast refresh rate",
        "unclear",
        "process",
        "instruction",
        "brain",
        "input device",
        "interact with sth",
        "version",
        "button",
        "make a difference",
        "peripheral",
        "connectivity",
        "freelance",
        "graphic design",
        "set up sth",
        "mostly",
        "hands-free",
        "pair sth with sth",
        "convenient",
        "speaker",
        "via",
        "jack",
        "audio quality",
        "plug",
        "charge",
        "come with sth",
        "in case",
        "port",
        "at least",
        "stick",
        "unplug",
        "hook sth to sth",
        "backup"]);
          
          


        }
    }


    if (difficulty === "Falsch letzter Durchgang" || difficulty === "Gemischt") {
        answerGroup = getArrayLocalStorage("wrongAnswer");
        solutions = getArrayLocalStorage("wrongSolution");
        questions = getArrayLocalStorage("wrongQuestion");
    }

    if (order === "Englisch/Deutsch" || order === "Gemischt") {
    if (difficulty === "Unit1" || difficulty === "Gemischt") {
addTask("foundation", "", "grundlage");
            addTask("company", "", "unternehmen");
            addTask("profile", "", "profil");
            addTask("apprentice", "", "auszubildender");
            addTask("it administrator", "", "it-kaufmann");
            addTask("trainee", "", "auszubildender");
            addTask("from abroad", "", "aus dem ausland");
            addTask("network", "", "netzwerk");
            addTask("component", "", "bauteil");
            addTask("producer", "", "produzent");
            addTask("device", "", "gerät");
            addTask("connection", "", "verbindung");
            addTask("head office", "", "zentrale");
            addTask("to found", "", "gründen");
            addTask("family business", "", "familienunternehmen");
            addTask("to run", "", "unternehmen führen");
            addTask("structure", "", "struktur");
            addTask("chairman", "", "vorsitzender");
            addTask("board", "", "aufsichtsrat");
            addTask("general partner", "", "teilhaber");
            addTask("finance", "", "finanzen");
            addTask("purchasing", "", "einkauf");
            addTask("sales", "", "verkauf");
            addTask("to employ sb", "", "jdn beschäftigen");
            addTask("including", "", "einschließlich");
            addTask("to develop", "", "entwickeln");
            addTask("to manufacture", "", "herstellen");
            addTask("cable", "", "kabel");
            addTask("connector", "", "verbinder");
            addTask("mechanical engineering", "", "maschinenbau");
            addTask("factory", "", "fabrik");
            addTask("automation", "", "automatisierung");
            addTask("data processing", "", "datenverarbeitung");
            addTask("industrial electronics", "", "industrieelektronik");
            addTask("telecommunication", "", "telekommunikation");
            addTask("vocational training", "", "berufsausbildung");
            addTask("apprenticeship", "", "ausbildung");
            addTask("role", "", "rolle");
            addTask("headline", "", "überschrift");
            addTask("according to", "", "gemäß");
            addTask("multinational company", "", "internationaler konzern");
            addTask("well-known", "", "bekannt");
            addTask("production", "", "produktion");
            addTask("sector", "", "sektor");
            addTask("grid", "", "raster");
            addTask("size", "", "größe");
            addTask("medium-sized", "", "mittelgroß");
            addTask("solution", "", "lösung");
            addTask("construction", "", "bau");
            addTask("building", "", "bauwesen");
            addTask("service", "", "dienst");
            addTask("equipment", "", "ausstattung");
            addTask("dealer", "", "händler");
            addTask("training", "", "ausbildung");
            addTask("automotive", "", "automobil");
            addTask("medical", "", "medizinisch");
            addTask("to cover", "", "thema behandeln");
            addTask("employee", "", "angestellter");
            addTask("target group", "", "zielgruppe");
            addTask("competitor", "", "konkurrent");
            addTask("on one's own", "", "alleine");
            addTask("to structure", "", "strukturieren");
            addTask("prepared", "", "vorbereitet");
            addTask("audience", "", "publikum");
            addTask("layout", "", "plan");
addTask(["subsidiary", "induction", "training company", "premises", "introductory course", "to explain", "legal department", "Human Resources (HR)", "R&D (Research & Development)", "development", "support", "quality assurance", "customer service", "reception", "elevator", "ground floor", "to promote sth", "to increase sth", "to make sure", "to meet standards", "to recruit", "to interview sb", "benefits", "internal", "external", "legal issues", "to maintain", "company-owned", "to create", "to document", "to debug", "innovative", "existing", "method", "to reply to sth", "complaint", "guided tour", "tour", "to be located", "to lead", "corridor", "security pass", "security doors", "stairs", "open-plan office", "to keep quiet", "to disturb", "to take up sth", "to extend", "to continue", "straight ahead", "walkway", "lastly", "directions", "to give directions", "to swap", "to show sb around", "floor plan", "CEO", "responsibility", "overall", "goal", "strategy", "to report to sb", "to deal with sth", "system architecture", "platform", "system analysis", "to maximize", "benefit", "client", "to make the most of sth", "to supervise", "to liaise with sb", "on time", "software engineering", "testing", "to release", "to be in charge of sth", "to perform", "daily", "to join sth", "billing", "to analyze", "requirements", "senior", "to integrate with one another", "input", "lead", "developer", "Regards", "to highlight", "to include", "organization chart", "job title", "member", "introductions", "…-based", "engineering", "supervisor", "colleague", "computerized", "personnel", "personnel file", "place of birth", "job description", "formal", "suitable", "to avoid", "illness", "politics", "journey", "pay", "response", "to be based in", "fantastic", "view", "in fact", "Excuse me", "to hold up sb", "to keep sb waiting", "refreshment"], "", ["Niederlassung", "Einarbeitung", "Ausbildungsbetrieb", "Räumlichkeiten", "Einführungsseminar", "erklären", "Rechtsabteilung", "Personalabteilung", "FForschung und Entwicklung", "Entwicklung", "Unterstützung", "Qualitätssicherung", "Kundendienst", "Rezeption", "Aufzug", "Erdgeschoss", "für etw Werbung machen", "etw steigern", "sicherstellen", "Normen erfüllen", "Personal einstellen", "mit jdm ein Vorstellungsgespräch führen", "Zusatzleistungen", "intern", "extern", "Rechtsangelegenheiten", "warten", "firmeneigen", "Software erstellen", "dokumentieren", "Fehler beseitigen", "innovativ", "existierend", "Methode", "etw beantworten", "Beschwerde", "Führung", "Rundgang", "sich befinden", "führen", "Flur", "Zugangskarte", "Sicherheitstüren", "Treppe", "Großraumbüro", "sich ruhig verhalten", "stören", "etw in Anspruch nehmen", "sich ausdehnen", "fortfahren", "geradeaus", "Weg", "schließlich", "Wegbeschreibung", "den Weg beschreiben", "tauschen", "jdn herumführen", "Grundriss", "Vorstandsvorsitzender", "Zuständigkeit", "Gesamt-", "Ziel", "Strategie", "jdm unterstehen", "sich um etw kümmern", "Systemarchitektur", "Plattform", "Systemanalyse", "maximieren", "Nutzen", "Kunde", "etw bestmöglich nutzen", "führen", "mit jdm zusammenarbeiten", "pünktlich", "Softwareentwicklung", "Prüfung", "veröffentlichen", "für etw zuständig sein", "Tätigkeit ausführen", "täglich", "bei etw mitmachen", "Abrechnung", "analysieren", "Anforderungen", "leitend", "ineinandergreifen", "Ideen", "Chef-", "Entwickler", "Brief: Mit freundlichen Grüßen", "hervorheben", "einbeziehen", "Organigramm", "Stellenbezeichnung", "Mitglied", "Vorstellen", "mit Sitz in", "Ingenieurwissenschaft", "Vorgesetzter", "Kollege", "Computer", "Personal", "Personalakte", "Geburtsort", "Stellenbeschreibung", "formell", "geeignet", "vermeiden", "Krankheit", "Politik", "Fahrt", "Bezahlung", "Reaktion", "seinen Sitz in haben", "phantastisch", "Aussicht", "eigentlich", "Entschuldigung.", "jdn aufhalten", "jdn warten lassen", "Erfrischung"]);
}}

 if (order === "Deutsch/Englisch" || order === "Gemischt") {
    if (difficulty === "Unit1" || difficulty === "Gemischt") {
raddTask(["subsidiary", "induction", "training company", "premises", "introductory course", "to explain", "legal department", "Human Resources", "Research & Development", "development", "support", "quality assurance", "customer service", "reception", "elevator", "ground floor", "to promote sth", "to increase sth", "to make sure", "to meet standards", "to recruit", "to interview sb", "benefits", "internal", "external", "legal issues", "to maintain", "company-owned", "to create", "to document", "to debug", "innovative", "existing", "method", "to reply to sth", "complaint", "guided tour", "tour", "to be located", "to lead", "corridor", "security pass", "security doors", "stairs", "open-plan office", "to keep quiet", "to disturb", "to take up sth", "to extend", "to continue", "straight ahead", "walkway", "lastly", "directions", "to give directions", "to swap", "to show sb around", "floor plan", "CEO", "responsibility", "overall", "goal", "strategy", "to report to sb", "to deal with sth", "system architecture", "platform", "system analysis", "to maximize", "benefit", "client", "to make the most of sth", "to supervise", "to liaise with sb", "on time", "software engineering", "testing", "to release", "to be in charge of sth", "to perform", "daily", "to join sth", "billing", "to analyze", "requirements", "senior", "to integrate with one another", "input", "lead", "developer", "Regards", "to highlight", "to include", "organization chart", "job title", "member", "introductions", "-based", "engineering", "supervisor", "colleague", "computerized", "personnel", "personnel file", "place of birth", "job description", "formal", "suitable", "to avoid", "illness", "politics", "journey", "pay", "response", "to be based in", "fantastic", "view", "in fact", "Excuse me", "to hold up sb", "to keep sb waiting", "refreshment"], "", ["Niederlassung", "Einführung, Einarbeitung", "Ausbildungsbetrieb", "(Betriebs-)Gelände, Räumlichkeiten", "Einführungsseminar", "erklären, erläutern", "Rechtsabteilung", "Personalabteilung", "Forschung und Entwicklung", "Entwicklung", "Hilfe, Unterstützung, Betreuung, Kundendienst, Support", "Qualitätssicherung", "Kundendienst", "Empfang, Rezeption", "Aufzug, Lift", "Erdgeschoss", "für etw Werbung machen", "etw steigern, etw erhöhen", "sicherstellen, gewährleisten", "Normen erfüllen", "(Personal) einstellen", "mit jdm ein Vorstellungsgespräch führen", "Zusatzleistungen, Sozialleistungen", "intern", "extern", "juristische Fragen, Rechtsangelegenheiten", "warten, instand halten", "firmeneigen", "(Software) erstellen, (Produkt) gestalten", "dokumentieren", "Fehler beseitigen, debuggen", "innovativ", "bestehend, existierend", "Art, Weise, Methode", "etw beantworten, auf etw antworten", "Beschwerde, Reklamation", "Führung", "Rundgang", "sich befinden", "führen", "Flur, Gang", "Firmenausweis, Zugangskarte", "Sicherheitsschleuse, Sicherheitstüren", "Treppe", "Großraumbüro", "sich ruhig verhalten", "stören", "etw ausmachen, etw in Anspruch nehmen", "sich erstrecken, sich ausdehnen", "weitermachen, fortfahren", "geradeaus", "Gang, Weg", "schließlich, zum Schluss", "Wegbeschreibung", "den Weg beschreiben", "tauschen", "jdn herumführen", "Grundriss, Lageplan", "Vorstandsvorsitzende/r, (Chief Executive Officer) Geschäftsführer/in", "Aufgabe, Zuständigkeit, Verantwortlichkeit", "Gesamt-, allgemein", "Ziel", "Strategie", "jdm unterstehen", "sich um etw kümmern", "Systemarchitektur", "Plattform", "Systemanalyse", "maximieren", "Nutzen, Vorteil(e)", "Kunde/Kundin", "etw (bestmöglich) nutzen", "führen, leiten, vorgesetzt sein", "mit jdm zusammenarbeiten", "rechtzeitig, pünktlich", "Softwareentwicklung", "Prüfung, Erprobung", "veröffentlichen, herausgeben", "für etw zuständig/ verantwortlich sein", "(Tätigkeit) ausführen", "täglich, Alltags-", "bei etw mitmachen, zu etw stoßen", "Abrechnung, Rechnungsstellung", "analysieren", "Anforderungen, Bedürfnisse, Wünsche", "leitend", "ineinandergreifen", "Idee(n), Anregung(en)", "Chef-, Haupt", "Entwickler/in", "(Brief:) Mit freundlichen Grüßen", "hervorheben", "einbeziehen, aufnehmen", "Organigramm", "Stellenbezeichnung", "Mitglied", "Bekanntmachen, Vorstellen", "mit Sitz in …", "Technik, Ingenieurwissenschaft, Maschinenbau", "Ausbildungsleiter/in, Abteilungsleiter/in, Vorgesetzte/r", "Kollege/Kollegin", "Computer", "Personal", "Personalakte", "Geburtsort", "Stellenbeschreibung", "formell, förmlich", "geeignet, passend", "vermeiden", "Krankheit", "Politik", "Fahrt, Anreise", "Bezahlung, Gehalt", "Antwort, Reaktion", "seinen Sitz in … haben", "phantastisch, toll", "Aussicht, Blick", "tatsächlich, eigentlich", "Verzeihung./ Entschuldigung.", "jdn aufhalten", "jdn warten lassen", "Erfrischung"]);
  raddTask("foundation", "", "grundlage");
            raddTask("company", "", "unternehmen");
            raddTask("profile", "", "profil");
            raddTask("apprentice", "", "auszubildender");
            raddTask("it administrator", "", "it-kaufmann");
            raddTask("trainee", "", "auszubildender");
            raddTask("from abroad", "", "aus dem ausland");
            raddTask("network", "", "netzwerk");
            raddTask("component", "", "bauteil");
            raddTask("producer", "", "produzent");
            raddTask("device", "", "gerät");
            raddTask("connection", "", "verbindung");
            raddTask("head office", "", "zentrale");
            raddTask("to found", "", "gründen");
            raddTask("family business", "", "familienunternehmen");
            raddTask("to run", "", "(unternehmen) führen");
            raddTask("structure", "", "struktur");
            raddTask("chairman", "", "vorsitzender");
            raddTask("board", "", "aufsichtsrat");
            raddTask("general partner", "", "teilhaber");
            raddTask("finance", "", "finanzen");
            raddTask("purchasing", "", "einkauf");
            raddTask("sales", "", "verkauf");
            raddTask("to employ sb", "", "jdn beschäftigen");
            raddTask("including", "", "einschließlich");
            raddTask("to develop", "", "entwickeln");
            raddTask("to manufacture", "", "herstellen");
            raddTask("cable", "", "kabel");
            raddTask("connector", "", "verbinder");
            raddTask("mechanical engineering", "", "maschinenbau");
            raddTask("factory", "", "fabrik");
            raddTask("automation", "", "automatisierung");
            raddTask("data processing", "", "datenverarbeitung");
            raddTask("industrial electronics", "", "industrieelektronik");
            raddTask("telecommunication", "", "telekommunikation");
            raddTask("vocational training", "", "berufsausbildung");
            raddTask("apprenticeship", "", "ausbildung");
            raddTask("role", "", "rolle");
            raddTask("headline", "", "überschrift");
            raddTask("according to", "", "gemäß");
            raddTask("multinational company", "", "internationaler konzern");
            raddTask("well-known", "", "bekannt");
            raddTask("production", "", "produktion");
            raddTask("sector", "", "sektor");
            raddTask("grid", "", "raster");
            raddTask("size", "", "größe");
            raddTask("medium-sized", "", "mittelgroß");
            raddTask("solution", "", "lösung");
            raddTask("construction", "", "bau");
            raddTask("building", "", "bauwesen");
            raddTask("service", "", "dienst");
            raddTask("equipment", "", "ausstattung");
            raddTask("dealer", "", "händler");
            raddTask("training", "", "ausbildung");
            raddTask("automotive", "", "automobil");
            raddTask("medical", "", "medizinisch");
            raddTask("to cover", "", "(thema) behandeln");
            raddTask("employee", "", "angestellter");
            raddTask("target group", "", "zielgruppe");
            raddTask("competitor", "", "konkurrent");
            raddTask("on one's own", "", "alleine");
            raddTask("to structure", "", "strukturieren");
            raddTask("prepared", "", "vorbereitet");
            raddTask("audience", "", "publikum");
            raddTask("layout", "", "plan");
}}



    if (order === "Englisch/Deutsch" || order === "Gemischt") {
    if (difficulty === "Unit2" || difficulty === "Gemischt") {
    addTask(
["workplace", "to carry out sth", "measure", "survey", "means of communication", "improvement", "to rank", "to get a message across", "and so on", "face-to-face", "to sort sth out", "in writing", "text (message)", "to get at sth", "to attach", "to copy in sb", "structured", "to access sth", "all over the place", "access (to sth)", "storage", "to synchronize", "to select", "to mention (sth to sb)", "to bring up sth", "to take up time", "slide", "waste of time", "hand-out", "to consider sth", "graphic image", "to brainstorm", "quantity", "instruction", "to record", "attachment", "recruitment", "headquarters", "aspect", "condition", "to be big believers in sth", "balance", "to suit sb/sth", "flexible", "annual leave", "sick leave", "unpaid leave", "to work remotely", "to co-ordinate", "in addition", "permission", "clothing", "neat", "casual", "functionality", "applicant", "to look sth up", "graduate", "to work closely with sb", "test data pl", "to test", "defect", "user", "creative", "finish", "commute", "update (on sth)", "to raise sth", "to remove", "roadblock", "to slow sb down", "to affect sb/sth", "to force", "relationship", "easily understandable", "detailed", "comment", "productive", "to separate", "to ensure", "obstacle", "to fix", "to update", "standard", "timeline", "report", "interface", "specification", "test plan", "likes and dislikes pl", "to pin", "gallery walk", "phase", "feedback", "conversation", "to propose", "guideline", "output", "request", "stand-up", "even though", "agenda", "to keep sth to a minimum", "spontaneous", "issue", "to concentrate on sth", "period of time", "critical", "the executives pl", "to be paperless", "to favour", "preference", "to invest", "to support", "concern", "not … at all", "to chat", "author", "to acknowledge sth", "to pretend", "point of view", "to set sth aside", "expectation", "instant(ly)", "productivity", "starting point", "to adjust", "as we go along", "lifetime (of a project)", "smart", "individual(ly)", "invite", "schedule", "to run behind schedule", "pros and cons pl", "remote working", "to interrupt", "to solve", "noise", "separate", "meeting room", "drawback", "distraction", "noise level", "downside", "on the downside", "to turn sth off", "disaster", "upside", "to respond to sth", "instantaneous(ly)", "to progress", "to clarify", "complex", "to state", "to leave a message", "voicemail", "to take a message", "to call back", "on behalf of sb", "to confirm", "update", "database", "factory manager", "technician", "mobile", "to represent", "equivalent", "engaged", "to be unavailable", "to hold the line", "to connect (to/with sth)", "to put sb through", "supplier", "Speaking", "available", "alternative", "extension", "digit", "except for", "to make up sth", "contact details pl", "to pass sth on", "flat", "military", "traditional", "corporation", "to rely (heavily) on sth", "hierarchy", "to maintain", "predictability", "reliability", "to desire sth", "predictable", "reliable", "to simplify", "planning", "from the top down", "model", "entertainment", "to waste", "to innovate", "founder", "opportunity", "to take risks", "to see sth through", "barrier", "to claim", "to be at the heart of sth", "to stop sb from doing sth", "responsibility", "talented", "to be capable of doing sth"],"",
["Arbeitsplatz", "etw durchführen", "Maßnahme", "Umfrage", "Kommunikationsmittel", "Verbesserung", "einstufen, (in einer Rangliste) bewerten", "eine Botschaft vermitteln", "und so weiter", "persönlich", "etw klären, etw in Ordnung bringen", "schriftlich", "SMS", "auf etw hinauswollen", "(E-Mail:) anhängen", "jdn auf CC in den Verteiler setzen", "strukturiert", "auf etw zugreifen", "überall (in der Weltgeschichte)", "Zugriff (auf etw)", "(Daten-)Speicherung", "abgleichen, synchronisieren", "auswählen", "(etw jdm gegenüber) erwähnen", "etw zur Sprache bringen", "Zeit beanspruchen", "(Präsentation:) Folie", "Zeitverschwendung", "Arbeitsblatt, Informationsblatt, Merkblatt", "etw in Betracht ziehen, über etw nachdenken", "Grafik", "Ideen sammeln", "Menge, Anzahl", "Anweisung", "aufzeichnen, festhalten", "(E-Mail:) Anhang", "Personalvermittlung", "Zentrale, Hauptsitz", "Gesichtspunkt, Aspekt", "Bedingung", "fest von etw überzeugt sein", "Gleichgewicht", "(zu) jdm/etw passen", "variabel, flexibel", "Jahresurlaub", "Krankentage", "unbezahlter Urlaub", "von zu Hause aus arbeiten, ortsungebunden arbeiten", "(aufeinander) abstimmen, koordinieren", "außerdem", "Genehmigung, Erlaubnis", "Kleidung", "sauber, ordentlich", "zwanglos, locker", "Funktionen", "Bewerber/in", "etw nachschlagen, etw nachlesen", "mit Abschluss", "eng mit jdm zusammenarbeiten", "Prüfdaten", "prüfen, testen", "Mangel, Fehler", "Benutzer/in, Anwender/in, User/in", "kreativ", "Ende", "Fahrt zur Arbeit", "aktuelle Informationen (zu etw)", "etw ansprechen, auf etw aufmerksam machen", "entfernen, aus dem Weg räumen", "Hindernis", "jdn aufhalten, jdn bremsen", "sich auf jdn/etw auswirken", "zwingen", "Beziehung, Verhältnis", "leicht verständlich", "ausführlich, genau", "Kommentar", "produktiv", "trennen", "dafür sorgen, sicherstellen", "Hindernis", "(etw) in Ordnung bringen, reparieren", "auf den neuesten Stand bringen", "üblich, normal", "Zeitschiene", "Bericht, Meldung", "Schnittstelle, Interface", "technische Anforderung(en)", "Prüfplan", "Vorlieben und Abneigungen", "(mit einer Nadel) befestigen, anheften", "Galerierundgang", "Stadium, Phase", "Rückmeldung(en)", "Gespräch", "vorschlagen", "Richtlinie, Leitfaden", "Arbeitsergebnis(se)", "Wunsch, Bitte", "im Stehen", "obwohl", "Tagesordnung", "etw auf ein Mindestmaß beschränken", "spontan", "Frage, Problem", "sich auf etw konzentrieren", "(gewisse) Zeit", "wichtig, unentbehrlich", "die Betriebsleitung", "kein Papier (mehr) verwenden", "favorisieren, bevorzugen", "Vorliebe, Wunsch", "investieren", "unterstützen", "Bedenken, Sorge", "überhaupt nicht", "chatten", "Verfasser/in", "etw anerkennen", "so tun, als ob", "Sicht", "etw (für etw) vorsehen", "Erwartung", "sofortig, sofort", "Produktivität", "Ausgangspunkt", "anpassen, regeln", "im Lauf von etw, nach und nach", "Laufzeit (eines Projekts)", "klug", "einzeln", "Einladung", "Zeitplan", "im Rückstand sein", "Argumente dafür und dagegen, Vor- und Nachteile", "Arbeit von zu Hause, ortsungebundenes Arbeiten", "unterbrechen, stören", "lösen", "Lärm", "getrennt, separat, eigen", "Sitzungszimmer, Konferenzraum", "Nachteil", "Ablenkung", "Lärmpegel", "Schattenseite, Nachteil", "auf der Negativseite; andererseits", "etw ausschalten, etw abstellen", "Katastrophe", "Vorteil, Plus", "auf etw reagieren", "sofort, augenblicklich", "vorankommen", "klären, abklären", "kompliziert, komplex", "angeben, erklären, nennen, sagen", "eine Nachricht hinterlassen", "Mailbox", "etw ausrichten", "zurückrufen", "für jdn, in jds Namen", "bestätigen", "Aktualisierung", "Datenbank", "Betriebsleiter/in, Werksleiter/in", "Techniker/in", "Handy, Mobiltelefon", "darstellen, vertreten", "Entsprechung, Übersetzung", "(Telefon:) besetzt", "(Telefon:) nicht zu sprechen sein", "(Telefon:) am Apparat bleiben", "(mit etw) verbinden, (an etw) anschließen", "(Telefon:) jdn durchstellen", "Zulieferer, Lieferant/in", "(Telefon:) Am Apparat.", "lieferbar, verfügbar", "Alternative", "Durchwahl", "Ziffer", "außer", "sich etw ausdenken", "Kontaktdaten", "etw weiterreichen/-leiten", "flach", "Militär", "traditionell, althergebracht", "Unternehmen, Gesellschaft, Konzern", "sich (total) auf etw verlassen, (stark) auf etw angewiesen sein", "Hierarchie", "aufrecht erhalten", "Berechenbarkeit", "Zuverlässigkeit", "etw wünschen", "berechenbar", "zuverlässig", "vereinfachen", "Planung", "von oben nach unten", "Vorbild, Modell", "Unterhaltung", "verschwenden, vergeuden", "innovativ sein, kreativ sein", "Gründer/in", "Gelegenheit, Möglichkeit", "Risiken eingehen", "etw zu Ende führen", "Hindernis", "behaupten", "zentral für etw sein", "jdn daran hindern, etw zu tun", "Verantwortung", "begabt, talentiert", "fähig sein, etw zu tun"]);



    }}
if (order === "Deutsch/Englisch" || order === "Gemischt") {
    if (difficulty === "Unit2" || difficulty === "Gemischt") {
    raddTask(
["workplace", "to carry out sth", "measure", "survey", "means of communication", "improvement", "to rank", "to get a message across", "and so on", "face-to-face", "to sort sth out", "in writing", "text (message)", "to get at sth", "to attach", "to copy in sb", "structured", "to access sth", "all over the place", "access (to sth)", "storage", "to synchronize", "to select", "to mention (sth to sb)", "to bring up sth", "to take up time", "slide", "waste of time", "hand-out", "to consider sth", "graphic image", "to brainstorm", "quantity", "instruction", "to record", "attachment", "recruitment", "headquarters", "aspect", "condition", "to be big believers in sth", "balance", "to suit sb/sth", "flexible", "annual leave", "sick leave", "unpaid leave", "to work remotely", "to co-ordinate", "in addition", "permission", "clothing", "neat", "casual", "functionality", "applicant", "to look sth up", "graduate", "to work closely with sb", "test data pl", "to test", "defect", "user", "creative", "finish", "commute", "update (on sth)", "to raise sth", "to remove", "roadblock", "to slow sb down", "to affect sb/sth", "to force", "relationship", "easily understandable", "detailed", "comment", "productive", "to separate", "to ensure", "obstacle", "to fix", "to update", "standard", "timeline", "report", "interface", "specification", "test plan", "likes and dislikes pl", "to pin", "gallery walk", "phase", "feedback", "conversation", "to propose", "guideline", "output", "request", "stand-up", "even though", "agenda", "to keep sth to a minimum", "spontaneous", "issue", "to concentrate on sth", "period of time", "critical", "the executives pl", "to be paperless", "to favour", "preference", "to invest", "to support", "concern", "not … at all", "to chat", "author", "to acknowledge sth", "to pretend", "point of view", "to set sth aside", "expectation", "instant(ly)", "productivity", "starting point", "to adjust", "as we go along", "lifetime (of a project)", "smart", "individual(ly)", "invite", "schedule", "to run behind schedule", "pros and cons pl", "remote working", "to interrupt", "to solve", "noise", "separate", "meeting room", "drawback", "distraction", "noise level", "downside", "on the downside", "to turn sth off", "disaster", "upside", "to respond to sth", "instantaneous(ly)", "to progress", "to clarify", "complex", "to state", "to leave a message", "voicemail", "to take a message", "to call back", "on behalf of sb", "to confirm", "update", "database", "factory manager", "technician", "mobile", "to represent", "equivalent", "engaged", "to be unavailable", "to hold the line", "to connect (to/with sth)", "to put sb through", "supplier", "Speaking", "available", "alternative", "extension", "digit", "except for", "to make up sth", "contact details pl", "to pass sth on", "flat", "military", "traditional", "corporation", "to rely (heavily) on sth", "hierarchy", "to maintain", "predictability", "reliability", "to desire sth", "predictable", "reliable", "to simplify", "planning", "from the top down", "model", "entertainment", "to waste", "to innovate", "founder", "opportunity", "to take risks", "to see sth through", "barrier", "to claim", "to be at the heart of sth", "to stop sb from doing sth", "responsibility", "talented", "to be capable of doing sth"],"",
["Arbeitsplatz", "etw durchführen", "Maßnahme", "Umfrage", "Kommunikationsmittel", "Verbesserung", "einstufen, (in einer Rangliste) bewerten", "eine Botschaft vermitteln", "und so weiter", "persönlich", "etw klären, etw in Ordnung bringen", "schriftlich", "SMS", "auf etw hinauswollen", "(E-Mail:) anhängen", "jdn auf CC in den Verteiler setzen", "strukturiert", "auf etw zugreifen", "überall (in der Weltgeschichte)", "Zugriff (auf etw)", "(Daten-)Speicherung", "abgleichen, synchronisieren", "auswählen", "(etw jdm gegenüber) erwähnen", "etw zur Sprache bringen", "Zeit beanspruchen", "(Präsentation:) Folie", "Zeitverschwendung", "Arbeitsblatt, Informationsblatt, Merkblatt", "etw in Betracht ziehen, über etw nachdenken", "Grafik", "Ideen sammeln", "Menge, Anzahl", "Anweisung", "aufzeichnen, festhalten", "(E-Mail:) Anhang", "Personalvermittlung", "Zentrale, Hauptsitz", "Gesichtspunkt, Aspekt", "Bedingung", "fest von etw überzeugt sein", "Gleichgewicht", "(zu) jdm/etw passen", "variabel, flexibel", "Jahresurlaub", "Krankentage", "unbezahlter Urlaub", "von zu Hause aus arbeiten, ortsungebunden arbeiten", "(aufeinander) abstimmen, koordinieren", "außerdem", "Genehmigung, Erlaubnis", "Kleidung", "sauber, ordentlich", "zwanglos, locker", "Funktionen", "Bewerber/in", "etw nachschlagen, etw nachlesen", "mit Abschluss", "eng mit jdm zusammenarbeiten", "Prüfdaten", "prüfen, testen", "Mangel, Fehler", "Benutzer/in, Anwender/in, User/in", "kreativ", "Ende", "Fahrt zur Arbeit", "aktuelle Informationen (zu etw)", "etw ansprechen, auf etw aufmerksam machen", "entfernen, aus dem Weg räumen", "Hindernis", "jdn aufhalten, jdn bremsen", "sich auf jdn/etw auswirken", "zwingen", "Beziehung, Verhältnis", "leicht verständlich", "ausführlich, genau", "Kommentar", "produktiv", "trennen", "dafür sorgen, sicherstellen", "Hindernis", "(etw) in Ordnung bringen, reparieren", "auf den neuesten Stand bringen", "üblich, normal", "Zeitschiene", "Bericht, Meldung", "Schnittstelle, Interface", "technische Anforderung(en)", "Prüfplan", "Vorlieben und Abneigungen", "(mit einer Nadel) befestigen, anheften", "Galerierundgang", "Stadium, Phase", "Rückmeldung(en)", "Gespräch", "vorschlagen", "Richtlinie, Leitfaden", "Arbeitsergebnis(se)", "Wunsch, Bitte", "im Stehen", "obwohl", "Tagesordnung", "etw auf ein Mindestmaß beschränken", "spontan", "Frage, Problem", "sich auf etw konzentrieren", "(gewisse) Zeit", "wichtig, unentbehrlich", "die Betriebsleitung", "kein Papier (mehr) verwenden", "favorisieren, bevorzugen", "Vorliebe, Wunsch", "investieren", "unterstützen", "Bedenken, Sorge", "überhaupt nicht", "chatten", "Verfasser/in", "etw anerkennen", "so tun, als ob", "Sicht", "etw (für etw) vorsehen", "Erwartung", "sofortig, sofort", "Produktivität", "Ausgangspunkt", "anpassen, regeln", "im Lauf von etw, nach und nach", "Laufzeit (eines Projekts)", "klug", "einzeln", "Einladung", "Zeitplan", "im Rückstand sein", "Argumente dafür und dagegen, Vor- und Nachteile", "Arbeit von zu Hause, ortsungebundenes Arbeiten", "unterbrechen, stören", "lösen", "Lärm", "getrennt, separat, eigen", "Sitzungszimmer, Konferenzraum", "Nachteil", "Ablenkung", "Lärmpegel", "Schattenseite, Nachteil", "auf der Negativseite; andererseits", "etw ausschalten, etw abstellen", "Katastrophe", "Vorteil, Plus", "auf etw reagieren", "sofort, augenblicklich", "vorankommen", "klären, abklären", "kompliziert, komplex", "angeben, erklären, nennen, sagen", "eine Nachricht hinterlassen", "Mailbox", "etw ausrichten", "zurückrufen", "für jdn, in jds Namen", "bestätigen", "Aktualisierung", "Datenbank", "Betriebsleiter/in, Werksleiter/in", "Techniker/in", "Handy, Mobiltelefon", "darstellen, vertreten", "Entsprechung, Übersetzung", "(Telefon:) besetzt", "(Telefon:) nicht zu sprechen sein", "(Telefon:) am Apparat bleiben", "(mit etw) verbinden, (an etw) anschließen", "(Telefon:) jdn durchstellen", "Zulieferer, Lieferant/in", "(Telefon:) Am Apparat.", "lieferbar, verfügbar", "Alternative", "Durchwahl", "Ziffer", "außer", "sich etw ausdenken", "Kontaktdaten", "etw weiterreichen/-leiten", "flach", "Militär", "traditionell, althergebracht", "Unternehmen, Gesellschaft, Konzern", "sich (total) auf etw verlassen, (stark) auf etw angewiesen sein", "Hierarchie", "aufrecht erhalten", "Berechenbarkeit", "Zuverlässigkeit", "etw wünschen", "berechenbar", "zuverlässig", "vereinfachen", "Planung", "von oben nach unten", "Vorbild, Modell", "Unterhaltung", "verschwenden, vergeuden", "innovativ sein, kreativ sein", "Gründer/in", "Gelegenheit, Möglichkeit", "Risiken eingehen", "etw zu Ende führen", "Hindernis", "behaupten", "zentral für etw sein", "jdn daran hindern, etw zu tun", "Verantwortung", "begabt, talentiert", "fähig sein, etw zu tun"]);



    }}













if (order === "Englisch/Deutsch" || order === "Gemischt") {
    if (difficulty === "Unit4" || difficulty === "Gemischt") {
    addTask();

}}
function ArrayToLowerCase(stringArray) {
  for (let str of stringArray) {
    stringArray[stringArray.indexOf(str)] = str.toLowerCase();
  }
}
ArrayToLowerCase(questions);
ArrayToLowerCase(solutions);

    // Arrays gleichzeitig zufällig mischen und auf ausgewählte quizlänge kürzen. 
    let shuffledArrays = shuffleArrays(solutions, questions, answerGroup);
    if (quizLength != "Alle") {
        var [finalSolution, finalQuestion, finalAnswer] = [
            shortenArray(shuffledArrays[0], quizLength),
            shortenArray(shuffledArrays[1], quizLength),
            shortenArray(shuffledArrays[2], quizLength)
        ];
    }

    if (quizLength === "Alle") {
        var [finalSolution, finalQuestion, finalAnswer] = [
            shortenArray(shuffledArrays[0], questions.length),
            shortenArray(shuffledArrays[1], questions.length),
            shortenArray(shuffledArrays[2], questions.length)
        ];
    }
    // ersetzt kommas in antworten 
    //replaceLetterAnswer(finalAnswer, /[,]/g, "%%");



    localStorage.setItem("tolerance", document.getElementById("tolerance").value);

    /// Fragen / Lösungen / Antworten im localStorage speichern
    localStorage.setItem("transferAnswer", transferChangeAnswer(finalAnswer));
    localStorage.setItem("transferQuestion", transferChangeQuestion(questions));
    localStorage.setItem("transferSolution", transferChangeSolution(finalSolution));
    localStorage.setItem("showAnswer", showAnswer);
    //wechselt zu Quiz und startet dieses
    window.location.replace('Quiz.html');
    solutions = "";
    questions = "";
    answerGroup = "";

}