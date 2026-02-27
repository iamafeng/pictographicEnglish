// Performance Optimization Utilities

// 虚拟滚动管理器
class VirtualScrollManager {
    constructor(container, items, renderItem, itemHeight = 420) {
        this.container = container;
        this.items = items;
        this.renderItem = renderItem;
        this.itemHeight = itemHeight;
        this.visibleCount = Math.ceil(window.innerHeight / itemHeight) + 2;
        this.startIndex = 0;
        this.init();
    }

    init() {
        this.render();
        this.container.addEventListener('scroll', this.throttle(() => {
            this.onScroll();
        }, 100));
    }

    onScroll() {
        const scrollTop = this.container.scrollTop;
        const newStartIndex = Math.floor(scrollTop / this.itemHeight);
        
        if (newStartIndex !== this.startIndex) {
            this.startIndex = newStartIndex;
            this.render();
        }
    }

    render() {
        const endIndex = Math.min(
            this.startIndex + this.visibleCount,
            this.items.length
        );
        
        this.container.innerHTML = '';
        
        for (let i = this.startIndex; i < endIndex; i++) {
            const item = this.items[i];
            const element = this.renderItem(item, i);
            element.style.transform = `translateY(${i * this.itemHeight}px)`;
            this.container.appendChild(element);
        }
    }

    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// 防抖函数
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, wait = 300) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
        }
    };
}

// 图片懒加载
class LazyImageLoader {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '50px'
            });
        }
    }

    observe(img) {
        if (this.observer) {
            this.observer.observe(img);
        } else {
            this.loadImage(img);
        }
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
        }
    }
}

// 音频缓存管理器
class AudioCacheManager {
    constructor(maxSize = 50) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }

    async get(text, generator) {
        if (this.cache.has(text)) {
            return this.cache.get(text);
        }

        const audio = await generator(text);
        this.set(text, audio);
        return audio;
    }

    set(text, audio) {
        if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(text, audio);
    }

    clear() {
        this.cache.clear();
    }
}

// 导出
const lazyImageLoader = new LazyImageLoader();
const audioCacheManager = new AudioCacheManager();
