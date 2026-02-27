// Keyboard Navigation Utility
class KeyboardNavigationManager {
    constructor() {
        this.currentFocusIndex = -1;
        this.focusableElements = [];
        this.enabled = true;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (!this.enabled) return;
            
            switch(e.key) {
                case 'Tab':
                    this.handleTab(e);
                    break;
                case ' ':
                case 'Enter':
                    this.handleActivate(e);
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                case 'ArrowUp':
                case 'ArrowDown':
                    this.handleArrows(e);
                    break;
                case 'Escape':
                    this.handleEscape(e);
                    break;
            }
        });
    }

    updateFocusableElements() {
        this.focusableElements = Array.from(document.querySelectorAll(
            '.card-container, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ));
    }

    handleTab(e) {
        this.updateFocusableElements();
        if (this.focusableElements.length === 0) return;
        
        e.preventDefault();
        
        if (e.shiftKey) {
            this.currentFocusIndex--;
            if (this.currentFocusIndex < 0) {
                this.currentFocusIndex = this.focusableElements.length - 1;
            }
        } else {
            this.currentFocusIndex++;
            if (this.currentFocusIndex >= this.focusableElements.length) {
                this.currentFocusIndex = 0;
            }
        }
        
        this.focusableElements[this.currentFocusIndex]?.focus();
    }

    handleActivate(e) {
        const focused = document.activeElement;
        
        // 如果焦点在卡片上，空格键翻转卡片
        if (focused.classList.contains('card-container')) {
            e.preventDefault();
            const card = focused.querySelector('.card');
            if (card) {
                card.classList.toggle('is-flipped');
            }
        }
    }

    handleArrows(e) {
        // 在影院模式下使用方向键控制
        if (window.activeCinema) {
            e.preventDefault();
            if (e.key === 'ArrowLeft') {
                window.activeCinema.prev();
            } else if (e.key === 'ArrowRight') {
                window.activeCinema.next();
            }
        }
    }

    handleEscape(e) {
        // 关闭打开的模态框
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            e.preventDefault();
            activeModal.classList.remove('active');
        }
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }
}

// 导出单例
const keyboardNav = new KeyboardNavigationManager();
