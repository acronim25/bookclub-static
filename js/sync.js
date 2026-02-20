// Book Club Cloud Sync Module
// Force cache refresh v3 - SyncAPI fix

console.log('Loading sync.js v4...');

const API_BASE_URL = 'https://5-189-142-233.nip.io/api';
const API_VERSION = 'v4';

class BookClubSync {
    constructor() {
        this.apiUrl = API_BASE_URL;
        this.userId = this.getUserId();
    }

    // Generează sau recuperează user ID unic
    getUserId() {
        let userId = localStorage.getItem('bookclub_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('bookclub_user_id', userId);
        }
        return userId;
    }

    // GET note pentru utilizator
    async getNotes() {
        try {
            const response = await fetch(`${this.apiUrl}/users/${this.userId}/notes`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) {
                if (response.status === 404) {
                    return []; // Nu există note încă
                }
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            return data.notes || [];
        } catch (error) {
            console.error('Eroare la preluarea notelor:', error);
            return [];
        }
    }

    // POST salvează notă nouă
    async saveNote(noteData) {
        try {
            const response = await fetch(`${this.apiUrl}/users/${this.userId}/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(noteData)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Eroare la salvarea notei:', error);
            throw error;
        }
    }

    // DELETE șterge notă
    async deleteNote(noteId) {
        try {
            const response = await fetch(`${this.apiUrl}/users/${this.userId}/notes/${noteId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return true;
        } catch (error) {
            console.error('Eroare la ștergerea notei:', error);
            throw error;
        }
    }

    // Sincronizare completă (download toate notele)
    async syncDownload() {
        const remoteNotes = await this.getNotes();
        
        // Salvează în localStorage pentru utilizare offline
        localStorage.setItem('bookclub_notes', JSON.stringify(remoteNotes));
        
        return remoteNotes;
    }

    // Verificare conexiune API
    async healthCheck() {
        try {
            const response = await fetch(`${this.apiUrl}/users`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    // === METODE PENTRU COMPATIBILITATE CU CODUL EXISTENT ===

    // Sincronizare către backend (upload progres)
    async syncToBackend(userId, data) {
        try {
            // API uses singular 'user', not plural 'users'
            const response = await fetch(`${this.apiUrl}/user/${userId}/progress`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Eroare la sincronizare:', error);
            throw error;
        }
    }

    // Sincronizare completă
    async fullSync(userId) {
        try {
            const response = await fetch(`${this.apiUrl}/sync`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ userId })
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Eroare la full sync:', error);
            throw error;
        }
    }

    // Obține toți utilizatorii
    async getAllUsers() {
        try {
            const response = await fetch(`${this.apiUrl}/users`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Eroare la preluarea utilizatorilor:', error);
            return [];
        }
    }

    // Obține utilizator de pe backend
    async getUserFromBackend(discordId) {
        try {
            const response = await fetch(`${this.apiUrl}/user/${discordId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Eroare la preluarea utilizatorului:', error);
            return null;
        }
    }
}

// Export pentru utilizare în alte module
window.BookClubSync = BookClubSync;

// Creează instanță globală pentru compatibilitate cu codul existent
window.SyncAPI = new BookClubSync();
