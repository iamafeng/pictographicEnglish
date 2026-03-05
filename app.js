// ========================================
// Pictographic Learn - Main Application
// 象形英语学习 - 主应用程序
// ========================================

// Note: TTS service, toast, and other utilities are loaded from separate files

// --- State & Storage ---
// Support both old array format and new object format (SRS)
let learnedWordsData = localStorage.getItem('learned_words');
let learnedWords = [];
try {
    const parsed = JSON.parse(learnedWordsData || '[]');
    learnedWords = parsed;
} catch (e) {
    console.error('Failed to parse learned_words:', e);
    learnedWords = [];
}

// Compatibility helper: always get an array of word strings for basic UI
function getLearnedArray() {
    if (Array.isArray(learnedWords)) return learnedWords;
    return Object.keys(learnedWords);
}

// Compatibility helper: check if word is learned
function isWordLearned(word) {
    if (Array.isArray(learnedWords)) return learnedWords.includes(word);
    return !!learnedWords[word];
}

// UI State
let currentTab = 'plaza';
let currentPage = 1;
const itemsPerPage = 20;
let currentDifficultyFilter = 'all';

function saveLearned() {
    localStorage.setItem('learned_words', JSON.stringify(learnedWords));
    const countEl = document.getElementById('learned-count');
    if (countEl) {
        const count = Array.isArray(learnedWords) ? learnedWords.length : Object.keys(learnedWords).length;
        countEl.textContent = count;
    }
}

// Helper function to show toast (uses toast utility if available)
function showToast(message) {
    if (typeof toast !== 'undefined' && toast.show) {
        toast.show(message);
    } else {
        console.log(message);
    }
}

// Filter words by difficulty level
function filterByDifficulty(words, difficultyLevel) {
    if (difficultyLevel === 'all') {
        return words;
    }
    const level = parseInt(difficultyLevel);
    return words.filter(w => w.difficulty === level);
}

// Update difficulty count display
function updateDifficultyCount(words) {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    words.forEach(w => {
        if (w.difficulty >= 1 && w.difficulty <= 5) {
            counts[w.difficulty]++;
        }
    });
    
    // Update option text with counts
    const difficultyFilter = document.getElementById('difficulty-filter');
    if (difficultyFilter) {
        const stars = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
        for (let i = 1; i <= 5; i++) {
            const option = difficultyFilter.querySelector(`option[value="${i}"]`);
            if (option) {
                option.textContent = `${stars[i-1]} Level ${i} (${counts[i]})`;
            }
        }
    }
    
    // Update result count
    const resultCountEl = document.getElementById('filter-result-count');
    if (resultCountEl) {
        const filtered = filterByDifficulty(words, currentDifficultyFilter);
        resultCountEl.textContent = `显示 ${filtered.length} 个单词`;
    }
}

// --- Game Logic ---
class GameSession {
    constructor(mode, customPool = null) {
        this.mode = mode;
        const learnedArray = getLearnedArray();

        if (customPool) {
            this.pool = customPool;
        } else {
            this.pool = mode === 'random_plaza' ?
                words.filter(w => !learnedArray.includes(w.word)) :
                words.filter(w => learnedArray.includes(w.word));
        }

        this.currentSet = [];
        this.results = [];
        this.finishedCount = 0;
        this.init();
    }

    init() {
        const learnedArray = getLearnedArray();
        this.pool = this.mode === 'random_plaza' ?
            words.filter(w => !learnedArray.includes(w.word)) :
            words.filter(w => learnedArray.includes(w.word));

        if (this.pool.length === 0) {
            showToast(this.mode === 'random_plaza' ?
                "🎖️ 恭喜！您已在 Plaza 领域达成全通关！" :
                "📭 复习库已空，快去广场探索新词吧");
            return;
        }

        const available = this.pool.filter(w => !this.currentSet.includes(w));
        const poolToUse = available.length >= 5 ? available : this.pool;
        const shuffled = [...poolToUse].sort(() => 0.5 - Math.random());

        this.currentSet = shuffled.slice(0, 5);
        this.results = new Array(this.currentSet.length).fill(null);
        this.finishedCount = 0;
        this.render();
    }

    render() {
        const gameGrid = document.getElementById('game-grid');
        const progressEl = document.getElementById('game-progress');
        const scoreOverlay = document.getElementById('score-overlay');

        if (!gameGrid) return;

        gameGrid.innerHTML = '';
        if (progressEl) progressEl.textContent = `0/${this.currentSet.length}`;
        if (scoreOverlay) scoreOverlay.classList.remove('active');

        this.currentSet.forEach((word, index) => {
            const cardEl = this.createGameCard(word, index);
            cardEl.style.animationDelay = `${index * 0.1}s`;
            gameGrid.appendChild(cardEl);
        });
    }

    createGameCard(wordData, index) {
        const container = document.createElement('div');
        container.className = 'card-container game-card hidden-card';

        const cardInner = document.createElement('div');
        cardInner.className = 'card';

        const faceFront = document.createElement('div');
        faceFront.className = 'card-face card-front';
        faceFront.innerHTML = '<div class="card-hint">点击卡片开启挑战</div>';

        const faceBack = document.createElement('div');
        faceBack.className = 'card-face card-back';
        faceBack.innerHTML = `
            <div class="word-title">${wordData.word}</div>
            <div class="meaning">${wordData.meaning}</div>
            <div class="example" style="font-size:0.8rem; line-height:1.4">${wordData.example}</div>
            <div class="example-cn" style="font-size:0.75rem; color:rgba(255,255,255,0.4); margin-top:0.3rem">${wordData.exampleCn}</div>
            <div class="audio-controls" style="margin-top:1rem">
                <button class="play-btn" data-text="${wordData.word}">🔊 单词</button>
                <button class="play-btn" data-text="${wordData.example}">🔊 句子</button>
            </div>
        `;

        const controls = document.createElement('div');
        controls.className = 'assessment-controls';
        controls.innerHTML = `
            <button class="assess-btn know">会 👍</button>
            <button class="assess-btn unknown">不会 👎</button>
        `;

        cardInner.append(faceFront, faceBack);
        container.append(cardInner, controls);

        container.onclick = (e) => {
            if (container.classList.contains('hidden-card')) {
                container.classList.remove('hidden-card');
                cardInner.classList.add('is-flipped');
            }
        };

        controls.querySelectorAll('.assess-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const isKnow = btn.classList.contains('know');
                this.handleAssessment(index, isKnow, container);
            };
        });

        faceBack.querySelectorAll('.play-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const text = btn.dataset.text;

                // Try multiple ways to access TTS
                if (typeof tts !== 'undefined' && tts.speak) {
                    tts.speak(text);
                } else if (window.tts && window.tts.speak) {
                    window.tts.speak(text);
                } else {
                    // Fallback to browser TTS
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.lang = 'en-US';
                    window.speechSynthesis.speak(utterance);
                }
            };
        });

        return container;
    }

    handleAssessment(index, isKnow, element) {
        if (this.results[index] !== null) return;

        this.results[index] = isKnow;
        this.finishedCount++;

        const progressEl = document.getElementById('game-progress');
        if (progressEl) progressEl.textContent = `${this.finishedCount}/${this.currentSet.length}`;

        element.classList.add('locked');
        if (isKnow) {
            element.classList.add('effect-know');
            if (!isWordLearned(this.currentSet[index].word)) {
                if (Array.isArray(learnedWords)) {
                    learnedWords.push(this.currentSet[index].word);
                } else {
                    learnedWords[this.currentSet[index].word] = { level: 1, lastReview: Date.now() };
                }
                saveLearned();
            }
        } else {
            element.classList.add('effect-unknown');
            if (Array.isArray(learnedWords)) {
                const idx = learnedWords.indexOf(this.currentSet[index].word);
                if (idx > -1) learnedWords.splice(idx, 1);
            } else {
                delete learnedWords[this.currentSet[index].word];
            }
            saveLearned();
        }

        if (this.finishedCount === this.currentSet.length) {
            setTimeout(() => this.showResults(), 800);
        }
    }

    showResults() {
        const knowCount = this.results.filter(r => r === true).length;
        const score = Math.floor((knowCount / this.currentSet.length) * 100);

        const scoreVal = document.getElementById('score-val');
        const iconEl = document.getElementById('result-icon');
        const msgEl = document.getElementById('result-message');
        const overlay = document.getElementById('score-overlay');

        if (!overlay) return;

        if (scoreVal) scoreVal.textContent = score;
        overlay.classList.add('active');

        if (score >= 60) {
            if (iconEl) iconEl.textContent = '🎉';
            if (msgEl) msgEl.textContent = "太出色了！看来你已经掌握了这些新词。";
            overlay.className = 'result-overlay active pass-glow';
        } else {
            if (iconEl) iconEl.textContent = '🌧️';
            if (msgEl) msgEl.textContent = "别灰心，再复习一遍象形记忆法吧！";
            overlay.className = 'result-overlay active fail-dim';
        }
    }
}

let activeGame = null;

// --- Main Rendering ---
function createCard(wordData) {
    const container = document.createElement('div');
    container.className = 'card-container';
    const card = document.createElement('div');
    const isLearned = isWordLearned(wordData.word);
    card.className = `card ${isLearned ? 'is-learned' : ''}`;

    // Generate difficulty stars
    const difficulty = wordData.difficulty || 1;
    const stars = '⭐'.repeat(Math.min(Math.max(difficulty, 1), 5));

    // Generate tags HTML (display up to 3 tags)
    const tags = wordData.tags || [];
    const displayTags = tags.slice(0, 3);
    const tagsHTML = displayTags.length > 0 
        ? `<div class="tags-container">
            ${displayTags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
           </div>`
        : '';

    card.innerHTML = `
        <div class="card-face card-front">
            <div class="difficulty-badge" title="难度等级 ${difficulty}">${stars}</div>
            <div class="card-front-main">
                <div class="pictogram-container">${wordData.svg || `<div class="word-placeholder">${wordData.word}</div>`}</div>
                <div class="visual-label">${wordData.word}</div>
            </div>
        </div>
        <div class="card-face card-back">
            <div class="learned-toggle">${isLearned ? '✓ 已记下' : '记下了?'}</div>
            <div class="word-title">${wordData.word}</div>
            <div class="meaning">${wordData.meaning}</div>
            <div class="example">${wordData.example}</div>
            <div class="example-cn">${wordData.exampleCn}</div>
            ${tagsHTML}
            <div class="audio-controls">
                <button class="play-btn" data-text="${wordData.word}">🔊 单词</button>
                <button class="play-btn" data-text="${wordData.example}">🔊 句子</button>
            </div>
        </div>
    `;

    card.querySelector('.learned-toggle').onclick = (e) => {
        e.stopPropagation();
        if (isWordLearned(wordData.word)) {
            if (Array.isArray(learnedWords)) {
                const idx = learnedWords.indexOf(wordData.word);
                if (idx > -1) learnedWords.splice(idx, 1);
            } else {
                delete learnedWords[wordData.word];
            }
            card.classList.remove('is-learned');
            e.target.textContent = '记下了?';
            showToast(`♻️ 已将 ${wordData.word} 移回广场`);
        } else {
            if (Array.isArray(learnedWords)) {
                learnedWords.push(wordData.word);
            } else {
                learnedWords[wordData.word] = { level: 1, lastReview: Date.now() };
            }
            card.classList.add('is-learned');
            e.target.textContent = '✓ 已记下';
            showToast(`✅ 已记下单词：${wordData.word}`);
        }
        saveLearned();
        render();
    };

    card.onclick = (e) => {
        if (!e.target.closest('.play-btn') && !e.target.closest('.learned-toggle')) {
            card.classList.toggle('is-flipped');
        }
    };

    card.querySelectorAll('.play-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();

            const text = btn.dataset.text;
            console.log('🔊 Playing:', text);

            // Try multiple ways to access TTS
            if (typeof tts !== 'undefined' && tts.speak) {
                tts.speak(text);
            } else if (window.tts && window.tts.speak) {
                window.tts.speak(text);
            } else {
                console.error('❌ TTS service not available');
                // Fallback to browser TTS
                try {
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.lang = 'en-US';
                    window.speechSynthesis.speak(utterance);
                } catch (err) {
                    console.error('❌ Browser TTS also failed:', err);
                }
            }
        };
    });

    container.appendChild(card);
    return container;
}

function render(filter = '') {
    const grid = document.getElementById('word-grid');
    if (!grid) return;

    grid.innerHTML = '';
    let filtered = words.filter(w =>
        w.word.toLowerCase().includes(filter.toLowerCase()) ||
        w.meaning.includes(filter)
    );

    if (currentTab === 'plaza') {
        filtered = filtered.filter(w => !isWordLearned(w.word));
    } else if (currentTab === 'library') {
        filtered = filtered.filter(w => isWordLearned(w.word));
    }

    // Apply difficulty filter
    filtered = filterByDifficulty(filtered, currentDifficultyFilter);

    // Update difficulty count display
    const allWordsForTab = currentTab === 'plaza' 
        ? words.filter(w => !isWordLearned(w.word))
        : words.filter(w => isWordLearned(w.word));
    updateDifficultyCount(allWordsForTab);

    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    paginated.forEach((word, index) => {
        const cardEl = createCard(word);
        cardEl.style.animationDelay = `${index * 0.05}s`;
        grid.appendChild(cardEl);
    });

    updatePaginationUI(totalPages);
}

function updatePaginationUI(totalPages) {
    const paginationNumbers = document.getElementById('pagination-numbers');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    if (!paginationNumbers) return;

    paginationNumbers.innerHTML = '';
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;

    const makePageBtn = (i) => {
        const span = document.createElement('span');
        span.className = `page-num ${i === currentPage ? 'active' : ''}`;
        span.textContent = i;
        span.onclick = () => { currentPage = i; render(); };
        return span;
    };

    const makeDots = () => {
        const span = document.createElement('span');
        span.className = 'page-num dots';
        span.textContent = '…';
        return span;
    };

    if (totalPages <= 9) {
        // 页数少，全部显示
        for (let i = 1; i <= totalPages; i++) {
            paginationNumbers.appendChild(makePageBtn(i));
        }
    } else {
        // 滑动窗口：首页 … [当前-2 ~ 当前+2] … 末页
        const delta = 2;
        const left = Math.max(2, currentPage - delta);
        const right = Math.min(totalPages - 1, currentPage + delta);

        paginationNumbers.appendChild(makePageBtn(1));

        if (left > 2) paginationNumbers.appendChild(makeDots());

        for (let i = left; i <= right; i++) {
            paginationNumbers.appendChild(makePageBtn(i));
        }

        if (right < totalPages - 1) paginationNumbers.appendChild(makeDots());

        paginationNumbers.appendChild(makePageBtn(totalPages));
    }
}

// --- Initialize Application ---
function initApp() {
    console.log('🚀 Initializing Pictographic Learn...');

    // Check for file protocol (CORS / SW issues)
    if (window.location.protocol === 'file:') {
        console.warn('⚠️ Detection: Running from file system. PWA features (SW, Manifest) will be blocked by browser security.');
        setTimeout(() => {
            showToast("⚠️ 检测到您直接打开了 HTML 文件。为获得完整体验（如 PWA 离线使用），建议使用本地服务器运行。");
        }, 2000);
    }

    // Load custom words from storage before first render
    if (typeof storageService !== 'undefined') {
        const customWords = storageService.getCustomWords();
        if (customWords.length > 0) {
            customWords.forEach(word => {
                if (!words.find(w => w.word === word.word)) {
                    words.push(word);
                }
            });
        }
    }

    console.log(`📚 Loaded ${words.length} words total`);

    // UI Elements
    const searchInput = document.getElementById('search-input');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const saveSettingsBtn = document.getElementById('save-settings');
    const closeSettingsBtn = document.getElementById('close-settings');
    const providerSelect = document.getElementById('api-provider');
    const urlInput = document.getElementById('api-url');
    const keyInput = document.getElementById('api-key');
    const challengeBtn = document.getElementById('challenge-btn');
    const challengeOverlay = document.getElementById('challenge-overlay');
    const closeChallengeBtn = document.getElementById('close-challenge');
    const gameModal = document.getElementById('game-modal');
    const exitGameBtn = document.getElementById('exit-game');
    const nextRoundBtn = document.getElementById('next-round');
    const backToPlazaBtn = document.getElementById('back-to-plaza');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    const PRESETS = {
        openai: 'https://api.openai.com/v1',
        deepseek: 'https://api.deepseek.com',
        siliconflow: 'https://api.siliconflow.cn/v1',
        moonshot: 'https://api.moonshot.cn/v1'
    };

    // Initial Config
    if (providerSelect) {
        providerSelect.value = tts.config.provider;
        providerSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            const isFree = ['browser', 'edgetts', 'googletts'].includes(val);
            if (urlInput) urlInput.disabled = isFree;
            if (keyInput) keyInput.disabled = isFree;
            if (isFree) {
                if (urlInput) urlInput.value = '';
                if (keyInput) keyInput.value = '';
            } else if (PRESETS[val] && urlInput) {
                urlInput.value = PRESETS[val];
            }
        });
    }
    if (urlInput) urlInput.value = tts.config.url;
    if (keyInput) keyInput.value = tts.config.key;

    // Modal Actions
    if (settingsBtn) settingsBtn.onclick = () => settingsModal?.classList.add('active');
    if (closeSettingsBtn) closeSettingsBtn.onclick = () => settingsModal?.classList.remove('active');
    if (saveSettingsBtn) {
        saveSettingsBtn.onclick = () => {
            const p = providerSelect?.value;
            const u = urlInput?.value.trim() || '';
            const k = keyInput?.value.trim() || '';

            if (!['browser', 'edgetts', 'googletts'].includes(p) && (!u || !k)) {
                showToast("❌ 地址和 Key 不能为空");
                return;
            }
            tts.saveConfig(p, u, k);
            settingsModal?.classList.remove('active');
            showToast("✨ 设置已保存");
        };
    }

    // Tabs (only for main navigation, not modal tabs)
    document.querySelectorAll('.tabs-container .tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tabs-container .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;
            currentPage = 1;
            currentDifficultyFilter = 'all'; // Reset filter when switching tabs
            const difficultyFilter = document.getElementById('difficulty-filter');
            if (difficultyFilter) difficultyFilter.value = 'all';
            render();
        };
    });

    // Difficulty Filter
    const difficultyFilter = document.getElementById('difficulty-filter');
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', (e) => {
            currentDifficultyFilter = e.target.value;
            currentPage = 1; // Reset to page 1 when filter changes
            render();
        });
    }

    // Challenge Control
    if (challengeBtn) challengeBtn.onclick = () => challengeOverlay?.classList.add('active');
    if (closeChallengeBtn) closeChallengeBtn.onclick = () => challengeOverlay?.classList.remove('active');

    document.querySelectorAll('.challenge-mode-btn').forEach(btn => {
        btn.onclick = () => {
            challengeOverlay?.classList.remove('active');
            const mode = btn.dataset.mode;

            if (mode === 'connect_game') {
                if (window.connectGame) {
                    window.connectGame.start();
                } else {
                    showToast("游戏加载中，请稍后再试...");
                }
            } else {
                activeGame = new GameSession(mode);
                gameModal?.classList.add('active');
            }
        };
    });

    if (exitGameBtn) {
        exitGameBtn.onclick = () => {
            gameModal?.classList.remove('active');
            activeGame = null;
            render();
        };
    }

    if (nextRoundBtn) {
        nextRoundBtn.onclick = () => {
            if (activeGame) activeGame.init();
        };
    }

    if (backToPlazaBtn) {
        backToPlazaBtn.onclick = () => {
            gameModal?.classList.remove('active');
            activeGame = null;
            render();
        };
    }

    // Pagination
    if (prevBtn) prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            render();
        }
    };
    if (nextBtn) nextBtn.onclick = () => {
        currentPage++;
        render();
    };

    // Search
    if (searchInput) {
        searchInput.oninput = (e) => {
            currentPage = 1;
            render(e.target.value);
        };
    }

    // Initial render
    saveLearned();
    render();

    // Add click-outside-to-close functionality for all modals
    const modals = [
        'settings-modal',
        'challenge-overlay',
        'game-modal',
        'connect-game-modal',
        'cinema-overlay',
        'custom-word-modal'
    ];

    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('click', (e) => {
                // Close modal if clicking on the modal backdrop (not the content)
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
    });

    console.log('✅ Application initialized successfully');
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
