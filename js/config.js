/**
 * Book Club - Global Configuration
 * Centralized configuration to avoid duplicate declarations
 */

// Prevent redeclaration
if (typeof window.BOOKCLUB_CONFIG === 'undefined') {
    window.BOOKCLUB_CONFIG = {
        // API Configuration
        API_URL: 'https://5-189-142-233.nip.io/api',
        API_TIMEOUT: 10000,
        
        // Session Configuration
        SESSION_DURATION_DAYS: 7,
        SESSION_KEY: 'bookclub_session',
        
        // Sync Configuration
        AUTO_REFRESH_INTERVAL: 30000, // 30 seconds
        
        // User Configuration
        USERS: {
            alex: { id: 'alex', discord_id: 'acro16hunna', name: 'Alex', color: '#00d4aa', emoji: '👨' },
            dhianna: { id: 'dhianna', discord_id: 'Dhianna369', name: 'Dhianna', color: '#ff6b6b', emoji: '👩' }
        },
        
        // Storage Keys
        STORAGE_KEYS: {
            CURRENT_USER: 'bookclub_current_user',
            USER_DATA: 'bookclub_user_data',
            NOTES: 'bookclub_notes',
            PROGRESS: 'bookclub_progress',
            ACTIVITIES: 'bookclub_activities',
            QUIZ_RESULTS: 'bookclub_quiz_results',
            SESSION: 'bookclub_session',
            WHOAMI: 'bookclub_whoami'
        },
        
        // UI Configuration
        ANIMATIONS: {
            DURATION: 300,
            STAGGER: 50
        },
        
        // Quiz Configuration
        QUIZ: {
            PASS_PERCENTAGE: 70,
            PERFECT_SCORE: 10
        },
        
        // Utility: Get API URL
        getApiUrl: function() {
            return this.API_URL;
        },
        
        // Utility: Get user by Discord ID
        getUserByDiscordId: function(discordId) {
            for (const key in this.USERS) {
                if (this.USERS[key].discord_id === discordId) {
                    return this.USERS[key];
                }
            }
            return null;
        },
        
        // Utility: Get user by name
        getUserByName: function(name) {
            const key = name.toLowerCase();
            return this.USERS[key] || null;
        },
        
        // Utility: Normalize user ID
        normalizeUserId: function(userId) {
            if (!userId) return null;
            const id = String(userId).toLowerCase().trim();
            
            if (id === 'alex' || id === 'acro16hunna') return 'acro16hunna';
            if (id === 'dhianna' || id === 'dhianna369') return 'Dhianna369';
            
            return userId;
        }
    };
    
    // Also expose as API_URL for backward compatibility
    window.API_URL = window.BOOKCLUB_CONFIG.API_URL;
}
