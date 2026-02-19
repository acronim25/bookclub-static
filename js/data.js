/**
 * Book Club - Seed Data
 * Contains all books, chapters, quizzes, badges, and initial users
 */

const BOOKCLUB_DATA = {
    // Books
    books: [
        {
            id: 1,
            title: "Thinking in Bets",
            author: "Annie Duke",
            description: "Making Smarter Decisions When You Don't Have All the Facts. A professional poker player's guide to decision-making under uncertainty.",
            total_chapters: 12,
            emoji: "🎯"
        },
        {
            id: 2,
            title: "The Hour Between Dog and Wolf",
            author: "John Coates",
            description: "Risk Taking, Gut Feelings and the Biology of Boom and Bust. A neuroscientist's exploration of the biology of financial risk.",
            total_chapters: 10,
            emoji: "🐺"
        }
    ],

    // Chapters for both books
    chapters: [
        // Book 1 - Thinking in Bets (ids 1-12)
        {
            id: 1,
            book_id: 1,
            number: 1,
            title: "Life Is Poker, Not Chess",
            summary: "Poker is a better model for decision-making than chess. In chess, all information is visible; in poker (and life), we make decisions with hidden information and uncertainty. The key is separating decision quality from outcome quality.",
            key_concepts: ["Chess vs Poker metaphor", "Hidden information", "Uncertainty in decisions", "Decision quality ≠ Outcome quality", "Resulting (judging decisions by outcomes)"]
        },
        {
            id: 2,
            book_id: 1,
            number: 2,
            title: "Wanna Bet?",
            summary: "When we frame decisions as bets, we think more probabilistically. Betting forces us to examine our confidence levels and consider alternative outcomes. The author explores how thinking in bets improves decision quality.",
            key_concepts: ["Thinking in bets framework", "Probabilistic thinking", "Confidence calibration", "Alternative outcomes", "Belief formation"]
        },
        {
            id: 3,
            book_id: 1,
            number: 3,
            title: "Bet to Learn: Fielding Your Outcome-Blind Decisions",
            summary: "We learn more from outcomes when we separate luck from skill. By analyzing decisions without knowing the outcomes (outcome-blind analysis), we can better evaluate decision quality and learn from experience.",
            key_concepts: ["Separating luck from skill", "Outcome-blind analysis", "Learning from experience", "Decision review process", "Fielding decisions"]
        },
        {
            id: 4,
            book_id: 1,
            number: 4,
            title: "The Buddy System",
            summary: "We are better at evaluating others' decisions than our own due to self-serving bias. Creating a 'buddy system' or group for honest feedback helps overcome this bias and improve decision-making.",
            key_concepts: ["Self-serving bias", "Motivated reasoning", "Accountability partners", "Group decision-making", "Truth-seeking groups"]
        },
        {
            id: 5,
            book_id: 1,
            number: 5,
            title: "Dissent to Win",
            summary: "Diversity of thought and dissenting opinions improve decision-making. Creating an environment where disagreement is valued helps uncover blind spots and reduce groupthink.",
            key_concepts: ["Diversity of thought", "Constructive dissent", "Red teaming", "Blind spot analysis", "Groupthink prevention"]
        },
        {
            id: 6,
            book_id: 1,
            number: 6,
            title: "Adventures in Mental Time Travel",
            summary: "Techniques for making better decisions by using mental time travel: pre-mortems (imagining failure before it happens), backcasting (imagining success and working backward), and scenario planning.",
            key_concepts: ["Pre-mortem analysis", "Backcasting", "Scenario planning", "Mental time travel", "Future self empathy"]
        },
        {
            id: 7,
            book_id: 1,
            number: 7,
            title: "Chesley Sullenberger's Crash Landing: The Passengers' Perspective",
            summary: "Examining how we evaluate others' decisions and the role of hindsight bias. When we know the outcome, we judge decisions differently than when we're deciding in the moment.",
            key_concepts: ["Hindsight bias", "Monday morning quarterbacking", "Outcome bias", "Decision evaluation", "Passenger perspective"]
        },
        {
            id: 8,
            book_id: 1,
            number: 8,
            title: "The Value of Negative Thinking",
            summary: "Productive regret and negative thinking can improve decisions. Rather than toxic regret, we should use disappointment to fuel better future decisions through counterfactual thinking.",
            key_concepts: ["Productive regret", "Counterfactual thinking", "Near-miss analysis", "Learning from failure", "Toxic vs productive regret"]
        },
        {
            id: 9,
            book_id: 1,
            number: 9,
            title: "Rubber-Band Routines and Other Ways to Avoid Decision Traps",
            summary: "Building routines and systems to avoid common decision traps. Creating rubber-band routines that snap us back to good decision-making when we drift.",
            key_concepts: ["Decision routines", "Rubber-band routines", "Decision hygiene", "Checklists", "Avoiding traps"]
        },
        {
            id: 10,
            book_id: 1,
            number: 10,
            title: "Beat the Dealer: The Power of Base Rates",
            summary: "Using base rates and outside view to make better predictions. Understanding regression to the mean and avoiding the planning fallacy.",
            key_concepts: ["Base rates", "Outside view", "Regression to the mean", "Planning fallacy", "Reference class forecasting"]
        },
        {
            id: 11,
            book_id: 1,
            number: 11,
            title: "Outcomes: What a Difference a Day Makes",
            summary: "How small changes in timing can dramatically affect outcomes. Understanding path dependence and the role of luck in success and failure.",
            key_concepts: ["Path dependence", "Timing effects", "Luck and skill", "Outcome variance", "Temporal perspective"]
        },
        {
            id: 12,
            book_id: 1,
            number: 12,
            title: "The Long Game: Doing Something Hard",
            summary: "Building a long-term decision-making practice. The importance of continuous improvement and treating life as a long game rather than individual hands.",
            key_concepts: ["Long-term thinking", "Continuous improvement", "Decision practice", "Life as a long game", "Skill development"]
        },
        // Book 2 - The Hour Between Dog and Wolf (ids 101-110)
        {
            id: 101,
            book_id: 2,
            number: 1,
            title: "The Biology of Risk",
            summary: "Introduction to how biology affects financial decision-making. The author explores the mind-body connection in trading and how physiological states influence risk-taking behavior.",
            key_concepts: ["Mind-body connection in trading", "Biological basis of risk taking", "Physiological states and decisions", "The trader's biology", "Beyond rational economics"]
        },
        {
            id: 102,
            book_id: 2,
            number: 2,
            title: "The Bubble",
            summary: "Examination of market bubbles through a biological lens. How group behavior and physiological feedback loops contribute to market euphoria and crashes.",
            key_concepts: ["Market bubbles biology", "Group behavior", "Feedback loops", "Market euphoria", "Crash physiology"]
        },
        {
            id: 103,
            book_id: 2,
            number: 3,
            title: "The Second Brain",
            summary: "Exploration of the gut as a 'second brain' and how gut feelings are real physiological signals. The enteric nervous system and its role in decision-making.",
            key_concepts: ["Gut feelings are real", "Enteric nervous system", "Second brain concept", "Visceral signals", "Body-based intuition"]
        },
        {
            id: 104,
            book_id: 2,
            number: 4,
            title: "The Hunch",
            summary: "How intuition develops through experience. The neuroscience of pattern recognition and how expert traders develop 'feel' for the markets.",
            key_concepts: ["Intuition development", "Pattern recognition", "Expert trader feel", "Neuroscience of intuition", "Experience-based hunches"]
        },
        {
            id: 105,
            book_id: 2,
            number: 5,
            title: "The Captain",
            summary: "The role of testosterone in risk-taking and trading behavior. How winning streaks affect physiology and can lead to excessive risk-taking.",
            key_concepts: ["Testosterone and trading", "Winning streaks physiology", "Risk-taking hormones", "Overconfidence biology", "The winner effect"]
        },
        {
            id: 106,
            book_id: 2,
            number: 6,
            title: "The Feedback Loop",
            summary: "How success changes brain chemistry and behavior. The feedback loop between winning, testosterone, and increasingly risky behavior.",
            key_concepts: ["Success brain chemistry", "Testosterone feedback loop", "Risk escalation", "Winning changes you", "Biological momentum"]
        },
        {
            id: 107,
            book_id: 2,
            number: 7,
            title: "The Counterfeit",
            summary: "Examination of cortisol and the stress response. How losing streaks and stress affect decision-making and can lead to risk aversion.",
            key_concepts: ["Cortisol and stress", "Losing streaks biology", "Stress response trading", "Risk aversion physiology", "Dealing with losses"]
        },
        {
            id: 108,
            book_id: 2,
            number: 8,
            title: "The Exhaustion",
            summary: "Chronic stress and its effects on traders. How prolonged cortisol exposure damages decision-making and health.",
            key_concepts: ["Chronic stress effects", "Cortisol damage", "Decision fatigue", "Health and trading", "Burnout biology"]
        },
        {
            id: 109,
            book_id: 2,
            number: 9,
            title: "The Resilience",
            summary: "Building biological resilience for trading. Strategies for managing physiological states and maintaining optimal decision-making.",
            key_concepts: ["Biological resilience", "Managing physiology", "Optimal decision state", "Recovery strategies", "Sustainable trading"]
        },
        {
            id: 110,
            book_id: 2,
            number: 10,
            title: "The Biology of Success",
            summary: "Putting it all together - understanding your biological self to become a better trader. Practical applications of the science for trading performance.",
            key_concepts: ["Biological self-awareness", "Practical applications", "Trading performance", "Mind-body optimization", "Long-term success"]
        }
    ],

    // Quizzes for both books - 10 questions per chapter
    quizzes: [
        // ===== Book 1: Thinking in Bets =====
        // Chapter 1
        {
            id: 1,
            chapter_id: 1,
            questions: [
                { question: "What is 'resulting'?", options: ["Making decisions based on past results", "Judging the quality of a decision by its outcome", "Documenting all trading results", "Calculating expected value"], correct: 1 },
                { question: "Why is poker a better metaphor for life decisions than chess?", options: ["Poker is more popular than chess", "Chess is too hard to learn", "Poker involves hidden information and luck, like real decisions", "Chess doesn't have betting"], correct: 2 },
                { question: "What should you do when you have a good outcome from a bad decision?", options: ["Celebrate the win", "Recognize it as luck and learn from the process", "Repeat the same decision process", "Tell everyone about your success"], correct: 1 },
                { question: "In trading, what's the danger of 'resulting'?", options: ["You'll make too much money", "You might repeat bad processes because they got lucky once", "You'll become too confident", "You'll take too little risk"], correct: 1 },
                { question: "What's the key insight about decision quality vs outcome quality?", options: ["They're always the same", "Good decisions always lead to good outcomes", "A good decision can have a bad outcome due to luck", "Only outcomes matter in the end"], correct: 2 },
                { question: "Which field relies purely on skill with no hidden information?", options: ["Poker", "Trading", "Chess", "Investing"], correct: 2 },
                { question: "What percentage of poker hands do professionals play?", options: ["Most hands they get", "About 20% - waiting for good situations", "Only when they have pocket aces", "All hands to practice"], correct: 1 },
                { question: "Why do we naturally engage in 'resulting'?", options: ["It's taught in school", "It's rational and correct", "Our brains are wired to create narratives from outcomes", "It's in the definition of good decisions"], correct: 2 },
                { question: "What's the relationship between uncertainty and good decision-making?", options: ["Good decisions eliminate all uncertainty", "Accepting uncertainty is essential for good decisions", "Uncertainty means you shouldn't decide", "Only make decisions when certain"], correct: 1 },
                { question: "What separates professional poker players from amateurs?", options: ["They get better cards", "They never lose", "They make better decisions under uncertainty, accepting short-term variance", "They play more hands"], correct: 2 }
            ]
        },
        // Chapter 2
        {
            id: 2,
            chapter_id: 2,
            questions: [
                { question: "What does 'thinking in bets' mean?", options: ["Gambling on every decision", "Framing decisions as probabilistic beliefs with confidence levels", "Only making financial decisions", "Avoiding all risk"], correct: 1 },
                { question: "Why is it helpful to ask 'Wanna bet?' about your beliefs?", options: ["To make money from friends", "It forces you to examine your confidence and consider alternatives", "To avoid making decisions", "To prove you're right"], correct: 1 },
                { question: "What happens to our beliefs when we state them out loud?", options: ["They become more extreme", "We become more open to updating them", "They never change", "They become facts"], correct: 1 },
                { question: "What is 'belief calibration'?", options: ["Adjusting your beliefs to match reality", "Ensuring your confidence matches your accuracy", "Believing everything you hear", "Ignoring contradictory evidence"], correct: 1 },
                { question: "In trading, why is probabilistic thinking important?", options: ["It guarantees profits", "It helps size positions based on edge and variance", "It eliminates losses", "It's required by law"], correct: 1 },
                { question: "What's a sign that you're not thinking probabilistically?", options: ["You assign specific percentages to outcomes", "You see things as 'definitely' happening or not", "You consider multiple scenarios", "You track your prediction accuracy"], correct: 1 },
                { question: "What is the 'illusion of control'?", options: ["Having complete control over outcomes", "Overestimating how much our actions determine results", "A trading strategy", "Being in charge of a company"], correct: 1 },
                { question: "How should you update your beliefs when you get new information?", options: ["Ignore it if it contradicts your view", "Update proportionally based on the strength of evidence", "Change your mind completely immediately", "Never update - stick to your guns"], correct: 1 },
                { question: "What does 'truth-seeking' mean in decision-making?", options: ["Always being right", "Actively trying to find what's true, not just what confirms your view", "Telling the truth to others", "Avoiding decisions"], correct: 1 },
                { question: "Why do we tend to form beliefs first and look for evidence later?", options: ["It's the scientific method", "Our brains are pattern-matching machines that form quick narratives", "It leads to better decisions", "It's required by logic"], correct: 1 }
            ]
        },
        // Chapter 3
        {
            id: 3,
            chapter_id: 3,
            questions: [
                { question: "What is 'outcome-blind' analysis?", options: ["Ignoring all outcomes", "Analyzing decisions without knowing the results", "Being blind to bad outcomes", "Not tracking results"], correct: 1 },
                { question: "Why is outcome-blind analysis valuable?", options: ["It ignores reality", "It prevents hindsight bias from distorting decision evaluation", "It's faster than normal analysis", "It guarantees good outcomes"], correct: 1 },
                { question: "What is the difference between a good outcome and a good decision?", options: ["There is no difference", "Good outcomes can result from bad decisions due to luck", "Good decisions always produce good outcomes", "Only outcomes matter in trading"], correct: 1 },
                { question: "What should you analyze after a trade: the process or the P&L?", options: ["Just the P&L - money talks", "The process - was the reasoning sound regardless of outcome?", "Neither - just move on", "Only if you won"], correct: 1 },
                { question: "What is 'fielding' in the context of decisions?", options: ["Playing baseball", "Examining how a decision was made before knowing the outcome", "Ignoring feedback", "Making decisions quickly"], correct: 1 },
                { question: "Why do we learn less from experience than we think?", options: ["We're not smart enough", "Outcomes are noisy signals - luck clouds the feedback", "We don't have enough experiences", "Experience doesn't matter"], correct: 1 },
                { question: "What should a trading journal focus on?", options: ["Just entry and exit prices", "The reasoning and process, not just the P&L", "How you felt emotionally", "What other traders did"], correct: 1 },
                { question: "How can you separate luck from skill in your results?", options: ["You can't - they're the same", "Look at many outcomes over time, analyze decision quality separately", "Ask your friends", "Look at one big win"], correct: 1 },
                { question: "What is 'hindsight bias'?", options: ["Seeing the future clearly", "Believing after an outcome that you knew it would happen", "Learning from the past", "Having perfect memory"], correct: 1 },
                { question: "Why should you review losing trades that had good processes?", options: ["To feel bad about yourself", "To understand variance and reinforce good decision-making", "To blame external factors", "You shouldn't - losses are always mistakes"], correct: 1 }
            ]
        },
        // Chapter 4
        {
            id: 4,
            chapter_id: 4,
            questions: [
                { question: "What is 'self-serving bias'?", options: ["Tendința de a ne servi propriile interese", "Tendința de a atribui succesul propriilor abilități și eșecul factorilor externi", "Abilitatea de a lucra independent", "Frica de a cere ajutor"], correct: 1 },
                { question: "Why are we better at evaluating others' decisions than our own?", options: ["Pentru că alții sunt mai proști", "Pentru că nu avem bias-uri emoționale legate de deciziile lor", "Pentru că vedem mai multe informații", "Pentru că suntem mai inteligenți"], correct: 1 },
                { question: "What is 'motivated reasoning'?", options: ["Gândirea logică pură", "Interpretarea informațiilor pentru a confirma ce vrem să credem", "Motivarea echipei", "Raționamentul rapid"], correct: 1 },
                { question: "How can an 'accountability partner' help in trading?", options: ["Îți face analiza tehnică", "Îți oferă feedback obiectiv despre deciziile tale", "Îți spune când să intri în trade", "Îți gestionează banii"], correct: 1 },
                { question: "What is a 'truth-seeking group'?", options: ["Un grup care caută să câștige mereu", "Un grup care prioritizează aflarea adevărului peste confirmarea propriilor opinii", "Un grup de investigatori", "Un grup de psihologi"], correct: 1 },
                { question: "Why is it important to have people who challenge your decisions?", options: ["Pentru a te enerva", "Pentru a descoperi unghiuri moarte (blind spots) în gândire", "Pentru a pierde timpul", "Nu este important"], correct: 1 },
                { question: "How do you recognize 'self-serving bias' in a winning trade?", options: ["Îți atribui câștigul doar pricei tale", "Ignori rolul norocului", "Ambele variante de mai sus", "Nu există bias în câștiguri"], correct: 2 },
                { question: "What role does 'group decision-making' play in trading?", options: ["Să iei decizii în grup", "Să folosești feedback-ul grupului pentru a îmbunătăți deciziile individuale", "Să copiezi alți traderi", "Să eviți responsabilitatea"], correct: 1 },
                { question: "What is the danger of not having someone to challenge your decisions?", options: ["Vei avea succes garantat", "Vei continua să repeți greșeli fără să le recunoști", "Vei fi mai rapid", "Nu există pericol"], correct: 1 },
                { question: "What does it mean to be 'accountable' for your decisions?", options: ["Să dai vina pe alții", "Să recunoști când greșești și să înveți din asta", "Să nu asculți pe nimeni", "Să urmezi reguli fixe"], correct: 1 }
            ]
        },
        // Chapter 5
        {
            id: 5,
            chapter_id: 5,
            questions: [
                { question: "What is 'diversity of thought'?", options: ["Diversitatea etnică", "Prezența perspectivelor diferite în procesul decizional", "Gândirea haotică", "Opiniile contrare pentru a crea conflict"], correct: 1 },
                { question: "What is 'constructive dissent'?", options: ["A fi de acord cu toată lumea", "Exprimarea dezacordului într-un mod care îmbunătățește decizia", "A critica pe toată lumea", "A ignora opiniile altora"], correct: 1 },
                { question: "What is 'red teaming'?", options: ["A lucra în echipă roșie", "A avea o echipă dedicată să găsească puncte slabe în planul tău", "A folosi indicatori tehnici roșii", "A tranzacționa doar acțiuni roșii"], correct: 1 },
                { question: "What is 'groupthink'?", options: ["Gândirea în grup", "Tendința grupului de a ajunge la consens fără a evalua critic opțiunile", "Gândirea colectivă creativă", "Luarea deciziilor democratice"], correct: 1 },
                { question: "Why is 'blind spot analysis' important?", options: ["Pentru a găsi puncte moarte în analiza tehnică", "Pentru a identifica ce nu poți vedea din cauza bias-urilor tale", "Pentru a conduce mașina mai bine", "Nu este importantă"], correct: 1 },
                { question: "How can 'dissent' improve a trade setup?", options: ["Te face să renunți la toate tranzacțiile", "Te obligă să consideți scenarii alternative și riscuri", "Te încurajează să tranzacționezi mai mult", "Nu ajută în trading"], correct: 1 },
                { question: "What role does 'devil's advocate' play in decision-making?", options: ["Să susțină diavolul", "Să prezinte argumente împotriva pentru a testa ideea", "Să fie pesimist tot timpul", "Să creeze conflict"], correct: 1 },
                { question: "Why do we often avoid seeking dissenting opinions?", options: ["Pentru că sunt greșite", "Pentru că este inconfortabil să fii contestat", "Pentru că nu avem timp", "Nu evităm"], correct: 1 },
                { question: "What is a 'blind spot' in trading?", options: ["Un indicator pe grafic", "Un aspect al analizei pe care îl ignori din cauza bias-urilor", "O strategie secretă", "Un tip de ordin"], correct: 1 },
                { question: "How do you create an environment where 'dissent' is valued?", options: ["Certând pe cei care sunt de acord cu tine", "Recompensând onestitatea și criticile constructive", "Ignorând opiniile contrare", "Impunând reguli stricte"], correct: 1 }
            ]
        },
        // Chapter 6
        {
            id: 6,
            chapter_id: 6,
            questions: [
                { question: "What is a 'pre-mortem analysis'?", options: ["Analiza după ce trade-ul a eșuat", "Imaginarea eșecului înainte să se întâmple pentru a preveni greșeli", "Analiza medicală înainte de operație", "O analiză rapidă"], correct: 1 },
                { question: "What is 'backcasting'?", options: ["A prezice trecutul", "A imagina succesul și a lucra înapoi pentru a vedea ce trebuie făcut", "A analiza grafice istorice", "A copia traderi de succes"], correct: 1 },
                { question: "How does 'scenario planning' help in trading?", options: ["Să prezici exact prețul", "Să te pregătești pentru multiple scenarii posibile", "Să elimini incertitudinea", "Să eviți deciziile"], correct: 1 },
                { question: "What is 'mental time travel'?", options: ["Călătoria în timp", "Folosirea imaginației pentru a vizualiza viitorul și a învăța din el", "O tehnică de meditație", "Analiza graficelor vechi"], correct: 1 },
                { question: "Why do a 'pre-mortem' before a trade?", options: ["Să te descurajeze", "Să identifici ce ar putea merge prost și să ai plan de backup", "Să piardă timpul", "Să eviți trade-ul"], correct: 1 },
                { question: "What is 'future self empathy'?", options: ["A avea compasiune pentru alții", "A considera cum te vei simți în viitor în funcție de deciziile de acum", "A trăi în viitor", "A ignora prezentul"], correct: 1 },
                { question: "How do you use 'backcasting' for a trade target?", options: ["Te uiți la grafice vechi", "Imaginezi că ai atins targetul și vezi ce trebuia să faci pentru a ajunge acolo", "Copiezi alți traderi", "Lași trade-ul să ruleze"], correct: 1 },
                { question: "What is the difference between 'pre-mortem' and 'post-mortem'?", options: ["Pre-mortem este înainte, post-mortem este după", "Pre-mortem este medicală, post-mortem este de trading", "Nu există diferență", "Pre-mortem este pentru succes, post-mortem pentru eșec"], correct: 0 },
                { question: "What questions should you ask during a 'pre-mortem'?", options: ["De ce am câștigat atât de mult?", "Ce ar putea merge prost și cum voi reacționa?", "Cine este de vină dacă pierd?", "Cât de rapid pot să intru în trade?"], correct: 1 },
                { question: "How does 'scenario planning' improve decision quality?", options: ["Eliminând toate riscurile", "Pregătindu-te pentru multiple posibilități în loc să presupui un singur rezultat", "Făcând predicții exacte", "Reducând timpul de analiză"], correct: 1 }
            ]
        },
        // Chapter 7
        {
            id: 7,
            chapter_id: 7,
            questions: [
                { question: "What is 'hindsight bias'?", options: ["A vedea viitorul clar", "Tendința de a crede după un eveniment că l-ai fi prezis", "A avea o vedere bună", "A analiza înainte de eveniment"], correct: 1 },
                { question: "What is 'Monday morning quarterbacking'?", options: ["A juca fotbal luni dimineața", "A critica deciziile după ce știi rezultatul", "A analiza meciurile de fotbal", "A tranzacționa luni dimineața"], correct: 1 },
                { question: "What is 'outcome bias'?", options: ["Bias-ul de a judeca deciziile doar după rezultat", "Bias-ul de a ignora rezultatele", "Bias-ul de a urmări rezultatele", "Nu este un bias real"], correct: 0 },
                { question: "Why is 'passenger perspective' important?", options: ["Pentru că pasagerii știu mai multe", "Pentru că arată cum judecăm diferit când nu avem control", "Pentru că pasagerii sunt mai buni traderi", "Nu este importantă"], correct: 1 },
                { question: "How does 'hindsight bias' affect learning from experience?", options: ["Îmbunătățește învățarea", "Ne face să credem că am fi știut mereu, reducând învățarea reală", "Nu are efect", "Crește încrederea corect"], correct: 1 },
                { question: "What is 'decision evaluation'?", options: ["Evaluarea rezultatului", "Evaluarea calității procesului decizional independent de rezultat", "A cere părerea altora", "A calcula profitul"], correct: 1 },
                { question: "Why do we judge others' decisions differently than our own?", options: ["Pentru că sunt mai proaste", "Pentru că vedem rezultatul lor dar nu știm ce știau ei în momentul deciziei", "Pentru că suntem mai buni", "Nu există diferență"], correct: 1 },
                { question: "How can you combat 'hindsight bias' in your trading journal?", options: ["Scriind doar rezultatele", "Documentând ce știai și ce credeai ÎNAINTE de trade", "Ignorând jurnalul", "Scriind doar după rezultat"], correct: 1 },
                { question: "What lesson can we learn from the Sullenberger case?", options: ["Că pilotul a avut noroc", "Că deciziile trebuie judecate în contextul informațiilor disponibile la momentul respectiv", "Că avioanele sunt periculoase", "Că rezultatele sunt tot ce contează"], correct: 1 },
                { question: "Why is it dangerous to judge decisions only by outcome?", options: ["Pentru că rezultatele nu contează", "Pentru că poți rata procese bune care au avut rezultate proaste din cauza norocului", "Pentru că este prea lent", "Nu este periculos"], correct: 1 }
            ]
        },
        // Chapter 8
        {
            id: 8,
            chapter_id: 8,
            questions: [
                { question: "What is 'productive regret'?", options: ["Regretul care te face să suferi", "Folosirea regretului pentru a îmbunătăți deciziile viitoare", "A regreta tot timpul", "A ignora regretul"], correct: 1 },
                { question: "What is 'counterfactual thinking'?", options: ["A gândi opusul a ceea ce crezi", "A imagina ce s-ar fi putut întâmpla diferit", "A contrazice pe toată lumea", "A gândi negativ tot timpul"], correct: 1 },
                { question: "What is a 'near-miss'?", options: ["O țintă rată", "O situație în care am fost aproape să pierdem dar nu am pierdut", "Un trade ratat", "O oportunitate pierdută"], correct: 1 },
                { question: "What is the difference between 'toxic regret' and 'productive regret'?", options: ["Nu există diferență", "Toxic te blochează, productiv te îmbunătățește", "Toxic este mai scurt", "Productiv este mai dureros"], correct: 1 },
                { question: "How can you use 'near-miss analysis'?", options: ["Ignorând cazurile aproape pierdute", "Analizând ce a mers prost chiar dacă rezultatul a fost bun", "Sărbătorind norocul", "Repetând aceeași decizie"], correct: 1 },
                { question: "Why is it important to learn from failures?", options: ["Pentru a suferi", "Pentru că eșecurile oferă feedback mai valoros decât succesele", "Pentru a evita tradingul", "Nu este important"], correct: 1 },
                { question: "What is 'learning from failure'?", options: ["A accepta că ești un ratat", "A extrage lecții valoroase din experiențele negative", "A evita eșecul cu orice preț", "A da vina pe alții"], correct: 1 },
                { question: "How do you turn disappointment into fuel?", options: ["Supărându-te mai mult", "Folosind-o pentru a identifica ce să îmbunătățești", "Ignorând-o", "Renunțând"], correct: 1 },
                { question: "Why do we avoid thinking about what could go wrong?", options: ["Pentru că este inconfortabil emoțional", "Pentru că nu este util", "Pentru că știm deja totul", "Nu evităm"], correct: 0 },
                { question: "What is the benefit of imagining failure before it happens?", options: ["Te face pesimist", "Te pregătește mental și îți arată ce să eviți", "Te face să evi deciziile", "Nu are beneficii"], correct: 1 }
            ]
        },
        // Chapter 9
        {
            id: 9,
            chapter_id: 9,
            questions: [
                { question: "What are 'decision routines'?", options: ["Rutine zilnice", "Procese standardizate care îmbunătățesc calitatea deciziilor", "Programe de exerciții", "Orare fixe"], correct: 1 },
                { question: "What are 'rubber-band routines'?", options: ["Exerciții fizice", "Rutine care te aduc înapoi la decizii bune când devii emoțional", "Strategii de trading", "Metode de relaxare"], correct: 1 },
                { question: "What is 'decision hygiene'?", options: ["A te spăla pe mâini", "Practici care mențin calitatea deciziilor în timp", "A curăța biroul", "A organiza fișiere"], correct: 1 },
                { question: "How can 'checklists' help in trading?", options: ["Să uiți ce să faci", "Să nu sari peste pași importanți în analiza ta", "Să tranzacționezi mai repede", "Să eviți deciziile"], correct: 1 },
                { question: "What are 'decision traps'?", options: ["Capcane fizice", "Erori comune de gândire care duc la decizii proaste", "Tranzacții proaste", "Brokeri necinstiți"], correct: 1 },
                { question: "When do you need a 'rubber-band routine'?", options: ["Când câștigi mereu", "Când te îndepărtezi de procesul tău disciplinat din cauza emoțiilor", "Când dormi", "Niciodată"], correct: 1 },
                { question: "What should a 'pre-trade checklist' include?", options: ["Doar prețul de intrare", "Plan de intrare, stop loss, target, și validare emoțională", "Numele brokerului", "Ora zilei"], correct: 1 },
                { question: "Why are routines important in trading?", options: ["Pentru că sunt plictisitoare", "Pentru că automatizează deciziile bune și reduc influența emoțiilor", "Pentru că salvează timp", "Nu sunt importante"], correct: 1 },
                { question: "How do you avoid 'decision traps'?", options: ["Având noroc", "Având sisteme și rutine care te protejează de erori comune", "Evitând deciziile", "Urându-le"], correct: 1 },
                { question: "What should you do when you feel you're 'drifting' from your process?", options: ["Să continui oricum", "Să activezi 'rubber-band routine' pentru a reveni la disciplină", "Să tranzacționezi mai mult", "Să ignori sentimentul"], correct: 1 }
            ]
        },
        // Chapter 10
        {
            id: 10,
            chapter_id: 10,
            questions: [
                { question: "What are 'base rates'?", options: ["Ratele de bază ale băncii", "Statistici generale despre cât de frecvent se întâmplă ceva", "Ratele dobânzii", "Prețurile de bază"], correct: 1 },
                { question: "What is 'outside view'?", options: ["A privi pe fereastră", "A folosi date generale/statistice în loc de detalii unice ale situației", "A analiza exteriorul unei companii", "A ignora datele"], correct: 1 },
                { question: "What is 'regression to the mean'?", options: ["O tehnică de trading", "Tendința rezultatelor extreme de a reveni spre medie în timp", "O strategie de investiții", "Un indicator tehnic"], correct: 1 },
                { question: "What is 'planning fallacy'?", options: ["A planifica prea mult", "Tendința de a subestima timpul/costul necesar pentru un task", "A nu planifica deloc", "O strategie bună"], correct: 1 },
                { question: "What is 'reference class forecasting'?", options: ["A prezice clasa de referință", "A folosi date istorice similare pentru a estima rezultatele", "A compara clase de active", "O metodă de învățare"], correct: 1 },
                { question: "Why do we often ignore 'base rates'?", options: ["Pentru că sunt irelevante", "Pentru că preferăm să credem că situația noastră este specială", "Pentru că sunt greu de găsit", "Nu le ignorăm"], correct: 1 },
                { question: "How can 'outside view' help in trading?", options: ["Să ignori detaliile", "Să nu supraestimezi șansele tale bazându-te doar pe analiza ta unică", "Să urmezi trendul", "Să eviți analiza tehnică"], correct: 1 },
                { question: "What does it mean when a trader has a 'hot hand'?", options: ["Are mâinile calde", "A avut o serie de tranzacții câștigătoare", "Folosește un indicator special", "Tranzacționează cripto"], correct: 1 },
                { question: "Why is it dangerous to ignore 'regression to the mean'?", options: ["Nu este periculos", "Poți crede că performanțele extreme vor continua la nesfârșit", "Te face să tranzacționezi mai puțin", "Te face să pierzi bani garantat"], correct: 1 },
                { question: "How do you use 'base rates' to evaluate a setup?", options: ["Ignorându-le", "Întrebând cât de des funcționează tipul acesta de setup în general", "Folosind doar intuiția", "Copiind alți traderi"], correct: 1 }
            ]
        },
        // Chapter 11
        {
            id: 11,
            chapter_id: 11,
            questions: [
                { question: "What is 'path dependence'?", options: ["A depinde de căi", "Faptul că rezultatele depind de secvența evenimentelor, nu doar de punctul final", "O strategie de trading", "Un indicator tehnic"], correct: 1 },
                { question: "How does 'timing' affect outcomes?", options: ["Nu afectează", "Mici schimbări în timing pot duce la rezultate dramativ diferite", "Doar în day trading", "Doar în investiții pe termen lung"], correct: 1 },
                { question: "What is 'outcome variance'?", options: ["Varianța prețului", "Gama largă de rezultate posibile din aceeași decizie", "Varianța portofoliului", "Diferența dintre win și loss"], correct: 1 },
                { question: "What is 'temporal perspective'?", options: ["O perspectivă temporală", "A considera cum se schimbă rezultatele în funcție de momentul evaluării", "A trăi în prezent", "A analiza doar trecutul"], correct: 1 },
                { question: "Why can outcomes be misleading in the short term?", options: ["Pentru că piața este mereu corectă", "Pentru că varianța și norocul joacă un rol mare pe termen scurt", "Pentru că analiza tehnică nu funcționează", "Nu sunt înșelătoare"], correct: 1 },
                { question: "What lesson about 'timing' can we apply in trading?", options: ["Timingul nu contează", "Că intrarea cu câteva minute mai devreme sau mai târziu poate schimba tot rezultatul", "Să tranzacționăm doar la ora fixă", "Să evităm timingul"], correct: 1 },
                { question: "What does it mean that success is 'path dependent'?", options: ["Că există un singur drum spre succes", "Că succese similare pot avea căi complet diferite", "Că trebuie să urmezi o cale anume", "Că succesul este garantat"], correct: 1 },
                { question: "Why shouldn't you judge a strategy by a single trade?", options: ["Pentru că este prea rapid", "Pentru că un singur rezultat nu spune nimic despre calitatea strategiei", "Pentru că strategiile sunt mereu proaste", "Ar trebui să o judeci"], correct: 1 },
                { question: "What is 'luck' in the context of outcomes?", options: ["O strategie", "Factorul aleatoriu care contribuie la rezultate în afara controlului nostru", "Un indicator", "Ceva ce poți controla"], correct: 1 },
                { question: "How do you manage 'outcome variance' emotionally?", options: ["Te enervezi", "Înțelegând că aceeași decizie bună poate avea rezultate diferite", "Ignorând rezultatele", "Schimbând strategia după fiecare trade"], correct: 1 }
            ]
        },
        // Chapter 12
        {
            id: 12,
            chapter_id: 12,
            questions: [
                { question: "What does it mean to play 'the long game'?", options: ["Să tranzacționezi doar pe termen lung", "Să prioritizezi succesul pe termen lung peste câștigurile imediate", "Să aștepți mult timp", "Să nu joci deloc"], correct: 1 },
                { question: "What is 'continuous improvement'?", options: ["Îmbunătățirea continuă a procesului decizional prin feedback și învățare", "A câștiga mereu mai mult", "A tranzacționa continuu", "A nu te opri niciodată"], correct: 0 },
                { question: "What is 'decision practice'?", options: ["A practica deciziile", "Tratarea deciziilor ca pe o abilitate care poate fi îmbunătățită cu exercițiul", "A lua decizii la întâmplare", "A evita deciziile"], correct: 1 },
                { question: "What does it mean to treat life as a 'long game'?", options: ["Să trăiești mult", "Să nu te concentrezi pe rezultate individuale ci pe proces pe termen lung", "Să joci jocuri video", "Să aștepți să mori"], correct: 1 },
                { question: "What is 'skill development' in trading?", options: ["A dezvolta noi strategii", "Îmbunătățirea continuă a abilităților de analiză, psihologie și gestionare a riscului", "A învăța să folosești noi indicatori", "A citi mai multe cărți"], correct: 1 },
                { question: "Why is patience important in 'long game'?", options: ["Pentru că trebuie să aștepți mult", "Pentru că rezultatele bune ale proceselor bune necesită timp să apară", "Pentru că piața este lentă", "Nu este importantă"], correct: 1 },
                { question: "What should you measure in 'long game'?", options: ["Doar profitul zilnic", "Calitatea procesului și îmbunătățirea pe termen lung", "Numărul de tranzacții", "Cât timp petreci la calculator"], correct: 1 },
                { question: "How do you avoid 'short-termism'?", options: ["Ignorând rezultatele pe termen scurt", "Concentrându-te pe proces și pe imaginea de ansamblu", "Tranzacționând doar pe termen lung", "Evitând tradingul"], correct: 1 },
                { question: "What does 'doing something hard' mean?", options: ["A face lucruri dificile fizic", "A avea disciplina de a urma procesul corect chiar când este greu", "A lucra mult", "A pierde bani"], correct: 1 },
                { question: "What is the final message of 'Thinking in Bets'?", options: ["Că pokerul este cel mai bun joc", "Că îmbrățișarea incertitudinii și focusul pe proces duc la decizii mai bune pe termen lung", "Că poți câștiga mereu", "Că deciziile nu contează"], correct: 1 }
            ]
        },

        // ===== Book 2: The Hour Between Dog and Wolf =====
        // Chapter 1
        {
            id: 101,
            chapter_id: 101,
            questions: [
                { question: "Ce explora John Coates în 'The Hour Between Dog and Wolf'?", options: ["Strategii de trading tehnice", "Cum biologia afectează deciziile financiare", "Istoria piețelor financiare", "Analiza fundamentală"], correct: 1 },
                { question: "Ce este 'mind-body connection' în trading?", options: ["O tehnică de meditație", "Legătura dintre stările fiziologice și deciziile de trading", "Un indicator tehnic", "O strategie de hedging"], correct: 1 },
                { question: "De ce economia tradițională 'ratională' este incompletă?", options: ["Pentru că oamenii sunt preținteligenți", "Pentru că ignoră factorii biologici și emoționali în decizii", "Pentru că nu folosește matematică", "Pentru că nu include tehnologia"], correct: 1 },
                { question: "Ce influențează stările fiziologice ale unui trader?", options: ["Doar somnul", "Pozițiile deschise, P&L-ul, și mediul de trading", "Doar cafeaua", "Nimic"], correct: 1 },
                { question: "Ce descoperă Coates despre traderii de succes?", options: ["Sunt pur și simplu mai deștepți", "Au o conștientizare mai bună a semnalelor corporale", "Au mai mult noroc", "Lucrează mai multe ore"], correct: 1 },
                { question: "Cum afectează biologia 'risk-taking behavior'?", options: ["Nu o afectează", "Hormonii și stările fiziologice modifică apetitul pentru risc", "Doar prin genetică", "Doar la traderii începători"], correct: 1 },
                { question: "Ce înseamnă 'beyond rational economics'?", options: ["A ignora economia", "A recunoaște că oamenii nu sunt calculatoare pure ci ființe biologice", "A folosi doar intuiția", "A renunța la logică"], correct: 1 },
                { question: "Ce rol joacă corpul în deciziile financiare?", options: ["Niciun rol", "Trimite semnale care influențează percepția riscului", "Doar să stea pe scaun", "Să tasteze ordine"], correct: 1 },
                { question: "De ce este importantă biologia în trading?", options: ["Nu este", "Pentru că stările corporale afectează direct calitatea deciziilor", "Doar pentru sănătate", "Doar pentru sportivi"], correct: 1 },
                { question: "Ce este 'the trader's biology'?", options: ["O carte separată", "Totalitatea proceselor fiziologice care influențează performanța de trading", "Un indicator medical", "Un tip de dietă"], correct: 1 }
            ]
        },
        // Chapter 2
        {
            id: 102,
            chapter_id: 102,
            questions: [
                { question: "Cum explică Coates bulele de piață?", options: ["Prin manipulare", "Prin biologie și comportament de grup", "Prin coincidență", "Prin politică"], correct: 1 },
                { question: "Ce sunt 'feedback loops' în piețe?", options: ["Bucle de feedback audio", "Cicluri unde succesul alimentează comportamente care duc la mai mult succes, până la crash", "Sisteme de raportare", "Tipuri de ordine"], correct: 1 },
                { question: "Ce contribuie la 'market euphoria'?", options: ["Doar știrile bune", "Comportamentul de grup și schimbările fiziologice colective", "Doar analiza tehnică", "Doar băncile centrale"], correct: 1 },
                { question: "Ce se întâmplă în timpul unui 'crash'?", options: ["Prețurile cresc", "Schimbări fiziologice colective de frică și panică", "Toată lumea cumpără", "Nimic special"], correct: 1 },
                { question: "Ce este 'group behavior' în piețe?", options: ["Comportament individual", "Cum traderii influențează și sunt influențați de ceilalți", "Comportamentul calculatoarelor", "Comportamentul băncilor"], correct: 1 },
                { question: "De ce sunt bulele atât de puternice?", options: ["Pentru că oamenii sunt proști", "Pentru că feedback-urile biologice și sociale se amplifică reciproc", "Pentru că nu există reglementare", "Pentru că prețurile sunt false"], correct: 1 },
                { question: "Ce legătură este între biologie și bule?", options: ["Nicio legătură", "Schimbările hormonale în masă contribuie la euforie și panică", "Doar la nivel individual", "Doar la nivel genetic"], correct: 1 },
                { question: "Ce înseamnă 'crash physiology'?", options: ["Fiziologia unui accident", "Schimbările biologice care apar în timpul prăbușirilor pieței", "Studiul accidentelor", "Analiza tehnică a crash-urilor"], correct: 1 },
                { question: "Cum se propagă emoțiile în piețe?", options: ["Prin internet", "Biologic și social, creând feedback loops", "Doar prin știri", "Nu se propagă"], correct: 1 },
                { question: "Ce poate face un trader conștient de biologia bulelor?", options: ["Să prevadă exact când crapă bula", "Să recunoască semnele de euforie excesivă în sine și în piață", "Să evite complet piețele", "Să creeze bule"], correct: 1 }
            ]
        },
        // Chapter 3
        {
            id: 103,
            chapter_id: 103,
            questions: [
                { question: "Ce este 'the second brain'?", options: ["Un calculator", "Sistemul nervos enteric (celulele din intestin)", "Creierul rațional", "Un indicator tehnic"], correct: 1 },
                { question: "Sunt 'gut feelings' reale?", options: ["Nu, sunt doar superstiții", "Da, sunt semnale fiziologice reale de la sistemul enteric", "Doar la unii oameni", "Doar în sport"], correct: 1 },
                { question: "Ce este 'enteric nervous system'?", options: ["Sistemul nervos central", "Rețeaua de neuroni din tractul digestiv", "Un sistem informatic", "O rețea socială"], correct: 1 },
                { question: "Ce sunt 'visceral signals'?", options: ["Semnale de la televizor", "Semnale care vin din organele interne către creier", "Semnale de tranzacționare", "Semnale vizuale"], correct: 1 },
                { question: "Cum funcționează 'body-based intuition'?", options: ["Prin magie", "Corpul procesează informații și trimite semnale sub forma senzațiilor fizice", "Prin coincidență", "Doar când dormi"], correct: 1 },
                { question: "De ce ignorăm adesea semnalele corporale?", options: ["Pentru că sunt irelevante", "Pentru că societatea valorizează raționalitatea pură", "Pentru că sunt greu de înțeles", "Nu le ignorăm niciodată"], correct: 1 },
                { question: "Ce legătură este între stomac și decizii?", options: ["Nicio legătură", "Stomacul trimite semnale care influențează deciziile și percepția riscului", "Doar foamea afectează", "Doar digestia"], correct: 1 },
                { question: "Ce arată cercetările despre 'gut feelings'?", options: ["Că sunt prostii", "Că sunt rezultatul procesării subconștiente a informațiilor", "Că sunt doar la animale", "Că nu pot fi măsurate"], correct: 1 },
                { question: "Cum poți asculta 'al doilea creier'?", options: ["Nu poți", "Devenind conștient de senzațiile corporale și ce înseamnă ele", "Mâncând mai mult", "Luând medicamente"], correct: 1 },
                { question: "Ce înseamnă 'body-based intuition' pentru traderi?", options: ["Să ignore corpul", "Să recunoască că senzațiile fizice pot fi informații valoroase despre piață", "Să tranzacționeze pe bază de foame", "Să facă exerciții fizice"], correct: 1 }
            ]
        },
        // Chapter 4
        {
            id: 104,
            chapter_id: 104,
            questions: [
                { question: "Cum se dezvoltă intuiția?", options: ["Se naște cu ea", "Prin experiență și recunoașterea pattern-urilor", "Prin citit de cărți", "Prin noroc"], correct: 1 },
                { question: "Ce este 'pattern recognition'?", options: ["Recunoașterea modelelor în date", "Abilitatea creierului de a identifica regularități pe bază de experiență", "Un indicator tehnic", "O strategie de hedging"], correct: 1 },
                { question: "Ce este 'expert trader feel'?", options: ["O senzație fizică", "Abilitatea de a 'simți' piața dezvoltată prin ani de experiență", "Un mit", "O strategie automată"], correct: 1 },
                { question: "Ce spune neuroștiința despre intuiție?", options: ["Că nu există", "Că este procesare subconștientă bazată pe experiență", "Că este mistică", "Că este doar noroc"], correct: 1 },
                { question: "Ce sunt 'experience-based hunches'?", options: ["Bănuieli la întâmplare", "Sentimente informate de ani de expunere la anumite situații", "Vise premonitorii", "Superstiții"], correct: 1 },
                { question: "De ce începătorii nu au intuiție dezvoltată?", options: ["Pentru că sunt proști", "Pentru că nu au acumulat suficientă experiență pentru pattern recognition", "Pentru că intuiția este genetică", "Pentru că nu citesc destul"], correct: 1 },
                { question: "Cum diferențiezi intuiția de impuls emoțional?", options: ["Nu poți", "Intuiția este calmă și bazată pe experiență, impulsul este reactiv", "Sunt același lucru", "Prin calcul matematic"], correct: 1 },
                { question: "Ce rol joacă 'experience' în dezvoltarea intuiției?", options: ["Niciun rol", "Este fundamental - fără experiență nu există pattern recognition", "Doar un rol mic", "Doar la început"], correct: 1 },
                { question: "Cum recunoști un pattern în piață?", options: ["Prin formule matematice", "Prin expunerea repetată la situații similare care creează recunoaștere rapidă", "Prin ghicire", "Prin știri"], correct: 1 },
                { question: "Ce înseamnă să ai 'feel for the markets'?", options: ["Să atingi ecranul", "Să ai o înțelegere intuitivă dezvoltată prin experiență", "Să ai emoții puternice", "Să fii norocos"], correct: 1 }
            ]
        },
        // Chapter 5
        {
            id: 105,
            chapter_id: 105,
            questions: [
                { question: "Ce rol joacă testosteronul în trading?", options: ["Niciun rol", "Afectează apetitul pentru risc și încrederea", "Doar la culturiști", "Doar la începători"], correct: 1 },
                { question: "Ce este 'the winner effect'?", options: ["Un trofeu", "Câștigul crește testosteronul, care crește încrederea și riscul", "Un tip de ordine", "O strategie de hedging"], correct: 1 },
                { question: "Cum afectează 'winning streaks' fiziologia?", options: ["Nu o afectează", "Cresc testosteronul și schimbă comportamentul de risk-taking", "Doar psihologic", "Doar temporar"], correct: 1 },
                { question: "Ce este 'overconfidence biology'?", options: ["O boală", "Schimbările biologice care fac ca oamenii să devină prea încrezători", "Un curs de biologie", "Un indicator"], correct: 1 },
                { question: "Ce hormoni sunt implicați în 'risk-taking'?", options: ["Doar adrenalina", "Testosteronul crește apetitul pentru risc", "Doar cortizolul", "Insulina"], correct: 1 },
                { question: "De ce este periculos să câștigi prea mult?", options: ["Pentru că pierzi banii", "Pentru că testosteronul ridicat duce la risk-taking excesiv", "Pentru că te impozitează", "Nu este periculos"], correct: 1 },
                { question: "Cum schimbă câștigul creierul?", options: ["Nu îl schimbă", "Crește testosteronul care modifică percepția riscului", "Doar temporar", "Doar la percepția culorilor"], correct: 1 },
                { question: "Ce se întâmplă când testosteronul este prea ridicat?", options: ["Devii mai prudent", "Devii mai agresiv și iei riscuri nejustificate", "Nu se întâmplă nimic", "Devii mai inteligent"], correct: 1 },
                { question: "Cum gestionezi efectele testosteronului în trading?", options: ["Ignori hormonii", "Recunoști când ești 'high' pe câștiguri și reduci mărimea pozițiilor", "Ieși din toate pozițiile", "Tranzacționezi mai mult"], correct: 1 },
                { question: "Ce înseamnă să fii conștient de biologia câștigului?", options: ["Să nu câștigi niciodată", "Să recunoști că succesul îți poate altera judecata", "Să ignori câștigurile", "Să sărbătorești mereu"], correct: 1 }
            ]
        },
        // Chapter 6
        {
            id: 106,
            chapter_id: 106,
            questions: [
                { question: "Cum schimbă succesul chimia creierului?", options: ["Nu o schimbă", "Crește testosteronul și alți neurotransmițători", "Doar temporar", "Doar la unii oameni"], correct: 1 },
                { question: "Ce este 'testosterone feedback loop'?", options: ["Un cerc vicios", "Câștig → testosteron ↑ → risc ↑ → câștig/pierdere", "Un indicator tehnic", "O strategie"], correct: 1 },
                { question: "Ce este 'risk escalation'?", options: ["Creșterea treptată a riscului luat pe măsură ce câștigi", "O strategie bună", "Un tip de ordin", "O metodă de hedging"], correct: 0 },
                { question: "Ce înseamnă 'winning changes you'?", options: ["Te îmbogățești", "Succesul modifică biologia și comportamentul tău", "Te schimbi hainele", "Te muți"], correct: 1 },
                { question: "Ce este 'biological momentum'?", options: ["Un indicator tehnic", "Tendința de a continua un comportament datorită schimbărilor hormonale", "Viteza corpului", "Energia fizică"], correct: 1 },
                { question: "De ce este feedback loop periculos?", options: ["Nu este", "Pentru că te poate duce la risk-taking excesiv și pierderi mari", "Pentru că încetinește", "Pentru că te face să dormi"], correct: 1 },
                { question: "Cum întrerupi un feedback loop negativ?", options: ["Nu poți", "Conștientizându-l și luând pauze/reducând mărimea", "Tranzacționând mai mult", "Ignorându-l"], correct: 1 },
                { question: "Ce se întâmplă în timpul unui streak pozitiv?", options: ["Devii mai precaut", "Testosteronul crește și poți deveni overconfident", "Nu se întâmplă nimic", "Devii mai inteligent"], correct: 1 },
                { question: "De ce este greu de oprit un feedback loop?", options: ["Pentru că este automat și biologic", "Pentru că este manual", "Pentru că nu există", "Pentru că este ușor"], correct: 0 },
                { question: "Ce înseamnă să fii conștient de feedback loops?", options: ["Să le ignori", "Să recunoști când biologia îți influențează deciziile", "Să le amplifici", "Să eviți succesul"], correct: 1 }
            ]
        },
        // Chapter 7
        {
            id: 107,
            chapter_id: 107,
            questions: [
                { question: "Ce este cortizolul?", options: ["Un hormon de creștere", "Hormonul stresului care afectează deciziile și riscul", "Un neurotransmițător de fericire", "Un indicator tehnic"], correct: 1 },
                { question: "Ce este 'stress response'?", options: ["O strategie", "Reacția biologică la pierderi și presiune", "Un tip de ordin", "O tehnică de relaxare"], correct: 1 },
                { question: "Cum afectează 'losing streaks' biologia?", options: ["Nu o afectează", "Cresc cortizolul și schimbă percepția riscului", "Doar psihologic", "Cresc testosteronul"], correct: 1 },
                { question: "Ce este 'risk aversion physiology'?", options: ["Frica de risc", "Schimbările biologice care te fac să eviți riscul după pierderi", "Un curs", "O strategie conservatoare"], correct: 1 },
                { question: "Ce se întâmplă când cortizolul este ridicat?", options: ["Devii mai încrezător", "Devii mai anxios și eviți riscuri bune", "Nu se întâmplă nimic", "Devii mai fericit"], correct: 1 },
                { question: "Cum gestionezi 'dealing with losses' biologic?", options: ["Ignori pierderile", "Recunoști efectele cortizolului și iei pauze", "Tranzacționezi mai mult să recuperezi", "Te enervezi"], correct: 1 },
                { question: "De ce este periculos să pierzi mult?", options: ["Doar financiar", "Cortizolul ridicat poate duce la decizii defensive proaste", "Nu este periculos", "Doar emoțional"], correct: 1 },
                { question: "Ce este 'counterfeit' în acest context?", options: ["Bani falși", "Senzația falsă că ești în pericol datorită cortizolului", "Un indicator fals", "O strategie falsă"], correct: 1 },
                { question: "Cum recunoști că ești sub influența cortizolului?", options: ["Nu poți", "Anxietate, frică excesivă, evitarea riscurilor rezonabile", "Fericire", "Energie"], correct: 1 },
                { question: "Ce legătură este între stres și decizii?", options: ["Nicio legătură", "Stresul cronic distorsionează percepția și capacitatea de decizie", "Doar la unii oameni", "Stresul ajută întotdeauna"], correct: 1 }
            ]
        },
        // Chapter 8
        {
            id: 108,
            chapter_id: 108,
            questions: [
                { question: "Ce sunt 'chronic stress effects'?", options: ["Efecte temporare", "Daune biologice pe termen lung datorate stresului susținut", "Efecte pozitive", "Efecte doar psihologice"], correct: 1 },
                { question: "Ce face cortizolul în exces pe termen lung?", options: ["Te ajută", "Dăunează creierului, sistemului imunitar și deciziilor", "Te face mai puternic", "Nu face nimic"], correct: 1 },
                { question: "Ce este 'decision fatigue'?", options: ["Oboseala fizică", "Epuizarea capacității de a lua decizii bune după prea multe decizii", "Lipsa de somn", "Foamea"], correct: 1 },
                { question: "Ce legătură este între 'health and trading'?", options: ["Nicio legătură", "Sănătatea fizică afectează direct performanța de trading", "Doar indirectă", "Doar pentru sportivi"], correct: 1 },
                { question: "Ce este 'burnout biology'?", options: ["O boală", "Schimbările biologice care apar în burnout", "Un indicator", "O strategie"], correct: 1 },
                { question: "Cum afectează epuizarea tradingul?", options: ["Îl îmbunătățește", "Reduce calitatea deciziilor și crește erorile", "Nu îl afectează", "Doar temporar"], correct: 1 },
                { question: "Ce simptome indică 'exhaustion' în trading?", options: ["Energie", "Oboseală cronică, iritabilitate, decizii proaste", "Fericire", "Somn bun"], correct: 1 },
                { question: "Cum previi 'burnout'?", options: ["Tranzacționând mai mult", "Pauze regulate, gestionarea stresului, somn bun", "Ignorând simptomele", "Cafea mai multă"], correct: 1 },
                { question: "De ce este somnul important pentru traderi?", options: ["Doar pentru relaxare", "Reglează hormonii și reface capacitatea de decizie", "Nu este important", "Doar pentru vise"], correct: 1 },
                { question: "Ce înseamnă 'sustainable trading'?", options: ["Trading ecologic", "Practicarea tradingului fără a-ți distruge sănătatea", "Trading pe termen scurt", "Trading fără risc"], correct: 1 }
            ]
        },
        // Chapter 9
        {
            id: 109,
            chapter_id: 109,
            questions: [
                { question: "Ce este 'biological resilience'?", options: ["Rezistența fizică", "Capacitatea de a reveni biologic după stres", "Un indicator", "O strategie de hedging"], correct: 1 },
                { question: "Ce înseamnă 'managing physiology'?", options: ["A controla pe alții", "A-ți conștientiza și regla stările corporale", "A lua medicamente", "A face sport"], correct: 1 },
                { question: "Ce este 'optimal decision state'?", options: ["Starea de fericire", "Starea biologică în care iei cele mai bune decizii", "Starea de somn", "Starea de stres maxim"], correct: 1 },
                { question: "Ce sunt 'recovery strategies'?", options: ["Strategii de trading", "Metode de a te recupera biologic după stres", "Planuri de afaceri", "Strategii de marketing"], correct: 1 },
                { question: "Ce înseamnă 'sustainable trading'?", options: ["Trading pe termen lung", "A tranzacționa într-un mod care poate fi menținut fără burnout", "Trading ecologic", "Trading automat"], correct: 1 },
                { question: "Cum îți recapeți echilibrul biologic?", options: ["Tranzacționând mai mult", "Pauze, exercițiu, somn, meditație", "Ignorând stresul", "Mâncând zahăr"], correct: 1 },
                { question: "De ce este 'resilience' importantă?", options: ["Nu este", "Pentru că tradingul presupune inevitabil stres și pierderi", "Doar la început", "Doar pentru sportivi"], correct: 1 },
                { question: "Ce tehnici pot îmbunătăți 'resilience'?", options: ["Ignorarea problemei", "Mindfulness, exercițiu fizic, somn adecvat", "Muncă mai multă", "Cafea"], correct: 1 },
                { question: "Cum gestionezi stresul în timp real?", options: ["Nu poți", "Respirație, pauze scurte, conștientizare", "Continuând să tranzacționezi", "Bând alcool"], correct: 1 },
                { question: "Ce înseamnă să fii un trader 'sustenabil'?", options: ["Să câștigi mereu", "Să poți continua să tranzacționezi pe termen lung fără a te distruge", "Să folosești energie verde", "Să tranzacționezi puțin"], correct: 1 }
            ]
        },
        // Chapter 10
        {
            id: 110,
            chapter_id: 110,
            questions: [
                { question: "Ce este 'biological self-awareness'?", options: ["A ști cum funcționează corpul uman", "Conștientizarea propriilor stări biologice și cum afectează deciziile", "A te examina medical", "A fi bolnav"], correct: 1 },
                { question: "Ce sunt 'practical applications' ale științei pentru traderi?", options: ["Teorii abstracte", "Strategii concrete bazate pe biologie pentru îmbunătățirea performanței", "Experimente de laborator", "Cursuri de biologie"], correct: 1 },
                { question: "Ce înseamnă 'trading performance'?", options: ["Doar profitul", "Calitatea deciziilor și rezultatele pe termen lung", "Viteza de execuție", "Numărul de tranzacții"], correct: 1 },
                { question: "Ce este 'mind-body optimization'?", options: ["O dietă", "Optimizarea performanței prin îmbunătățirea sănătății fizice și mentale", "Un indicator tehnic", "O strategie automată"], correct: 1 },
                { question: "Ce înseamnă 'long-term success' în trading?", options: ["Un câștig mare", "Consistență și sustenabilitate pe ani", "O strategie complexă", "Noroc constant"], correct: 1 },
                { question: "Cum integrezi biologia în tradingul tău?", options: ["Ignorând-o", "Conștientizând-ți stările și ajustând comportamentul", "Luând suplimente", "Faci teste medicale zilnic"], correct: 1 },
                { question: "Care este mesajul principal al cărții?", options: ["Traderii ar trebui să devină medici", "Succesul în trading depinde de înțelegerea și gestionarea biologiei tale", "Biologia nu contează", "Doar tehnica contează"], correct: 1 },
                { question: "Ce înseamnă să fii 'the hour between dog and wolf'?", options: ["Să fii agresiv", "Să fii conștient de transformarea ta biologică între stări", "Să fii nocturn", "Să fii animal"], correct: 1 },
                { question: "Ce ar trebui să facă un trader după ce citește această carte?", options: ["Să devină biolog", "Să-și dezvolte conștientizarea biologică și să-și optimizeze stările", "Să ignore biologia", "Să schimbe complet strategia"], correct: 1 },
                { question: "Ce este succesul adevărat în trading conform lui Coates?", options: ["Câștiguri mari rapide", "Abilitatea de a performa consistent în timp prin gestionarea biologiei", "A avea cea mai bună strategie", "A lucra cel mai mult"], correct: 1 }
            ]
        }
    ],

    // Badge Definitions
    badges: [
        { id: "first_blood", name: "First Blood", description: "Complete your first chapter", emoji: "🩸", target: 1, type: "chapters" },
        { id: "on_fire", name: "On Fire", description: "Maintain a 7-day reading streak", emoji: "🔥", target: 7, type: "streak" },
        { id: "quiz_master", name: "Quiz Master", description: "Score 10/10 on a quiz", emoji: "🎯", target: 1, type: "perfect_quiz" },
        { id: "note_taker", name: "Note Taker", description: "Add 5 shared notes", emoji: "📝", target: 5, type: "notes" },
        { id: "deep_thinker", name: "Deep Thinker", description: "Complete your first book", emoji: "🧠", target: 1, type: "books" },
        { id: "trading_apprentice", name: "Trading Apprentice", description: "Complete 3 weekly challenges", emoji: "📈", target: 3, type: "challenges" }
    ],

    // Initial Users
    users: [
        {
            id: "alex",
            name: "Alex",
            discord_id: "acro16hunna",
            current_streak: 0,
            longest_streak: 0,
            chapters_read: 0,
            badges: [],
            quiz_scores: {},
            notes: [],
            last_read_date: null
        },
        {
            id: "dhianna",
            name: "Dhianna",
            discord_id: "Dhianna369",
            current_streak: 0,
            longest_streak: 0,
            chapters_read: 0,
            badges: [],
            quiz_scores: {},
            notes: [],
            last_read_date: null
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BOOKCLUB_DATA;
}
