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
            description: "How Risk Taking Transforms Us, Body and Mind. A neuroscientist's journey into the biology of risk and the trading floor.",
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
            key_concepts: ["Chess vs Poker metaphor", "Hidden information", "Uncertainty in decisions", "Decision quality ≠ Outcome quality", "Resulting"]
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
            summary: "John Coates explores how our bodies respond to financial risk. The stress response isn't just psychological—it's deeply biological, affecting traders' decision-making through hormones like cortisol and testosterone.",
            key_concepts: ["Stress response physiology", "Hormones and trading", "Cortisol and testosterone", "Body-mind connection", "Biological markets hypothesis"]
        },
        {
            id: 102,
            book_id: 2,
            number: 2,
            title: "The Trader's Body",
            summary: "How the physical stress of trading affects decision-making. Traders experience real physiological changes during market volatility that can impair or enhance their judgment.",
            key_concepts: ["Physiological stress markers", "Trading floor biology", "Stress and cognition", "Body awareness", "Performance under pressure"]
        },
        {
            id: 103,
            book_id: 2,
            number: 3,
            title: "Testosterone and Risk",
            summary: "The winner effect: how winning streaks boost testosterone and lead to increased risk-taking. Understanding this cycle helps traders recognize when they're becoming overconfident.",
            key_concepts: ["Winner effect", "Testosterone and confidence", "Risk-taking behavior", "Winning streaks", "Overconfidence biology"]
        },
        {
            id: 104,
            book_id: 2,
            number: 4,
            title: "Cortisol and Fear",
            summary: "The stress hormone cortisol rises during losses and uncertainty. Chronic stress can lead to risk aversion and poor decision-making. Learning to manage cortisol is crucial for trading.",
            key_concepts: ["Cortisol response", "Fear and risk aversion", "Chronic stress effects", "Loss psychology", "Stress management"]
        },
        {
            id: 105,
            book_id: 2,
            number: 5,
            title: "The Hour Between Dog and Wolf",
            summary: "The title chapter explores the transitional state between bull and bear markets. Traders must recognize these transformation periods and adjust their biology accordingly.",
            key_concepts: ["Market transitions", "Bull to bear shifts", "Transformation periods", "Market state recognition", "Adaptive biology"]
        },
        {
            id: 106,
            book_id: 2,
            number: 6,
            title: "Intuitive Trading",
            summary: "How experienced traders develop gut feelings that are actually sophisticated biological responses. Intuition emerges from pattern recognition and bodily awareness.",
            key_concepts: ["Trading intuition", "Pattern recognition", "Embodied cognition", "Experienced judgment", "Gut feelings science"]
        },
        {
            id: 107,
            book_id: 2,
            number: 7,
            title: "Risk and the Brain",
            summary: "Neuroscience reveals how different brain regions process risk and reward. Understanding your brain's risk circuits can help you make better trading decisions.",
            key_concepts: ["Brain risk circuits", "Neuroscience of trading", "Risk processing", "Reward pathways", "Prefrontal cortex"]
        },
        {
            id: 108,
            book_id: 2,
            number: 8,
            title: "Groups and Markets",
            summary: "Markets are collective biological phenomena. Group emotions spread through markets, creating bubbles and crashes. Understanding group biology helps you stay rational.",
            key_concepts: ["Market contagion", "Group emotions", "Herd behavior biology", "Market bubbles", "Collective stress"]
        },
        {
            id: 109,
            book_id: 2,
            number: 9,
            title: "Managing Your Biology",
            summary: "Practical strategies for managing your biological state while trading. Exercise, sleep, and stress management aren't luxuries—they're trading tools.",
            key_concepts: ["Biological self-regulation", "Trading fitness", "Sleep and performance", "Exercise benefits", "Stress management strategies"]
        },
        {
            id: 110,
            book_id: 2,
            number: 10,
            title: "The Biology of Success",
            summary: "Long-term trading success requires biological sustainability. Understanding and managing your body's responses to risk is as important as technical analysis.",
            key_concepts: ["Sustainable trading", "Biological edge", "Long-term performance", "Health and trading", "Body as trading tool"]
        }
    ],

    // Quizzes for both books
    quizzes: [
        // Book 1 quizzes (ids 1-12)
        {
            id: 1,
            chapter_id: 1,
            questions: [
                { question: "What is 'resulting'?", options: ["Making decisions based on past results", "Judging the quality of a decision by its outcome", "Documenting all trading results", "Calculating expected value"], correct: 1 },
                { question: "Why is poker a better metaphor for life decisions than chess?", options: ["Poker is more popular than chess", "Chess is too hard to learn", "Poker involves hidden information and luck, like real decisions", "Chess doesn't have betting"], correct: 2 },
                { question: "What should you do when you have a good outcome from a bad decision?", options: ["Celebrate the win", "Recognize it as luck and learn from the process", "Repeat the same decision process", "Tell everyone about your success"], correct: 1 },
                { question: "In trading, what's the danger of 'resulting'?", options: ["You'll make too much money", "You might repeat bad processes because they got lucky once", "You'll become too confident", "You'll take too little risk"], correct: 1 },
                { question: "What's the key insight about decision quality vs outcome quality?", options: ["They're always the same", "Good decisions always lead to good outcomes", "A good decision can have a bad outcome due to luck", "Only outcomes matter in the end"], correct: 2 }
            ]
        },
        {
            id: 2,
            chapter_id: 2,
            questions: [
                { question: "What does 'thinking in bets' mean?", options: ["Gambling on every decision", "Framing decisions as probabilistic beliefs with confidence levels", "Only making financial decisions", "Avoiding all risk"], correct: 1 },
                { question: "Why is it helpful to ask 'Wanna bet?' about your beliefs?", options: ["To make money from friends", "It forces you to examine your confidence and consider alternatives", "To avoid making decisions", "To prove you're right"], correct: 1 },
                { question: "What is 'belief calibration'?", options: ["Adjusting your beliefs to match reality", "Ensuring your confidence matches your accuracy", "Believing everything you hear", "Ignoring contradictory evidence"], correct: 1 }
            ]
        },
        {
            id: 3,
            chapter_id: 3,
            questions: [
                { question: "What is 'outcome-blind' analysis?", options: ["Ignoring all outcomes", "Analyzing decisions without knowing the results", "Being blind to bad outcomes", "Not tracking results"], correct: 1 },
                { question: "Why is outcome-blind analysis valuable?", options: ["It ignores reality", "It prevents hindsight bias from distorting decision evaluation", "It's faster than normal analysis", "It guarantees good outcomes"], correct: 1 }
            ]
        },
        {
            id: 4,
            chapter_id: 4,
            questions: [
                { question: "What is 'self-serving bias'?", options: ["Always putting others first", "Attributing successes to skill and failures to bad luck", "Being selfish in decisions", "Serving yourself before others"], correct: 1 },
                { question: "Why is a 'buddy system' helpful for decision-making?", options: ["To have someone to blame when things go wrong", "To get honest feedback and overcome self-serving bias", "To make decisions faster", "To avoid making decisions alone"], correct: 1 }
            ]
        },
        {
            id: 5,
            chapter_id: 5,
            questions: [
                { question: "What is 'groupthink'?", options: ["Thinking as a group", "The desire for harmony overriding critical thinking", "Group decision-making", "Collaborative thinking"], correct: 1 },
                { question: "How can you prevent groupthink?", options: ["Always agree with the leader", "Encourage dissent and alternative viewpoints", "Make decisions quickly", "Exclude outsiders"], correct: 1 }
            ]
        },
        {
            id: 6,
            chapter_id: 6,
            questions: [
                { question: "What is a 'pre-mortem'?", options: ["Analyzing failure after it happens", "Imagining a decision failed and working backwards to prevent it", "A medical procedure", "Reviewing past mistakes"], correct: 1 },
                { question: "What is 'backcasting'?", options: ["Predicting the past", "Imagining success and working backward to achieve it", "Looking at historical data", "Reversing a decision"], correct: 1 }
            ]
        },
        {
            id: 7,
            chapter_id: 7,
            questions: [
                { question: "What is 'hindsight bias'?", options: ["Predicting the future", "Believing after an outcome that you knew it would happen", "Learning from history", "Being wise after the event"], correct: 1 },
                { question: "What is 'Monday morning quarterbacking'?", options: ["Watching football on Monday", "Criticizing decisions after knowing the outcome", "Planning for the week", "Making Monday trades"], correct: 1 }
            ]
        },
        {
            id: 8,
            chapter_id: 8,
            questions: [
                { question: "What is 'productive regret'?", options: ["Feeling bad forever", "Using disappointment to fuel better future decisions", "Avoiding all risks", "Being pessimistic"], correct: 1 },
                { question: "What is a 'near-miss'?", options: ["A successful trade", "An outcome that almost went differently", "Missing a trade opportunity", "A complete failure"], correct: 1 }
            ]
        },
        {
            id: 9,
            chapter_id: 9,
            questions: [
                { question: "What is a 'rubber-band routine'?", options: ["Stretching exercises", "A routine that snaps you back to good decisions when you drift", "A flexible schedule", "A workout routine"], correct: 1 },
                { question: "What is 'decision hygiene'?", options: ["Being clean", "Practices that keep your decision-making process healthy", "Avoiding germs", "Organizing your desk"], correct: 1 }
            ]
        },
        {
            id: 10,
            chapter_id: 10,
            questions: [
                { question: "What are 'base rates'?", options: ["Interest rates", "The historical frequency of an event", "Basic math rates", "Starting rates for beginners"], correct: 1 },
                { question: "What is the 'planning fallacy'?", options: ["Planning too much", "Underestimating time and difficulty based on optimism", "Making detailed plans", "Planning for failure"], correct: 1 }
            ]
        },
        {
            id: 11,
            chapter_id: 11,
            questions: [
                { question: "What is 'path dependence'?", options: ["Depending on others", "How small early differences can lead to large later differences", "Following a path in trading", "Path-based trading strategies"], correct: 1 },
                { question: "What is the role of luck in success?", options: ["Luck doesn't matter", "Luck plays a significant role that's often underestimated", "Success is pure luck", "Luck can be eliminated"], correct: 1 }
            ]
        },
        {
            id: 12,
            chapter_id: 12,
            questions: [
                { question: "What is the 'long game' in decision-making?", options: ["A long chess match", "Focusing on long-term improvement rather than individual outcomes", "Taking a long time to decide", "Long-term market predictions"], correct: 1 },
                { question: "Why is patience important in skill development?", options: ["It's a virtue", "Mastery takes time and consistent effort", "It looks good", "Markets reward patience"], correct: 1 }
            ]
        },
        // Book 2 quizzes (ids 101-110)
        {
            id: 101,
            chapter_id: 101,
            questions: [
                { question: "What hormones does Coates focus on in trading?", options: ["Adrenaline and insulin", "Cortisol and testosterone", "Serotonin and dopamine", "Melatonin and growth hormone"], correct: 1 },
                { question: "How does the body respond to financial risk?", options: ["Only mentally", "Through measurable physiological changes", "Not at all", "Only through emotion"], correct: 1 }
            ]
        },
        {
            id: 102,
            chapter_id: 102,
            questions: [
                { question: "What happens to traders during market volatility?", options: ["Nothing physical", "Real physiological changes", "Only emotional changes", "Memory loss"], correct: 1 },
                { question: "Why is body awareness important for traders?", options: ["It's not important", "To recognize stress signals early", "For weight loss", "To impress others"], correct: 1 }
            ]
        },
        {
            id: 103,
            chapter_id: 103,
            questions: [
                { question: "What is the 'winner effect'?", options: ["Always winning", "Winning boosts testosterone and increases risk-taking", "Winning makes you tired", "Winning reduces confidence"], correct: 1 },
                { question: "How can winning streaks be dangerous?", options: ["They never are", "They can lead to overconfidence and excessive risk", "They make you sleepy", "They reduce testosterone"], correct: 1 }
            ]
        },
        {
            id: 104,
            chapter_id: 104,
            questions: [
                { question: "What does cortisol do during losses?", options: ["Decreases", "Rises and can cause risk aversion", "Stays the same", "Makes you happy"], correct: 1 },
                { question: "Why is chronic cortisol elevation bad for trading?", options: ["It's not bad", "It leads to poor decision-making", "It increases profits", "It improves sleep"], correct: 1 }
            ]
        },
        {
            id: 105,
            chapter_id: 105,
            questions: [
                { question: "What does 'hour between dog and wolf' represent?", options: ["Lunch time", "Market transition periods", "Sleep time", "Market opening"], correct: 1 },
                { question: "Why is recognizing market transitions important?", options: ["It's not", "To adjust your biology accordingly", "For entertainment", "To predict exact prices"], correct: 1 }
            ]
        },
        {
            id: 106,
            chapter_id: 106,
            questions: [
                { question: "What is trading intuition according to Coates?", options: ["Magic", "Sophisticated biological pattern recognition", "Luck", "Mystical power"], correct: 1 },
                { question: "How do experienced traders develop gut feelings?", options: ["They don't", "Through pattern recognition and bodily awareness", "By reading books only", "Through meditation alone"], correct: 1 }
            ]
        },
        {
            id: 107,
            chapter_id: 107,
            questions: [
                { question: "Which brain region is crucial for risk processing?", options: ["Occipital lobe", "Prefrontal cortex", "Cerebellum", "Brain stem"], correct: 1 },
                { question: "Why understand your brain's risk circuits?", options: ["It's not important", "To make better trading decisions", "For brain surgery", "To impress friends"], correct: 1 }
            ]
        },
        {
            id: 108,
            chapter_id: 108,
            questions: [
                { question: "How do group emotions spread through markets?", options: ["They don't", "Through biological contagion", "Only through news", "Only through Twitter"], correct: 1 },
                { question: "What creates market bubbles biologically?", options: ["Rational analysis", "Group emotional contagion", "Math formulas", "Government policy"], correct: 1 }
            ]
        },
        {
            id: 109,
            chapter_id: 109,
            questions: [
                { question: "Why is sleep important for trading?", options: ["It's not", "It affects decision-making quality", "Only for dreams", "To pass time"], correct: 1 },
                { question: "What are biological self-regulation strategies?", options: ["Ignoring your body", "Exercise, sleep, and stress management", "Trading more", "Taking supplements only"], correct: 1 }
            ]
        },
        {
            id: 110,
            chapter_id: 110,
            questions: [
                { question: "What does Coates say about long-term trading success?", options: ["It's all about charts", "Requires biological sustainability", "Depends on luck", "Is impossible"], correct: 1 },
                { question: "How is managing your body like technical analysis?", options: ["It's not", "Both are important for trading success", "They are the same", "Body doesn't matter"], correct: 1 }
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
