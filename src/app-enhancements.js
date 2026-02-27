// App Enhancements - Integrates with existing app.js

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Use relative path for subfolder support
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(err => {
                console.log('SW registration failed:', err);
            });
    });
}

// Migrate learnedWords if it's an array to support SRS metadata
// This ensures compatibility between old app.js and new SRS features
(function migrateToSRS() {
    if (typeof learnedWords !== 'undefined' && Array.isArray(learnedWords)) {
        console.log('🔄 Migrating learnedWords array to SRS-ready object...');
        const obj = {};
        learnedWords.forEach(w => {
            if (typeof w === 'string') {
                obj[w] = { level: 1, lastReview: Date.now(), nextReview: Date.now() };
            }
        });
        window.learnedWords = obj;
        if (typeof saveLearned === 'function') {
            saveLearned();
            console.log('✅ Migration complete');
        }
    }
})();

// Enhanced TTSService with performance monitoring (moved cache into service for reliability)
if (typeof tts !== 'undefined') {
    console.log('✅ TTSService enhancements applied');
}

// Enhanced render function with SRS integration
const originalRender = window.render;
if (typeof originalRender === 'function') {
    window.render = function (filter = '') {
        // Record study session
        const startTime = Date.now();

        // Call original render
        originalRender.call(this, filter);

        // Update accessibility announcements
        const totalCards = document.querySelectorAll('.card-container').length;
        announceToScreenReader(`显示 ${totalCards} 个单词卡片`);

        // Track study time when user leaves
        window.addEventListener('beforeunload', () => {
            const duration = Date.now() - startTime;
            if (duration > 5000) { // Only track if > 5 seconds
                storageService.recordDailyStudy(duration);
            }
        }, { once: true });
    };
}

// Enhanced createCard function with SRS data
const originalCreateCard = window.createCard;
if (typeof originalCreateCard === 'function') {
    window.createCard = function (wordData) {
        const card = originalCreateCard.call(this, wordData);

        // Add SRS info tooltip
        const learnedData = learnedWords[wordData.word];
        if (learnedData && learnedData.nextReview) {
            const daysUntilReview = Math.ceil((learnedData.nextReview - Date.now()) / (24 * 60 * 60 * 1000));
            const tooltip = document.createElement('div');
            tooltip.className = 'srs-tooltip';
            tooltip.textContent = daysUntilReview > 0
                ? `${daysUntilReview} 天后复习`
                : '今日待复习';
            card.querySelector('.card-face.card-front').appendChild(tooltip);
        }

        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `单词: ${wordData.word}, 含义: ${wordData.meaning}`);

        return card;
    };
}

// Enhanced GameSession with SRS updates
if (typeof GameSession !== 'undefined') {
    const originalHandleAssessment = GameSession.prototype.handleAssessment;
    GameSession.prototype.handleAssessment = function (index, isKnow, element) {
        const word = this.currentSet[index].word;
        const wordData = learnedWords[word] || { level: 1, lastReview: Date.now() };

        // Update using SRS service
        const updated = srsService.updateWordProgress(wordData, isKnow);
        learnedWords[word] = updated;

        // Call original
        if (originalHandleAssessment) {
            originalHandleAssessment.call(this, index, isKnow, element);
        }

        saveLearned();
    };
}

// Screen Reader Announcements
function announceToScreenReader(message) {
    const announcer = document.getElementById('sr-announcements');
    if (announcer) {
        announcer.textContent = message;
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    }
}

// Enhanced search with debounce
const searchInput = document.getElementById('search-input');
if (searchInput) {
    const originalOnInput = searchInput.oninput;
    searchInput.oninput = debounce((e) => {
        if (originalOnInput) {
            originalOnInput.call(searchInput, e);
        }
        announceToScreenReader(`搜索结果已更新`);
    }, 300);
}

// Add install prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install button
    const installBtn = document.createElement('button');
    installBtn.className = 'glass-btn';
    installBtn.innerHTML = '📱 安装应用';
    installBtn.onclick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                toast.success('应用安装成功！');
            }
            deferredPrompt = null;
            installBtn.remove();
        }
    };

    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        headerActions.insertBefore(installBtn, headerActions.firstChild);
    }
});

// Track app install
window.addEventListener('appinstalled', () => {
    toast.success('应用已添加到主屏幕');
    deferredPrompt = null;
});

// Add touch gesture support for mobile
if ('ontouchstart' in window) {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 100;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) > swipeThreshold) {
            if (window.activeCinema) {
                if (diff > 0) {
                    window.activeCinema.prev();
                } else {
                    window.activeCinema.next();
                }
            }
        }
    }
}

// Performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);

            if (pageLoadTime > 3000) {
                console.warn('Page load is slow, consider optimization');
            }
        }, 0);
    });
}

// Error tracking
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    toast.error('发生错误，请刷新页面重试');
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    toast.error('操作失败，请重试');
});

// Visibility change - pause/resume
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause cinema if active
        if (window.activeCinema && window.activeCinema.isPlaying) {
            window.activeCinema.togglePause();
        }
    }
});

// Network status indicator
window.addEventListener('online', () => {
    toast.success('网络已连接');
});

window.addEventListener('offline', () => {
    toast.warning('网络已断开，部分功能可能不可用');
});

// Initialize enhancements
console.log('App enhancements loaded successfully');
