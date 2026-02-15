/**
 * Book Club App - Main Logic
 * Handles localStorage, user management, quiz scoring, badges, etc.
 */

// Storage keys
const STORAGE_KEYS = {
    CURRENT_USER: 'bookclub_current_user',
    USER_DATA: 'bookclub_user_data',
    NOTES: 'bookclub_notes',
    PROGRESS: 'bookclub_progress'
};

// Initialize data from seed
function initializeData() {
    // Check if already initialized
    if (!localStorage.getItem(STORAGE_KEYS.USER_DATA)) {
        // Create initial user data structure
        const initialData = {};
        BOOKCLUB_DATA.users.forEach(user => {
            initialData[user.id] = { ...user };
        });
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(initialData));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.NOTES)) {
        localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify([]));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.PROGRESS)) {
        localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify({}));
    }
}

// Get current user
function getCurrentUser() {
    const userId = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (!userId) return null;
    
    const users = getAllUsers();
    return users[userId] || null;
}

// Set current user
function setCurrentUser(userId) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, userId);
}

// Get all users
function getAllUsers() {
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : {};
}

// Save user data
function saveUser(userId, userData) {
    const users = getAllUsers();
    users[userId] = userData;
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(users));
}

// Get book by ID
function getBook(id) {
    return BOOKCLUB_DATA.books.find(b => b.id === parseInt(id));
}

// Get all books
function getAllBooks() {
    return BOOKCLUB_DATA.books;
}

// Get chapter by ID
function getChapter(id) {
    return BOOKCLUB_DATA.chapters.find(c => c.id === parseInt(id));
}

// Get chapters by book ID
function getChaptersByBook(bookId) {
    return BOOKCLUB_DATA.chapters.filter(c => c.book_id === parseInt(bookId));
}

// Get quiz by chapter ID
function getQuiz(chapterId) {
    return BOOKCLUB_DATA.quizzes.find(q => q.chapter_id === parseInt(chapterId));
}

// Get all badges
function getAllBadges() {
    return BOOKCLUB_DATA.badges;
}

// Check if chapter is completed
function isChapterCompleted(userId, chapterId) {
    const progress = getProgress(userId);
    return progress[chapterId] === true;
}

// Get progress
function getProgress(userId) {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    const progress = data ? JSON.parse(data) : {};
    return progress[userId] || {};
}

// Mark chapter complete
function markChapterComplete(userId, chapterId, notes = '') {
    const progress = getProgress(userId);
    progress[chapterId] = true;
    
    const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
    allProgress[userId] = progress;
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(allProgress));
    
    // Update user stats
    const user = getAllUsers()[userId];
    if (user) {
        // Update streak
        const today = new Date().toISOString().split('T')[0];
        const lastRead = user.last_read_date;
        
        if (lastRead) {
            const lastDate = new Date(lastRead);
            const todayDate = new Date(today);
            const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                user.current_streak += 1;
                if (user.current_streak > user.longest_streak) {
                    user.longest_streak = user.current_streak;
                }
            } else if (diffDays > 1) {
                user.current_streak = 1;
            }
        } else {
            user.current_streak = 1;
            user.longest_streak = 1;
        }
        
        user.last_read_date = today;
        user.chapters_read = Object.keys(progress).length;
        
        // Check for badges
        const newBadges = checkBadges(user);
        user.badges = [...new Set([...user.badges, ...newBadges])];
        
        saveUser(userId, user);
        
        return newBadges;
    }
    
    return [];
}

// Save quiz result
function saveQuizResult(userId, chapterId, score) {
    const user = getAllUsers()[userId];
    if (user) {
        user.quiz_scores[chapterId] = Math.max(score, user.quiz_scores[chapterId] || 0);
        
        // Check for badges
        const newBadges = checkBadges(user);
        user.badges = [...new Set([...user.badges, ...newBadges])];
        
        saveUser(userId, user);
        return newBadges;
    }
    return [];
}

// Check badges
function checkBadges(user) {
    const newBadges = [];
    const progress = getProgress(user.id);
    const completedChapters = Object.keys(progress).length;
    
    BOOKCLUB_DATA.badges.forEach(badge => {
        if (user.badges.includes(badge.id)) return;
        
        let earned = false;
        
        switch (badge.type) {
            case 'chapters':
                earned = completedChapters >= badge.target;
                break;
            case 'streak':
                earned = user.current_streak >= badge.target;
                break;
            case 'perfect_quiz':
                earned = Object.values(user.quiz_scores).some(s => s === 10);
                break;
            case 'notes':
                earned = user.notes.length >= badge.target;
                break;
            case 'books':
                const bookChapters = {};
                BOOKCLUB_DATA.chapters.forEach(ch => {
                    if (!bookChapters[ch.book_id]) bookChapters[ch.book_id] = 0;
                    if (progress[ch.id]) bookChapters[ch.book_id]++;
                });
                earned = Object.values(bookChapters).some((count, idx) => {
                    const bookId = Object.keys(bookChapters)[idx];
                    const total = getChaptersByBook(bookId).length;
                    return count >= total;
                });
                break;
        }
        
        if (earned) {
            newBadges.push(badge.id);
        }
    });
    
    return newBadges;
}

// Get user badges
function getUserBadges(userId) {
    const user = getAllUsers()[userId];
    if (!user) return [];
    
    return user.badges.map(id => BOOKCLUB_DATA.badges.find(b => b.id === id)).filter(Boolean);
}

// Get badge progress
function getBadgeProgress(userId) {
    const user = getAllUsers()[userId];
    if (!user) return {};
    
    const progress = {};
    const completedChapters = Object.keys(getProgress(userId)).length;
    
    BOOKCLUB_DATA.badges.forEach(badge => {
        let current = 0;
        
        switch (badge.type) {
            case 'chapters':
                current = completedChapters;
                break;
            case 'streak':
                current = user.current_streak;
                break;
            case 'perfect_quiz':
                current = Object.values(user.quiz_scores).filter(s => s === 10).length;
                break;
            case 'notes':
                current = user.notes.length;
                break;
            case 'books':
                const bookProgress = {};
                BOOKCLUB_DATA.chapters.forEach(ch => {
                    if (!bookProgress[ch.book_id]) bookProgress[ch.book_id] = 0;
                    if (getProgress(userId)[ch.id]) bookProgress[ch.book_id]++;
                });
                current = Object.values(bookProgress).filter((count, idx) => {
                    const bookId = parseInt(Object.keys(bookProgress)[idx]);
                    return count >= getChaptersByBook(bookId).length;
                }).length;
                break;
        }
        
        progress[badge.id] = {
            current,
            target: badge.target,
            percentage: Math.min(100, (current / badge.target) * 100),
            earned: user.badges.includes(badge.id)
        };
    });
    
    return progress;
}

// Add note
function addNote(userId, chapterId, noteText) {
    const notes = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || '[]');
    const chapter = getChapter(chapterId);
    const user = getAllUsers()[userId];
    
    const note = {
        id: Date.now(),
        user_id: userId,
        user_name: user ? user.name : 'Unknown',
        chapter_id: chapterId,
        chapter_title: chapter ? chapter.title : '',
        note: noteText,
        created_at: new Date().toISOString()
    };
    
    notes.push(note);
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    
    // Update user notes count
    if (user) {
        user.notes.push(note.id);
        
        // Check for badges
        const newBadges = checkBadges(user);
        user.badges = [...new Set([...user.badges, ...newBadges])];
        
        saveUser(userId, user);
        return newBadges;
    }
    
    return [];
}

// Get all notes
function getAllNotes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || '[]').reverse();
}

// Get notes by chapter
function getNotesByChapter(chapterId) {
    return getAllNotes().filter(n => n.chapter_id === parseInt(chapterId));
}

// Get leaderboard
function getLeaderboard() {
    const users = getAllUsers();
    return Object.values(users).map(user => {
        const progress = getProgress(user.id);
        const completedChapters = Object.keys(progress).length;
        const quizScores = Object.values(user.quiz_scores);
        const avgScore = quizScores.length > 0 
            ? quizScores.reduce((a, b) => a + b, 0) / quizScores.length 
            : 0;
        
        return {
            ...user,
            completed_chapters: completedChapters,
            avg_quiz_score: avgScore,
            badge_count: user.badges.length
        };
    }).sort((a, b) => {
        if (b.completed_chapters !== a.completed_chapters) {
            return b.completed_chapters - a.completed_chapters;
        }
        return b.avg_quiz_score - a.avg_quiz_score;
    });
}

// Get stats
function getStats() {
    const users = getAllUsers();
    const notes = getAllNotes();
    const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '{}');
    
    let totalChapters = 0;
    let totalQuizzes = 0;
    let totalScore = 0;
    
    Object.values(users).forEach(user => {
        const progress = getProgress(user.id);
        totalChapters += Object.keys(progress).length;
        
        const scores = Object.values(user.quiz_scores);
        totalQuizzes += scores.length;
        totalScore += scores.reduce((a, b) => a + b, 0);
    });
    
    return {
        total_users: Object.keys(users).length,
        total_chapters_read: totalChapters,
        total_notes: notes.length,
        total_quizzes_taken: totalQuizzes,
        average_quiz_score: totalQuizzes > 0 ? (totalScore / totalQuizzes).toFixed(1) : 0
    };
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeData);

// BookClub API wrapper for inline scripts
const BookClub = {
    getCurrentUser,
    setCurrentUser,
    getAllUsers,
    getAllBooks,
    getBookById: getBook,
    getChaptersByBook,
    getChapterById: getChapter,
    isChapterCompleted,
    getQuizByChapterId: getQuiz,
    getQuizResult: (userId, chapterId) => {
        const user = getAllUsers()[userId];
        return user?.quiz_scores?.[chapterId] || null;
    },
    getQuizByChapter: getQuiz,
    getNotesForChapter: getNotesByChapter,
    getAllBadges,
    getBadgeProgress,
    getAllNotes,
    addNote,
    markChapterComplete,
    showNotification,
    submitQuiz: (chapterId, answers) => {
        const user = getCurrentUser();
        if (!user) {
            showNotification('Please select a user first', 'error');
            return null;
        }
        
        const quiz = getQuiz(chapterId);
        if (!quiz) return null;
        
        // Calculate score
        let correct = 0;
        answers.forEach((answer, idx) => {
            if (answer === quiz.questions[idx].correct) {
                correct++;
            }
        });
        
        const maxScore = quiz.questions.length;
        const score = Math.round((correct / maxScore) * 10);
        const percentage = Math.round((correct / maxScore) * 100);
        
        // Save result
        saveQuizResult(user.id, quiz.id, score);
        
        // Check for badges
        const newBadges = checkAndAwardBadges(user.id);
        
        return {
            score,
            maxScore: 10,
            percentage,
            correct,
            total: maxScore,
            newBadges: newBadges.map(id => {
                const badge = getAllBadges().find(b => b.id === id);
                return badge ? { id: badge.id, name: badge.name, emoji: badge.emoji } : null;
            }).filter(Boolean)
        };
    },
    getCompletedChapters: (userId) => {
        const progress = getProgress(userId);
        return Object.keys(progress).filter(key => progress[key]).map(Number);
    },
    getStreakStatus: (userId) => {
        const user = getAllUsers()[userId];
        return { 
            current: user?.current_streak || 0, 
            longest: user?.longest_streak || 0 
        };
    },
    getUserNoteCount: (userId) => {
        const user = getAllUsers()[userId];
        return user?.notes?.length || 0;
    },
    getRecentActivity: () => [],
    getQuizResults: () => JSON.parse(localStorage.getItem('bookclub_quiz_results') || '{}'),
    initializeData
};
