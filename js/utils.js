/**
 * Book Club - Shared Utilities
 * Funcții partajate pentru gestionarea progresului și quiz-urilor
 */

// Priority: 1. API (dacă e disponibil) → 2. localStorage bookclub_quiz_results → 3. localStorage bookclub_user_data (fallback)

const API_URL = 'https://5-189-142-233.nip.io/api';

/**
 * Obține rezultatul quiz-ului pentru un capitol și utilizator specific
 * @param {number} chapterId - ID-ul capitolului
 * @param {string} userId - ID-ul utilizatorului (discord_id: 'acro16hunna' sau 'Dhianna369')
 * @returns {object|null} - Rezultatul quiz-ului sau null dacă nu există
 */
function getQuizResult(chapterId, userId) {
    if (!userId || !chapterId) return null;
    
    // Normalizează userId (poate fi 'acro16hunna', 'Dhianna369', 'alex', 'dhianna', 'Alex', 'Dhianna')
    const normalizedUserId = normalizeUserId(userId);
    
    // 1. Încearcă formatul nou: bookclub_quiz_results
    try {
        const quizResults = JSON.parse(localStorage.getItem('bookclub_quiz_results') || '[]');
        const result = quizResults.find(r => {
            const resultUserId = normalizeUserId(r.userId);
            return r.chapterId == chapterId && resultUserId === normalizedUserId;
        });
        if (result) {
            return {
                chapterId: parseInt(chapterId),
                userId: normalizedUserId,
                score: result.score || 0,
                total: result.total || result.maxScore || 10,
                percentage: result.percentage || Math.round((result.score / (result.total || 10)) * 100),
                completedAt: result.completedAt || result.timestamp
            };
        }
    } catch (e) {
        console.error('Error reading bookclub_quiz_results:', e);
    }
    
    // 2. Fallback la formatul vechi: bookclub_user_data
    try {
        const userKey = normalizedUserId === 'acro16hunna' ? 'alex' : 'dhianna';
        const allUserData = JSON.parse(localStorage.getItem('bookclub_user_data') || '{}');
        const userData = allUserData[userKey];
        
        if (userData?.quiz_results?.[chapterId]) {
            const qr = userData.quiz_results[chapterId];
            const total = qr.answers?.length || qr.total || 10;
            return {
                chapterId: parseInt(chapterId),
                userId: normalizedUserId,
                score: qr.score || 0,
                total: total,
                percentage: qr.percentage || Math.round((qr.score / total) * 100),
                completedAt: qr.completed_at || qr.timestamp
            };
        }
    } catch (e) {
        console.error('Error reading bookclub_user_data:', e);
    }
    
    // 3. Verifică și în bookclub_progress (format alternativ)
    try {
        const userKey = normalizedUserId === 'acro16hunna' ? 'alex' : 'dhianna';
        const allProgress = JSON.parse(localStorage.getItem('bookclub_progress') || '{}');
        const chapterProgress = allProgress[userKey]?.[chapterId];
        
        if (chapterProgress) {
            const data = typeof chapterProgress === 'object' ? chapterProgress : { completed: chapterProgress };
            if (data.completed || data.quizScore !== undefined) {
                const score = data.quizScore || data.score || 0;
                const total = data.quizTotal || data.total || 10;
                return {
                    chapterId: parseInt(chapterId),
                    userId: normalizedUserId,
                    score: score,
                    total: total,
                    percentage: data.percentage || Math.round((score / total) * 100),
                    completedAt: data.completed_at || data.completedAt || new Date().toISOString()
                };
            }
        }
    } catch (e) {
        console.error('Error reading bookclub_progress:', e);
    }
    
    return null;
}

/**
 * Normalizare userId la formatul standard (acro16hunna sau Dhianna369)
 */
function normalizeUserId(userId) {
    if (!userId) return null;
    
    const id = String(userId).toLowerCase().trim();
    
    // Mapări pentru Alex
    if (id === 'alex' || id === 'acro16hunna') return 'acro16hunna';
    
    // Mapări pentru Dhianna
    if (id === 'dhianna' || id === 'dhianna369') return 'Dhianna369';
    
    // Returnează original dacă nu se potrivește
    return userId;
}

/**
 * Verifică dacă un capitol este completat pentru un utilizator
 * (bazat pe quiz, nu doar pe marcaj manual)
 */
function isChapterCompletedViaQuiz(chapterId, userId) {
    return getQuizResult(chapterId, userId) !== null;
}

/**
 * Calculează progresul real al unei cărți pentru un utilizator
 * bazat pe capitolele cu quiz completat
 */
function calculateRealProgress(bookId, userId, booksData, chaptersData) {
    if (!userId || !bookId) {
        return { completed: 0, total: 0, percentage: 0 };
    }
    
    // Găsește cartea
    const book = booksData?.find(b => b.id === bookId);
    const bookChapters = chaptersData?.filter(c => c.book_id === bookId) || [];
    const totalChapters = bookChapters.length || book?.total_chapters || 0;
    
    if (totalChapters === 0) {
        return { completed: 0, total: 0, percentage: 0 };
    }
    
    // Numără capitolele completate (cu quiz)
    let completedCount = 0;
    for (const chapter of bookChapters) {
        if (getQuizResult(chapter.id, userId)) {
            completedCount++;
        }
    }
    
    return {
        completed: completedCount,
        total: totalChapters,
        percentage: Math.round((completedCount / totalChapters) * 100)
    };
}

/**
 * Obține progresul pentru afișare (include scorul quiz-ului)
 */
function getChapterProgressDisplay(chapterId, userId) {
    const quizResult = getQuizResult(chapterId, userId);
    
    if (quizResult) {
        return {
            completed: true,
            statusHTML: `<span class="completed">✓ Completed (${quizResult.score}/${quizResult.total})</span>`,
            score: quizResult.score,
            total: quizResult.total,
            percentage: quizResult.percentage
        };
    }
    
    return {
        completed: false,
        statusHTML: `<span class="not-completed">○ Not completed</span>`,
        score: 0,
        total: 0,
        percentage: 0
    };
}

/**
 * Salvează rezultatul unui quiz în toate formatele (cross-device sync)
 */
function saveQuizResult(chapterId, userId, score, total, percentage) {
    const normalizedUserId = normalizeUserId(userId);
    const timestamp = new Date().toISOString();
    
    // 1. Salvează în formatul nou: bookclub_quiz_results
    try {
        const quizResults = JSON.parse(localStorage.getItem('bookclub_quiz_results') || '[]');
        
        // Elimină rezultatul existent pentru același capitol și utilizator
        const filtered = quizResults.filter(r => {
            const resultUserId = normalizeUserId(r.userId);
            return !(r.chapterId == chapterId && resultUserId === normalizedUserId);
        });
        
        // Adaugă rezultatul nou
        filtered.push({
            chapterId: parseInt(chapterId),
            userId: normalizedUserId,
            score: score,
            total: total,
            percentage: percentage,
            completedAt: timestamp
        });
        
        localStorage.setItem('bookclub_quiz_results', JSON.stringify(filtered));
        console.log('✓ Saved to bookclub_quiz_results');
    } catch (e) {
        console.error('Error saving to bookclub_quiz_results:', e);
    }
    
    // 2. Salvează și în bookclub_progress pentru compatibilitate
    try {
        const userKey = normalizedUserId === 'acro16hunna' ? 'alex' : 'dhianna';
        const allProgress = JSON.parse(localStorage.getItem('bookclub_progress') || '{}');
        
        if (!allProgress[userKey]) allProgress[userKey] = {};
        
        allProgress[userKey][chapterId] = {
            completed: true,
            quizScore: score,
            quizTotal: total,
            percentage: percentage,
            completed_at: timestamp
        };
        
        localStorage.setItem('bookclub_progress', JSON.stringify(allProgress));
        console.log('✓ Saved to bookclub_progress');
    } catch (e) {
        console.error('Error saving to bookclub_progress:', e);
    }
    
    // 3. Încearcă să sincronizezi cu API-ul
    syncQuizWithAPI(chapterId, normalizedUserId, score, total, percentage);
}

/**
 * Sincronizează rezultatul quiz-ului cu API-ul
 */
async function syncQuizWithAPI(chapterId, userId, score, total, percentage) {
    try {
        const response = await fetch(`${API_URL}/user/${userId}/progress`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chapter_id: chapterId,
                completed: true,
                quiz_score: score,
                quiz_total: total,
                quiz_percentage: percentage,
                completed_at: new Date().toISOString()
            })
        });
        
        if (response.ok) {
            console.log('✓ Synced quiz result to API');
        } else {
            console.log('⚠ API sync failed, data saved locally');
        }
    } catch (e) {
        console.log('⚠ API unavailable, data saved locally');
    }
}

// Exportă funcțiile pentru utilizare globală
if (typeof window !== 'undefined') {
    window.getQuizResult = getQuizResult;
    window.normalizeUserId = normalizeUserId;
    window.isChapterCompletedViaQuiz = isChapterCompletedViaQuiz;
    window.calculateRealProgress = calculateRealProgress;
    window.getChapterProgressDisplay = getChapterProgressDisplay;
    window.saveQuizResult = saveQuizResult;
    window.syncQuizWithAPI = syncQuizWithAPI;
}
