// SVG Generator Service - 统一生成象形 SVG
class SVGGeneratorService {
    constructor() {
        this.defaultStyle = {
            viewBox: "0 0 120 60",
            strokeWidth: 3,
            fontSize: 24,
            fontFamily: "Arial, sans-serif",
            color: "currentColor"
        };
    }

    // 生成基础文字 SVG（当没有特殊设计时）
    generateBasicSVG(word, meaning = '') {
        const { viewBox, fontSize, fontFamily, color } = this.defaultStyle;
        
        return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">
            <text x="60" y="35" 
                  font-family="${fontFamily}" 
                  font-weight="bold" 
                  font-size="${fontSize}" 
                  fill="${color}"
                  text-anchor="middle"
                  dominant-baseline="middle">
                ${word}
            </text>
            <circle cx="60" cy="35" r="35" 
                    fill="none" 
                    stroke="${color}" 
                    stroke-width="2" 
                    opacity="0.3"/>
        </svg>`;
    }

    // 根据单词特征生成象形 SVG
    generatePictographicSVG(word, meaning, category = 'auto') {
        const lowerWord = word.toLowerCase();
        
        // 根据单词特征自动选择生成策略
        if (category === 'auto') {
            category = this.detectCategory(lowerWord, meaning);
        }
        
        switch (category) {
            case 'long':
                return this.generateLongSVG(word);
            case 'through':
                return this.generateThroughSVG(word);
            case 'under':
                return this.generateUnderSVG(word);
            case 'circle':
                return this.generateCircleSVG(word);
            case 'arrow':
                return this.generateArrowSVG(word);
            default:
                return this.generateBasicSVG(word, meaning);
        }
    }

    // 检测单词类别
    detectCategory(word, meaning) {
        const meaningLower = meaning.toLowerCase();
        
        if (word.includes('long') || meaningLower.includes('长')) return 'long';
        if (word.includes('through') || meaningLower.includes('穿过')) return 'through';
        if (word.includes('under') || meaningLower.includes('下')) return 'under';
        if (word.includes('round') || word.includes('circle')) return 'circle';
        if (meaningLower.includes('去') || meaningLower.includes('向')) return 'arrow';
        
        return 'basic';
    }

    // 生成"长"类型的 SVG
    generateLongSVG(word) {
        return `<svg viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30 L130 30" 
                  stroke="currentColor" 
                  stroke-width="6" 
                  stroke-linecap="round"/>
            <text x="75" y="50" 
                  font-family="Arial" 
                  font-weight="bold" 
                  font-size="16" 
                  fill="currentColor"
                  text-anchor="middle">
                ${word}
            </text>
        </svg>`;
    }

    // 生成"穿过"类型的 SVG
    generateThroughSVG(word) {
        return `<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="30" r="20" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="3"/>
            <path d="M10 30 L110 30" 
                  stroke="#ef4444" 
                  stroke-width="3" 
                  stroke-dasharray="5,3"/>
            <text x="60" y="55" 
                  font-family="Arial" 
                  font-weight="bold" 
                  font-size="14" 
                  fill="currentColor"
                  text-anchor="middle">
                ${word}
            </text>
        </svg>`;
    }

    // 生成"在下"类型的 SVG
    generateUnderSVG(word) {
        return `<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 L100 20" 
                  stroke="currentColor" 
                  stroke-width="3"/>
            <text x="60" y="45" 
                  font-family="Arial" 
                  font-weight="bold" 
                  font-size="20" 
                  fill="currentColor"
                  text-anchor="middle">
                ${word}
            </text>
        </svg>`;
    }

    // 生成圆形类型的 SVG
    generateCircleSVG(word) {
        return `<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="30" r="25" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="3"/>
            <text x="60" y="35" 
                  font-family="Arial" 
                  font-weight="bold" 
                  font-size="16" 
                  fill="currentColor"
                  text-anchor="middle">
                ${word}
            </text>
        </svg>`;
    }

    // 生成箭头类型的 SVG
    generateArrowSVG(word) {
        return `<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30 L90 30 M90 30 L75 20 M90 30 L75 40" 
                  stroke="currentColor" 
                  stroke-width="3" 
                  fill="none"
                  stroke-linecap="round"/>
            <text x="60" y="55" 
                  font-family="Arial" 
                  font-weight="bold" 
                  font-size="14" 
                  fill="currentColor"
                  text-anchor="middle">
                ${word}
            </text>
        </svg>`;
    }

    // 从 AI 图片 URL 转换为 SVG（使用 img 标签嵌入）
    convertImageToSVG(imageUrl, word) {
        return `<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
            <image href="${imageUrl}" 
                   x="10" y="5" 
                   width="100" height="50" 
                   preserveAspectRatio="xMidYMid meet"/>
        </svg>`;
    }

    // 验证 SVG 格式
    validateSVG(svgString) {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgString, 'image/svg+xml');
            const errorNode = doc.querySelector('parsererror');
            return !errorNode;
        } catch (e) {
            return false;
        }
    }
}

// 导出单例
const svgGenerator = new SVGGeneratorService();
