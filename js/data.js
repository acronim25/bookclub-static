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
        }
    ],

    // Chapters for Thinking in Bets
    chapters: [
        {
            id: 1,
            book_id: 1,
            number: 1,
            title: "Life Is Poker, Not Chess",
            summary: "Poker is a better model for decision-making than chess. In chess, all information is visible; in poker (and life), we make decisions with hidden information and uncertainty. The key is separating decision quality from outcome quality.",
            key_concepts: [
                "Chess vs Poker metaphor",
                "Hidden information",
                "Uncertainty in decisions",
                "Decision quality ≠ Outcome quality",
                "Resulting (judging decisions by outcomes)"
            ]
        },
        {
            id: 2,
            book_id: 1,
            number: 2,
            title: "Wanna Bet?",
            summary: "When we frame decisions as bets, we think more probabilistically. Betting forces us to examine our confidence levels and consider alternative outcomes. The author explores how thinking in bets improves decision quality.",
            key_concepts: [
                "Thinking in bets framework",
                "Probabilistic thinking",
                "Confidence calibration",
                "Alternative outcomes",
                "Belief formation"
            ]
        },
        {
            id: 3,
            book_id: 1,
            number: 3,
            title: "Bet to Learn: Fielding Your Outcome-Blind Decisions",
            summary: "We learn more from outcomes when we separate luck from skill. By analyzing decisions without knowing the outcomes (outcome-blind analysis), we can better evaluate decision quality and learn from experience.",
            key_concepts: [
                "Separating luck from skill",
                "Outcome-blind analysis",
                "Learning from experience",
                "Decision review process",
                "Fielding decisions"
            ]
        },
        {
            id: 4,
            book_id: 1,
            number: 4,
            title: "The Buddy System",
            summary: "We are better at evaluating others' decisions than our own due to self-serving bias. Creating a 'buddy system' or group for honest feedback helps overcome this bias and improve decision-making.",
            key_concepts: [
                "Self-serving bias",
                "Motivated reasoning",
                "Accountability partners",
                "Group decision-making",
                "Truth-seeking groups"
            ]
        },
        {
            id: 5,
            book_id: 1,
            number: 5,
            title: "Dissent to Win",
            summary: "Diversity of thought and dissenting opinions improve decision-making. Creating an environment where disagreement is valued helps uncover blind spots and reduce groupthink.",
            key_concepts: [
                "Diversity of thought",
                "Constructive dissent",
                "Red teaming",
                "Blind spot analysis",
                "Groupthink prevention"
            ]
        },
        {
            id: 6,
            book_id: 1,
            number: 6,
            title: "Adventures in Mental Time Travel",
            summary: "Techniques for making better decisions by using mental time travel: pre-mortems (imagining failure before it happens), backcasting (imagining success and working backward), and scenario planning.",
            key_concepts: [
                "Pre-mortem analysis",
                "Backcasting",
                "Scenario planning",
                "Mental time travel",
                "Future self empathy"
            ]
        },
        {
            id: 7,
            book_id: 1,
            number: 7,
            title: "Chesley Sullenberger's Crash Landing: The Passengers' Perspective",
            summary: "Examining how we evaluate others' decisions and the role of hindsight bias. When we know the outcome, we judge decisions differently than when we're deciding in the moment.",
            key_concepts: [
                "Hindsight bias",
                "Monday morning quarterbacking",
                "Outcome bias",
                "Decision evaluation",
                "Passenger perspective"
            ]
        },
        {
            id: 8,
            book_id: 1,
            number: 8,
            title: "The Value of Negative Thinking",
            summary: "Productive regret and negative thinking can improve decisions. Rather than toxic regret, we should use disappointment to fuel better future decisions through counterfactual thinking.",
            key_concepts: [
                "Productive regret",
                "Counterfactual thinking",
                "Near-miss analysis",
                "Learning from failure",
                "Toxic vs productive regret"
            ]
        },
        {
            id: 9,
            book_id: 1,
            number: 9,
            title: "Rubber-Band Routines and Other Ways to Avoid Decision Traps",
            summary: "Building routines and systems to avoid common decision traps. Creating rubber-band routines that snap us back to good decision-making when we drift.",
            key_concepts: [
                "Decision routines",
                "Rubber-band routines",
                "Decision hygiene",
                "Checklists",
                "Avoiding traps"
            ]
        },
        {
            id: 10,
            book_id: 1,
            number: 10,
            title: "Beat the Dealer: The Power of Base Rates",
            summary: "Using base rates and outside view to make better predictions. Understanding regression to the mean and avoiding the planning fallacy.",
            key_concepts: [
                "Base rates",
                "Outside view",
                "Regression to the mean",
                "Planning fallacy",
                "Reference class forecasting"
            ]
        },
        {
            id: 11,
            book_id: 1,
            number: 11,
            title: "Outcomes: What a Difference a Day Makes",
            summary: "How small changes in timing can dramatically affect outcomes. Understanding path dependence and the role of luck in success and failure.",
            key_concepts: [
                "Path dependence",
                "Timing effects",
                "Luck and skill",
                "Outcome variance",
                "Temporal perspective"
            ]
        },
        {
            id: 12,
            book_id: 1,
            number: 12,
            title: "The Long Game: Doing Something Hard",
            summary: "Building a long-term decision-making practice. The importance of continuous improvement and treating life as a long game rather than individual hands.",
            key_concepts: [
                "Long-term thinking",
                "Continuous improvement",
                "Decision practice",
                "Life as a long game",
                "Skill development"
            ]
        }
    ],

    // Quizzes (only for chapters 1-3)
    quizzes: [
        {
            id: 1,
            chapter_id: 1,
            questions: [
                {
                    question: "What is 'resulting'?",
                    options: [
                        "Making decisions based on past results",
                        "Judging the quality of a decision by its outcome",
                        "Documenting all trading results",
                        "Calculating expected value"
                    ],
                    correct: 1
                },
                {
                    question: "Why is poker a better metaphor for life decisions than chess?",
                    options: [
                        "Poker is more popular than chess",
                        "Chess is too hard to learn",
                        "Poker involves hidden information and luck, like real decisions",
                        "Chess doesn't have betting"
                    ],
                    correct: 2
                },
                {
                    question: "What should you do when you have a good outcome from a bad decision?",
                    options: [
                        "Celebrate the win",
                        "Recognize it as luck and learn from the process",
                        "Repeat the same decision process",
                        "Tell everyone about your success"
                    ],
                    correct: 1
                },
                {
                    question: "In trading, what's the danger of 'resulting'?",
                    options: [
                        "You'll make too much money",
                        "You might repeat bad processes because they got lucky once",
                        "You'll become too confident",
                        "You'll take too little risk"
                    ],
                    correct: 1
                },
                {
                    question: "What's the key insight about decision quality vs outcome quality?",
                    options: [
                        "They're always the same",
                        "Good decisions always lead to good outcomes",
                        "A good decision can have a bad outcome due to luck",
                        "Only outcomes matter in the end"
                    ],
                    correct: 2
                },
                {
                    question: "Which field relies purely on skill with no hidden information?",
                    options: [
                        "Poker",
                        "Trading",
                        "Chess",
                        "Investing"
                    ],
                    correct: 2
                },
                {
                    question: "What percentage of poker hands do professionals play?",
                    options: [
                        "Most hands they get",
                        "About 20% - waiting for good situations",
                        "Only when they have pocket aces",
                        "All hands to practice"
                    ],
                    correct: 1
                },
                {
                    question: "Why do we naturally engage in 'resulting'?",
                    options: [
                        "It's taught in school",
                        "It's rational and correct",
                        "Our brains are wired to create narratives from outcomes",
                        "It's in the definition of good decisions"
                    ],
                    correct: 2
                },
                {
                    question: "What's the relationship between uncertainty and good decision-making?",
                    options: [
                        "Good decisions eliminate all uncertainty",
                        "Accepting uncertainty is essential for good decisions",
                        "Uncertainty means you shouldn't decide",
                        "Only make decisions when certain"
                    ],
                    correct: 1
                },
                {
                    question: "What separates professional poker players from amateurs?",
                    options: [
                        "They get better cards",
                        "They never lose",
                        "They make better decisions under uncertainty, accepting short-term variance",
                        "They play more hands"
                    ],
                    correct: 2
                }
            ]
        },
        {
            id: 2,
            chapter_id: 2,
            questions: [
                {
                    question: "What does 'thinking in bets' mean?",
                    options: [
                        "Gambling on every decision",
                        "Framing decisions as probabilistic beliefs with confidence levels",
                        "Only making financial decisions",
                        "Avoiding all risk"
                    ],
                    correct: 1
                },
                {
                    question: "Why is it helpful to ask 'Wanna bet?' about your beliefs?",
                    options: [
                        "To make money from friends",
                        "It forces you to examine your confidence and consider alternatives",
                        "To avoid making decisions",
                        "To prove you're right"
                    ],
                    correct: 1
                },
                {
                    question: "What happens to our beliefs when we state them out loud?",
                    options: [
                        "They become more extreme",
                        "We become more open to updating them",
                        "They never change",
                        "They become facts"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'belief calibration'?",
                    options: [
                        "Adjusting your beliefs to match reality",
                        "Ensuring your confidence matches your accuracy",
                        "Believing everything you hear",
                        "Ignoring contradictory evidence"
                    ],
                    correct: 1
                },
                {
                    question: "In trading, why is probabilistic thinking important?",
                    options: [
                        "It guarantees profits",
                        "It helps size positions based on edge and variance",
                        "It eliminates losses",
                        "It's required by law"
                    ],
                    correct: 1
                },
                {
                    question: "What's a sign that you're not thinking probabilistically?",
                    options: [
                        "You assign specific percentages to outcomes",
                        "You see things as 'definitely' happening or not",
                        "You consider multiple scenarios",
                        "You track your prediction accuracy"
                    ],
                    correct: 1
                },
                {
                    question: "What is the 'illusion of control'?",
                    options: [
                        "Having complete control over outcomes",
                        "Overestimating how much our actions determine results",
                        "A trading strategy",
                        "Being in charge of a company"
                    ],
                    correct: 1
                },
                {
                    question: "How should you update your beliefs when you get new information?",
                    options: [
                        "Ignore it if it contradicts your view",
                        "Update proportionally based on the strength of evidence",
                        "Change your mind completely immediately",
                        "Never update - stick to your guns"
                    ],
                    correct: 1
                },
                {
                    question: "What does 'truth-seeking' mean in decision-making?",
                    options: [
                        "Always being right",
                        "Actively trying to find what's true, not just what confirms your view",
                        "Telling the truth to others",
                        "Avoiding decisions"
                    ],
                    correct: 1
                },
                {
                    question: "Why do we tend to form beliefs first and look for evidence later?",
                    options: [
                        "It's the scientific method",
                        "Our brains are pattern-matching machines that form quick narratives",
                        "It leads to better decisions",
                        "It's required by logic"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 3,
            chapter_id: 3,
            questions: [
                {
                    question: "What is 'outcome-blind' analysis?",
                    options: [
                        "Ignoring all outcomes",
                        "Analyzing decisions without knowing the results",
                        "Being blind to bad outcomes",
                        "Not tracking results"
                    ],
                    correct: 1
                },
                {
                    question: "Why is outcome-blind analysis valuable?",
                    options: [
                        "It ignores reality",
                        "It prevents hindsight bias from distorting decision evaluation",
                        "It's faster than normal analysis",
                        "It guarantees good outcomes"
                    ],
                    correct: 1
                },
                {
                    question: "What is the difference between a good outcome and a good decision?",
                    options: [
                        "There is no difference",
                        "Good outcomes can result from bad decisions due to luck",
                        "Good decisions always produce good outcomes",
                        "Only outcomes matter in trading"
                    ],
                    correct: 1
                },
                {
                    question: "What should you analyze after a trade: the process or the P&L?",
                    options: [
                        "Just the P&L - money talks",
                        "The process - was the reasoning sound regardless of outcome?",
                        "Neither - just move on",
                        "Only if you won"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'fielding' in the context of decisions?",
                    options: [
                        "Playing baseball",
                        "Examining how a decision was made before knowing the outcome",
                        "Ignoring feedback",
                        "Making decisions quickly"
                    ],
                    correct: 1
                },
                {
                    question: "Why do we learn less from experience than we think?",
                    options: [
                        "We're not smart enough",
                        "Outcomes are noisy signals - luck clouds the feedback",
                        "We don't have enough experiences",
                        "Experience doesn't matter"
                    ],
                    correct: 1
                },
                {
                    question: "What should a trading journal focus on?",
                    options: [
                        "Just entry and exit prices",
                        "The reasoning and process, not just the P&L",
                        "How you felt emotionally",
                        "What other traders did"
                    ],
                    correct: 1
                },
                {
                    question: "How can you separate luck from skill in your results?",
                    options: [
                        "You can't - they're the same",
                        "Look at many outcomes over time, analyze decision quality separately",
                        "Ask your friends",
                        "Look at one big win"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'hindsight bias'?",
                    options: [
                        "Seeing the future clearly",
                        "Believing after an outcome that you knew it would happen",
                        "Learning from the past",
                        "Having perfect memory"
                    ],
                    correct: 1
                },
                {
                    question: "Why should you review losing trades that had good processes?",
                    options: [
                        "To feel bad about yourself",
                        "To understand variance and reinforce good decision-making",
                        "To blame external factors",
                        "You shouldn't - losses are always mistakes"
                    ],
                    correct: 1
                }
            ]
        }
    ],

    // Badge Definitions
    badges: [
        {
            id: "first_blood",
            name: "First Blood",
            description: "Complete your first chapter",
            emoji: "🩸",
            target: 1,
            type: "chapters"
        },
        {
            id: "on_fire",
            name: "On Fire",
            description: "Maintain a 7-day reading streak",
            emoji: "🔥",
            target: 7,
            type: "streak"
        },
        {
            id: "quiz_master",
            name: "Quiz Master",
            description: "Score 10/10 on a quiz",
            emoji: "🎯",
            target: 1,
            type: "perfect_quiz"
        },
        {
            id: "note_taker",
            name: "Note Taker",
            description: "Add 5 shared notes",
            emoji: "📝",
            target: 5,
            type: "notes"
        },
        {
            id: "deep_thinker",
            name: "Deep Thinker",
            description: "Complete your first book",
            emoji: "🧠",
            target: 1,
            type: "books"
        },
        {
            id: "trading_apprentice",
            name: "Trading Apprentice",
            description: "Complete 3 weekly challenges",
            emoji: "📈",
            target: 3,
            type: "challenges"
        }
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
