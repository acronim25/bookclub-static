/**
 * Book Club Sync Module
 * Handles syncing data between frontend (localStorage) and backend (SQLite)
 */

// Auto-detect API URL based on hostname and protocol
// For local development: use localhost
// For production (VPS): use the same hostname with port 5000
const API_BASE_URL = (() => {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol === 'https:' ? 'https' : 'http';
    
    // If running locally (file:// or localhost), use localhost:5000
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
        return 'http://localhost:5000/api';
    }
    // For VPS/production - use the same hostname with port 5000
    // Note: If frontend is on HTTPS, API must also be HTTPS (or use same origin)
    return `${protocol}://${hostname}:5000/api`;
})();

const SyncAPI = {
    // Sync all data to backend
    async syncToBackend(userId, userData) {
        try {
            const response = await fetch(`${API_BASE_URL}/sync`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    discord_id: userId,
                    name: userData.name,
                    progress: userData.progress || {},
                    quiz_scores: userData.quiz_scores || {},
                    notes: userData.notes || []
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Sync error:', error);
            return { success: false, error: error.message };
        }
    },

    // Get user data from backend
    async getUserFromBackend(discordId) {
        try {
            const response = await fetch(`${API_BASE_URL}/user/${discordId}`);
            if (response.status === 404) return null;
            return await response.json();
        } catch (error) {
            console.error('Get user error:', error);
            return null;
        }
    },

    // Get all users (for transparency) - FAST VERSION: use localStorage first, API in background
    async getAllUsers() {
        // First, return localStorage data immediately
        const localUsers = BookClub.getAllUsers();
        const localData = Object.values(localUsers).map(u => ({
            id: u.id,
            discord_id: u.discord_id || u.id,
            name: u.name,
            current_streak: u.current_streak || 0,
            longest_streak: u.longest_streak || 0,
            total_chapters_read: u.chapters_read || 0,
            badges: u.badges || [],
            chapters_completed: BookClub.getCompletedChapters(u.id).length
        }));

        // Try to fetch from API in background (but don't wait for it)
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout
            
            const response = await fetch(`${API_BASE_URL}/users`, { 
                mode: 'cors',
                headers: { 'Accept': 'application/json' },
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (response.ok) {
                const apiUsers = await response.json();
                // If API returns data, we could update the UI here if needed
                // But for now, we already showed localStorage data
                return apiUsers;
            }
        } catch (error) {
            // API unavailable or timeout - localStorage data already returned
            console.log('API unavailable, using localStorage data');
        }
        
        return localData;
    },

    // Save chapter progress to backend
    async saveProgressToBackend(discordId, chapterId, completed = true, notes = '') {
        try {
            const response = await fetch(`${API_BASE_URL}/user/${discordId}/progress`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chapter_id: chapterId, completed, notes })
            });
            return await response.json();
        } catch (error) {
            console.error('Save progress error:', error);
            return { success: false };
        }
    },

    // Load data from backend to localStorage
    async loadFromBackend(discordId) {
        const userData = await this.getUserFromBackend(discordId);
        if (!userData) return null;

        // Convert backend data to frontend format
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
            quiz_scores: {}, // Will be populated from quiz_results
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

        // Save to localStorage
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

        // Update user data
        users[userKey].current_streak = backendData.current_streak;
        users[userKey].longest_streak = backendData.longest_streak;
        users[userKey].chapters_read = backendData.total_chapters_read;
        users[userKey].badges = backendData.badges;

        // Save progress
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

    // Get all notes (shared between users) - fallback to localStorage if API unavailable
    async getAllNotes() {
        try {
            const response = await fetch(`${API_BASE_URL}/notes`, {
                mode: 'cors',
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.log('API unavailable, using localStorage fallback for notes');
        }
        
        // Fallback: return notes from localStorage
        const notes = BookClub.getNotes ? BookClub.getNotes() : [];
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

    // Add a new note
    async addNote(discordId, chapterId, noteText, userName = 'Unknown') {
        try {
            const response = await fetch(`${API_BASE_URL}/notes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    discord_id: discordId,
                    chapter_id: chapterId,
                    note: noteText,
                    name: userName
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Add note error:', error);
            return { success: false, error: error.message };
        }
    },

    // Delete a note
    async deleteNote(noteId, discordId) {
        try {
            const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ discord_id: discordId })
            });
            return await response.json();
        } catch (error) {
            console.error('Delete note error:', error);
            return { success: false, error: error.message };
        }
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.SyncAPI = SyncAPI;
}
