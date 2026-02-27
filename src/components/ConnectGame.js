/**
 * Connect Game Component
 * Word to Pictogram matching game
 */
class ConnectGame {
    constructor() {
        this.modal = document.getElementById('connect-game-modal');
        this.wordsCol = document.getElementById('connect-words');
        this.picsCol = document.getElementById('connect-pics');
        this.canvas = document.getElementById('connect-canvas');
        if (this.canvas) this.ctx = this.canvas.getContext('2d');
        this.progressEl = document.getElementById('connect-progress');

        this.selectedWord = null;
        this.selectedPic = null;
        this.matches = [];
        this.currentSet = [];
        this.shuffledPics = [];
        this.isProcessing = false;

        this.boundResizeView = this.resizeCanvas.bind(this);
        this.init();
    }

    init() {
        document.getElementById('exit-connect')?.addEventListener('click', () => this.stop());
        window.addEventListener('resize', this.boundResizeView);
    }

    start() {
        // Pick 5 random words (prefer learned ones if available)
        const learned = typeof getLearnedArray === 'function' ? getLearnedArray() : [];
        const pool = (typeof words !== 'undefined' && words.length >= 5) ? words : [];

        if (pool.length === 0) {
            if (window.toast) toast.error("词库数据加载中，请稍后");
            return;
        }

        const learnedPool = pool.filter(w => learned.includes(w.word));
        const finalPool = learnedPool.length >= 5 ? learnedPool : pool;

        this.currentSet = [...finalPool].sort(() => 0.5 - Math.random()).slice(0, 5);
        this.shuffledPics = [...this.currentSet].sort(() => 0.5 - Math.random());

        this.matches = [];
        this.selectedWord = null;
        this.selectedPic = null;
        this.isProcessing = false;

        this.modal.classList.add('active');
        this.render();

        // Use timeout to ensure modal is rendered and dimensions are available
        setTimeout(() => {
            this.resizeCanvas();
            this.animate();
        }, 150);
    }

    stop() {
        this.modal.classList.remove('active');
        this.selectedWord = null;
        this.selectedPic = null;
        this.matches = [];
        this.isProcessing = false;
        if (window.tts) window.tts.stop();
    }

    resizeCanvas() {
        if (!this.modal.classList.contains('active')) return;
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    render() {
        // Render Words
        this.wordsCol.innerHTML = this.currentSet.map(w => `
            <div class="connect-item" data-word="${w.word}" role="listitem">
                ${w.word}
            </div>
        `).join('');

        // Render Pics
        this.picsCol.innerHTML = this.shuffledPics.map(w => `
            <div class="connect-item pic-item" data-word="${w.word}" role="listitem">
                <div class="pictogram-mini">${w.svg || `<div class="word-fallback">${w.word}</div>`}</div>
            </div>
        `).join('');

        // Attach Clicks
        this.wordsCol.querySelectorAll('.connect-item').forEach(el => {
            el.onclick = () => this.handleSelect('word', el);
        });

        this.picsCol.querySelectorAll('.connect-item').forEach(el => {
            el.onclick = () => this.handleSelect('pic', el);
        });

        this.updateProgress();
    }

    handleSelect(type, el) {
        if (this.isProcessing || el.classList.contains('matched')) return;

        if (type === 'word') {
            this.wordsCol.querySelectorAll('.connect-item').forEach(i => i.classList.remove('selected'));
            el.classList.add('selected');
            this.selectedWord = el;
        } else {
            this.picsCol.querySelectorAll('.connect-item').forEach(i => i.classList.remove('selected'));
            el.classList.add('selected');
            this.selectedPic = el;
        }

        this.checkMatch();
    }

    checkMatch() {
        if (this.selectedWord && this.selectedPic) {
            const word = this.selectedWord.dataset.word;
            const picWord = this.selectedPic.dataset.word;

            if (word === picWord) {
                // Match Success
                this.selectedWord.classList.replace('selected', 'matched');
                this.selectedPic.classList.replace('selected', 'matched');

                this.matches.push({
                    wordEl: this.selectedWord,
                    picEl: this.selectedPic
                });

                if (window.tts) window.tts.speak(word);

                this.selectedWord = null;
                this.selectedPic = null;
                this.updateProgress();

                if (this.matches.length === this.currentSet.length) {
                    this.isProcessing = true;
                    setTimeout(() => this.finish(), 800);
                }
            } else {
                // Match Failed
                this.isProcessing = true;
                const w = this.selectedWord;
                const p = this.selectedPic;

                w.classList.add('shake');
                p.classList.add('shake');

                setTimeout(() => {
                    w.classList.remove('shake', 'selected');
                    p.classList.remove('shake', 'selected');
                    this.selectedWord = null;
                    this.selectedPic = null;
                    this.isProcessing = false;
                }, 500);
            }
        }
    }

    updateProgress() {
        if (this.progressEl) {
            this.progressEl.textContent = `已连对: ${this.matches.length}/${this.currentSet.length}`;
        }
    }

    drawLines() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = '#6366f1';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';

        this.matches.forEach(m => {
            const wRect = m.wordEl.getBoundingClientRect();
            const pRect = m.picEl.getBoundingClientRect();
            const cRect = this.canvas.getBoundingClientRect();

            const x1 = wRect.right - cRect.left;
            const y1 = wRect.top + wRect.height / 2 - cRect.top;
            const x2 = pRect.left - cRect.left;
            const y2 = pRect.top + pRect.height / 2 - cRect.top;

            // Draw shadow line
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.bezierCurveTo(x1 + 60, y1, x2 - 60, y2, x2, y2);
            this.ctx.stroke();
            this.ctx.shadowBlur = 0;
        });
    }

    animate() {
        if (!this.modal.classList.contains('active')) return;
        this.drawLines();
        requestAnimationFrame(() => this.animate());
    }

    finish() {
        if (window.toast) {
            toast.success("🎉 太棒了！全部连对！记忆力 +100");
        }
        setTimeout(() => this.stop(), 1500);
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    window.connectGame = new ConnectGame();
});
