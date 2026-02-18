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
        },
        // Chapter 4 - The Buddy System
        {
            id: 4,
            chapter_id: 4,
            questions: [
                {
                    question: "What is 'self-serving bias'?",
                    options: [
                        "Always putting others first",
                        "Attributing successes to skill and failures to bad luck",
                        "Being selfish in decisions",
                        "Serving yourself before others"
                    ],
                    correct: 1
                },
                {
                    question: "Why is a 'buddy system' helpful for decision-making?",
                    options: [
                        "To have someone to blame when things go wrong",
                        "To get honest feedback and overcome self-serving bias",
                        "To make decisions faster",
                        "To avoid making decisions alone"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'motivated reasoning'?",
                    options: [
                        "Being highly motivated to succeed",
                        "Interpreting information to support what you already believe",
                        "Reasoning with emotional intelligence",
                        "Making decisions based on motivation"
                    ],
                    correct: 1
                },
                {
                    question: "Why are we better at evaluating others' decisions than our own?",
                    options: [
                        "We're smarter about others",
                        "We don't have emotional attachment to their outcomes",
                        "Others make simpler decisions",
                        "We know others better than ourselves"
                    ],
                    correct: 1
                },
                {
                    question: "What is a 'truth-seeking group'?",
                    options: [
                        "A group that always agrees",
                        "A group focused on finding the truth rather than being right",
                        "A group that seeks hidden information",
                        "A philosophical discussion group"
                    ],
                    correct: 1
                },
                {
                    question: "How should you respond when your buddy challenges your decision?",
                    options: [
                        "Defend your position aggressively",
                        "Listen openly and consider their perspective",
                        "Find a new buddy",
                        "Ignore their feedback"
                    ],
                    correct: 1
                },
                {
                    question: "What is the main benefit of accountability partners in trading?",
                    options: [
                        "They make trades for you",
                        "They provide objective feedback on your decision process",
                        "They guarantee profits",
                        "They reduce trading fees"
                    ],
                    correct: 1
                },
                {
                    question: "Why is group decision-making often better than individual?",
                    options: [
                        "Groups are smarter",
                        "Diverse perspectives catch blind spots",
                        "Groups make faster decisions",
                        "Groups have more information"
                    ],
                    correct: 1
                },
                {
                    question: "What should you do before defending your decision to a group?",
                    options: [
                        "Prepare your arguments",
                        "Consider what would make you change your mind",
                        "Find allies",
                        "Practice your presentation"
                    ],
                    correct: 1
                },
                {
                    question: "What is the danger of surrounding yourself with yes-men?",
                    options: [
                        "They agree too much",
                        "You never hear challenging perspectives",
                        "They slow down decisions",
                        "They create conflict"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 5 - Dissent to Win
        {
            id: 5,
            chapter_id: 5,
            questions: [
                {
                    question: "Why is diversity of thought valuable in decision-making?",
                    options: [
                        "It creates interesting discussions",
                        "Different perspectives uncover blind spots",
                        "It makes everyone feel included",
                        "It speeds up the process"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'red teaming'?",
                    options: [
                        "Working with angry people",
                        "Having someone argue against your position to test it",
                        "Competing with other teams",
                        "Using red markers for important notes"
                    ],
                    correct: 1
                },
                {
                    question: "How should you treat dissenting opinions?",
                    options: [
                        "Ignore them",
                        "Welcome them as valuable input",
                        "Argue against them",
                        "Avoid people who disagree"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'groupthink'?",
                    options: [
                        "Thinking as a group",
                        "The desire for harmony overriding critical thinking",
                        "Group decision-making",
                        "Collaborative thinking"
                    ],
                    correct: 1
                },
                {
                    question: "How can you prevent groupthink?",
                    options: [
                        "Always agree with the leader",
                        "Encourage dissent and alternative viewpoints",
                        "Make decisions quickly",
                        "Exclude outsiders"
                    ],
                    correct: 1
                },
                {
                    question: "What is a 'blind spot'?",
                    options: [
                        "Something you can't see physically",
                        "Information or perspective you're missing",
                        "A spot on your chart",
                        "An obvious mistake"
                    ],
                    correct: 1
                },
                {
                    question: "Why should you seek out people who disagree with you?",
                    options: [
                        "To argue with them",
                        "To test your beliefs and find weaknesses",
                        "To convince them you're right",
                        "To prove them wrong"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'constructive dissent'?",
                    options: [
                        "Arguing for the sake of arguing",
                        "Disagreeing with the goal of improving the decision",
                        "Being negative about everything",
                        "Refusing to participate"
                    ],
                    correct: 1
                },
                {
                    question: "How do you create an environment where dissent is valued?",
                    options: [
                        "Punish disagreement",
                        "Reward people for raising concerns",
                        "Ignore different opinions",
                        "Make decisions alone"
                    ],
                    correct: 1
                },
                {
                    question: "What happens when everyone in a group agrees too quickly?",
                    options: [
                        "The decision is definitely correct",
                        "Important perspectives may have been missed",
                        "The process is efficient",
                        "Everyone feels good"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 6 - Adventures in Mental Time Travel
        {
            id: 6,
            chapter_id: 6,
            questions: [
                {
                    question: "What is a 'pre-mortem'?",
                    options: [
                        "Analyzing failure after it happens",
                        "Imagining a decision failed and working backwards to prevent it",
                        "A medical procedure",
                        "Reviewing past mistakes"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'backcasting'?",
                    options: [
                        "Predicting the past",
                        "Imagining success and working backward to achieve it",
                        "Looking at historical data",
                        "Reversing a decision"
                    ],
                    correct: 1
                },
                {
                    question: "Why is mental time travel useful?",
                    options: [
                        "It's entertaining",
                        "It helps identify obstacles and opportunities",
                        "It predicts the future accurately",
                        "It replaces actual experience"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'scenario planning'?",
                    options: [
                        "Planning one specific future",
                    "Considering multiple possible futures and preparing for each",
                        "Daydreaming about success",
                        "Making rigid long-term plans"
                    ],
                    correct: 1
                },
                {
                    question: "How does considering your 'future self' help decisions?",
                    options: [
                        "It delays decisions",
                        "It helps you consider long-term consequences",
                        "It's just imagination",
                        "It makes you anxious"
                    ],
                    correct: 1
                },
                {
                    question: "When should you do a pre-mortem?",
                    options: [
                        "After a failure",
                        "Before making an important decision",
                        "When reviewing past trades",
                        "During a winning streak"
                    ],
                    correct: 1
                },
                {
                    question: "What question should you ask in a pre-mortem?",
                    options: [
                        "Why did we fail?",
                        "Imagine it's one year from now and this failed. Why?",
                        "What went right?",
                        "Who is to blame?"
                    ],
                    correct: 1
                },
                {
                    question: "How does backcasting differ from forecasting?",
                    options: [
                        "Backcasting looks at the past",
                        "Backcasting starts with success and works backward",
                        "Forecasting is more accurate",
                        "They're the same thing"
                    ],
                    correct: 1
                },
                {
                    question: "Why create multiple scenarios instead of one prediction?",
                    options: [
                        "It's more work",
                        "The future is uncertain and multiple outcomes are possible",
                        "It confuses the decision",
                        "It's required by law"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'future self empathy'?",
                    options: [
                        "Feeling sorry for your future self",
                        "Making decisions that your future self will thank you for",
                        "Predicting emotions",
                        "Avoiding future decisions"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 7 - Chesley Sullenberger's Crash Landing
        {
            id: 7,
            chapter_id: 7,
            questions: [
                {
                    question: "What is 'hindsight bias'?",
                    options: [
                        "Predicting the future",
                        "Believing after an outcome that you knew it would happen",
                        "Learning from history",
                        "Being wise after the event"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'Monday morning quarterbacking'?",
                    options: [
                        "Watching football on Monday",
                        "Criticizing decisions after knowing the outcome",
                        "Planning for the week",
                        "Making Monday trades"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'outcome bias'?",
                    options: [
                        "Bias toward positive outcomes",
                        "Judging decisions by their results rather than quality",
                        "Being biased against outcomes",
                        "Predicting outcomes"
                    ],
                    correct: 1
                },
                {
                    question: "Why is it unfair to judge decisions by outcomes?",
                    options: [
                        "People try their best",
                        "Good decisions can have bad outcomes due to luck",
                        "It's not nice",
                        "Outcomes are random"
                    ],
                    correct: 1
                },
                {
                    question: "What is the 'passenger perspective'?",
                    options: [
                        "Viewing decisions without knowing the outcome",
                        "Flying on airplanes",
                        "Being passive",
                        "Letting others decide"
                    ],
                    correct: 0
                },
                {
                    question: "How can you avoid hindsight bias?",
                    options: [
                        "Trust your memory",
                        "Document your reasoning before knowing the outcome",
                        "Forget past decisions",
                        "Always predict correctly"
                    ],
                    correct: 1
                },
                {
                    question: "Why do we say 'I knew it' after events?",
                    options: [
                        "We actually knew",
                        "Hindsight bias makes us reconstruct our memory",
                        "We're psychic",
                        "It's a figure of speech"
                    ],
                    correct: 1
                },
                {
                    question: "How should you evaluate a trade that lost money?",
                    options: [
                        "It was a bad trade",
                        "Was the reasoning sound at the time of the decision?",
                        "Blame the market",
                        "Never take that trade again"
                    ],
                    correct: 1
                },
                {
                    question: "What is dangerous about outcome bias in trading?",
                    options: [
                        "It makes you feel bad",
                        "You might abandon good strategies that had unlucky outcomes",
                        "It affects your P&L",
                        "Other traders will judge you"
                    ],
                    correct: 1
                },
                {
                    question: "How do you judge decision quality fairly?",
                    options: [
                        "By the outcome",
                        "By the process and information available at the time",
                        "By how you feel about it",
                        "By what others think"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 8 - The Value of Negative Thinking
        {
            id: 8,
            chapter_id: 8,
            questions: [
                {
                    question: "What is 'productive regret'?",
                    options: [
                        "Feeling bad forever",
                        "Using disappointment to fuel better future decisions",
                        "Avoiding all risks",
                        "Being pessimistic"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'counterfactual thinking'?",
                    options: [
                        "Thinking that goes against facts",
                        "Imagining alternative outcomes to learn",
                        "Being contrary",
                        "Denying reality"
                    ],
                    correct: 1
                },
                {
                    question: "What is a 'near-miss'?",
                    options: [
                        "A successful trade",
                        "An outcome that almost went differently",
                        "Missing a trade opportunity",
                        "A complete failure"
                    ],
                    correct: 1
                },
                {
                    question: "Why analyze near-misses?",
                    options: [
                        "To feel lucky",
                        "They contain valuable information about risk",
                        "To avoid them",
                        "They're interesting stories"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'toxic regret'?",
                    options: [
                        "Dangerous chemicals",
                        "Unproductive dwelling on past mistakes",
                        "Regretting toxic relationships",
                        "Environmental concerns"
                    ],
                    correct: 1
                },
                {
                    question: "How is productive regret different from toxic regret?",
                    options: [
                        "Productive regret feels better",
                        "Productive regret leads to learning and action",
                        "Toxic regret is shorter",
                        "They're the same"
                    ],
                    correct: 1
                },
                {
                    question: "What should you do after a loss?",
                    options: [
                        "Forget about it",
                        "Analyze what you can learn without dwelling",
                        "Blame external factors",
                        "Quit trading"
                    ],
                    correct: 1
                },
                {
                    question: "How can negative thinking improve decisions?",
                    options: [
                        "It makes you pessimistic",
                        "It helps you identify risks and failure modes",
                        "It prevents action",
                        "It scares you"
                    ],
                    correct: 1
                },
                {
                    question: "What is the danger of only focusing on positive outcomes?",
                    options: [
                        "You miss opportunities to learn from what went wrong",
                        "You become too happy",
                        "You attract good luck",
                        "Nothing - positivity is always good"
                    ],
                    correct: 0
                },
                {
                    question: "How do you turn regret into a learning opportunity?",
                    options: [
                        "Feel bad about it",
                        "Identify what you'd do differently and apply it",
                        "Blame others",
                        "Pretend it didn't happen"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 9 - Rubber-Band Routines
        {
            id: 9,
            chapter_id: 9,
            questions: [
                {
                    question: "What is a 'rubber-band routine'?",
                    options: [
                        "Stretching exercises",
                        "A routine that snaps you back to good decisions when you drift",
                        "A flexible schedule",
                        "A workout routine"
                    ],
                    correct: 1
                },
                {
                    question: "Why are decision routines important?",
                    options: [
                        "They're boring",
                        "They prevent you from making impulsive choices",
                        "They slow you down",
                        "They're required"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'decision hygiene'?",
                    options: [
                        "Being clean",
                        "Practices that keep your decision-making process healthy",
                        "Avoiding germs",
                        "Organizing your desk"
                    ],
                    correct: 1
                },
                {
                    question: "How can checklists improve decisions?",
                    options: [
                        "They make you slow",
                        "They ensure you consider all important factors",
                        "They're annoying",
                        "Only pilots need them"
                    ],
                    correct: 1
                },
                {
                    question: "What are common decision traps?",
                    options: [
                        "Physical holes",
                        "Biases and habits that lead to poor choices",
                        "Mouse traps",
                        "Legal issues"
                    ],
                    correct: 1
                },
                {
                    question: "When should you use your rubber-band routine?",
                    options: [
                        "Only when winning",
                        "When you notice yourself drifting from good practices",
                        "Once a week",
                        "Never"
                    ],
                    correct: 1
                },
                {
                    question: "What is an example of a trading checklist item?",
                    options: [
                        "Is the chart pretty?",
                        "Have I identified my stop-loss and position size?",
                        "Do I feel lucky?",
                        "Is it a round number?"
                    ],
                    correct: 1
                },
                {
                    question: "How do routines help under pressure?",
                    options: [
                        "They add stress",
                        "They provide a pre-planned process to follow",
                        "They slow you down too much",
                        "They eliminate creativity"
                    ],
                    correct: 1
                },
                {
                    question: "Why create routines before you need them?",
                    options: [
                        "It's more work",
                        "Good decisions are harder to make in the moment",
                        "Routines are fun",
                        "You have more time"
                    ],
                    correct: 1
                },
                {
                    question: "What happens without decision routines?",
                    options: [
                        "You're more flexible",
                        "You fall into bad habits and biases",
                        "You're more creative",
                        "Nothing significant"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 10 - Beat the Dealer
        {
            id: 10,
            chapter_id: 10,
            questions: [
                {
                    question: "What are 'base rates'?",
                    options: [
                        "Interest rates",
                        "The historical frequency of an event",
                        "Basic math rates",
                        "Starting rates for beginners"
                    ],
                    correct: 1
                },
                {
                    question: "What is the 'outside view'?",
                    options: [
                        "Looking out the window",
                        "Using base rates and similar cases rather than your specific situation",
                        "External opinions",
                        "Market outlook"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'regression to the mean'?",
                    options: [
                        "Going back to average performance after extreme results",
                        "A statistical error",
                        "Getting worse over time",
                        "Consistent results"
                    ],
                    correct: 0
                },
                {
                    question: "What is the 'planning fallacy'?",
                    options: [
                        "Planning too much",
                        "Underestimating time and difficulty based on optimism",
                        "Making detailed plans",
                        "Planning for failure"
                    ],
                    correct: 1
                },
                {
                    question: "Why are base rates important in prediction?",
                    options: [
                        "They're historical facts",
                        "They provide a starting point before adjusting for specifics",
                        "They're always correct",
                        "They're easy to find"
                    ],
                    correct: 1
                },
                {
                    question: "How do you use the outside view?",
                    options: [
                        "Look at your specific case only",
                        "Find similar cases and their outcomes first",
                        "Ask outsiders",
                        "Ignore your situation"
                    ],
                    correct: 1
                },
                {
                    question: "What happens after an extreme trading result?",
                    options: [
                        "You'll keep performing at that level",
                        "Results will likely regress toward your average",
                        "You've found an edge",
                        "You should increase size"
                    ],
                    correct: 1
                },
                {
                    question: "Why do we underestimate task completion time?",
                    options: [
                        "We're lazy",
                        "The planning fallacy makes us optimistic about our specific case",
                        "We don't care about deadlines",
                        "Time moves faster"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'reference class forecasting'?",
                    options: [
                        "Weather forecasting",
                        "Predicting based on outcomes of similar situations",
                        "Classroom predictions",
                        "Reference book forecasts"
                    ],
                    correct: 1
                },
                {
                    question: "How should you react to a winning streak?",
                    options: [
                        "Increase position sizes dramatically",
                        "Recognize regression to the mean and stay disciplined",
                        "Assume you've mastered trading",
                        "Tell everyone you're a genius"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 11 - Outcomes
        {
            id: 11,
            chapter_id: 11,
            questions: [
                {
                    question: "What is 'path dependence'?",
                    options: [
                        "Following a path",
                        "How you got somewhere affects where you can go",
                        "GPS navigation",
                        "A hiking trail"
                    ],
                    correct: 1
                },
                {
                    question: "How can timing affect outcomes?",
                    options: [
                        "It doesn't matter",
                        "Small timing differences can lead to very different results",
                        "Only for day traders",
                        "Timing is everything"
                    ],
                    correct: 1
                },
                {
                    question: "What is the relationship between luck and skill in outcomes?",
                    options: [
                        "Skill determines everything",
                        "Both play roles, often hard to separate",
                        "Luck doesn't exist",
                        "Only luck matters"
                    ],
                    correct: 1
                },
                {
                    question: "Why is outcome variance important to understand?",
                    options: [
                        "It makes trading exciting",
                        "Same decisions can produce different results",
                        "It's a statistical concept",
                        "It affects taxes"
                    ],
                    correct: 1
                },
                {
                    question: "What does 'temporal perspective' mean in decision-making?",
                    options: [
                        "Being on time",
                        "Considering how timing affects outcomes",
                        "Having a watch",
                        "Trading hours"
                    ],
                    correct: 1
                },
                {
                    question: "Why shouldn't you judge a strategy by one outcome?",
                    options: [
                        "One outcome isn't enough data",
                        "Variance means results fluctuate",
                        "Both of the above",
                        "You should judge immediately"
                    ],
                    correct: 2
                },
                {
                    question: "How does path dependence affect trading?",
                    options: [
                        "It doesn't",
                        "Your current position limits future options",
                        "You should always change paths",
                        "Paths are random"
                    ],
                    correct: 1
                },
                {
                    question: "What can you control in trading?",
                    options: [
                        "The outcomes",
                        "The decision process, not the results",
                        "The market",
                        "Other traders"
                    ],
                    correct: 1
                },
                {
                    question: "Why is it hard to replicate successful outcomes?",
                    options: [
                        "Success is easy",
                        "Timing and context matter, not just actions",
                        "You need better tools",
                        "Others block you"
                    ],
                    correct: 1
                },
                {
                    question: "What should you focus on: outcomes or process?",
                    options: [
                        "Outcomes - they pay the bills",
                        "Process - it's what you control",
                        "Both equally",
                        "Neither"
                    ],
                    correct: 1
                }
            ]
        },
        // Chapter 12 - The Long Game
        {
            id: 12,
            chapter_id: 12,
            questions: [
                {
                    question: "What does 'the long game' mean in decision-making?",
                    options: [
                        "A long board game",
                        "Focusing on long-term improvement over short-term results",
                        "Taking forever to decide",
                        "Long-term investments only"
                    ],
                    correct: 1
                },
                {
                    question: "Why is continuous improvement important?",
                    options: [
                        "It's trendy",
                        "Small improvements compound over time",
                        "It impresses others",
                        "It's required"
                    ],
                    correct: 1
                },
                {
                    question: "What is 'decision practice'?",
                    options: [
                        "Rehearsing speeches",
                        "Regularly working on improving your decision-making skills",
                        "Making random decisions",
                        "Avoiding decisions"
                    ],
                    correct: 1
                },
                {
                    question: "How should you treat trading?",
                    options: [
                        "As a get-rich-quick scheme",
                        "As a skill to develop over time",
                        "As gambling",
                        "As entertainment"
                    ],
                    correct: 1
                },
                {
                    question: "What is the danger of focusing on individual trades?",
                    options: [
                        "You miss the big picture",
                        "You lose sight of the long-term process",
                        "Both of the above",
                        "Nothing"
                    ],
                    correct: 2
                },
                {
                    question: "How do skills develop?",
                    options: [
                        "Overnight",
                        "Through consistent practice and learning",
                        "By reading only",
                        "By watching others"
                    ],
                    correct: 1
                },
                {
                    question: "Why is patience important in skill development?",
                    options: [
                        "It's a virtue",
                        "Mastery takes time and consistent effort",
                        "It looks good",
                        "Markets reward patience"
                    ],
                    correct: 1
                },
                {
                    question: "What should you track for long-term improvement?",
                    options: [
                        "Only your P&L",
                        "Your decision process and patterns over time",
                        "What others are doing",
                        "Market predictions"
                    ],
                    correct: 1
                },
                {
                    question: "How do you maintain motivation for the long game?",
                    options: [
                        "Focus only on results",
                        "Celebrate process improvements, not just outcomes",
                        "Compare yourself to others",
                        "Expect quick wins"
                    ],
                    correct: 1
                },
                {
                    question: "What is the ultimate goal of thinking in bets?",
                    options: [
                        "To never lose",
                        "To make better decisions by embracing uncertainty",
                        "To predict the future",
                        "To win every trade"
                    ],
                    correct: 1
                }
            ]
        },

        {
            id: 101,
            book_id: 2,
            number: 1,
            title: "The Biology of Risk",
            summary: "John Coates explores how our bodies respond to financial risk. The stress response isn't just psychological—it's deeply biological, affecting traders' decision-making through hormones like cortisol and testosterone.",
            key_concepts: [
                "Stress response physiology",
                "Hormones and trading",
                "Cortisol and testosterone",
                "Body-mind connection",
                "Biological markets hypothesis"
            ]
        },
        {
            id: 102,
            book_id: 2,
            number: 2,
            title: "The Trader's Body",
            summary: "How the physical stress of trading affects decision-making. Traders experience real physiological changes during market volatility that can impair or enhance their judgment.",
            key_concepts: [
                "Physiological stress markers",
                "Trading floor biology",
                "Stress and cognition",
                "Body awareness",
                "Performance under pressure"
            ]
        },
        {
            id: 103,
            book_id: 2,
            number: 3,
            title: "Testosterone and Risk",
            summary: "The winner effect: how winning streaks boost testosterone and lead to increased risk-taking. Understanding this cycle helps traders recognize when they're becoming overconfident.",
            key_concepts: [
                "Winner effect",
                "Testosterone and confidence",
                "Risk-taking behavior",
                "Winning streaks",
                "Overconfidence biology"
            ]
        },
        {
            id: 104,
            book_id: 2,
            number: 4,
            title: "Cortisol and Fear",
            summary: "The stress hormone cortisol rises during losses and uncertainty. Chronic stress can lead to risk aversion and poor decision-making. Learning to manage cortisol is crucial for trading.",
            key_concepts: [
                "Cortisol response",
                "Fear and risk aversion",
                "Chronic stress effects",
                "Loss psychology",
                "Stress management"
            ]
        },
        {
            id: 105,
            book_id: 2,
            number: 5,
            title: "The Hour Between Dog and Wolf",
            summary: "The title chapter explores the transitional state between bull and bear markets. Traders must recognize these transformation periods and adjust their biology accordingly.",
            key_concepts: [
                "Market transitions",
                "Bull to bear shifts",
                "Transformation periods",
                "Market state recognition",
                "Adaptive biology"
            ]
        },
        {
            id: 106,
            book_id: 2,
            number: 6,
            title: "Intuitive Trading",
            summary: "How experienced traders develop gut feelings that are actually sophisticated biological responses. Intuition emerges from pattern recognition and bodily awareness.",
            key_concepts: [
                "Trading intuition",
                "Pattern recognition",
                "Embodied cognition",
                "Experienced judgment",
                "Gut feelings science"
            ]
        },
        {
            id: 107,
            book_id: 2,
            number: 7,
            title: "Risk and the Brain",
            summary: "Neuroscience reveals how different brain regions process risk and reward. Understanding your brain's risk circuits can help you make better trading decisions.",
            key_concepts: [
                "Brain risk circuits",
                "Neuroscience of trading",
                "Risk processing",
                "Reward pathways",
                "Prefrontal cortex"
            ]
        },
        {
            id: 108,
            book_id: 2,
            number: 8,
            title: "Groups and Markets",
            summary: "Markets are collective biological phenomena. Group emotions spread through markets, creating bubbles and crashes. Understanding group biology helps you stay rational.",
            key_concepts: [
                "Market contagion",
                "Group emotions",
                "Herd behavior biology",
                "Market bubbles",
                "Collective stress"
            ]
        },
        {
            id: 109,
            book_id: 2,
            number: 9,
            title: "Managing Your Biology",
            summary: "Practical strategies for managing your biological state while trading. Exercise, sleep, and stress management aren't luxuries—they're trading tools.",
            key_concepts: [
                "Biological self-regulation",
                "Trading fitness",
                "Sleep and performance",
                "Exercise benefits",
                "Stress management strategies"
            ]
        },
        {
            id: 110,
            book_id: 2,
            number: 10,
            title: "The Biology of Success",
            summary: "Long-term trading success requires biological sustainability. Understanding and managing your body's responses to risk is as important as technical analysis.",
            key_concepts: [
                "Sustainable trading",
                "Biological edge",
                "Long-term performance",
                "Health and trading",
                "Body as trading tool"
            ]
        },

        {
            id: 101,
            chapter_id: 101,
            questions: [
                {
                    question: "What hormones does Coates focus on in trading?",
                    options: [
                        "Adrenaline and insulin",
                        "Cortisol and testosterone",
                        "Serotonin and dopamine",
                        "Melatonin and growth hormone"
                    ],
                    correct: 1
                },
                {
                    question: "What is the 'biological markets hypothesis'?",
                    options: [
                        "Markets are purely psychological",
                        "Markets involve biological responses in participants",
                        "Markets follow biological cycles",
                        "Markets are like ecosystems"
                    ],
                    correct: 1
                },
                {
                    question: "How does the body respond to financial risk?",
                    options: [
                        "Only mentally",
                        "Through measurable physiological changes",
                        "Not at all",
                        "Only through emotion"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 102,
            chapter_id: 102,
            questions: [
                {
                    question: "What happens to traders during market volatility?",
                    options: [
                        "Nothing physical",
                        "Real physiological changes",
                        "Only emotional changes",
                        "Memory loss"
                    ],
                    correct: 1
                },
                {
                    question: "Why is body awareness important for traders?",
                    options: [
                        "It's not important",
                        "To recognize stress signals early",
                        "For weight loss",
                        "To impress others"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 103,
            chapter_id: 103,
            questions: [
                {
                    question: "What is the 'winner effect'?",
                    options: [
                        "Always winning",
                        "Winning boosts testosterone and increases risk-taking",
                        "Winning makes you tired",
                        "Winning reduces confidence"
                    ],
                    correct: 1
                },
                {
                    question: "How can winning streaks be dangerous?",
                    options: [
                        "They never are",
                        "They can lead to overconfidence and excessive risk",
                        "They make you sleepy",
                        "They reduce testosterone"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 104,
            chapter_id: 104,
            questions: [
                {
                    question: "What does cortisol do during losses?",
                    options: [
                        "Decreases",
                        "Rises and can cause risk aversion",
                        "Stays the same",
                        "Makes you happy"
                    ],
                    correct: 1
                },
                {
                    question: "Why is chronic cortisol elevation bad for trading?",
                    options: [
                        "It's not bad",
                        "It leads to poor decision-making",
                        "It increases profits",
                        "It improves sleep"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 105,
            chapter_id: 105,
            questions: [
                {
                    question: "What does 'hour between dog and wolf' represent?",
                    options: [
                        "Lunch time",
                        "Market transition periods",
                        "Sleep time",
                        "Market opening"
                    ],
                    correct: 1
                },
                {
                    question: "Why is recognizing market transitions important?",
                    options: [
                        "It's not",
                        "To adjust your biology accordingly",
                        "For entertainment",
                        "To predict exact prices"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 106,
            chapter_id: 106,
            questions: [
                {
                    question: "What is trading intuition according to Coates?",
                    options: [
                        "Magic",
                        "Sophisticated biological pattern recognition",
                        "Luck",
                        "Mystical power"
                    ],
                    correct: 1
                },
                {
                    question: "How do experienced traders develop gut feelings?",
                    options: [
                        "They don't",
                        "Through pattern recognition and bodily awareness",
                        "By reading books only",
                        "Through meditation alone"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 107,
            chapter_id: 107,
            questions: [
                {
                    question: "Which brain region is crucial for risk processing?",
                    options: [
                        "Occipital lobe",
                        "Prefrontal cortex",
                        "Cerebellum",
                        "Brain stem"
                    ],
                    correct: 1
                },
                {
                    question: "Why understand your brain's risk circuits?",
                    options: [
                        "It's not important",
                        "To make better trading decisions",
                        "For brain surgery",
                        "To impress friends"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 108,
            chapter_id: 108,
            questions: [
                {
                    question: "How do group emotions spread through markets?",
                    options: [
                        "They don't",
                        "Through biological contagion",
                        "Only through news",
                        "Only through Twitter"
                    ],
                    correct: 1
                },
                {
                    question: "What creates market bubbles biologically?",
                    options: [
                        "Rational analysis",
                        "Group emotional contagion",
                        "Math formulas",
                        "Government policy"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 109,
            chapter_id: 109,
            questions: [
                {
                    question: "Why is sleep important for trading?",
                    options: [
                        "It's not",
                        "It affects decision-making quality",
                        "Only for dreams",
                        "To pass time"
                    ],
                    correct: 1
                },
                {
                    question: "What are biological self-regulation strategies?",
                    options: [
                        "Ignoring your body",
                        "Exercise, sleep, and stress management",
                        "Trading more",
                        "Taking supplements only"
                    ],
                    correct: 1
                }
            ]
        },
        {
            id: 110,
            chapter_id: 110,
            questions: [
                {
                    question: "What does Coates say about long-term trading success?",
                    options: [
                        "It's all about charts",
                        "Requires biological sustainability",
                        "Depends on luck",
                        "Is impossible"
                    ],
                    correct: 1
                },
                {
                    question: "How is managing your body like technical analysis?",
                    options: [
                        "It's not",
                        "Both are important for trading success",
                        "They are the same",
                        "Body doesn't matter"
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
