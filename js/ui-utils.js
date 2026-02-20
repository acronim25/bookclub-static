/**
 * Book Club - UI Utilities
 * Enhanced UI components: loading states, toasts, animations, error handling
 */

// ============================================
// LOADING STATES
// ============================================

/**
 * Show a full-page loading state
 * @param {string} message - Message to display
 * @param {string} containerId - Container element ID (default: 'loading-state')
 */
function showLoading(message = 'Loading...', containerId = 'loading-state') {
    const container = document.getElementById(containerId);
    if (container) {
        container.style.display = 'block';
        const textEl = container.querySelector('p');
        if (textEl && message) {
            textEl.textContent = message;
        }
    }
}

/**
 * Hide loading state
 * @param {string} containerId - Container element ID
 */
function hideLoading(containerId = 'loading-state') {
    const container = document.getElementById(containerId);
    if (container) {
        container.style.display = 'none';
    }
}

/**
 * Show button loading state
 * @param {HTMLElement} button - Button element
 * @param {string} loadingText - Text to show while loading
 */
function setButtonLoading(button, loadingText = '⏳ Loading...') {
    if (!button) return;
    button.dataset.originalText = button.innerHTML;
    button.innerHTML = `<span class="btn-spinner"></span> ${loadingText}`;
    button.disabled = true;
    button.classList.add('btn-loading-state');
}

/**
 * Restore button from loading state
 * @param {HTMLElement} button - Button element
 */
function restoreButton(button) {
    if (!button) return;
    if (button.dataset.originalText) {
        button.innerHTML = button.dataset.originalText;
    }
    button.disabled = false;
    button.classList.remove('btn-loading-state');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

const ToastType = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
};

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {string} type - Toast type (success, error, warning, info)
 * @param {number} duration - Duration in milliseconds
 */
function showToast(message, type = ToastType.INFO, duration = 3000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.bookclub-toast');
    existingToasts.forEach(t => t.remove());
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `bookclub-toast toast-${type}`;
    
    // Icon based on type
    const icons = {
        [ToastType.SUCCESS]: '✓',
        [ToastType.ERROR]: '✗',
        [ToastType.WARNING]: '⚠',
        [ToastType.INFO]: 'ℹ'
    };
    
    // Colors based on type
    const colors = {
        [ToastType.SUCCESS]: '#22c55e',
        [ToastType.ERROR]: '#ef4444',
        [ToastType.WARNING]: '#f59e0b',
        [ToastType.INFO]: '#6366f1'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Apply styles
    toast.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: linear-gradient(135deg, ${colors[type]}22, ${colors[type]}11);
        border: 1px solid ${colors[type]}66;
        border-left: 4px solid ${colors[type]};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        font-weight: 500;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 280px;
        max-width: 400px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10px);
        animation: toastSlideIn 0.3s ease-out;
    `;
    
    // Add close button style
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: rgba(255,255,255,0.6);
        font-size: 20px;
        cursor: pointer;
        margin-left: auto;
        padding: 0 4px;
        line-height: 1;
        transition: color 0.2s;
    `;
    closeBtn.onmouseover = () => closeBtn.style.color = 'white';
    closeBtn.onmouseout = () => closeBtn.style.color = 'rgba(255,255,255,0.6)';
    
    // Add icon style
    const icon = toast.querySelector('.toast-icon');
    icon.style.cssText = `
        width: 28px;
        height: 28px;
        background: ${colors[type]};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: bold;
        flex-shrink: 0;
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove
    if (duration > 0) {
        setTimeout(() => {
            if (toast.parentElement) {
                toast.style.animation = 'toastSlideOut 0.3s ease-in';
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    }
    
    return toast;
}

// Shortcuts
function showSuccess(message, duration) { return showToast(message, ToastType.SUCCESS, duration); }
function showError(message, duration) { return showToast(message, ToastType.ERROR, duration); }
function showWarning(message, duration) { return showToast(message, ToastType.WARNING, duration); }
function showInfo(message, duration) { return showToast(message, ToastType.INFO, duration); }

// ============================================
// ANIMATIONS
// ============================================

/**
 * Animate elements on page load
 * @param {string} selector - CSS selector for elements
 * @param {string} animationClass - Animation class to add
 * @param {number} stagger - Stagger delay in ms
 */
function animateOnLoad(selector = '.animate-on-load', animationClass = 'fade-in-up', stagger = 50) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.5s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * stagger);
    });
}

/**
 * Animate progress bars
 */
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar-fill, .dual-progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 0.8s ease-out';
            bar.style.width = width;
        }, 100);
    });
}

/**
 * Add hover lift effect to cards
 */
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.book-card, .chapter-item, .note-card, .badge-card');
    cards.forEach(card => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease';
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });
}

// ============================================
// ERROR HANDLING
// ============================================

/**
 * Handle API errors gracefully
 * @param {Error} error - Error object
 * @param {string} context - Context where error occurred
 * @returns {object} - Error info
 */
function handleApiError(error, context = '') {
    console.error(`[${context}] API Error:`, error);
    
    let message = 'Something went wrong. Please try again.';
    let shouldFallback = false;
    
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
        message = 'Network error. Please check your connection.';
        shouldFallback = true;
    } else if (error.message.includes('404')) {
        message = 'Resource not found.';
    } else if (error.message.includes('500')) {
        message = 'Server error. Please try again later.';
        shouldFallback = true;
    } else if (error.message.includes('timeout')) {
        message = 'Request timed out. Please try again.';
        shouldFallback = true;
    }
    
    showError(message);
    
    return {
        error: true,
        message: message,
        shouldFallback: shouldFallback,
        originalError: error
    };
}

/**
 * Wrap async function with error handling
 * @param {Function} fn - Async function to wrap
 * @param {string} context - Context for error reporting
 */
async function withErrorHandling(fn, context = '') {
    try {
        return await fn();
    } catch (error) {
        return handleApiError(error, context);
    }
}

// ============================================
// SYNC STATUS
// ============================================

/**
 * Update sync status indicator
 * @param {string} status - Status message
 * @param {string} type - Status type (online, offline, syncing, error)
 */
function updateSyncStatus(status, type = 'online') {
    const syncText = document.getElementById('sync-text');
    const syncBar = document.getElementById('sync-bar') || document.querySelector('.sync-bar');
    
    if (!syncText) return;
    
    const icons = {
        online: '☁️',
        offline: '💾',
        syncing: '🔄',
        error: '⚠️'
    };
    
    const colors = {
        online: '#00d4aa',
        offline: '#f59e0b',
        syncing: '#6366f1',
        error: '#ef4444'
    };
    
    syncText.innerHTML = `${icons[type]} ${status}`;
    syncText.style.color = colors[type];
    
    if (syncBar) {
        syncBar.style.borderColor = colors[type] + '44';
        syncBar.style.background = colors[type] + '11';
    }
}

// ============================================
// SESSION MANAGEMENT
// ============================================

/**
 * Get stored session
 * @returns {object|null} Session data or null
 */
function getStoredSession() {
    try {
        const session = localStorage.getItem(window.BOOKCLUB_CONFIG?.SESSION_KEY || 'bookclub_session');
        if (!session) return null;
        
        const data = JSON.parse(session);
        const now = Date.now();
        const sessionAge = now - data.timestamp;
        const maxAge = (window.BOOKCLUB_CONFIG?.SESSION_DURATION_DAYS || 7) * 24 * 60 * 60 * 1000;
        
        if (sessionAge > maxAge) {
            localStorage.removeItem(window.BOOKCLUB_CONFIG?.SESSION_KEY || 'bookclub_session');
            return null;
        }
        return data;
    } catch (e) {
        return null;
    }
}

/**
 * Save session
 * @param {string} userName - User name
 * @param {string} userId - User Discord ID
 */
function saveSession(userName, userId) {
    const session = {
        userName: userName,
        userId: userId,
        timestamp: Date.now()
    };
    localStorage.setItem(window.BOOKCLUB_CONFIG?.SESSION_KEY || 'bookclub_session', JSON.stringify(session));
    localStorage.setItem('bookclub_whoami', userName);
}

/**
 * Clear session
 */
function clearSession() {
    localStorage.removeItem(window.BOOKCLUB_CONFIG?.SESSION_KEY || 'bookclub_session');
    localStorage.removeItem('bookclub_whoami');
}

// ============================================
// CSS ANIMATIONS (inject once)
// ============================================

function injectStyles() {
    if (document.getElementById('bookclub-ui-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'bookclub-ui-styles';
    style.textContent = `
        @keyframes toastSlideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes toastSlideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .btn-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }
        .btn-loading-state {
            opacity: 0.8;
            cursor: not-allowed;
        }
        .fade-in-up {
            animation: fadeInUp 0.5s ease-out;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 5px currentColor; }
            50% { box-shadow: 0 0 20px currentColor; }
        }
    `;
    document.head.appendChild(style);
}

// Inject styles on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStyles);
} else {
    injectStyles();
}

// ============================================
// EXPORTS
// ============================================

window.BookClubUI = {
    // Loading
    showLoading,
    hideLoading,
    setButtonLoading,
    restoreButton,
    
    // Toasts
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    ToastType,
    
    // Animations
    animateOnLoad,
    animateProgressBars,
    addCardHoverEffects,
    
    // Error handling
    handleApiError,
    withErrorHandling,
    
    // Sync
    updateSyncStatus,
    
    // Session
    getStoredSession,
    saveSession,
    clearSession
};
