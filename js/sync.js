/**
 * Book Club Sync Module
 * Handles syncing data between frontend (localStorage) and backend (SQLite)
 */

// Auto-detect API URL based on hostname and protocol
const API_BASE_URL = (() => {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol === 'https:' ? 'https' : 'http';
    
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
        return 'http://localhost:5000/api';
    }
    return `${protocol}://${hostname}:5000/api`;
})();

// API Health Check
let apiAvailable = null;
let lastApiCheck = 0;
const API_CHECK_INTERVAL = 30000; // 30 seconds

async function checkApiHealth() {
    const now = Date.now();
    if (apiAvailable !== null && (now - lastApiCheck) < API_CHECK_INTERVAL) {
        return apiAvailable;
    }
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        const response = await fetch(`${API_BASE_URL}/health`, {
            method: 'HEAD',
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        apiAvailable = response.ok;
    } catch (error) {
        apiAvailable = false;
    }
    
    lastApiCheck = now;
    return apiAvailable;
}

// Show loading indicator
function showLoading(element, text = 'Loading...') {
    if (typeof element === 'string') {
        element = document.getElementById(element);
    }
    if (!element) return;
    
    element.dataset.originalContent = element.innerHTML;
    element.innerHTML = `<span class="loading-spinner"></span> ${text}`;
    element.disabled = true;
    element.classList.add('btn-loading');
}

// Hide loading indicator
function hideLoading(element) {
    if (typeof element === 'string') {
        element = document.getElementById(element);
    }
    if (!element || !element.dataset.originalContent) return;
    
    element.innerHTML = element.dataset.originalContent;
    element.disabled = false;
    element.classList.remove('btn-loading');
}

// Error handler with fallback
function handleApiError(error, fallbackFn, context = '') {
    console.warn(`API Error${context ? ` (${context})` : ''}:`, error);
    if (fallbackFn) {
        return fallbackFn();
    }
    return null;
}

const SyncAPI = {
    // Check if API is available
    async isAvailable() {
        return await checkApiHealth();
    },

    // Sync all data to backend
    async syncToBackend(userId, userData) {
        const isAvailable = await checkApiHealth();
        if (!isAvailable) {
            return { 
                success: false, 
                error: 'API unavailable - data saved locally only',
                offline: true 
            };
        }
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);
            
            const response = await fetch(`${API_BASE_URL}/sync`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    discord_id: userId,
                    name: userData.name,
                    progress: userData.progress || {},
                    quiz_scores: userData.quiz_scores || {},
                    notes: userData.notes || []
                }),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            return handleApiError(error, () => ({ 
                success: false, 
                error: error.message,
                offline: true 
            }), 'syncToBackend');
        }
    },

    // Get user data from backend
    async getUserFromBackend(discordId) {
        const isAvailable = await checkApiHealth();
        if (!isAvailable) return null;
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(`${API_BASE_URL}/user/${discordId}`, {
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (response.status === 404) return null;
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            return await response.json();
        } catch (error) {
            return handleApiError(error, () => null, 'getUserFromBackend');
        }
    },

    // Get all users - with better fallback
    async getAllUsers() {
        // First, return localStorage data immediately
        const localUsers = BookClub.getAllUsers ? BookClub.getAllUsers() : {};
        const localData = Object.values(localUsers).map(u => ({
            id: u.id,
            discord_id: u.discord_id || u.id,
            name: u.name,
            current_streak: u.current_streak || 0,
            longest_streak: u.longest_streak || 0,
            total_chapters_read: u.chapters_read || 0,
            badges: u.badges || [],
            chapters_completed: BookClub.getCompletedChapters ? BookClub.getCompletedChapters(u.id).length : 0
        }));

        // Try to fetch from API in background
        const isAvailable = await checkApiHealth();
        if (!isAvailable) {
            console.log('API unavailable, using localStorage data');
            return localData;
        }
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            
            const response = await fetch(`${API_BASE_URL}/users`, { 
                mode: 'cors',
                headers: { 'Accept': 'application/json' },
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (response.ok) {
                const apiUsers = await response.json();
                return apiUsers.length > 0 ? apiUsers : localData;
            }
        } catch (error) {
            console.log('API error, using localStorage data');
        }
        
        return localData;
    },

    // Save chapter progress to backend
    async saveProgressToBackend(discordId, chapterId, completed = true, notes = '') {
        const isAvailable = await checkApiHealth();
        if (!isAvailable) {
            return { success: false, offline: true, error: 'API unavailable' };
        }
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000);
            
            const response = await fetch(`${API_BASE_URL}/user/${discordId}/progress`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chapter_id: chapterId, completed, notes }),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            return handleApiError(error, () => ({ 
                success: false, 
                error: error.message,
                offline: true 
            }), 'saveProgressToBackend');
        }
    },

    // Load data from backend to localStorage
    async loadFromBackend(discordId) {
        const userData = await this.getUserFromBackend(discordId);
        if (!userData) return null;

        const progress = {};
        Object.entries(userData.progress).forEach(([chapterId, data]) => {
            progress[chapterId] = data.completed;
        });

        return {
            id: userData.discord_id,
            name: userData.name,
            current_streak: userData.current_streak,
            longest_streak: userData.longest_streak,
            chapters_read: userData.total_chapters_read,
            badges: userData.badges,
            progress: progress,
            quiz_scores: {},
            notes: []
        };
    },

    // Full sync: backend -> localStorage
    async fullSync(discordId) {
        const backendData = await this.getUserFromBackend(discordId);
        if (!backendData) {
            console.log('No backend data found for user:', discordId);
            return null;
        }

        const users = JSON.parse(localStorage.getItem('bookclub_user_data') || '{}');
        const userKey = discordId === 'acro16hunna' ? 'alex' : 
                        discordId === 'Dhianna369' ? 'dhianna' : discordId;
        
        if (!users[userKey]) {
            users[userKey] = {
                id: userKey,
                name: backendData.name,
                discord_id: discordId
            };
        }

        users[userKey].current_streak = backendData.current_streak;
        users[userKey].longest_streak = backendData.longest_streak;
        users[userKey].chapters_read = backendData.total_chapters_read;
        users[userKey].badges = backendData.badges;

        const progress = {};
        Object.entries(backendData.progress).forEach(([chapterId, data]) => {
            progress[chapterId] = data.completed;
        });

        localStorage.setItem('bookclub_user_data', JSON.stringify(users));
        
        const allProgress = JSON.parse(localStorage.getItem('bookclub_progress') || '{}');
        allProgress[userKey] = progress;
        localStorage.setItem('bookclub_progress', JSON.stringify(allProgress));

        return backendData;
    },

    // Get all notes with better error handling
    async getAllNotes() {
        const isAvailable = await checkApiHealth();
        if (!isAvailable) {
            console.log('API unavailable, using localStorage fallback for notes');
            return this.getLocalNotes();
        }
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(`${API_BASE_URL}/notes`, {
                mode: 'cors',
                headers: { 'Accept': 'application/json' },
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (response.ok) {
                return await response.json();
            }
            throw new Error(`HTTP ${response.status}`);
        } catch (error) {
            return handleApiError(error, () => this.getLocalNotes(), 'getAllNotes');
        }
    },
    
    // Get notes from localStorage
    getLocalNotes() {
        const notes = BookClub.getNotes ? BookClub.getNotes() : 
                      JSON.parse(localStorage.getItem('bookclub_notes') || '[]').reverse();
        return notes.map(n => ({
            id: n.id,
            user_name: n.user_name || n.userName || 'Unknown',
            chapter_id: n.chapter_id,
            chapter_title: n.chapter_title || 'Unknown Chapter',
            book_title: n.book_title || 'Unknown Book',
            note: n.note || n.text || '',
            created_at: n.created_at || n.createdAt
        }));
    },

    // Add a new note with better error handling
    async addNote(discordId, chapterId, noteText, userName = 'Unknown') {
        const isAvailable = await checkApiHealth();
        if (!isAvailable) {
            console.log('API unavailable, saving note locally');
            return { success: false, offline: true, error: 'API unavailable - saved locally' };
        }
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000);
            
            const response = await fetch(`${API_BASE_URL}/notes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    discord_id: discordId,
                    chapter_id: chapterId,
                    note: noteText,
                    name: userName
                }),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            return handleApiError(error, () => ({ 
                success: false, 
                error: error.message,
                offline: true 
            }), 'addNote');
        }
    },

    // Delete a note
    async deleteNote(noteId, discordId) {
        const isAvailable = await checkApiHealth();
        if (!isAvailable) {
            return { success: false, offline: true, error: 'API unavailable' };
        }
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ discord_id: discordId }),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            return handleApiError(error, () => ({ 
                success: false, 
                error: error.message 
            }), 'deleteNote');
        }
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.SyncAPI = SyncAPI;
}
