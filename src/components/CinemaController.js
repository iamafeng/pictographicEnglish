/**
 * Cinema Mode Controller
 * Handles the immersive learning experience
 */
class CinemaController {
    constructor() {
        this.words = [];
        this.currentIndex = 0;
        this.isPlaying = false;
        this.timer = null;
        this.duration = 8000; // 8 seconds per word

        this.overlay = document.getElementById('cinema-overlay');
        this.stage = document.getElementById('cinema-card-target');
        this.progressBar = document.getElementById('cinema-progress-bar');
        this.playPauseBtn = document.getElementById('play-pause-cinema');

        this.init();
    }

    init() {
        // UI Bindings
        document.getElementById('cinema-btn')?.addEventListener('click', () => this.start());
        document.getElementById('exit-cinema')?.addEventListener('click', () => this.stop());
        document.getElementById('prev-cinema')?.addEventListener('click', () => this.prev());
        document.getElementById('next-cinema')?.addEventListener('click', () => this.next());
        this.playPauseBtn?.addEventListener('click', () => this.togglePause());

        // Global reference
        window.activeCinema = this;
    }

    start() {
        this.words = getLearnedArray().map(word => words.find(w => w.word === word)).filter(Boolean);

        if (this.words.length === 0) {
            // If library is empty, use all words
            this.words = [...words].sort(() => 0.5 - Math.random());
            showToast("🎬 库中尚无单词，已为您开启全库随机探索");
        } else {
            // Shuffle learned words
            this.words.sort(() => 0.5 - Math.random());
        }

        this.currentIndex = 0;
        this.overlay?.classList.add('active');
        this.isPlaying = true;
        this.renderCurrent();
        this.startTimer();
    }

    stop() {
        this.overlay?.classList.remove('active');
        this.isPlaying = false;
        this.clearTimer();
        if (window.tts) window.tts.stop();
        window.activeCinema = null;
    }

    renderCurrent() {
        if (!this.words || this.words.length === 0) return;
        const wordData = this.words[this.currentIndex];
        if (!wordData) return;

        if (this.stage) {
            this.stage.innerHTML = `
                <div class="card-container animate-fade-in">
                    <div class="card">
                        <div class="card-face card-front">
                            <div class="pictogram-container">${wordData.svg || `<div class="word-placeholder">${wordData.word}</div>`}</div>
                            <div class="visual-label">${wordData.word}</div>
                        </div>
                    </div>
                </div>
                <div class="cinema-info-overlay">
                    <div class="word-title">${wordData.word}</div>
                    <div class="meaning">${wordData.meaning}</div>
                    <div class="example">${wordData.example}</div>
                    <div class="example-cn">${wordData.exampleCn}</div>
                </div>
            `;
        }

        // Speak sequence
        if (window.tts) {
            window.tts.stop();
            window.tts.speak(wordData.word);

            if (this.speechTimer) clearTimeout(this.speechTimer);
            this.speechTimer = setTimeout(() => {
                if (this.isPlaying && this.overlay.classList.contains('active')) {
                    window.tts.speak(wordData.example);
                }
            }, 2500);
        }
    }

    startTimer() {
        this.clearTimer();
        let start = Date.now();
        const duration = this.duration;

        if (this.playPauseBtn) this.playPauseBtn.textContent = '⏸';

        this.timer = setInterval(() => {
            if (!this.isPlaying) return;

            const elapsed = Date.now() - start;
            const progress = (elapsed / duration) * 100;

            if (this.progressBar) {
                this.progressBar.style.width = `${progress}%`;
            }

            if (elapsed >= duration) {
                this.next();
            }
        }, 50);
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.progressBar) this.progressBar.style.width = '0%';
    }

    togglePause() {
        this.isPlaying = !this.isPlaying;
        if (this.playPauseBtn) {
            this.playPauseBtn.textContent = this.isPlaying ? '⏸' : '▶️';
        }

        if (this.isPlaying) {
            this.startTimer();
        } else {
            if (window.tts) window.tts.stop();
        }
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.renderCurrent();
        if (this.isPlaying) this.startTimer();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.words.length) % this.words.length;
        this.renderCurrent();
        if (this.isPlaying) this.startTimer();
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    window.cinemaController = new CinemaController();
});
