/**
 * Book Club Sync Module
 * Handles syncing data between frontend (localStorage) and backend (SQLite)
 */

const API_BASE_URL = 'http://localhost:5000/api'; // Change this to your server URL

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

    // Get all users (for transparency)
    async getAllUsers() {
        try {
            const response = await fetch(`${API_BASE_URL}/users`);
            return await response.json();
        } catch (error) {
            console.error('Get users error:', error);
            return [];
        }
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
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.SyncAPI = SyncAPI;
}
