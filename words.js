// ========================================
// Complete Pictographic Vocabulary Database
// 完整的象形单词数据库
// ========================================

const words = [
    {
        "word": "go",
        "phonetic": "[ɡoʊ]",
        "meaning": "v. 去；走",
        "example": "He will go to school riding a bicycle.",
        "exampleCn": "他骑车去上学。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "movement"
        ],
        "svg": "<svg viewBox=\"0 0 100 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"30\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"70\" cy=\"30\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M30 30 L50 15 L70 30 M50 15 L50 25 M45 15 L55 15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"8\" r=\"3\" fill=\"currentColor\"/><path d=\"M50 11 L50 20 L40 28 M50 20 L60 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>"
    },
    {
        "word": "make",
        "phonetic": "[meɪk]",
        "meaning": "v. 使；做；制造",
        "example": "She uses lipstick to make up every morning.",
        "exampleCn": "她每天早上用口红化妆。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "create"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"40\" font-family=\"Arial\" font-weight=\"900\" font-size=\"28\" fill=\"currentColor\">M</text><path d=\"M40 10 L40 40 L60 10 L60 40\" stroke=\"currentColor\" stroke-width=\"4\" fill=\"none\"/><text x=\"65\" y=\"40\" font-family=\"Arial\" font-weight=\"900\" font-size=\"28\" fill=\"currentColor\">KE</text><path d=\"M20 15 Q 15 5, 25 5 Q 35 5, 30 15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.6\"/></svg>"
    },
    {
        "word": "take",
        "phonetic": "[teɪk]",
        "meaning": "v. 需要；拿走",
        "example": "I will take it away from you!",
        "exampleCn": "我会从你手里夺走它！",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">TAK</text><path d=\"M70 10 L85 25 L70 40\" stroke=\"currentColor\" stroke-width=\"4\" fill=\"none\"/><path d=\"M85 25 L65 25\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>"
    },
    {
        "word": "run",
        "phonetic": "[rʌn]",
        "meaning": "v. 跑；运行",
        "example": "I run every morning.",
        "exampleCn": "我每天早上跑步。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "movement",
            "sport"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\">RUN</text><path d=\"M70 20 L85 35 L70 50 M85 35 L100 35\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"65\" cy=\"15\" r=\"4\" fill=\"currentColor\"/><path d=\"M65 19 L65 30 L55 40 M65 30 L75 40\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>"
    },
    {
        "word": "walk",
        "phonetic": "[wɔːk]",
        "meaning": "v. 走；步行",
        "example": "Let's walk to the park.",
        "exampleCn": "我们走路去公园吧。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "movement"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\">WALK</text><path d=\"M60 25 L60 35 L55 45 M60 35 L65 45\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"18\" r=\"4\" fill=\"currentColor\" opacity=\"0.4\"/></svg>"
    },
    {
        "word": "jump",
        "phonetic": "[dʒʌmp]",
        "meaning": "v. 跳；跳跃",
        "example": "The cat can jump very high.",
        "exampleCn": "这只猫能跳得很高。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "movement"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"55\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\">JUMP</text><path d=\"M40 40 Q 60 10, 80 40\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"8\" r=\"4\" fill=\"currentColor\" opacity=\"0.4\"/></svg>"
    },
    {
        "word": "fly",
        "phonetic": "[flaɪ]",
        "meaning": "v. 飞；飞行",
        "example": "Birds fly in the sky.",
        "exampleCn": "鸟儿在天空中飞翔。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "movement",
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"32\" fill=\"currentColor\" text-anchor=\"middle\">FLY</text><path d=\"M40 25 L60 15 L80 25 M60 15 L60 25\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/></svg>"
    },
    {
        "word": "swim",
        "phonetic": "[swɪm]",
        "meaning": "v. 游泳",
        "example": "I love to swim in summer.",
        "exampleCn": "我喜欢在夏天游泳。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "movement",
            "sport",
            "water"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 40 Q 35 30, 60 40 T 110 40\" stroke=\"#3b82f6\" stroke-width=\"4\" fill=\"none\" opacity=\"0.6\"/><text x=\"60\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\">SWIM</text></svg>"
    },
    {
        "word": "eat",
        "phonetic": "[iːt]",
        "meaning": "v. 吃",
        "example": "Let's eat dinner.",
        "exampleCn": "我们吃晚饭吧。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"32\" fill=\"currentColor\" text-anchor=\"middle\">EAT</text><circle cx=\"60\" cy=\"15\" r=\"6\" fill=\"currentColor\" opacity=\"0.3\"/></svg>"
    },
    {
        "word": "drink",
        "phonetic": "[drɪŋk]",
        "meaning": "v. 喝；饮",
        "example": "Drink some water.",
        "exampleCn": "喝点水。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"32\" fill=\"currentColor\" text-anchor=\"middle\">DRINK</text><rect x=\"50\" y=\"10\" width=\"20\" height=\"25\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/></svg>"
    },
    {
        "word": "sleep",
        "phonetic": "[sliːp]",
        "meaning": "v. 睡觉",
        "example": "I need to sleep.",
        "exampleCn": "我需要睡觉。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "daily"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"32\" fill=\"currentColor\" text-anchor=\"middle\">SLEEP</text><path d=\"M80 15 Q 90 10, 100 15 M90 25 Q 100 20, 110 25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/></svg>"
    },
    {
        "word": "read",
        "phonetic": "[riːd]",
        "meaning": "v. 读；阅读",
        "example": "I read books every day.",
        "exampleCn": "我每天读书。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "study"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"20\" width=\"35\" height=\"25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" rx=\"2\"/><path d=\"M77 20 L77 45\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"50\" cy=\"25\" r=\"4\" fill=\"currentColor\"/><path d=\"M50 29 L50 35\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"5\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">READ</text></svg>"
    },
    {
        "word": "write",
        "phonetic": "[raɪt]",
        "meaning": "v. 写；书写",
        "example": "Write your name.",
        "exampleCn": "写下你的名字。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "study"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 15 L75 40\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M75 40 L80 45\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M50 45 L90 45\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"3\"/><text x=\"5\" y=\"30\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">WRITE</text></svg>"
    },
    {
        "word": "open",
        "phonetic": "[ˈəʊpən]",
        "meaning": "v. 打开 adj. 开着的",
        "example": "Open the box.",
        "exampleCn": "打开盒子。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 L50 45 M50 20 L70 20 L70 45\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M70 20 L85 15 L85 40 L70 45\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"3\"/><text x=\"5\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">OPEN</text></svg>"
    },
    {
        "word": "close",
        "phonetic": "[kləʊz]",
        "meaning": "v. 关闭；合上",
        "example": "Close the door.",
        "exampleCn": "关门。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 L50 45 M50 20 L75 20 L75 45 L50 45\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"5\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\">CLOSE</text></svg>"
    },
    {
        "word": "think",
        "phonetic": "[θɪŋk]",
        "meaning": "v. 想，思索，认为",
        "example": "What do you think?",
        "exampleCn": "你认为呢？",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "mental",
            "thought"
        ],
        "svg": "<svg viewBox=\"0 0 120 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">think</text><path d=\"M80 10 Q 95 0, 110 10 Q 125 25, 110 40 Q 95 50, 80 40 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-dasharray=\"3\"/><circle cx=\"75\" cy=\"42\" r=\"2\" fill=\"currentColor\"/><circle cx=\"70\" cy=\"48\" r=\"1.5\" fill=\"currentColor\"/></svg>"
    },
    {
        "word": "up",
        "phonetic": "[ʌp]",
        "meaning": "adv. 向上；在上面",
        "example": "Look up at the stars.",
        "exampleCn": "抬头看星星。",
        "category": "preposition",
        "difficulty": 1,
        "tags": [
            "direction",
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"20\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"32\" fill=\"currentColor\">UP</text><path d=\"M70 45 L70 15 M70 15 L60 25 M70 15 L80 25\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "word": "down",
        "phonetic": "[daʊn]",
        "meaning": "adv. 向下；在下面",
        "example": "The ball rolled down the hill.",
        "exampleCn": "球滚下了山坡。",
        "category": "preposition",
        "difficulty": 1,
        "tags": [
            "direction",
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"25\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">DOWN</text><path d=\"M80 10 L80 45 M80 45 L70 35 M80 45 L90 35\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "word": "left",
        "phonetic": "[left]",
        "meaning": "adj. 左边的 n. 左边",
        "example": "Turn left at the corner.",
        "exampleCn": "在拐角处向左转。",
        "category": "preposition",
        "difficulty": 1,
        "tags": [
            "direction",
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"40\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">LEFT</text><path d=\"M90 30 L20 30 M20 30 L30 20 M20 30 L30 40\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "word": "right",
        "phonetic": "[raɪt]",
        "meaning": "adj. 右边的；正确的",
        "example": "You are right!",
        "exampleCn": "你是对的！",
        "category": "preposition",
        "difficulty": 2,
        "tags": [
            "direction",
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\">RIGHT</text><path d=\"M20 30 L100 30 M100 30 L90 20 M100 30 L90 40\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"
    },
    {
        "word": "in",
        "phonetic": "[ɪn]",
        "meaning": "prep. 在...里面",
        "example": "The cat is in the box.",
        "exampleCn": "猫在盒子里。",
        "category": "preposition",
        "difficulty": 2,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"15\" width=\"60\" height=\"35\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" rx=\"5\"/><text x=\"35\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">IN</text></svg>"
    },
    {
        "word": "out",
        "phonetic": "[aʊt]",
        "meaning": "adv. 在外；出去",
        "example": "Go out and play.",
        "exampleCn": "出去玩吧。",
        "category": "preposition",
        "difficulty": 1,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"15\" width=\"50\" height=\"35\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" rx=\"5\"/><text x=\"25\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">OUT</text><path d=\"M70 32 L95 32 M95 32 L85 25 M95 32 L85 39\" stroke=\"#ef4444\" stroke-width=\"3\"/></svg>"
    },
    {
        "word": "on",
        "phonetic": "[ɒn]",
        "meaning": "prep. 在...上面",
        "example": "The book is on the table.",
        "exampleCn": "书在桌子上。",
        "category": "preposition",
        "difficulty": 2,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 40 L80 40\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"30\" y=\"30\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\">ON</text></svg>"
    },
    {
        "word": "off",
        "phonetic": "[ɒf]",
        "meaning": "adv. 离开；脱落",
        "example": "Turn off the light.",
        "exampleCn": "关灯。",
        "category": "preposition",
        "difficulty": 1,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 30 L50 30\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"25\" y=\"25\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">OFF</text><path d=\"M55 30 L75 30 M75 30 L70 25 M75 30 L70 35\" stroke=\"#ef4444\" stroke-width=\"3\"/></svg>"
    },
    {
        "word": "under",
        "phonetic": "[ˈʌndər]",
        "meaning": "prep. 在...之下",
        "example": "What's under the cliff?",
        "exampleCn": "悬崖下有什么？",
        "category": "preposition",
        "difficulty": 3,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 10 L10 40 L90 40\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"/><text x=\"20\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\">under</text><circle cx=\"50\" cy=\"5\" r=\"4\" fill=\"currentColor\"/></svg>"
    },
    {
        "word": "through",
        "phonetic": "[ðruː]",
        "meaning": "prep. 穿过；自始至终",
        "example": "The long line goes through the hole.",
        "exampleCn": "长线穿过了孔。",
        "category": "preposition",
        "difficulty": 3,
        "tags": [
            "position",
            "movement"
        ],
        "svg": "<svg viewBox=\"0 0 120 40\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"30\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\">thr</text><circle cx=\"55\" cy=\"25\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"75\" y=\"30\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\">ugh</text><path d=\"M5 25 L115 25\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4\"/></svg>"
    },
    {
        "word": "back",
        "phonetic": "[bæk]",
        "meaning": "adv. 在后；回到原处",
        "example": "Let's go back to the beginning.",
        "exampleCn": "让我们回到起点吧。",
        "category": "preposition",
        "difficulty": 1,
        "tags": [
            "direction",
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"900\" font-size=\"24\" fill=\"currentColor\">BACK</text><path d=\"M90 25 L70 25 M70 25 L80 15 M70 25 L80 35\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"/></svg>"
    },
    {
        "word": "away",
        "phonetic": "[əˈweɪ]",
        "meaning": "adv. 离开，远离",
        "example": "Please don't go away!",
        "exampleCn": "求你们了，别离我而去。",
        "category": "preposition",
        "difficulty": 2,
        "tags": [
            "direction",
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">AWA</text><path d=\"M70 15 L90 35 M90 15 L70 35\" stroke=\"#6366f1\" stroke-width=\"4\"/><path d=\"M80 5 L80 15\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>"
    },
    {
        "word": "round",
        "phonetic": "[raʊnd]",
        "meaning": "adj. 圆的；球形的",
        "example": "The earth is round.",
        "exampleCn": "地球是圆的。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "shape"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"70\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"5\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">ROUND</text></svg>"
    },
    {
        "word": "square",
        "phonetic": "[skweə(r)]",
        "meaning": "n. 正方形 adj. 方形的",
        "example": "Draw a square.",
        "exampleCn": "画一个正方形。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "shape"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"60\" y=\"10\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"16\" fill=\"currentColor\">SQUARE</text></svg>"
    },
    {
        "word": "circle",
        "phonetic": "[ˈsɜːkl]",
        "meaning": "n. 圆；圆圈",
        "example": "Draw a circle.",
        "exampleCn": "画一个圆。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "shape"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"75\" cy=\"30\" r=\"22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\">CIRCLE</text></svg>"
    },
    {
        "word": "line",
        "phonetic": "[laɪn]",
        "meaning": "n. 线；线条",
        "example": "Draw a straight line.",
        "exampleCn": "画一条直线。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "shape"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 30 L110 30\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"40\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">LINE</text></svg>"
    },
    {
        "word": "big",
        "phonetic": "[bɪɡ]",
        "meaning": "adj. 大的；重要的",
        "example": "This is a big house.",
        "exampleCn": "这是一座大房子。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "size"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"20\" y=\"45\" font-family=\"Arial\" font-weight=\"900\" font-size=\"48\" fill=\"currentColor\">BIG</text></svg>"
    },
    {
        "word": "small",
        "phonetic": "[smɔːl]",
        "meaning": "adj. 小的；少的",
        "example": "A small bird.",
        "exampleCn": "一只小鸟。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "size"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"30\" y=\"38\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"14\" fill=\"currentColor\">small</text></svg>"
    },
    {
        "word": "tall",
        "phonetic": "[tɔːl]",
        "meaning": "adj. 高的",
        "example": "He is very tall.",
        "exampleCn": "他很高。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "size"
        ],
        "svg": "<svg viewBox=\"0 0 100 80\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L40 70\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"45\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">TALL</text></svg>"
    },
    {
        "word": "short",
        "phonetic": "[ʃɔːt]",
        "meaning": "adj. 短的；矮的",
        "example": "A short pencil.",
        "exampleCn": "一支短铅笔。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "size"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 35 L90 35\" stroke=\"currentColor\" stroke-width=\"4\"/><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">SHORT</text></svg>"
    },
    {
        "word": "long",
        "phonetic": "[lɔːŋ]",
        "meaning": "adj. 长的；长久的",
        "example": "She has got long legs.",
        "exampleCn": "她有一双长腿。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "size"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10 L20 50 L80 50\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\"/><text x=\"25\" y=\"45\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">ong</text></svg>"
    },
    {
        "word": "red",
        "phonetic": "[red]",
        "meaning": "adj. 红色的 n. 红色",
        "example": "I like red roses.",
        "exampleCn": "我喜欢红玫瑰。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"30\" r=\"20\" fill=\"#ef4444\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20\" y=\"55\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">RED</text></svg>"
    },
    {
        "word": "blue",
        "phonetic": "[bluː]",
        "meaning": "adj. 蓝色的 n. 蓝色",
        "example": "The sky is blue.",
        "exampleCn": "天空是蓝色的。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"70\" cy=\"25\" r=\"18\" fill=\"#3b82f6\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"10\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\">BLUE</text></svg>"
    },
    {
        "word": "green",
        "phonetic": "[ɡriːn]",
        "meaning": "adj. 绿色的 n. 绿色",
        "example": "Green grass.",
        "exampleCn": "绿色的草。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"70\" cy=\"30\" r=\"18\" fill=\"#22c55e\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"5\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">GREEN</text></svg>"
    },
    {
        "word": "black",
        "phonetic": "[blæk]",
        "meaning": "adj. 黑色的 n. 黑色",
        "example": "A black cat.",
        "exampleCn": "一只黑猫。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"70\" cy=\"30\" r=\"18\" fill=\"#1f2937\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"5\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">BLACK</text></svg>"
    },
    {
        "word": "white",
        "phonetic": "[waɪt]",
        "meaning": "adj. 白色的 n. 白色",
        "example": "White snow.",
        "exampleCn": "白雪。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"70\" cy=\"30\" r=\"18\" fill=\"#ffffff\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"5\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">WHITE</text></svg>"
    },
    {
        "word": "one",
        "phonetic": "[wʌn]",
        "meaning": "num. 一",
        "example": "I have one apple.",
        "exampleCn": "我有一个苹果。",
        "category": "number",
        "difficulty": 1,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"35\" y=\"45\" font-family=\"Arial\" font-weight=\"900\" font-size=\"48\" fill=\"currentColor\">1</text></svg>"
    },
    {
        "word": "two",
        "phonetic": "[tuː]",
        "meaning": "num. 二",
        "example": "Two birds.",
        "exampleCn": "两只鸟。",
        "category": "number",
        "difficulty": 1,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"35\" y=\"45\" font-family=\"Arial\" font-weight=\"900\" font-size=\"48\" fill=\"currentColor\">2</text></svg>"
    },
    {
        "word": "three",
        "phonetic": "[θriː]",
        "meaning": "num. 三",
        "example": "Three cats.",
        "exampleCn": "三只猫。",
        "category": "number",
        "difficulty": 2,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 100 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"35\" y=\"45\" font-family=\"Arial\" font-weight=\"900\" font-size=\"48\" fill=\"currentColor\">3</text></svg>"
    },
    {
        "word": "book",
        "phonetic": "[bʊk]",
        "meaning": "n. 书；书籍",
        "example": "I love reading books.",
        "exampleCn": "我喜欢读书。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object",
            "study"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"15\" width=\"50\" height=\"35\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" rx=\"2\"/><path d=\"M75 15 L75 50\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\">BOOK</text></svg>"
    },
    {
        "word": "pen",
        "phonetic": "[pen]",
        "meaning": "n. 钢笔；笔",
        "example": "Write with a pen.",
        "exampleCn": "用钢笔写字。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object",
            "study"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 20 L80 45\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M80 45 L85 50\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"10\" y=\"15\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">PEN</text></svg>"
    },
    {
        "word": "cup",
        "phonetic": "[kʌp]",
        "meaning": "n. 杯子",
        "example": "A cup of tea.",
        "exampleCn": "一杯茶。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object",
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L40 45 L70 45 L70 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M35 20 L75 20\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"10\" y=\"15\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\">CUP</text></svg>"
    },
    {
        "word": "door",
        "phonetic": "[dɔː(r)]",
        "meaning": "n. 门",
        "example": "Open the door.",
        "exampleCn": "开门。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object",
            "daily"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"45\" height=\"45\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><circle cx=\"85\" cy=\"33\" r=\"2\" fill=\"currentColor\"/><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\">DOOR</text></svg>"
    },
    {
        "word": "window",
        "phonetic": "[ˈwɪndəʊ]",
        "meaning": "n. 窗户",
        "example": "Look out the window.",
        "exampleCn": "看窗外。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "object",
            "daily"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"15\" width=\"50\" height=\"35\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><path d=\"M75 15 L75 50 M50 32 L100 32\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"5\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"14\" fill=\"currentColor\">WINDOW</text></svg>"
    },
    {
        "word": "chair",
        "phonetic": "[tʃeə(r)]",
        "meaning": "n. 椅子",
        "example": "Sit on the chair.",
        "exampleCn": "坐在椅子上。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object",
            "daily"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 L40 35 L70 35 L70 15 M40 35 L40 55 M70 35 L70 55 M35 15 L75 15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"5\" y=\"30\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\">CHAIR</text></svg>"
    },
    {
        "word": "table",
        "phonetic": "[ˈteɪbl]",
        "meaning": "n. 桌子",
        "example": "Put it on the table.",
        "exampleCn": "把它放在桌子上。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "object",
            "daily"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 25 L90 25 M35 25 L35 50 M85 25 L85 50\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"5\" y=\"15\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\">TABLE</text></svg>"
    },
    {
        "word": "well",
        "phonetic": "[wel]",
        "meaning": "n. 井 adj. 健康的",
        "example": "The village still uses well water.",
        "exampleCn": "村里人依然饮用井水。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">we</text><path d=\"M45 10 L45 45 M65 10 L65 45\" stroke=\"currentColor\" stroke-width=\"4\"/><path d=\"M40 15 L70 15\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"55\" cy=\"25\" r=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M55 15 L55 20\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
    },
    {
        "word": "being",
        "phonetic": "[ˈbiːɪŋ]",
        "meaning": "n. 存在；生物；生命",
        "example": "How long does a human being stay pregnant?",
        "exampleCn": "人类孕期是多长？",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10 Q 10 25, 20 40\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"/><circle cx=\"28\" cy=\"25\" r=\"6\" fill=\"currentColor\"/><text x=\"35\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">eing</text></svg>"
    },
    {
        "word": "might",
        "phonetic": "[maɪt]",
        "meaning": "n. 力量；强权 v. 可以",
        "example": "Weightlifting is a sport that requires massive strength.",
        "exampleCn": "举重是一项需要很大力量的运动。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract",
            "power"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"40\" font-family=\"Verdana\" font-weight=\"900\" font-size=\"18\" fill=\"currentColor\">MIGH</text><path d=\"M60 15 L95 15 M77 15 L77 40\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"77\" cy=\"10\" r=\"4\" fill=\"currentColor\"/><path d=\"M65 40 L90 40\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>"
    },
    {
        "word": "even",
        "phonetic": "[ˈiːv(ə)n]",
        "meaning": "adj. 均匀的 v. 使平衡",
        "example": "He kept an even balance.",
        "exampleCn": "他保持着平衡。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10 L50 45 L80 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"/><circle cx=\"20\" cy=\"8\" r=\"4\" fill=\"currentColor\"/><circle cx=\"80\" cy=\"8\" r=\"4\" fill=\"currentColor\"/><text x=\"35\" y=\"30\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"14\" fill=\"currentColor\">even</text></svg>"
    },
    {
        "word": "same",
        "phonetic": "[seɪm]",
        "meaning": "adj. 同一的；无变化的",
        "example": "The twins look the same.",
        "exampleCn": "这两个双胞胎长得一模一样。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">SA</text><path d=\"M50 15 L50 40 M75 15 L75 40 M50 20 L75 20 M50 35 L75 35\" stroke=\"currentColor\" stroke-width=\"3\"/><text x=\"80\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"24\" fill=\"currentColor\">E</text></svg>"
    },
    {
        "word": "thought",
        "phonetic": "[θɔːt]",
        "meaning": "n. 思想；思维；观点",
        "example": "I think I think too many thoughts!",
        "exampleCn": "我觉得我想太多了。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "mental",
            "thought"
        ],
        "svg": "<svg viewBox=\"0 0 120 50\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 25 Q 30 5, 60 5 Q 90 5, 110 25 Q 90 45, 60 45 Q 30 45, 10 25 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"25\" y=\"32\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"16\" fill=\"currentColor\">thought</text><circle cx=\"60\" cy=\"48\" r=\"2\" fill=\"currentColor\"/></svg>"
    },
    {
        "word": "young",
        "phonetic": "[jʌŋ]",
        "meaning": "adj. 年轻的；没有经验的",
        "example": "This young dancer is doing a cartwheel.",
        "exampleCn": "这个年轻的舞者在表演侧手翻。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "age"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"40\" font-family=\"Arial\" font-weight=\"900\" font-size=\"28\" fill=\"currentColor\">Y</text><text x=\"30\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">ung</text><path d=\"M15 15 L15 25 M10 20 L20 20\" stroke=\"currentColor\" stroke-width=\"2\"/></svg>"
    },
    {
        "word": "yet",
        "phonetic": "[jet]",
        "meaning": "adv. 尚，还，仍然",
        "example": "The sword is in his belly, but he is not dead yet.",
        "exampleCn": "剑已经插在他腹部，但他还没有死。",
        "category": "adverb",
        "difficulty": 1,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 100 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"40\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"32\" fill=\"currentColor\">yet</text><path d=\"M5 40 L25 10\" stroke=\"#ef4444\" stroke-width=\"4\"/></svg>"
    },
    {
        "word": "though",
        "phonetic": "[ðəʊ]",
        "meaning": "conj. 虽然，可是",
        "example": "Though it says to no smoke, I will anyways.",
        "exampleCn": "虽然这里写着禁止吸烟，但我还是要抽。",
        "category": "conjunction",
        "difficulty": 4,
        "tags": [
            "logic"
        ],
        "svg": "<svg viewBox=\"0 0 120 50\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"35\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"20\" fill=\"currentColor\">though</text><path d=\"M80 40 Q 90 45, 100 40 L100 20 Q 90 15, 80 20 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"30\" r=\"3\" fill=\"currentColor\"/></svg>"
    },
    {
        "word": "abandon",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is abandon.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ABANDON</text></svg>"
    },
    {
        "word": "ability",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is ability.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ABILITY</text></svg>"
    },
    {
        "word": "aboard",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is aboard.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ABOARD</text></svg>"
    },
    {
        "word": "absolute",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is absolute.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ABSOLUTE</text></svg>"
    },
    {
        "word": "absorb",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is absorb.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ABSORB</text></svg>"
    },
    {
        "word": "academic",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is academic.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACADEMIC</text></svg>"
    },
    {
        "word": "accept",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is accept.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ACCEPT</text></svg>"
    },
    {
        "word": "access",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is access.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ACCESS</text></svg>"
    },
    {
        "word": "accident",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is accident.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACCIDENT</text></svg>"
    },
    {
        "word": "accompany",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is accompany.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACCOMPANY</text></svg>"
    },
    {
        "word": "accomplish",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is accomplish.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACCOMPLISH</text></svg>"
    },
    {
        "word": "according",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is according.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACCORDING</text></svg>"
    },
    {
        "word": "account",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is account.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACCOUNT</text></svg>"
    },
    {
        "word": "accurate",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is accurate.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACCURATE</text></svg>"
    },
    {
        "word": "accuse",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is accuse.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ACCUSE</text></svg>"
    },
    {
        "word": "achieve",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is achieve.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACHIEVE</text></svg>"
    },
    {
        "word": "acquire",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is acquire.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACQUIRE</text></svg>"
    },
    {
        "word": "action",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is action.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ACTION</text></svg>"
    },
    {
        "word": "active",
        "phonetic": "[ˈæktɪv]",
        "meaning": "adj. 活跃的",
        "example": "Active child.",
        "exampleCn": "活跃的孩子。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 60 5 L 80 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ACTIVE</text></svg>"
    },
    {
        "word": "activity",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is activity.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACTIVITY</text></svg>"
    },
    {
        "word": "actor",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is actor.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ACTOR</text></svg>"
    },
    {
        "word": "actress",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is actress.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ACTRESS</text></svg>"
    },
    {
        "word": "actual",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is actual.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ACTUAL</text></svg>"
    },
    {
        "word": "adapt",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is adapt.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADAPT</text></svg>"
    },
    {
        "word": "addition",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is addition.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ADDITION</text></svg>"
    },
    {
        "word": "address",
        "phonetic": "[əˈdres]",
        "meaning": "n. 地址",
        "example": "Home address.",
        "exampleCn": "家庭住址。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 50 15 Q 60 25, 70 15 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ADDRESS</text></svg>"
    },
    {
        "word": "adjust",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is adjust.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADJUST</text></svg>"
    },
    {
        "word": "admire",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is admire.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADMIRE</text></svg>"
    },
    {
        "word": "admit",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is admit.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADMIT</text></svg>"
    },
    {
        "word": "adopt",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is adopt.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADOPT</text></svg>"
    },
    {
        "word": "adult",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is adult.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADULT</text></svg>"
    },
    {
        "word": "advance",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is advance.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ADVANCE</text></svg>"
    },
    {
        "word": "advantage",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is advantage.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ADVANTAGE</text></svg>"
    },
    {
        "word": "adventure",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is adventure.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ADVENTURE</text></svg>"
    },
    {
        "word": "advertise",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is advertise.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ADVERTISE</text></svg>"
    },
    {
        "word": "advice",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is advice.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADVICE</text></svg>"
    },
    {
        "word": "advise",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is advise.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ADVISE</text></svg>"
    },
    {
        "word": "affair",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is affair.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AFFAIR</text></svg>"
    },
    {
        "word": "affect",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is affect.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AFFECT</text></svg>"
    },
    {
        "word": "afford",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is afford.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AFFORD</text></svg>"
    },
    {
        "word": "afraid",
        "phonetic": "[əˈfreɪd]",
        "meaning": "adj. 害怕的",
        "example": "Don't be afraid.",
        "exampleCn": "别害怕。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"70\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><path d=\"M50 25 Q 60 15, 70 25\" stroke=\"currentColor\" fill=\"none\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AFRAID</text></svg>"
    },
    {
        "word": "afternoon",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is afternoon.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AFTERNOON</text></svg>"
    },
    {
        "word": "age",
        "phonetic": "[eɪdʒ]",
        "meaning": "n. 年龄",
        "example": "Old age.",
        "exampleCn": "高龄。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 H 90\" stroke=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >AGE</text></svg>"
    },
    {
        "word": "agency",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is agency.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AGENCY</text></svg>"
    },
    {
        "word": "agenda",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is agenda.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AGENDA</text></svg>"
    },
    {
        "word": "agent",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is agent.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AGENT</text></svg>"
    },
    {
        "word": "aggressive",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is aggressive.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AGGRESSIVE</text></svg>"
    },
    {
        "word": "agree",
        "phonetic": "[əˈɡriː]",
        "meaning": "v. 同意",
        "example": "I agree.",
        "exampleCn": "我同意。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 80 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AGREE</text></svg>"
    },
    {
        "word": "agreement",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is agreement.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AGREEMENT</text></svg>"
    },
    {
        "word": "agriculture",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is agriculture.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AGRICULTURE</text></svg>"
    },
    {
        "word": "ahead",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is ahead.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AHEAD</text></svg>"
    },
    {
        "word": "air",
        "phonetic": "[eə(r)]",
        "meaning": "n. 空气",
        "example": "Fresh air.",
        "exampleCn": "清新空气。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 H 90\" stroke=\"currentColor\" stroke-dasharray=\"5 5\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >AIR</text></svg>"
    },
    {
        "word": "aircraft",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is aircraft.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AIRCRAFT</text></svg>"
    },
    {
        "word": "airport",
        "phonetic": "[ˈeəpɔːt]",
        "meaning": "n. 机场",
        "example": "To airport.",
        "exampleCn": "去机场。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 10 L 60 25 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AIRPORT</text></svg>"
    },
    {
        "word": "alarm",
        "phonetic": "[əˈlɑːm]",
        "meaning": "n. 警报；闹钟",
        "example": "Fire alarm.",
        "exampleCn": "火警。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"red\" opacity=\"0.4\"/><path d=\"M55 5 L 45 10 M 65 5 L 75 10\" stroke=\"red\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ALARM</text></svg>"
    },
    {
        "word": "alcohol",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is alcohol.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALCOHOL</text></svg>"
    },
    {
        "word": "alive",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is alive.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ALIVE</text></svg>"
    },
    {
        "word": "alliance",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is alliance.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALLIANCE</text></svg>"
    },
    {
        "word": "allow",
        "phonetic": "[əˈlaʊ]",
        "meaning": "v. 允许",
        "example": "Allow me.",
        "exampleCn": "允许我。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"green\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ALLOW</text></svg>"
    },
    {
        "word": "almost",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is almost.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ALMOST</text></svg>"
    },
    {
        "word": "alone",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is alone.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ALONE</text></svg>"
    },
    {
        "word": "along",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is along.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ALONG</text></svg>"
    },
    {
        "word": "alphabet",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is alphabet.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALPHABET</text></svg>"
    },
    {
        "word": "already",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is already.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALREADY</text></svg>"
    },
    {
        "word": "alternative",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is alternative.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALTERNATIVE</text></svg>"
    },
    {
        "word": "although",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is although.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALTHOUGH</text></svg>"
    },
    {
        "word": "altitude",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is altitude.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALTITUDE</text></svg>"
    },
    {
        "word": "altogether",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is altogether.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ALTOGETHER</text></svg>"
    },
    {
        "word": "always",
        "phonetic": "[ˈɔːlweɪz]",
        "meaning": "adv. 总是",
        "example": "Always happy.",
        "exampleCn": "总是开心。",
        "category": "adverb",
        "difficulty": 3,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 H 100\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ALWAYS</text></svg>"
    },
    {
        "word": "amazing",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is amazing.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AMAZING</text></svg>"
    },
    {
        "word": "ambition",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is ambition.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AMBITION</text></svg>"
    },
    {
        "word": "ambulance",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is ambulance.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AMBULANCE</text></svg>"
    },
    {
        "word": "among",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is among.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AMONG</text></svg>"
    },
    {
        "word": "amount",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is amount.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AMOUNT</text></svg>"
    },
    {
        "word": "amuse",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is amuse.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AMUSE</text></svg>"
    },
    {
        "word": "analyze",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is analyze.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANALYZE</text></svg>"
    },
    {
        "word": "ancestor",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is ancestor.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANCESTOR</text></svg>"
    },
    {
        "word": "ancient",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is ancient.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANCIENT</text></svg>"
    },
    {
        "word": "anger",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is anger.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANGER</text></svg>"
    },
    {
        "word": "angle",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is angle.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANGLE</text></svg>"
    },
    {
        "word": "angry",
        "phonetic": "[ˈæŋɡri]",
        "meaning": "adj. 生气的",
        "example": "He is angry.",
        "exampleCn": "他生气了。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 60 20 L 70 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANGRY</text></svg>"
    },
    {
        "word": "animal",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is animal.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANIMAL</text></svg>"
    },
    {
        "word": "announce",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is announce.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANNOUNCE</text></svg>"
    },
    {
        "word": "annoy",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is annoy.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANNOY</text></svg>"
    },
    {
        "word": "annual",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is annual.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANNUAL</text></svg>"
    },
    {
        "word": "another",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is another.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANOTHER</text></svg>"
    },
    {
        "word": "answer",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is answer.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANSWER</text></svg>"
    },
    {
        "word": "ant",
        "phonetic": "[ænt]",
        "meaning": "n. 蚂蚁",
        "example": "Small ant.",
        "exampleCn": "小蚂蚁。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"70\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ANT</text></svg>"
    },
    {
        "word": "anxiety",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is anxiety.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANXIETY</text></svg>"
    },
    {
        "word": "anybody",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is anybody.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANYBODY</text></svg>"
    },
    {
        "word": "anyhow",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is anyhow.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANYHOW</text></svg>"
    },
    {
        "word": "anymore",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is anymore.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANYMORE</text></svg>"
    },
    {
        "word": "anyway",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is anyway.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ANYWAY</text></svg>"
    },
    {
        "word": "anywhere",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is anywhere.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ANYWHERE</text></svg>"
    },
    {
        "word": "apart",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is apart.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >APART</text></svg>"
    },
    {
        "word": "apartment",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is apartment.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APARTMENT</text></svg>"
    },
    {
        "word": "apologize",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is apologize.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APOLOGIZE</text></svg>"
    },
    {
        "word": "app",
        "phonetic": "[æp]",
        "meaning": "n. 应用程序",
        "example": "New app.",
        "exampleCn": "新应用。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" rx=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >APP</text></svg>"
    },
    {
        "word": "appearance",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is appearance.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPEARANCE</text></svg>"
    },
    {
        "word": "appetite",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is appetite.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPETITE</text></svg>"
    },
    {
        "word": "apple",
        "phonetic": "[ˈæpl]",
        "meaning": "n. 苹果",
        "example": "An apple a day.",
        "exampleCn": "一天一苹果。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 40 15, 45 25 Q 50 35, 60 35 Q 70 35, 75 25 Q 80 15, 70 15 Q 60 15, 60 20 Q 60 15, 50 15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M60 15 L 60 10\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >APPLE</text></svg>"
    },
    {
        "word": "application",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is application.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPLICATION</text></svg>"
    },
    {
        "word": "appoint",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is appoint.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPOINT</text></svg>"
    },
    {
        "word": "appreciate",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is appreciate.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPRECIATE</text></svg>"
    },
    {
        "word": "approach",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is approach.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPROACH</text></svg>"
    },
    {
        "word": "appropriate",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is appropriate.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPROPRIATE</text></svg>"
    },
    {
        "word": "approval",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is approval.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPROVAL</text></svg>"
    },
    {
        "word": "approve",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is approve.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">APPROVE</text></svg>"
    },
    {
        "word": "architect",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is architect.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARCHITECT</text></svg>"
    },
    {
        "word": "architecture",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is architecture.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARCHITECTURE</text></svg>"
    },
    {
        "word": "area",
        "phonetic": "[ˈeəriə]",
        "meaning": "n. 面积；地区",
        "example": "In this area.",
        "exampleCn": "在这一地区。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"5\" width=\"40\" height=\"30\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >AREA</text></svg>"
    },
    {
        "word": "argue",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is argue.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ARGUE</text></svg>"
    },
    {
        "word": "argument",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is argument.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARGUMENT</text></svg>"
    },
    {
        "word": "arise",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is arise.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ARISE</text></svg>"
    },
    {
        "word": "arithmetic",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is arithmetic.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARITHMETIC</text></svg>"
    },
    {
        "word": "arm",
        "phonetic": "[ɑːm]",
        "meaning": "n. 手臂",
        "example": "Raise your arm.",
        "exampleCn": "举起你的手臂。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 15, 80 15\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><path d=\"M75 15 L 80 15 L 78 20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ARM</text></svg>"
    },
    {
        "word": "armchair",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is armchair.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARMCHAIR</text></svg>"
    },
    {
        "word": "army",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is army.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ARMY</text></svg>"
    },
    {
        "word": "around",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is around.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AROUND</text></svg>"
    },
    {
        "word": "arrange",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is arrange.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARRANGE</text></svg>"
    },
    {
        "word": "arrest",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is arrest.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ARREST</text></svg>"
    },
    {
        "word": "arrival",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is arrival.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARRIVAL</text></svg>"
    },
    {
        "word": "arrive",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is arrive.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ARRIVE</text></svg>"
    },
    {
        "word": "arrow",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is arrow.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ARROW</text></svg>"
    },
    {
        "word": "art",
        "phonetic": "[ɑːt]",
        "meaning": "n. 艺术",
        "example": "Art class.",
        "exampleCn": "美术课。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ART</text></svg>"
    },
    {
        "word": "article",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is article.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARTICLE</text></svg>"
    },
    {
        "word": "artificial",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is artificial.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARTIFICIAL</text></svg>"
    },
    {
        "word": "artist",
        "phonetic": "[ˈɑːtɪst]",
        "meaning": "n. 艺术家",
        "example": "A great artist.",
        "exampleCn": "一位伟大的艺术家。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ARTIST</text></svg>"
    },
    {
        "word": "artistic",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is artistic.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"10\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ARTISTIC</text></svg>"
    },
    {
        "word": "ashamed",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is ashamed.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASHAMED</text></svg>"
    },
    {
        "word": "aside",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is aside.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASIDE</text></svg>"
    },
    {
        "word": "aspect",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is aspect.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASPECT</text></svg>"
    },
    {
        "word": "aspirin",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is aspirin.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASPIRIN</text></svg>"
    },
    {
        "word": "assassin",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assassin.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASSASSIN</text></svg>"
    },
    {
        "word": "assemble",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assemble.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASSEMBLE</text></svg>"
    },
    {
        "word": "assembly",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assembly.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASSEMBLY</text></svg>"
    },
    {
        "word": "assert",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assert.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASSERT</text></svg>"
    },
    {
        "word": "assess",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assess.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASSESS</text></svg>"
    },
    {
        "word": "asset",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is asset.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASSET</text></svg>"
    },
    {
        "word": "assign",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assign.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASSIGN</text></svg>"
    },
    {
        "word": "assist",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assist.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASSIST</text></svg>"
    },
    {
        "word": "assistant",
        "phonetic": "[əˈsɪstənt]",
        "meaning": "n. 助手",
        "example": "Shop assistant.",
        "exampleCn": "导购员。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 H 50 M 70 20 H 80\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASSISTANT</text></svg>"
    },
    {
        "word": "associate",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is associate.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASSOCIATE</text></svg>"
    },
    {
        "word": "association",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is association.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASSOCIATION</text></svg>"
    },
    {
        "word": "assume",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assume.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASSUME</text></svg>"
    },
    {
        "word": "assure",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is assure.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ASSURE</text></svg>"
    },
    {
        "word": "astonish",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is astonish.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ASTONISH</text></svg>"
    },
    {
        "word": "athlete",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is athlete.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATHLETE</text></svg>"
    },
    {
        "word": "atmosphere",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is atmosphere.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATMOSPHERE</text></svg>"
    },
    {
        "word": "atom",
        "phonetic": "[ˈætəm]",
        "meaning": "n. 原子",
        "example": "Small atom.",
        "exampleCn": "微小的原子。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "science"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ATOM</text></svg>"
    },
    {
        "word": "attach",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attach.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ATTACH</text></svg>"
    },
    {
        "word": "attack",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attack.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ATTACK</text></svg>"
    },
    {
        "word": "attempt",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attempt.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATTEMPT</text></svg>"
    },
    {
        "word": "attend",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attend.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ATTEND</text></svg>"
    },
    {
        "word": "attention",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attention.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATTENTION</text></svg>"
    },
    {
        "word": "attitude",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attitude.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATTITUDE</text></svg>"
    },
    {
        "word": "attract",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attract.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATTRACT</text></svg>"
    },
    {
        "word": "attractive",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attractive.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATTRACTIVE</text></svg>"
    },
    {
        "word": "attribute",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is attribute.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ATTRIBUTE</text></svg>"
    },
    {
        "word": "audience",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is audience.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AUDIENCE</text></svg>"
    },
    {
        "word": "aunt",
        "phonetic": "[ɑːnt]",
        "meaning": "n. 姨妈；姑妈",
        "example": "Aunt Mary.",
        "exampleCn": "玛丽阿姨。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 35 L 60 15 L 70 35\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >AUNT</text></svg>"
    },
    {
        "word": "author",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is author.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AUTHOR</text></svg>"
    },
    {
        "word": "authority",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is authority.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AUTHORITY</text></svg>"
    },
    {
        "word": "automatic",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is automatic.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AUTOMATIC</text></svg>"
    },
    {
        "word": "autumn",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is autumn.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AUTUMN</text></svg>"
    },
    {
        "word": "available",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is available.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AVAILABLE</text></svg>"
    },
    {
        "word": "avenue",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is avenue.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AVENUE</text></svg>"
    },
    {
        "word": "average",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is average.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AVERAGE</text></svg>"
    },
    {
        "word": "avoid",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is avoid.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AVOID</text></svg>"
    },
    {
        "word": "await",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is await.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AWAIT</text></svg>"
    },
    {
        "word": "awake",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is awake.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AWAKE</text></svg>"
    },
    {
        "word": "award",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is award.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AWARD</text></svg>"
    },
    {
        "word": "aware",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is aware.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AWARE</text></svg>"
    },
    {
        "word": "awesome",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is awesome.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AWESOME</text></svg>"
    },
    {
        "word": "awful",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is awful.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >AWFUL</text></svg>"
    },
    {
        "word": "awkward",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is awkward.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">AWKWARD</text></svg>"
    },
    {
        "word": "baby",
        "phonetic": "[ˈbeɪbi]",
        "meaning": "n. 婴儿",
        "example": "The baby is cute.",
        "exampleCn": "婴儿很可爱。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M55 28 Q 60 35, 65 28\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BABY</text></svg>"
    },
    {
        "word": "bachelor",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bachelor.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BACHELOR</text></svg>"
    },
    {
        "word": "background",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is background.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BACKGROUND</text></svg>"
    },
    {
        "word": "backward",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is backward.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BACKWARD</text></svg>"
    },
    {
        "word": "bacon",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bacon.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BACON</text></svg>"
    },
    {
        "word": "bad",
        "phonetic": "[bæd]",
        "meaning": "adj. 坏的",
        "example": "Bad weather.",
        "exampleCn": "糟糕的天气。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "opinion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 60 15, 80 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BAD</text></svg>"
    },
    {
        "word": "bag",
        "phonetic": "[bæɡ]",
        "meaning": "n. 袋子；书包",
        "example": "A school bag.",
        "exampleCn": "书包。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 15 H 75 V 35 H 45 Z\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M55 15 Q 60 5, 65 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BAG</text></svg>"
    },
    {
        "word": "baggage",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is baggage.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BAGGAGE</text></svg>"
    },
    {
        "word": "balance",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is balance.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BALANCE</text></svg>"
    },
    {
        "word": "balloon",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is balloon.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BALLOON</text></svg>"
    },
    {
        "word": "banana",
        "phonetic": "[bəˈnɑːnə]",
        "meaning": "n. 香蕉",
        "example": "Yellow banana.",
        "exampleCn": "黄香蕉。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 30, 80 10\" stroke=\"yellow\" stroke-width=\"4\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BANANA</text></svg>"
    },
    {
        "word": "bandage",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bandage.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BANDAGE</text></svg>"
    },
    {
        "word": "bankrupt",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bankrupt.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BANKRUPT</text></svg>"
    },
    {
        "word": "banner",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is banner.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BANNER</text></svg>"
    },
    {
        "word": "barbecue",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is barbecue.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BARBECUE</text></svg>"
    },
    {
        "word": "barely",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is barely.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BARELY</text></svg>"
    },
    {
        "word": "bargain",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bargain.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BARGAIN</text></svg>"
    },
    {
        "word": "barrel",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is barrel.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BARREL</text></svg>"
    },
    {
        "word": "barrier",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is barrier.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BARRIER</text></svg>"
    },
    {
        "word": "base",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is base.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BASE</text></svg>"
    },
    {
        "word": "baseball",
        "phonetic": "[ˈbeɪsbɔːl]",
        "meaning": "n. 棒球",
        "example": "Baseball game.",
        "exampleCn": "棒球比赛。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "sport"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 L 80 5\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BASEBALL</text></svg>"
    },
    {
        "word": "basement",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is basement.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BASEMENT</text></svg>"
    },
    {
        "word": "basic",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is basic.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BASIC</text></svg>"
    },
    {
        "word": "basin",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is basin.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BASIN</text></svg>"
    },
    {
        "word": "basket",
        "phonetic": "[ˈbɑːskɪt]",
        "meaning": "n. 篮子",
        "example": "A fruit basket.",
        "exampleCn": "一个水果篮。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 H 80 V 35 H 40 Z\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BASKET</text></svg>"
    },
    {
        "word": "basketball",
        "phonetic": "[ˈbɑːskɪtbɔːl]",
        "meaning": "n. 篮球",
        "example": "I play basketball.",
        "exampleCn": "我打篮球。",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "sport"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BASKETBALL</text></svg>"
    },
    {
        "word": "bath",
        "phonetic": "[bɑːθ]",
        "meaning": "n. 洗澡；浴缸",
        "example": "Hot bath.",
        "exampleCn": "洗热水澡。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "bathroom"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 20 H 85 V 35 H 35 Z\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BATH</text></svg>"
    },
    {
        "word": "bathe",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bathe.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BATHE</text></svg>"
    },
    {
        "word": "bathroom",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bathroom.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BATHROOM</text></svg>"
    },
    {
        "word": "battery",
        "phonetic": "[ˈbætri]",
        "meaning": "n. 电池",
        "example": "Low battery.",
        "exampleCn": "电量低。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"15\" stroke=\"currentColor\" opacity=\"0.4\"/><rect x=\"80\" y=\"14\" width=\"3\" height=\"7\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BATTERY</text></svg>"
    },
    {
        "word": "battle",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is battle.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BATTLE</text></svg>"
    },
    {
        "word": "beach",
        "phonetic": "[biːtʃ]",
        "meaning": "n. 沙滩",
        "example": "On the beach.",
        "exampleCn": "在沙滩上。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20 Q 60 10, 100 20\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEACH</text></svg>"
    },
    {
        "word": "beacon",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beacon.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEACON</text></svg>"
    },
    {
        "word": "bead",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bead.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEAD</text></svg>"
    },
    {
        "word": "beak",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beak.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEAK</text></svg>"
    },
    {
        "word": "beam",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beam.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEAM</text></svg>"
    },
    {
        "word": "bean",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bean.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEAN</text></svg>"
    },
    {
        "word": "bear",
        "phonetic": "[beə(r)]",
        "meaning": "n. 熊；v. 忍受",
        "example": "Brown bear.",
        "exampleCn": "棕熊。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" fill=\"brown\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEAR</text></svg>"
    },
    {
        "word": "beard",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beard.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEARD</text></svg>"
    },
    {
        "word": "beast",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beast.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEAST</text></svg>"
    },
    {
        "word": "beat",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beat.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEAT</text></svg>"
    },
    {
        "word": "beautiful",
        "phonetic": "[ˈbjuːtɪfl]",
        "meaning": "adj. 美丽的",
        "example": "Beautiful girl.",
        "exampleCn": "漂亮的女孩。",
        "category": "adjective",
        "difficulty": 5,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"pink\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BEAUTIFUL</text></svg>"
    },
    {
        "word": "beauty",
        "phonetic": "[ˈbjuːti]",
        "meaning": "n. 美丽",
        "example": "Inner beauty.",
        "exampleCn": "内在美",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEAUTY</text></svg>"
    },
    {
        "word": "because",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is because.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BECAUSE</text></svg>"
    },
    {
        "word": "become",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is become.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BECOME</text></svg>"
    },
    {
        "word": "bed",
        "phonetic": "[bed]",
        "meaning": "n. 床",
        "example": "Go to bed.",
        "exampleCn": "去睡觉。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 30 H 85 V 35 H 35 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><rect x=\"35\" y=\"25\" width=\"15\" height=\"5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BED</text></svg>"
    },
    {
        "word": "bedroom",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bedroom.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BEDROOM</text></svg>"
    },
    {
        "word": "bee",
        "phonetic": "[biː]",
        "meaning": "n. 蜜蜂",
        "example": "Busy bee.",
        "exampleCn": "忙碌的蜜蜂。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"6\" fill=\"yellow\" opacity=\"0.3\"/><line x1=\"54\" y1=\"15\" x2=\"66\" y2=\"15\" stroke=\"black\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEE</text></svg>"
    },
    {
        "word": "beech",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beech.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEECH</text></svg>"
    },
    {
        "word": "beef",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beef.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEEF</text></svg>"
    },
    {
        "word": "beer",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beer.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEER</text></svg>"
    },
    {
        "word": "beetle",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beetle.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEETLE</text></svg>"
    },
    {
        "word": "before",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is before.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEFORE</text></svg>"
    },
    {
        "word": "beggar",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beggar.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEGGAR</text></svg>"
    },
    {
        "word": "begin",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is begin.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEGIN</text></svg>"
    },
    {
        "word": "beginner",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beginner.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BEGINNER</text></svg>"
    },
    {
        "word": "behave",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is behave.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEHAVE</text></svg>"
    },
    {
        "word": "behavior",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is behavior.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BEHAVIOR</text></svg>"
    },
    {
        "word": "behind",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is behind.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEHIND</text></svg>"
    },
    {
        "word": "belief",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is belief.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BELIEF</text></svg>"
    },
    {
        "word": "believe",
        "phonetic": "[bɪˈliːv]",
        "meaning": "v. 相信",
        "example": "Believe me.",
        "exampleCn": "相信我",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BELIEVE</text></svg>"
    },
    {
        "word": "bell",
        "phonetic": "[bel]",
        "meaning": "n. 铃声；钟",
        "example": "Ring the bell.",
        "exampleCn": "摇铃。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 30 Q 50 10, 60 10 Q 70 10, 70 30 H 50\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"35\" r=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BELL</text></svg>"
    },
    {
        "word": "belong",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is belong.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BELONG</text></svg>"
    },
    {
        "word": "beloved",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beloved.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BELOVED</text></svg>"
    },
    {
        "word": "below",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is below.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BELOW</text></svg>"
    },
    {
        "word": "belt",
        "phonetic": "[belt]",
        "meaning": "n. 腰带",
        "example": "A leather belt.",
        "exampleCn": "一条皮带。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 20 H 90\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><rect x=\"55\" y=\"15\" width=\"10\" height=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BELT</text></svg>"
    },
    {
        "word": "bench",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bench.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BENCH</text></svg>"
    },
    {
        "word": "bend",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bend.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEND</text></svg>"
    },
    {
        "word": "beneath",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beneath.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BENEATH</text></svg>"
    },
    {
        "word": "benefit",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is benefit.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BENEFIT</text></svg>"
    },
    {
        "word": "berry",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is berry.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BERRY</text></svg>"
    },
    {
        "word": "beside",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beside.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BESIDE</text></svg>"
    },
    {
        "word": "besides",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is besides.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BESIDES</text></svg>"
    },
    {
        "word": "best",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is best.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BEST</text></svg>"
    },
    {
        "word": "betray",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is betray.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BETRAY</text></svg>"
    },
    {
        "word": "better",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is better.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BETTER</text></svg>"
    },
    {
        "word": "between",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is between.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BETWEEN</text></svg>"
    },
    {
        "word": "beyond",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is beyond.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BEYOND</text></svg>"
    },
    {
        "word": "bicycle",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bicycle.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BICYCLE</text></svg>"
    },
    {
        "word": "bid",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bid.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BID</text></svg>"
    },
    {
        "word": "bike",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bike.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BIKE</text></svg>"
    },
    {
        "word": "bill",
        "phonetic": "[bɪl]",
        "meaning": "n. 账单；钞票",
        "example": "Pay the bill.",
        "exampleCn": "付账。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "finance"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"20\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BILL</text></svg>"
    },
    {
        "word": "billion",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is billion.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BILLION</text></svg>"
    },
    {
        "word": "bind",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bind.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BIND</text></svg>"
    },
    {
        "word": "biography",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is biography.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BIOGRAPHY</text></svg>"
    },
    {
        "word": "biology",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is biology.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BIOLOGY</text></svg>"
    },
    {
        "word": "bird",
        "phonetic": "[bɜːd]",
        "meaning": "n. 鸟",
        "example": "A bird is flying.",
        "exampleCn": "一只鸟在飞。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 50 10, 60 20 Q 70 10, 80 20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BIRD</text></svg>"
    },
    {
        "word": "birth",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is birth.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BIRTH</text></svg>"
    },
    {
        "word": "birthday",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is birthday.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BIRTHDAY</text></svg>"
    },
    {
        "word": "biscuit",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is biscuit.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BISCUIT</text></svg>"
    },
    {
        "word": "bishop",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bishop.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BISHOP</text></svg>"
    },
    {
        "word": "bite",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bite.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BITE</text></svg>"
    },
    {
        "word": "bitter",
        "phonetic": "[ˈbɪtə(r)]",
        "meaning": "adj. 苦的",
        "example": "Bitter coffee.",
        "exampleCn": "苦咖啡。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 H 80\" stroke=\"darkgreen\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BITTER</text></svg>"
    },
    {
        "word": "blade",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is blade.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLADE</text></svg>"
    },
    {
        "word": "blame",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is blame.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLAME</text></svg>"
    },
    {
        "word": "blank",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is blank.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLANK</text></svg>"
    },
    {
        "word": "blanket",
        "phonetic": "[ˈblæŋkɪt]",
        "meaning": "n. 毯子",
        "example": "Under the blanket.",
        "exampleCn": "在毯子下面。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"15\" width=\"60\" height=\"20\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BLANKET</text></svg>"
    },
    {
        "word": "blast",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is blast.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLAST</text></svg>"
    },
    {
        "word": "blaze",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is blaze.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLAZE</text></svg>"
    },
    {
        "word": "bleak",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "This is bleak.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "extended"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLEAK</text></svg>"
    },
    {
        "word": "blood",
        "phonetic": "[blʌd]",
        "meaning": "n. 血液",
        "example": "Blood is red.",
        "exampleCn": "血是红色的。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"red\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLOOD</text></svg>"
    },
    {
        "word": "blurry",
        "phonetic": "[ˈblɜːri]",
        "meaning": "adj. 模糊的",
        "example": "Blurry vision.",
        "exampleCn": "视力模糊。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" stroke-dasharray=\"1 5\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BLURRY</text></svg>"
    },
    {
        "word": "bone",
        "phonetic": "[bəʊn]",
        "meaning": "n. 骨头",
        "example": "Dog loves bone.",
        "exampleCn": "狗爱骨头。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80 M 40 10 V 20 M 80 10 V 20\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BONE</text></svg>"
    },
    {
        "word": "boring",
        "phonetic": "[ˈbɔːrɪŋ]",
        "meaning": "adj. 无聊的",
        "example": "Boring film.",
        "exampleCn": "无聊的电影。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BORING</text></svg>"
    },
    {
        "word": "boss",
        "phonetic": "[bɒs]",
        "meaning": "n. 老板",
        "example": "Talk to my boss.",
        "exampleCn": "和我的老板谈谈。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BOSS</text></svg>"
    },
    {
        "word": "bottle",
        "phonetic": "[ˈbɒtl]",
        "meaning": "n. 瓶子",
        "example": "A bottle of water.",
        "exampleCn": "一瓶水。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 10 H 65 V 15 H 70 V 35 H 50 V 15 H 55 Z\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BOTTLE</text></svg>"
    },
    {
        "word": "bottom",
        "phonetic": "[ˈbɒtəm]",
        "meaning": "n. 底部",
        "example": "At the bottom.",
        "exampleCn": "在底部。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 H 80\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BOTTOM</text></svg>"
    },
    {
        "word": "bowl",
        "phonetic": "[bəʊl]",
        "meaning": "n. 碗",
        "example": "A bowl of soup.",
        "exampleCn": "一碗汤。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 15 Q 35 35, 60 35 Q 85 35, 85 15 H 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BOWL</text></svg>"
    },
    {
        "word": "box",
        "phonetic": "[bɒks]",
        "meaning": "n. 盒子",
        "example": "What is in the box?",
        "exampleCn": "盒子里有什么？",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"15\" width=\"30\" height=\"20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><line x1=\"45\" y1=\"20\" x2=\"75\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BOX</text></svg>"
    },
    {
        "word": "boy",
        "phonetic": "[bɔɪ]",
        "meaning": "n. 男孩",
        "example": "The boy is playing.",
        "exampleCn": "那个男孩正在玩。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "people"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BOY</text></svg>"
    },
    {
        "word": "brain",
        "phonetic": "[breɪn]",
        "meaning": "n. 大脑",
        "example": "Use your brain.",
        "exampleCn": "动动脑筋。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 5, 80 20 T 60 35 T 40 20\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BRAIN</text></svg>"
    },
    {
        "word": "brave",
        "phonetic": "[breɪv]",
        "meaning": "adj. 勇敢的",
        "example": "Brave soldier.",
        "exampleCn": "勇敢的士兵。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 75 30 H 45 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BRAVE</text></svg>"
    },
    {
        "word": "bread",
        "phonetic": "[bred]",
        "meaning": "n. 面包",
        "example": "I eat bread.",
        "exampleCn": "我吃面包。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 40 10, 60 10 Q 80 10, 80 25 H 40 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M45 15 L 50 20 M 55 15 L 60 20 M 65 15 L 70 20\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BREAD</text></svg>"
    },
    {
        "word": "break",
        "phonetic": "[breɪk]",
        "meaning": "v. 打碎；休息",
        "example": "Don t break it.",
        "exampleCn": "别打碎它。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 L 60 5 L 80 15\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"60\" y1=\"5\" x2=\"60\" y2=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BREAK</text></svg>"
    },
    {
        "word": "breath",
        "phonetic": "[breθ]",
        "meaning": "n. 呼吸",
        "example": "Deep breath.",
        "exampleCn": "深呼吸。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 30, 80 10\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BREATH</text></svg>"
    },
    {
        "word": "bridge",
        "phonetic": "[brɪdʒ]",
        "meaning": "n. 桥",
        "example": "Over the bridge.",
        "exampleCn": "过桥。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 30 Q 60 5, 100 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BRIDGE</text></svg>"
    },
    {
        "word": "brother",
        "phonetic": "[ˈbrʌðə(r)]",
        "meaning": "n. 兄弟",
        "example": "I have a brother.",
        "exampleCn": "我有一个兄弟。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 20 V 35 M 65 20 V 35\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BROTHER</text></svg>"
    },
    {
        "word": "brown",
        "phonetic": "[braʊn]",
        "meaning": "adj. 棕色的",
        "example": "Brown wood.",
        "exampleCn": "棕色的木头。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"20\" width=\"40\" height=\"5\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BROWN</text></svg>"
    },
    {
        "word": "bug",
        "phonetic": "[bʌɡ]",
        "meaning": "n. 漏洞；小虫",
        "example": "Fix the bug.",
        "exampleCn": "修复漏洞。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"6\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M50 15 L 45 10 M 70 15 L 75 10\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BUG</text></svg>"
    },
    {
        "word": "build",
        "phonetic": "[bɪld]",
        "meaning": "v. 建造",
        "example": "Build a house.",
        "exampleCn": "建房子。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"15\" height=\"8\" fill=\"currentColor\" opacity=\"0.3\"/><rect x=\"60\" y=\"10\" width=\"15\" height=\"8\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BUILD</text></svg>"
    },
    {
        "word": "building",
        "phonetic": "[ˈbɪldɪŋ]",
        "meaning": "n. 建筑物",
        "example": "A tall building.",
        "exampleCn": "一座高层建筑。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"5\" width=\"40\" height=\"30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"15\" stroke=\"currentColor\"/><line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"15\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">BUILDING</text></svg>"
    },
    {
        "word": "burger",
        "phonetic": "[ˈbɜːɡə(r)]",
        "meaning": "n. 汉堡",
        "example": "Cheese burger.",
        "exampleCn": "芝士汉堡。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80 M 40 20 H 80\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BURGER</text></svg>"
    },
    {
        "word": "busy",
        "phonetic": "[ˈbɪzi]",
        "meaning": "adj. 忙碌的",
        "example": "I am busy.",
        "exampleCn": "我很忙。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BUSY</text></svg>"
    },
    {
        "word": "butter",
        "phonetic": "[ˈbʌtə(r)]",
        "meaning": "n. 黄油",
        "example": "Bread and butter.",
        "exampleCn": "面包加黄油。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"15\" fill=\"yellow\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >BUTTER</text></svg>"
    },
    {
        "word": "buy",
        "phonetic": "[baɪ]",
        "meaning": "v. 买",
        "example": "Buy some food.",
        "exampleCn": "买点吃的。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80 L 75 30 H 45 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >BUY</text></svg>"
    },
    {
        "word": "cabinet",
        "phonetic": "[ˈkæbɪnət]",
        "meaning": "n. 橱柜",
        "example": "Kitchen cabinet.",
        "exampleCn": "厨房橱柜。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"35\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CABINET</text></svg>"
    },
    {
        "word": "cake",
        "phonetic": "[keɪk]",
        "meaning": "n. 蛋糕",
        "example": "Birthday cake.",
        "exampleCn": "生日蛋糕。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"20\" width=\"30\" height=\"15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"14\" r=\"1\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CAKE</text></svg>"
    },
    {
        "word": "camera",
        "phonetic": "[ˈkæmərə]",
        "meaning": "n. 照相机",
        "example": "Digital camera.",
        "exampleCn": "数码相机。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"22\" r=\"6\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CAMERA</text></svg>"
    },
    {
        "word": "candle",
        "phonetic": "[ˈkændl]",
        "meaning": "n. 蜡烛",
        "example": "Light a candle.",
        "exampleCn": "点燃蜡烛。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"55\" y=\"15\" width=\"10\" height=\"20\" fill=\"currentColor\" opacity=\"0.3\"/><path d=\"M60 15 V 5\" stroke=\"orange\" opacity=\"0.6\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CANDLE</text></svg>"
    },
    {
        "word": "candy",
        "phonetic": "[ˈkændi]",
        "meaning": "n. 糖果",
        "example": "Sweet candy.",
        "exampleCn": "甜甜的糖果。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"6\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M54 20 L 45 15 L 45 25 Z\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><path d=\"M66 20 L 75 15 L 75 25 Z\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CANDY</text></svg>"
    },
    {
        "word": "car",
        "phonetic": "[kɑː(r)]",
        "meaning": "n. 汽车",
        "example": "He drives a blue car.",
        "exampleCn": "他开一辆蓝色的车。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "transport"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 25 H 85 L 80 15 H 40 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"45\" cy=\"28\" r=\"4\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"75\" cy=\"28\" r=\"4\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CAR</text></svg>"
    },
    {
        "word": "card",
        "phonetic": "[kɑːd]",
        "meaning": "n. 卡片",
        "example": "Bank card.",
        "exampleCn": "银行卡。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"25\" rx=\"3\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CARD</text></svg>"
    },
    {
        "word": "care",
        "phonetic": "[keə(r)]",
        "meaning": "v./n. 照顾；在乎",
        "example": "Take care.",
        "exampleCn": "保重。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "social"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 5, 80 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CARE</text></svg>"
    },
    {
        "word": "careful",
        "phonetic": "[ˈkeəfl]",
        "meaning": "adj. 小心的",
        "example": "Be careful.",
        "exampleCn": "小心点。",
        "category": "adjective",
        "difficulty": 4,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"red\" opacity=\"0.4\"/><path d=\"M60 12 V 18\" stroke=\"red\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CAREFUL</text></svg>"
    },
    {
        "word": "carrot",
        "phonetic": "[ˈkærət]",
        "meaning": "n. 胡萝卜",
        "example": "Eat carrot.",
        "exampleCn": "吃胡萝卜。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 5 L 65 5 L 60 35 Z\" fill=\"orange\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CARROT</text></svg>"
    },
    {
        "word": "carry",
        "phonetic": "[ˈkæri]",
        "meaning": "v. 携带；搬运",
        "example": "Carry a bag.",
        "exampleCn": "背着包。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 H 80 V 15 H 40 Z\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M50 15 V 5 H 70 V 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CARRY</text></svg>"
    },
    {
        "word": "castle",
        "phonetic": "[ˈkæsl]",
        "meaning": "n. 城堡",
        "example": "Old castle.",
        "exampleCn": "古堡。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 V 10 L 50 15 V 30 M 70 30 V 10 L 80 15 V 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CASTLE</text></svg>"
    },
    {
        "word": "cat",
        "phonetic": "[kæt]",
        "meaning": "n. 猫",
        "example": "I love my cat.",
        "exampleCn": "我爱我的猫。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M52 14 L 50 8 L 56 12 M 64 12 L 70 8 L 68 14\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CAT</text></svg>"
    },
    {
        "word": "catch",
        "phonetic": "[kætʃ]",
        "meaning": "v. 抓住；赶上",
        "example": "Catch the bus.",
        "exampleCn": "赶公交。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 30, 80 10\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CATCH</text></svg>"
    },
    {
        "word": "cave",
        "phonetic": "[keɪv]",
        "meaning": "n. 洞穴",
        "example": "Dark cave.",
        "exampleCn": "暗洞。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 Q 60 5, 90 30 Z\" fill=\"black\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CAVE</text></svg>"
    },
    {
        "word": "cell",
        "phonetic": "[sel]",
        "meaning": "n. 细胞；小牢房",
        "example": "Living cell.",
        "exampleCn": "活细胞。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "science"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CELL</text></svg>"
    },
    {
        "word": "center",
        "phonetic": "[ˈsentə(r)]",
        "meaning": "n. 中心",
        "example": "In the center.",
        "exampleCn": "在中心。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.2\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CENTER</text></svg>"
    },
    {
        "word": "century",
        "phonetic": "[ˈsentʃəri]",
        "meaning": "n. 世纪",
        "example": "21st century.",
        "exampleCn": "21世纪。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CENTURY</text></svg>"
    },
    {
        "word": "chain",
        "phonetic": "[tʃeɪn]",
        "meaning": "n. 链条",
        "example": "Iron chain.",
        "exampleCn": "铁链。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80\" stroke=\"currentColor\" stroke-dasharray=\"5 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CHAIN</text></svg>"
    },
    {
        "word": "challenge",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample challenge.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CHALLENGE</text></svg>"
    },
    {
        "word": "chance",
        "phonetic": "[tʃɑːns]",
        "meaning": "n. 机会",
        "example": "Take a chance.",
        "exampleCn": "抓住机会。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"gold\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CHANCE</text></svg>"
    },
    {
        "word": "cheap",
        "phonetic": "[tʃiːp]",
        "meaning": "adj. 便宜的",
        "example": "Cheap toys.",
        "exampleCn": "廉价玩具。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "finance"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"10\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CHEAP</text></svg>"
    },
    {
        "word": "cheese",
        "phonetic": "[tʃiːz]",
        "meaning": "n. 奶酪",
        "example": "I like cheese.",
        "exampleCn": "我喜欢奶酪。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 10 L 80 30 L 40 30 Z\" fill=\"yellow\" opacity=\"0.2\"/><circle cx=\"50\" cy=\"15\" r=\"2\" fill=\"white\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CHEESE</text></svg>"
    },
    {
        "word": "chess",
        "phonetic": "[tʃes]",
        "meaning": "n. 象棋",
        "example": "Play chess.",
        "exampleCn": "下象棋。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "game"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"30\" stroke=\"currentColor\" stroke-dasharray=\"5 5\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CHESS</text></svg>"
    },
    {
        "word": "chocolate",
        "phonetic": "[ˈtʃɒklət]",
        "meaning": "n. 巧克力",
        "example": "Sweet chocolate.",
        "exampleCn": "甜巧克力。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" fill=\"brown\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CHOCOLATE</text></svg>"
    },
    {
        "word": "choose",
        "phonetic": "[tʃuːz]",
        "meaning": "v. 选择",
        "example": "Choose one.",
        "exampleCn": "选一个。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><circle cx=\"75\" cy=\"15\" r=\"4\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CHOOSE</text></svg>"
    },
    {
        "word": "church",
        "phonetic": "[tʃɜːtʃ]",
        "meaning": "n. 教堂",
        "example": "Go to church.",
        "exampleCn": "去教堂。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 20 M 50 15 H 70\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CHURCH</text></svg>"
    },
    {
        "word": "cinema",
        "phonetic": "[ˈsɪnəmə]",
        "meaning": "n. 电影院",
        "example": "At cinema.",
        "exampleCn": "在电影院。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"20\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CINEMA</text></svg>"
    },
    {
        "word": "class",
        "phonetic": "[klɑːs]",
        "meaning": "n. 班级；课",
        "example": "In the class.",
        "exampleCn": "在课堂上。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"10\" width=\"60\" height=\"5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLASS</text></svg>"
    },
    {
        "word": "clean",
        "phonetic": "[kliːn]",
        "meaning": "adj. 干净的",
        "example": "Clean water.",
        "exampleCn": "干净的水。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 30\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLEAN</text></svg>"
    },
    {
        "word": "clear",
        "phonetic": "[klɪə(r)]",
        "meaning": "adj. 清晰的；晴朗的",
        "example": "Clear sky.",
        "exampleCn": "晴朗的天空。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLEAR</text></svg>"
    },
    {
        "word": "clever",
        "phonetic": "[ˈklevə(r)]",
        "meaning": "adj. 聪明的",
        "example": "A clever girl.",
        "exampleCn": "一个聪明的女孩。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLEVER</text></svg>"
    },
    {
        "word": "cliff",
        "phonetic": "[kleɪf]",
        "meaning": "n. 悬崖",
        "example": "High cliff.",
        "exampleCn": "高崖。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 5 V 30 H 80\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLIFF</text></svg>"
    },
    {
        "word": "climb",
        "phonetic": "[klaɪm]",
        "meaning": "v. 攀登",
        "example": "Climb a tree.",
        "exampleCn": "爬树。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 L 60 10 L 80 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLIMB</text></svg>"
    },
    {
        "word": "clinic",
        "phonetic": "[ˈklɪnɪk]",
        "meaning": "n. 诊所",
        "example": "Go to clinic.",
        "exampleCn": "去诊所。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25 M 50 15 H 70\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLINIC</text></svg>"
    },
    {
        "word": "clock",
        "phonetic": "[klɒk]",
        "meaning": "n. 时钟",
        "example": "Look at the clock.",
        "exampleCn": "看钟。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M60 20 L 60 14 M 60 20 L 64 20\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLOCK</text></svg>"
    },
    {
        "word": "cloud",
        "phonetic": "[klaʊd]",
        "meaning": "n. 云；云端",
        "example": "Cloud storage.",
        "exampleCn": "云存储。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tech",
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 45 15, 55 20 Q 65 10, 75 20 Q 85 20, 80 30 H 45 Q 35 30, 40 25\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLOUD</text></svg>"
    },
    {
        "word": "cloudy",
        "phonetic": "[ˈklaʊdi]",
        "meaning": "adj. 多云的",
        "example": "It is cloudy.",
        "exampleCn": "天阴了。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 50 10, 60 20 T 80 20\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CLOUDY</text></svg>"
    },
    {
        "word": "coal",
        "phonetic": "[kəʊl]",
        "meaning": "n. 煤",
        "example": "Burn coal.",
        "exampleCn": "烧煤。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"15\" fill=\"black\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COAL</text></svg>"
    },
    {
        "word": "coat",
        "phonetic": "[kəʊt]",
        "meaning": "n. 外套",
        "example": "It is a warm coat.",
        "exampleCn": "这是一件暖和的外套。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COAT</text></svg>"
    },
    {
        "word": "code",
        "phonetic": "[kəʊd]",
        "meaning": "n. 代码；密码",
        "example": "Write some code.",
        "exampleCn": "写代码。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 10 L 20 20 L 30 30 M 90 10 L 100 20 L 90 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >CODE</text></svg>"
    },
    {
        "word": "coffee",
        "phonetic": "[ˈkɒfi]",
        "meaning": "n. 咖啡",
        "example": "Black coffee.",
        "exampleCn": "黑咖啡。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 10 H 75 V 25 Q 60 35, 45 25 Z\" fill=\"brown\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COFFEE</text></svg>"
    },
    {
        "word": "coin",
        "phonetic": "[kɔɪn]",
        "meaning": "n. 硬币",
        "example": "Gold coin.",
        "exampleCn": "金币。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "finance"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M60 10 V 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COIN</text></svg>"
    },
    {
        "word": "cold",
        "phonetic": "[kəʊld]",
        "meaning": "adj. 冷的",
        "example": "It's cold outside.",
        "exampleCn": "外面很冷。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "weather",
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25 M 50 15 H 70 M 53 8 L 67 22 M 67 8 L 53 22\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COLD</text></svg>"
    },
    {
        "word": "collection",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample collection.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">COLLECTION</text></svg>"
    },
    {
        "word": "college",
        "phonetic": "[ˈkɒlɪdʒ]",
        "meaning": "n. 学院",
        "example": "In college.",
        "exampleCn": "在大学。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"5\" width=\"40\" height=\"30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">COLLEGE</text></svg>"
    },
    {
        "word": "come",
        "phonetic": "[kʌm]",
        "meaning": "v. 来",
        "example": "Come back.",
        "exampleCn": "回来。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 L 20 20 L 30 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COME</text></svg>"
    },
    {
        "word": "common",
        "phonetic": "[ˈkɒmən]",
        "meaning": "adj. 常见的",
        "example": "Common sense.",
        "exampleCn": "常识。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COMMON</text></svg>"
    },
    {
        "word": "community",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample community.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">COMMUNITY</text></svg>"
    },
    {
        "word": "complex",
        "phonetic": "[ˈkɒmpleks]",
        "meaning": "adj. 复杂的",
        "example": "Complex problem.",
        "exampleCn": "复杂的问题。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 10 L 90 25 M 30 25 L 90 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">COMPLEX</text></svg>"
    },
    {
        "word": "computer",
        "phonetic": "[kəmˈpjuːtə(r)]",
        "meaning": "n. 电脑",
        "example": "I like computer.",
        "exampleCn": "我喜欢电脑。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"10\" width=\"50\" height=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">COMPUTER</text></svg>"
    },
    {
        "word": "confidence",
        "phonetic": "[ˈkɒnfɪdəns]",
        "meaning": "n. 自信",
        "example": "Gain confidence.",
        "exampleCn": "获得自信",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CONFIDENCE</text></svg>"
    },
    {
        "word": "connection",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample connection.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CONNECTION</text></svg>"
    },
    {
        "word": "consider",
        "phonetic": "[kənˈsɪdə(r)]",
        "meaning": "v. 考虑",
        "example": "Consider it.",
        "exampleCn": "考虑一下",
        "category": "verb",
        "difficulty": 4,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CONSIDER</text></svg>"
    },
    {
        "word": "cook",
        "phonetic": "[kʊk]",
        "meaning": "n. 厨师；v. 烹饪",
        "example": "My father is a cook.",
        "exampleCn": "我父亲是个厨师。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 Q 60 0, 70 10 V 25 H 50 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COOK</text></svg>"
    },
    {
        "word": "cookie",
        "phonetic": "[ˈkʊki]",
        "meaning": "n. 曲奇饼",
        "example": "Eat a cookie.",
        "exampleCn": "吃个饼干。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" fill=\"brown\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COOKIE</text></svg>"
    },
    {
        "word": "cool",
        "phonetic": "[kuːl]",
        "meaning": "adj. 凉爽的；酷的",
        "example": "Cool breeze.",
        "exampleCn": "凉爽的微风。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 Q 60 25, 90 15\" stroke=\"blue\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COOL</text></svg>"
    },
    {
        "word": "copper",
        "phonetic": "[ˈkɒpə(r)]",
        "meaning": "n. 铜",
        "example": "Copper wire.",
        "exampleCn": "铜线。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"5\" fill=\"orange\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COPPER</text></svg>"
    },
    {
        "word": "cost",
        "phonetic": "[kɒst]",
        "meaning": "v. 花费；n. 成本",
        "example": "What is the cost?",
        "exampleCn": "成本是多少？",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "finance"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"10\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COST</text></svg>"
    },
    {
        "word": "cotton",
        "phonetic": "[ˈkɒtn]",
        "meaning": "n. 棉花",
        "example": "Cotton shirt.",
        "exampleCn": "棉衬衫。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COTTON</text></svg>"
    },
    {
        "word": "cough",
        "phonetic": "[kɒf]",
        "meaning": "v./n. 咳嗽",
        "example": "Bad cough.",
        "exampleCn": "咳嗽得厉害。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 60 15, 80 25\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COUGH</text></svg>"
    },
    {
        "word": "could",
        "phonetic": "[kəd]",
        "meaning": "v. 能够；可以",
        "example": "Could you help?",
        "exampleCn": "能帮帮我吗？",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COULD</text></svg>"
    },
    {
        "word": "courage",
        "phonetic": "[ˈkʌrɪdʒ]",
        "meaning": "n. 勇气",
        "example": "Take courage.",
        "exampleCn": "拿出勇气",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">COURAGE</text></svg>"
    },
    {
        "word": "cousin",
        "phonetic": "[ˈkʌzn]",
        "meaning": "n. 堂兄弟姊妹",
        "example": "My cousin.",
        "exampleCn": "我的堂兄。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 80 20\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >COUSIN</text></svg>"
    },
    {
        "word": "cow",
        "phonetic": "[kaʊ]",
        "meaning": "n. 牛",
        "example": "The cow eats grass.",
        "exampleCn": "牛吃草。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"15\" width=\"30\" height=\"15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M45 15 L 42 10 M 75 15 L 78 10\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >COW</text></svg>"
    },
    {
        "word": "create",
        "phonetic": "[kriˈeɪt]",
        "meaning": "v. 创造",
        "example": "Create art.",
        "exampleCn": "创造艺术",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >CREATE</text></svg>"
    },
    {
        "word": "culture",
        "phonetic": "[ˈkʌltʃə(r)]",
        "meaning": "n. 文化",
        "example": "Different cultures.",
        "exampleCn": "不同的文化",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CULTURE</text></svg>"
    },
    {
        "word": "curtain",
        "phonetic": "[ˈkɜːtn]",
        "meaning": "n. 窗帘",
        "example": "Close the curtain.",
        "exampleCn": "拉上窗帘。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 5 V 35 M 90 5 V 35\" stroke=\"currentColor\" stroke-width=\"8\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">CURTAIN</text></svg>"
    },
    {
        "word": "dancer",
        "phonetic": "[ˈdɑːnsə(r)]",
        "meaning": "n. 舞者",
        "example": "Good dancer.",
        "exampleCn": "好的舞者。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 60 10 L 80 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DANCER</text></svg>"
    },
    {
        "word": "danger",
        "phonetic": "[ˈdeɪndʒə(r)]",
        "meaning": "n. 危险",
        "example": "Out of danger.",
        "exampleCn": "脱离危险。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 45 30 H 75 Z\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DANGER</text></svg>"
    },
    {
        "word": "dangerous",
        "phonetic": "[ˈdeɪndʒərəs]",
        "meaning": "adj. 危险的",
        "example": "Dangerous dog.",
        "exampleCn": "危险的狗。",
        "category": "adjective",
        "difficulty": 5,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 45 30 H 75 Z\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DANGEROUS</text></svg>"
    },
    {
        "word": "dark",
        "phonetic": "[dɑːk]",
        "meaning": "n. 黑暗",
        "example": "In the dark.",
        "exampleCn": "在黑暗中。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"40\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DARK</text></svg>"
    },
    {
        "word": "data",
        "phonetic": "[ˈdeɪtə]",
        "meaning": "n. 数据",
        "example": "Big data.",
        "exampleCn": "大数据。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><rect x=\"40\" y=\"20\" width=\"40\" height=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DATA</text></svg>"
    },
    {
        "word": "daughter",
        "phonetic": "[ˈdɔːtə(r)]",
        "meaning": "n. 女儿",
        "example": "My daughter.",
        "exampleCn": "我的女儿。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 15 Q 60 5, 65 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DAUGHTER</text></svg>"
    },
    {
        "word": "dawn",
        "phonetic": "[dɔːn]",
        "meaning": "n. 黎明",
        "example": "At dawn.",
        "exampleCn": "在黎明。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 25 Q 60 5, 100 25\" stroke=\"orange\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DAWN</text></svg>"
    },
    {
        "word": "death",
        "phonetic": "[deθ]",
        "meaning": "n. 死亡",
        "example": "Life and death.",
        "exampleCn": "生死。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 70 30 M 70 10 L 50 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DEATH</text></svg>"
    },
    {
        "word": "decade",
        "phonetic": "[ˈdekeɪd]",
        "meaning": "n. 十年",
        "example": "A decade ago.",
        "exampleCn": "十年前。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DECADE</text></svg>"
    },
    {
        "word": "decide",
        "phonetic": "[dɪˈsaɪd]",
        "meaning": "v. 决定",
        "example": "Decide now.",
        "exampleCn": "现在决定",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DECIDE</text></svg>"
    },
    {
        "word": "deep",
        "phonetic": "[diːp]",
        "meaning": "adj. 深的",
        "example": "Deep water.",
        "exampleCn": "深水。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 35 L 55 30 M 60 35 L 65 30\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DEEP</text></svg>"
    },
    {
        "word": "degree",
        "phonetic": "[dɪˈɡriː]",
        "meaning": "n. 程度；学位；度",
        "example": "High degree.",
        "exampleCn": "高度。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"80\" cy=\"10\" r=\"3\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DEGREE</text></svg>"
    },
    {
        "word": "department",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample department.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DEPARTMENT</text></svg>"
    },
    {
        "word": "description",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample description.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DESCRIPTION</text></svg>"
    },
    {
        "word": "desert",
        "phonetic": "[ˈdezət]",
        "meaning": "n. 沙漠",
        "example": "Hot desert.",
        "exampleCn": "炎热的沙漠。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"15\" r=\"1\" fill=\"currentColor\"/><circle cx=\"60\" cy=\"20\" r=\"1\" fill=\"currentColor\"/><circle cx=\"90\" cy=\"15\" r=\"1\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DESERT</text></svg>"
    },
    {
        "word": "desk",
        "phonetic": "[desk]",
        "meaning": "n. 书桌",
        "example": "Clean your desk.",
        "exampleCn": "清理你的书桌。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 H 80 M 45 20 V 35 M 75 20 V 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DESK</text></svg>"
    },
    {
        "word": "develop",
        "phonetic": "[dɪˈveləp]",
        "meaning": "v. 发展",
        "example": "Develop a city.",
        "exampleCn": "发展城市",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DEVELOP</text></svg>"
    },
    {
        "word": "diamond",
        "phonetic": "[ˈdaɪəmənd]",
        "meaning": "n. 钻石",
        "example": "Real diamond.",
        "exampleCn": "真钻。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 45 15 L 60 30 L 75 15 Z\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DIAMOND</text></svg>"
    },
    {
        "word": "diet",
        "phonetic": "[ˈdaɪət]",
        "meaning": "n. 饮食",
        "example": "Healthy diet.",
        "exampleCn": "健康饮食。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DIET</text></svg>"
    },
    {
        "word": "difference",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample difference.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DIFFERENCE</text></svg>"
    },
    {
        "word": "difficult",
        "phonetic": "[ˈdɪfɪkəlt]",
        "meaning": "adj. 困难的",
        "example": "Difficult math.",
        "exampleCn": "难的数学。",
        "category": "adjective",
        "difficulty": 5,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 30 M 80 10 L 40 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DIFFICULT</text></svg>"
    },
    {
        "word": "direction",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample direction.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DIRECTION</text></svg>"
    },
    {
        "word": "dirty",
        "phonetic": "[ˈdɜːti]",
        "meaning": "adj. 脏的",
        "example": "Dirty clothes.",
        "exampleCn": "脏衣服。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"10\" r=\"2\" fill=\"brown\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DIRTY</text></svg>"
    },
    {
        "word": "discussion",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample discussion.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">DISCUSSION</text></svg>"
    },
    {
        "word": "doctor",
        "phonetic": "[ˈdɒktə(r)]",
        "meaning": "n. 医生",
        "example": "See a doctor.",
        "exampleCn": "看医生。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25 M 50 15 H 70\" stroke=\"red\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DOCTOR</text></svg>"
    },
    {
        "word": "dog",
        "phonetic": "[dɒɡ]",
        "meaning": "n. 狗",
        "example": "The dog barks.",
        "exampleCn": "狗叫了。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 H 70 L 80 15 M 40 25 L 35 35 M 70 25 L 75 35\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"80\" cy=\"15\" r=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DOG</text></svg>"
    },
    {
        "word": "dot",
        "phonetic": "[dɒt]",
        "meaning": "n. 点",
        "example": "Connect the dots.",
        "exampleCn": "连点。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "shape"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"3\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DOT</text></svg>"
    },
    {
        "word": "draw",
        "phonetic": "[drɔː]",
        "meaning": "v. 画",
        "example": "Draw a cat.",
        "exampleCn": "画只猫。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "art"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DRAW</text></svg>"
    },
    {
        "word": "dream",
        "phonetic": "[driːm]",
        "meaning": "n. 梦；梦想",
        "example": "Have a dream.",
        "exampleCn": "做个梦。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 Q 50 5, 60 15 Q 70 5, 80 15 Q 60 25, 40 15\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DREAM</text></svg>"
    },
    {
        "word": "dress",
        "phonetic": "[dres]",
        "meaning": "n. 连衣裙",
        "example": "A beautiful dress.",
        "exampleCn": "一件漂亮的连衣裙。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 60 15 L 70 10 L 80 35 H 40 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DRESS</text></svg>"
    },
    {
        "word": "driver",
        "phonetic": "[ˈdraɪvə(r)]",
        "meaning": "n. 司机",
        "example": "A taxi driver.",
        "exampleCn": "一名出租车司机。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M60 20 L 70 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >DRIVER</text></svg>"
    },
    {
        "word": "drum",
        "phonetic": "[drʌm]",
        "meaning": "n. 鼓",
        "example": "Beat the drum.",
        "exampleCn": "敲鼓。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "music"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DRUM</text></svg>"
    },
    {
        "word": "dry",
        "phonetic": "[draɪ]",
        "meaning": "adj. 干燥的",
        "example": "Dry leaf.",
        "exampleCn": "干叶子。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 20\" stroke=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DRY</text></svg>"
    },
    {
        "word": "duck",
        "phonetic": "[dʌk]",
        "meaning": "n. 鸭子",
        "example": "A duck says quack.",
        "exampleCn": "鸭子嘎嘎叫。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 Q 55 10, 65 20 Q 75 20, 75 25 Q 65 30, 50 25 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"55\" cy=\"18\" r=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DUCK</text></svg>"
    },
    {
        "word": "dusk",
        "phonetic": "[dʌsk]",
        "meaning": "n. 黄昏",
        "example": "At dusk.",
        "exampleCn": "在黄昏。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 25 Q 60 45, 100 25\" stroke=\"purple\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DUSK</text></svg>"
    },
    {
        "word": "dust",
        "phonetic": "[dʌst]",
        "meaning": "n. 灰尘",
        "example": "Clean the dust.",
        "exampleCn": "清灰。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"10\" r=\"0.5\" fill=\"currentColor\"/><circle cx=\"80\" cy=\"20\" r=\"0.5\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >DUST</text></svg>"
    },
    {
        "word": "ear",
        "phonetic": "[ɪə(r)]",
        "meaning": "n. 耳朵",
        "example": "I have two ears.",
        "exampleCn": "我有两只耳朵。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 65 10, 65 25 Q 65 35, 55 35\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M55 20 Q 60 20, 60 25\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >EAR</text></svg>"
    },
    {
        "word": "earth",
        "phonetic": "[ɜːθ]",
        "meaning": "n. 地球；泥土",
        "example": "Protect the Earth.",
        "exampleCn": "保护地球。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" fill=\"currentColor\" opacity=\"0.1\"/><path d=\"M50 15 Q 60 25, 70 15\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >EARTH</text></svg>"
    },
    {
        "word": "east",
        "phonetic": "[iːst]",
        "meaning": "n./adj. 东方",
        "example": "The sun rises in the east.",
        "exampleCn": "太阳从东方升起。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "direction"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 20 H 90 L 80 10 M 90 20 L 80 30\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >EAST</text></svg>"
    },
    {
        "word": "easy",
        "phonetic": "[ˈiːzi]",
        "meaning": "adj. 容易的",
        "example": "Easy job.",
        "exampleCn": "容易的工作。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 80 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >EASY</text></svg>"
    },
    {
        "word": "economy",
        "phonetic": "[səˈsaɪəti]",
        "meaning": "n. 经济",
        "example": "Global economy.",
        "exampleCn": "全球经济",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ECONOMY</text></svg>"
    },
    {
        "word": "education",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample education.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EDUCATION</text></svg>"
    },
    {
        "word": "effect",
        "phonetic": "[ɪˈfekt]",
        "meaning": "n. 影响；效果",
        "example": "Side effect.",
        "exampleCn": "副作用",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >EFFECT</text></svg>"
    },
    {
        "word": "egg",
        "phonetic": "[eɡ]",
        "meaning": "n. 鸡蛋",
        "example": "Boil an egg.",
        "exampleCn": "煮个蛋。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"20\" rx=\"10\" ry=\"14\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >EGG</text></svg>"
    },
    {
        "word": "eighteen",
        "phonetic": "[ˌeɪˈtiːn]",
        "meaning": "num. 十八",
        "example": "Eighteen years old.",
        "exampleCn": "十八岁。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EIGHTEEN</text></svg>"
    },
    {
        "word": "elephant",
        "phonetic": "[ˈelɪfənt]",
        "meaning": "n. 大象",
        "example": "Huge elephant.",
        "exampleCn": "庞大的象。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 30 20, 40 30 M 80 10 V 30\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ELEPHANT</text></svg>"
    },
    {
        "word": "eleven",
        "phonetic": "[ɪˈlevn]",
        "meaning": "num. 十一",
        "example": "Eleven players.",
        "exampleCn": "十一名球员。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"5\" x2=\"45\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><line x1=\"75\" y1=\"5\" x2=\"75\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ELEVEN</text></svg>"
    },
    {
        "word": "email",
        "phonetic": "[ˈiːmeɪl]",
        "meaning": "n. 电子邮件",
        "example": "Send an email.",
        "exampleCn": "发封邮件。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M40 15 L 60 30 L 80 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >EMAIL</text></svg>"
    },
    {
        "word": "empty",
        "phonetic": "[ˈempti]",
        "meaning": "adj. 空的",
        "example": "Empty box.",
        "exampleCn": "空盒子。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >EMPTY</text></svg>"
    },
    {
        "word": "end",
        "phonetic": "[end]",
        "meaning": "n./v. 结束",
        "example": "The end.",
        "exampleCn": "结束。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 10 V 30\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >END</text></svg>"
    },
    {
        "word": "energy",
        "phonetic": "[ˈenədʒi]",
        "meaning": "n. 能量",
        "example": "Solar energy.",
        "exampleCn": "太阳能",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ENERGY</text></svg>"
    },
    {
        "word": "environment",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample environment.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">ENVIRONMENT</text></svg>"
    },
    {
        "word": "eraser",
        "phonetic": "[ɪˈreɪzə(r)]",
        "meaning": "n. 橡皮",
        "example": "Use an eraser.",
        "exampleCn": "用橡皮擦。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"15\" rx=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ERASER</text></svg>"
    },
    {
        "word": "exciting",
        "phonetic": "[ɪkˈsaɪtɪŋ]",
        "meaning": "adj. 令人兴奋的",
        "example": "Exciting news.",
        "exampleCn": "令人兴奋的新闻。",
        "category": "adjective",
        "difficulty": 5,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EXCITING</text></svg>"
    },
    {
        "word": "exercise",
        "phonetic": "[ˈeksəsaɪz]",
        "meaning": "v./n. 锻炼",
        "example": "Do exercise.",
        "exampleCn": "做运动。",
        "category": "verb",
        "difficulty": 4,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 60 5 L 80 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EXERCISE</text></svg>"
    },
    {
        "word": "expensive",
        "phonetic": "[ɪkˈspensɪv]",
        "meaning": "adj. 昂贵的",
        "example": "Expensive car.",
        "exampleCn": "名贵的车。",
        "category": "adjective",
        "difficulty": 5,
        "tags": [
            "finance"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25 M 50 15 H 70\" stroke=\"gold\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EXPENSIVE</text></svg>"
    },
    {
        "word": "experience",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample experience.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EXPERIENCE</text></svg>"
    },
    {
        "word": "explain",
        "phonetic": "[ɪkˈspleɪn]",
        "meaning": "v. 解释",
        "example": "Please explain.",
        "exampleCn": "请解释一下",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EXPLAIN</text></svg>"
    },
    {
        "word": "expression",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample expression.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">EXPRESSION</text></svg>"
    },
    {
        "word": "eye",
        "phonetic": "[aɪ]",
        "meaning": "n. 眼睛",
        "example": "Close your eyes.",
        "exampleCn": "闭上你的眼睛。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 25 Q 60 15, 75 25 Q 60 35, 45 25 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"25\" r=\"3\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >EYE</text></svg>"
    },
    {
        "word": "face",
        "phonetic": "[feɪs]",
        "meaning": "n. 脸",
        "example": "Wash your face.",
        "exampleCn": "洗洗你的脸。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"22\" r=\"12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"56\" cy=\"20\" r=\"1\" opacity=\"0.4\"/><circle cx=\"64\" cy=\"20\" r=\"1\" opacity=\"0.4\"/><path d=\"M56 26 Q 60 30, 64 26\" stroke=\"currentColor\" stroke-width=\"1\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FACE</text></svg>"
    },
    {
        "word": "factory",
        "phonetic": "[ˈfæktri]",
        "meaning": "n. 工厂",
        "example": "At factory.",
        "exampleCn": "在工厂。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 V 15 L 50 20 V 15 L 70 20 V 15 L 90 20 V 30 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">FACTORY</text></svg>"
    },
    {
        "word": "failure",
        "phonetic": "[ˈfeɪljə(r)]",
        "meaning": "n. 失败",
        "example": "Fear of failure.",
        "exampleCn": "害怕失败。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 70 30 M 70 10 L 50 30\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">FAILURE</text></svg>"
    },
    {
        "word": "fake",
        "phonetic": "[feɪk]",
        "meaning": "adj. 虚假的",
        "example": "Fake news.",
        "exampleCn": "假新闻。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 30 M 80 10 L 40 30\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FAKE</text></svg>"
    },
    {
        "word": "family",
        "phonetic": "[ˈfæməli]",
        "meaning": "n. 家庭",
        "example": "Happy family.",
        "exampleCn": "快乐家庭。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"75\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FAMILY</text></svg>"
    },
    {
        "word": "famous",
        "phonetic": "[ˈfeɪməs]",
        "meaning": "adj. 著名的",
        "example": "Famous person.",
        "exampleCn": "名人。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 70 15 L 60 25 L 50 15 Z\" fill=\"gold\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FAMOUS</text></svg>"
    },
    {
        "word": "fan",
        "phonetic": "[fæn]",
        "meaning": "n. 风扇",
        "example": "Turn on the fan.",
        "exampleCn": "打开风扇。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M60 15 L 50 5 M 60 15 L 70 5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FAN</text></svg>"
    },
    {
        "word": "farmer",
        "phonetic": "[ˈfɑːmə(r)]",
        "meaning": "n. 农民",
        "example": "A busy farmer.",
        "exampleCn": "一位忙碌的农民。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 10 L 60 25 Z\" fill=\"currentColor\" opacity=\"0.1\"/><path d=\"M60 25 V 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FARMER</text></svg>"
    },
    {
        "word": "fast",
        "phonetic": "[fɑːst]",
        "meaning": "adj. 快的；adv. 快地",
        "example": "He runs very fast.",
        "exampleCn": "他跑得很快。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "speed",
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20 L 40 20 M 15 25 L 35 25 M 20 30 L 40 30\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.4\"/><path d=\"M90 10 L 105 25 L 90 40\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><line x1=\"10\" y1=\"15\" x2=\"30\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.2\"/><line x1=\"5\" y1=\"25\" x2=\"25\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FAST</text></svg>"
    },
    {
        "word": "fat",
        "phonetic": "[fæt]",
        "meaning": "adj. 胖的",
        "example": "A fat pig.",
        "exampleCn": "一只肥猪。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "adjective"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FAT</text></svg>"
    },
    {
        "word": "father",
        "phonetic": "[ˈfɑːðə(r)]",
        "meaning": "n. 父亲",
        "example": "My father is tall.",
        "exampleCn": "我父亲很高。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 V 35 M 70 15 V 35 M 50 15 H 70\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FATHER</text></svg>"
    },
    {
        "word": "fear",
        "phonetic": "[fɪə(r)]",
        "meaning": "n./v. 恐惧",
        "example": "No fear.",
        "exampleCn": "无所畏惧。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"70\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FEAR</text></svg>"
    },
    {
        "word": "feel",
        "phonetic": "[fiːl]",
        "meaning": "v. 感觉",
        "example": "I feel good.",
        "exampleCn": "我感觉很好。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "sense"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 35, 80 20\" stroke=\"currentColor\" stroke-dasharray=\"4 4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FEEL</text></svg>"
    },
    {
        "word": "fever",
        "phonetic": "[ˈfiːvə(r)]",
        "meaning": "n. 发烧",
        "example": "Have a fever.",
        "exampleCn": "发烧了。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25\" stroke=\"red\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"30\" r=\"3\" fill=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FEVER</text></svg>"
    },
    {
        "word": "field",
        "phonetic": "[fiːld]",
        "meaning": "n. 田野",
        "example": "A big field.",
        "exampleCn": "一片大田野。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"10\" width=\"80\" height=\"20\" stroke=\"currentColor\" stroke-dasharray=\"5 5\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FIELD</text></svg>"
    },
    {
        "word": "fifteen",
        "phonetic": "[ˌfɪfˈtiːn]",
        "meaning": "num. 十五",
        "example": "Fifteen minutes.",
        "exampleCn": "十五分钟。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">FIFTEEN</text></svg>"
    },
    {
        "word": "fight",
        "phonetic": "[faɪt]",
        "meaning": "v./n. 战斗；打架",
        "example": "Stop fighting.",
        "exampleCn": "别打了。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 L 55 15 M 80 15 L 65 15\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FIGHT</text></svg>"
    },
    {
        "word": "file",
        "phonetic": "[faɪl]",
        "meaning": "n. 文件",
        "example": "Save the file.",
        "exampleCn": "保存文件。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 H 70 L 80 20 V 35 H 40 Z\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FILE</text></svg>"
    },
    {
        "word": "find",
        "phonetic": "[faɪnd]",
        "meaning": "v. 找到",
        "example": "I find a key.",
        "exampleCn": "我找到一把钥匙。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"55\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"61\" y1=\"21\" x2=\"75\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FIND</text></svg>"
    },
    {
        "word": "fine",
        "phonetic": "[faɪn]",
        "meaning": "adj. 好的；晴朗的",
        "example": "Fine day.",
        "exampleCn": "晴天。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FINE</text></svg>"
    },
    {
        "word": "finish",
        "phonetic": "[ˈfɪnɪʃ]",
        "meaning": "v./n. 完成",
        "example": "Finish the task.",
        "exampleCn": "完成任务。",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 85 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FINISH</text></svg>"
    },
    {
        "word": "fire",
        "phonetic": "[ˈfaɪə(r)]",
        "meaning": "n. 火",
        "example": "Warm fire.",
        "exampleCn": "暖火。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 30 Q 60 5, 70 30\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FIRE</text></svg>"
    },
    {
        "word": "fish",
        "phonetic": "[fɪʃ]",
        "meaning": "n. 鱼",
        "example": "Fish swim in water.",
        "exampleCn": "鱼在水里游。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 60 10, 80 25 Q 60 40, 40 25 L 35 20 M 40 25 L 35 30\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"70\" cy=\"22\" r=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FISH</text></svg>"
    },
    {
        "word": "fix",
        "phonetic": "[fɪks]",
        "meaning": "v. 修理；固定",
        "example": "Fix the bike.",
        "exampleCn": "修自行车。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 50 20 M 70 10 L 60 20\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FIX</text></svg>"
    },
    {
        "word": "flag",
        "phonetic": "[flæɡ]",
        "meaning": "n. 旗帜",
        "example": "National flag.",
        "exampleCn": "国旗。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 35 V 5 H 70 V 20 H 40\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FLAG</text></svg>"
    },
    {
        "word": "floor",
        "phonetic": "[flɔː(r)]",
        "meaning": "n. 地板；楼层",
        "example": "On the floor.",
        "exampleCn": "在楼层/地板上。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 30 H 100\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FLOOR</text></svg>"
    },
    {
        "word": "flower",
        "phonetic": "[ˈflaʊə(r)]",
        "meaning": "n. 花",
        "example": "The flower is red.",
        "exampleCn": "这朵花是红色的。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"35\" x2=\"60\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"15\" r=\"5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M60 25 Q 65 20, 70 22\" stroke=\"currentColor\" stroke-width=\"1\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FLOWER</text></svg>"
    },
    {
        "word": "flute",
        "phonetic": "[fluːt]",
        "meaning": "n. 笛子",
        "example": "Silver flute.",
        "exampleCn": "银笛。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "music"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"15\" x2=\"90\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FLUTE</text></svg>"
    },
    {
        "word": "folder",
        "phonetic": "[ˈfəʊldə(r)]",
        "meaning": "n. 文件夹",
        "example": "Open the folder.",
        "exampleCn": "打开文件夹。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 10 H 50 L 55 15 H 85 V 35 H 35 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FOLDER</text></svg>"
    },
    {
        "word": "follow",
        "phonetic": "[ˈfɒləʊ]",
        "meaning": "v. 跟随",
        "example": "Follow me.",
        "exampleCn": "跟着我。",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20 H 50 L 40 10 M 50 20 L 40 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FOLLOW</text></svg>"
    },
    {
        "word": "foot",
        "phonetic": "[fʊt]",
        "meaning": "n. 脚",
        "example": "My foot hurts.",
        "exampleCn": "我的脚疼。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 Q 70 20, 75 25 Q 75 35, 60 35 Q 45 35, 45 25 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/><circle cx=\"72\" cy=\"25\" r=\"1\" opacity=\"0.3\"/><circle cx=\"68\" cy=\"24\" r=\"1\" opacity=\"0.3\"/><circle cx=\"64\" cy=\"23\" r=\"1\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FOOT</text></svg>"
    },
    {
        "word": "football",
        "phonetic": "[ˈfʊtbɔːl]",
        "meaning": "n. 足球",
        "example": "Play football.",
        "exampleCn": "踢足球。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "sport"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">FOOTBALL</text></svg>"
    },
    {
        "word": "force",
        "phonetic": "[fɔːs]",
        "meaning": "n. 力量",
        "example": "Natural force.",
        "exampleCn": "自然力",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FORCE</text></svg>"
    },
    {
        "word": "fork",
        "phonetic": "[fɔːk]",
        "meaning": "n. 叉子",
        "example": "Fork and knife.",
        "exampleCn": "叉子和刀。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 V 20 M 45 10 V 20 M 50 10 V 20 H 40 M 45 20 V 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FORK</text></svg>"
    },
    {
        "word": "foundation",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample foundation.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">FOUNDATION</text></svg>"
    },
    {
        "word": "fourteen",
        "phonetic": "[ˌfɔːˈtiːn]",
        "meaning": "num. 十四",
        "example": "Fourteen days.",
        "exampleCn": "十四天。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">FOURTEEN</text></svg>"
    },
    {
        "word": "free",
        "phonetic": "[friː]",
        "meaning": "adj. 自由的；免费的",
        "example": "Free time.",
        "exampleCn": "空闲时间。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 5, 80 20\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FREE</text></svg>"
    },
    {
        "word": "freedom",
        "phonetic": "[ˈfriːdəm]",
        "meaning": "n. 自由",
        "example": "Fight for freedom.",
        "exampleCn": "争取自由",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">FREEDOM</text></svg>"
    },
    {
        "word": "fresh",
        "phonetic": "[freʃ]",
        "meaning": "adj. 新鲜的",
        "example": "Fresh fruit.",
        "exampleCn": "新鲜水果。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 50 15, 60 25 T 80 25\" stroke=\"green\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FRESH</text></svg>"
    },
    {
        "word": "fridge",
        "phonetic": "[frɪdʒ]",
        "meaning": "n. 冰箱",
        "example": "In the fridge.",
        "exampleCn": "在冰箱里。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"5\" width=\"30\" height=\"35\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"45\" y1=\"20\" x2=\"75\" y2=\"20\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FRIDGE</text></svg>"
    },
    {
        "word": "friend",
        "phonetic": "[frend]",
        "meaning": "n. 朋友",
        "example": "He is my friend.",
        "exampleCn": "他是我的朋友。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "people"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 20 L 55 20 M 65 20 L 75 20\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FRIEND</text></svg>"
    },
    {
        "word": "fruit",
        "phonetic": "[fruːt]",
        "meaning": "n. 水果",
        "example": "Eat fresh fruit.",
        "exampleCn": "吃新鲜水果。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"25\" r=\"8\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M60 30 Q 70 30, 75 15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FRUIT</text></svg>"
    },
    {
        "word": "fuel",
        "phonetic": "[ˈfjuːəl]",
        "meaning": "n. 燃料",
        "example": "Car fuel.",
        "exampleCn": "汽车燃料。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FUEL</text></svg>"
    },
    {
        "word": "full",
        "phonetic": "[fʊl]",
        "meaning": "adj. 满的",
        "example": "Full moon.",
        "exampleCn": "满月。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"12\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >FULL</text></svg>"
    },
    {
        "word": "future",
        "phonetic": "[ˈfjuːtʃə(r)]",
        "meaning": "n. 未来",
        "example": "Bright future.",
        "exampleCn": "美好的未来",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >FUTURE</text></svg>"
    },
    {
        "word": "galaxy",
        "phonetic": "[ˈɡæləksi]",
        "meaning": "n. 银河；星系",
        "example": "The galaxy.",
        "exampleCn": "银河系。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "science"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 Q 60 5, 80 15 T 60 25 T 40 15\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><circle cx=\"30\" cy=\"10\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"90\" cy=\"20\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"50\" cy=\"5\" r=\"0.5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >GALAXY</text></svg>"
    },
    {
        "word": "game",
        "phonetic": "[ɡeɪm]",
        "meaning": "n. 游戏；比赛",
        "example": "Play a game.",
        "exampleCn": "玩个游戏。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "fun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"20\" rx=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GAME</text></svg>"
    },
    {
        "word": "garden",
        "phonetic": "[ˈɡɑːdn]",
        "meaning": "n. 花园",
        "example": "A beautiful garden.",
        "exampleCn": "一个漂亮的花园。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 35 Q 40 15, 50 35 Q 60 15, 70 35\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >GARDEN</text></svg>"
    },
    {
        "word": "gas",
        "phonetic": "[ɡæs]",
        "meaning": "n. 气体；煤气",
        "example": "Natural gas.",
        "exampleCn": "天然气。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 20, 80 10\" stroke=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GAS</text></svg>"
    },
    {
        "word": "gear",
        "phonetic": "[ɡɪə(r)]",
        "meaning": "n. 齿轮",
        "example": "First gear.",
        "exampleCn": "一档。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" stroke-dasharray=\"4 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GEAR</text></svg>"
    },
    {
        "word": "generation",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample generation.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">GENERATION</text></svg>"
    },
    {
        "word": "gift",
        "phonetic": "[ɡɪft]",
        "meaning": "n. 礼物",
        "example": "A nice gift.",
        "exampleCn": "一件精美的礼物。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "fun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M60 10 V 30 M 45 20 H 75\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GIFT</text></svg>"
    },
    {
        "word": "girl",
        "phonetic": "[ɡɜːl]",
        "meaning": "n. 女孩",
        "example": "A little girl.",
        "exampleCn": "一个小女孩。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "people"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 15 Q 60 5, 65 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GIRL</text></svg>"
    },
    {
        "word": "give",
        "phonetic": "[ɡɪv]",
        "meaning": "v. 给",
        "example": "Give me that.",
        "exampleCn": "给我。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 60 15, 80 25\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GIVE</text></svg>"
    },
    {
        "word": "glacier",
        "phonetic": "[ˈɡlæsiə(r)]",
        "meaning": "n. 冰川",
        "example": "Cold glacier.",
        "exampleCn": "冷冰川。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 L 60 5 L 80 30\" fill=\"blue\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">GLACIER</text></svg>"
    },
    {
        "word": "glass",
        "phonetic": "[ɡlɑːs]",
        "meaning": "n. 玻璃",
        "example": "Broken glass.",
        "exampleCn": "碎玻璃。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 10 H 75 L 70 35 H 50 Z\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >GLASS</text></svg>"
    },
    {
        "word": "global",
        "phonetic": "[ˈɡləʊbl]",
        "meaning": "adj. 全球的",
        "example": "Global warming.",
        "exampleCn": "全球变暖。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"12\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >GLOBAL</text></svg>"
    },
    {
        "word": "glue",
        "phonetic": "[ɡluː]",
        "meaning": "n. 胶水",
        "example": "Stick with glue.",
        "exampleCn": "用胶水粘。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 10 H 65 V 30 H 55 Z\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"33\" r=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GLUE</text></svg>"
    },
    {
        "word": "goal",
        "phonetic": "[ɡəʊl]",
        "meaning": "n. 目标；进球",
        "example": "Score a goal.",
        "exampleCn": "进球。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GOAL</text></svg>"
    },
    {
        "word": "gold",
        "phonetic": "[ɡəʊld]",
        "meaning": "n. 黄金",
        "example": "Gold ring.",
        "exampleCn": "金戒指。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"10\" fill=\"gold\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GOLD</text></svg>"
    },
    {
        "word": "good",
        "phonetic": "[ɡʊd]",
        "meaning": "adj. 好的",
        "example": "Very good.",
        "exampleCn": "很好。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "opinion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 35, 80 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GOOD</text></svg>"
    },
    {
        "word": "government",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample government.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"15\" x2=\"30\" y2=\"15\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"5\" y1=\"25\" x2=\"25\" y2=\"25\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">GOVERNMENT</text></svg>"
    },
    {
        "word": "grandma",
        "phonetic": "[ˈɡrænmɑː]",
        "meaning": "n. 奶奶；外婆",
        "example": "Grandma is kind.",
        "exampleCn": "奶奶很善良。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 60 5, 70 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">GRANDMA</text></svg>"
    },
    {
        "word": "grandpa",
        "phonetic": "[ˈɡrænpɑː]",
        "meaning": "n. 爷爷；外公",
        "example": "I love Grandpa.",
        "exampleCn": "我爱爷爷。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 V 35\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">GRANDPA</text></svg>"
    },
    {
        "word": "grape",
        "phonetic": "[ɡreɪp]",
        "meaning": "n. 葡萄",
        "example": "Purple grape.",
        "exampleCn": "紫色葡萄。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"55\" cy=\"10\" r=\"3\" opacity=\"0.3\"/><circle cx=\"65\" cy=\"10\" r=\"3\" opacity=\"0.3\"/><circle cx=\"60\" cy=\"18\" r=\"3\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >GRAPE</text></svg>"
    },
    {
        "word": "grass",
        "phonetic": "[ɡrɑːs]",
        "meaning": "n. 草",
        "example": "The grass is green.",
        "exampleCn": "草是绿色的。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 35 L 35 25 L 40 35 L 45 20 L 50 35 L 55 25 L 60 35\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >GRASS</text></svg>"
    },
    {
        "word": "gravity",
        "phonetic": "[ˈɡrævəti]",
        "meaning": "n. 重力",
        "example": "Law of gravity.",
        "exampleCn": "万有引力定律。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "science"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 30 L 55 25 M 60 30 L 65 25\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">GRAVITY</text></svg>"
    },
    {
        "word": "grey",
        "phonetic": "[ɡreɪ]",
        "meaning": "adj. 灰色的",
        "example": "Grey cloud.",
        "exampleCn": "灰云。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 Q 60 5, 80 15\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >GREY</text></svg>"
    },
    {
        "word": "guitar",
        "phonetic": "[ɡɪˈtɑː(r)]",
        "meaning": "n. 吉他",
        "example": "Play guitar.",
        "exampleCn": "弹吉他。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "music"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 30 Q 40 20, 50 10 H 70 Q 80 20, 70 30\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >GUITAR</text></svg>"
    },
    {
        "word": "hair",
        "phonetic": "[heə(r)]",
        "meaning": "n. 头发",
        "example": "Long hair.",
        "exampleCn": "长发。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 5 Q 60 0, 80 5 M 40 5 V 25 M 80 5 V 25\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HAIR</text></svg>"
    },
    {
        "word": "hammer",
        "phonetic": "[ˈhæmə(r)]",
        "meaning": "n. 铁锤",
        "example": "Use a hammer.",
        "exampleCn": "用锤子。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"20\" height=\"8\" fill=\"currentColor\" opacity=\"0.4\"/><rect x=\"48\" y=\"18\" width=\"4\" height=\"15\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HAMMER</text></svg>"
    },
    {
        "word": "hand",
        "phonetic": "[hænd]",
        "meaning": "n. 手",
        "example": "Clap your hands.",
        "exampleCn": "拍拍你的手。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 25 L 50 15 Q 53 12, 55 15 L 55 25 M 55 15 Q 58 12, 60 15 L 60 25 M 60 15 Q 63 12, 65 15 L 65 25 M 65 18 Q 68 15, 70 18 L 70 28 Q 70 35, 60 35 H 50 Q 45 35, 45 28 L 50 25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HAND</text></svg>"
    },
    {
        "word": "happy",
        "phonetic": "[ˈhæpi]",
        "meaning": "adj. 快乐的",
        "example": "I'm so happy today!",
        "exampleCn": "我今天太开心了！",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 35, 80 20\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"45\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.4\"/><circle cx=\"75\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HAPPY</text></svg>"
    },
    {
        "word": "hard",
        "phonetic": "[hɑːd]",
        "meaning": "adj. 难的；硬的",
        "example": "Hard question.",
        "exampleCn": "难的问题。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HARD</text></svg>"
    },
    {
        "word": "hat",
        "phonetic": "[hæt]",
        "meaning": "n. 帽子",
        "example": "Take off your hat.",
        "exampleCn": "摘掉你的帽子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 30 H 85 M 45 30 V 20 Q 60 10, 75 20 V 30\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HAT</text></svg>"
    },
    {
        "word": "head",
        "phonetic": "[hed]",
        "meaning": "n. 头",
        "example": "Nod your head.",
        "exampleCn": "点点头。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"25\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M57 23 L 59 23 M 61 23 L 63 23 M 58 28 Q 60 30, 62 28\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HEAD</text></svg>"
    },
    {
        "word": "health",
        "phonetic": "[helθ]",
        "meaning": "n. 健康",
        "example": "Good health.",
        "exampleCn": "身体健康。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25 M 50 15 H 70\" stroke=\"red\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HEALTH</text></svg>"
    },
    {
        "word": "healthy",
        "phonetic": "[ˈhelθi]",
        "meaning": "adj. 健康的",
        "example": "Healthy food.",
        "exampleCn": "健康食品。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25 M 50 15 H 70\" stroke=\"red\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">HEALTHY</text></svg>"
    },
    {
        "word": "hear",
        "phonetic": "[hɪə(r)]",
        "meaning": "v. 听到",
        "example": "Can you hear me?",
        "exampleCn": "你能听到我吗？",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "sense"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 65 10, 65 25\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HEAR</text></svg>"
    },
    {
        "word": "heart",
        "phonetic": "[hɑːt]",
        "meaning": "n. 心；心脏",
        "example": "A kind heart.",
        "exampleCn": "一颗善良的心。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 30 Q 60 10, 45 10 T 30 25 Q 30 40, 60 55 Q 90 40, 90 25 T 75 10 Q 60 10, 60 30\" fill=\"red\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HEART</text></svg>"
    },
    {
        "word": "heavy",
        "phonetic": "[ˈhevi]",
        "meaning": "adj. 重的",
        "example": "Heavy rain.",
        "exampleCn": "大雨。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80 L 70 25 H 50 Z\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HEAVY</text></svg>"
    },
    {
        "word": "help",
        "phonetic": "[help]",
        "meaning": "v. 帮助",
        "example": "Help each other.",
        "exampleCn": "互相帮助。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 60 15, 80 25\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HELP</text></svg>"
    },
    {
        "word": "hero",
        "phonetic": "[ˈhɪərəʊ]",
        "meaning": "n. 英雄",
        "example": "My hero.",
        "exampleCn": "我的英雄。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 60 5 L 80 10 L 60 35 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HERO</text></svg>"
    },
    {
        "word": "hide",
        "phonetic": "[haɪd]",
        "meaning": "v. 躲藏",
        "example": "Hide and seek.",
        "exampleCn": "捉迷藏。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"10\" fill=\"currentColor\" opacity=\"0.4\"/><path d=\"M60 20 V 30\" stroke=\"currentColor\" stroke-dasharray=\"2 2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HIDE</text></svg>"
    },
    {
        "word": "hill",
        "phonetic": "[hɪl]",
        "meaning": "n. 小山",
        "example": "Up the hill.",
        "exampleCn": "上山。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 25 Q 60 5, 90 25\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HILL</text></svg>"
    },
    {
        "word": "history",
        "phonetic": "[ˈhɪstri]",
        "meaning": "n. 历史",
        "example": "Long history.",
        "exampleCn": "悠久的历史",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">HISTORY</text></svg>"
    },
    {
        "word": "home",
        "phonetic": "[həʊm]",
        "meaning": "n. 家",
        "example": "I'm going home.",
        "exampleCn": "我要回家了。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "place",
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 L 60 10 L 90 30\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><rect x=\"50\" y=\"25\" width=\"20\" height=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HOME</text></svg>"
    },
    {
        "word": "honest",
        "phonetic": "[ˈɒnɪst]",
        "meaning": "adj. 诚实的",
        "example": "An honest man.",
        "exampleCn": "一个诚实的人。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 85 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HONEST</text></svg>"
    },
    {
        "word": "honesty",
        "phonetic": "[ˈɒnɪsti]",
        "meaning": "n. 诚实",
        "example": "Honesty is best.",
        "exampleCn": "诚实至上",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">HONESTY</text></svg>"
    },
    {
        "word": "honey",
        "phonetic": "[ˈhʌni]",
        "meaning": "n. 蜂蜜",
        "example": "Sweet honey.",
        "exampleCn": "甜蜂蜜。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 Q 60 0, 70 10 V 25 Q 60 35, 50 25 Z\" fill=\"gold\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HONEY</text></svg>"
    },
    {
        "word": "hope",
        "phonetic": "[həʊp]",
        "meaning": "v./n. 希望",
        "example": "I hope so.",
        "exampleCn": "我希望如此。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "mental"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 Q 80 5, 80 20 T 60 35\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HOPE</text></svg>"
    },
    {
        "word": "horse",
        "phonetic": "[hɔːs]",
        "meaning": "n. 马",
        "example": "Ride a horse.",
        "exampleCn": "骑马。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 25 L 50 15 L 70 15 Q 75 15, 75 25 L 70 25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M50 15 L 48 10\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HORSE</text></svg>"
    },
    {
        "word": "hot",
        "phonetic": "[hɒt]",
        "meaning": "adj. 热的",
        "example": "It is hot.",
        "exampleCn": "天气很热。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 55 5, 60 15 Q 65 5, 70 15\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HOT</text></svg>"
    },
    {
        "word": "hotel",
        "phonetic": "[həʊˈtel]",
        "meaning": "n. 旅馆",
        "example": "Stay in a hotel.",
        "exampleCn": "住在旅馆。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"5\" width=\"30\" height=\"30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HOTEL</text></svg>"
    },
    {
        "word": "hungry",
        "phonetic": "[ˈhʌŋɡri]",
        "meaning": "adj. 饥饿的",
        "example": "I am hungry.",
        "exampleCn": "我饿了。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"10\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >HUNGRY</text></svg>"
    },
    {
        "word": "hurt",
        "phonetic": "[hɜːt]",
        "meaning": "v. 受伤；疼",
        "example": "It hurts.",
        "exampleCn": "好疼。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 70 20\" stroke=\"red\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >HURT</text></svg>"
    },
    {
        "word": "husband",
        "phonetic": "[ˈhʌzbənd]",
        "meaning": "n. 丈夫",
        "example": "My husband.",
        "exampleCn": "我的丈夫。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 V 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">HUSBAND</text></svg>"
    },
    {
        "word": "ice",
        "phonetic": "[aɪs]",
        "meaning": "n. 冰",
        "example": "Cold ice.",
        "exampleCn": "冷冰。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"20\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ICE</text></svg>"
    },
    {
        "word": "idea",
        "phonetic": "[aɪˈdɪə]",
        "meaning": "n. 想法",
        "example": "A good idea.",
        "exampleCn": "一个好主意。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M60 23 V 28\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >IDEA</text></svg>"
    },
    {
        "word": "imagine",
        "phonetic": "[ɪˈmædʒɪn]",
        "meaning": "v. 想象",
        "example": "Imagine that.",
        "exampleCn": "想象一下",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">IMAGINE</text></svg>"
    },
    {
        "word": "importance",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample importance.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">IMPORTANCE</text></svg>"
    },
    {
        "word": "important",
        "phonetic": "[ɪmˈpɔːtnt]",
        "meaning": "adj. 重要的",
        "example": "Important news.",
        "exampleCn": "重要新闻。",
        "category": "adjective",
        "difficulty": 5,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 20 M 60 25 V 28\" stroke=\"red\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">IMPORTANT</text></svg>"
    },
    {
        "word": "improve",
        "phonetic": "[ɪmˈpruːv]",
        "meaning": "v. 提高",
        "example": "Improve skills.",
        "exampleCn": "提高技能",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 25 V 5 L 50 15 M 60 5 L 70 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">IMPROVE</text></svg>"
    },
    {
        "word": "individual",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample individual.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">INDIVIDUAL</text></svg>"
    },
    {
        "word": "information",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample information.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">INFORMATION</text></svg>"
    },
    {
        "word": "ink",
        "phonetic": "[ɪŋk]",
        "meaning": "n. 墨水",
        "example": "Black ink.",
        "exampleCn": "黑墨水。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 30 H 70 V 20 Q 70 10, 60 10 Q 50 10, 50 20 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >INK</text></svg>"
    },
    {
        "word": "international",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample international.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"14\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">INTERNATIONAL</text></svg>"
    },
    {
        "word": "internet",
        "phonetic": "[ˈɪntənet]",
        "meaning": "n. 互联网",
        "example": "Surf the internet.",
        "exampleCn": "上网。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">INTERNET</text></svg>"
    },
    {
        "word": "investment",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample investment.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">INVESTMENT</text></svg>"
    },
    {
        "word": "iron",
        "phonetic": "[ˈaɪən]",
        "meaning": "n. 铁；熨斗",
        "example": "Iron and steel.",
        "exampleCn": "钢铁。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"10\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >IRON</text></svg>"
    },
    {
        "word": "island",
        "phonetic": "[ˈaɪlənd]",
        "meaning": "n. 岛屿",
        "example": "A small island.",
        "exampleCn": "一个小岛。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 60 5, 80 25\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ISLAND</text></svg>"
    },
    {
        "word": "joy",
        "phonetic": "[dʒɔɪ]",
        "meaning": "n. 欢乐",
        "example": "Full of joy.",
        "exampleCn": "充满欢乐。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 35, 80 20\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >JOY</text></svg>"
    },
    {
        "word": "juice",
        "phonetic": "[dʒuːs]",
        "meaning": "n. 果汁",
        "example": "Orange juice.",
        "exampleCn": "橙汁。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 V 35 H 70 V 15\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M50 25 H 70\" stroke=\"orange\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >JUICE</text></svg>"
    },
    {
        "word": "jungle",
        "phonetic": "[ˈdʒʌŋɡl]",
        "meaning": "n. 丛林",
        "example": "In the jungle.",
        "exampleCn": "在丛林里。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 V 5 M 60 30 V 10 M 90 30 V 5\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >JUNGLE</text></svg>"
    },
    {
        "word": "justice",
        "phonetic": "[ˈdʒʌstɪs]",
        "meaning": "n. 正义",
        "example": "Social justice.",
        "exampleCn": "社会正义",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">JUSTICE</text></svg>"
    },
    {
        "word": "keep",
        "phonetic": "[kiːp]",
        "meaning": "v. 保持；保存",
        "example": "Keep quiet.",
        "exampleCn": "保持安静。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >KEEP</text></svg>"
    },
    {
        "word": "key",
        "phonetic": "[kiː]",
        "meaning": "n. 钥匙",
        "example": "I lost my key.",
        "exampleCn": "我丢了钥匙。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"20\" r=\"5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><line x1=\"50\" y1=\"20\" x2=\"75\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><line x1=\"65\" y1=\"20\" x2=\"65\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >KEY</text></svg>"
    },
    {
        "word": "keyboard",
        "phonetic": "[ˈkiːbɔːd]",
        "meaning": "n. 键盘",
        "example": "New keyboard.",
        "exampleCn": "新键盘。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"15\" width=\"60\" height=\"10\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">KEYBOARD</text></svg>"
    },
    {
        "word": "kind",
        "phonetic": "[kaɪnd]",
        "meaning": "adj. 善良的；n. 种类",
        "example": "Be kind.",
        "exampleCn": "要善良。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"pink\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >KIND</text></svg>"
    },
    {
        "word": "king",
        "phonetic": "[kɪŋ]",
        "meaning": "n. 国王",
        "example": "The king is old.",
        "exampleCn": "国王老了。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 L 45 10 L 60 20 L 75 10 L 80 25 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >KING</text></svg>"
    },
    {
        "word": "knee",
        "phonetic": "[niː]",
        "meaning": "n. 膝盖",
        "example": "Bend your knees.",
        "exampleCn": "弯曲膝盖。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 60 25 L 50 40\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >KNEE</text></svg>"
    },
    {
        "word": "knife",
        "phonetic": "[naɪf]",
        "meaning": "n. 刀",
        "example": "A sharp knife.",
        "exampleCn": "一把快刀。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 70 L 80 20 L 70 25 H 40 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >KNIFE</text></svg>"
    },
    {
        "word": "know",
        "phonetic": "[nəʊ]",
        "meaning": "v. 知道",
        "example": "I know it.",
        "exampleCn": "我知道。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "mental"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 80 10\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >KNOW</text></svg>"
    },
    {
        "word": "knowledge",
        "phonetic": "[ˈnɒlɪdʒ]",
        "meaning": "n. 知识",
        "example": "Gain knowledge.",
        "exampleCn": "获取知识。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">KNOWLEDGE</text></svg>"
    },
    {
        "word": "lake",
        "phonetic": "[leɪk]",
        "meaning": "n. 湖泊",
        "example": "Beside the lake.",
        "exampleCn": "在湖边。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"15\" rx=\"30\" ry=\"8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LAKE</text></svg>"
    },
    {
        "word": "lamp",
        "phonetic": "[læmp]",
        "meaning": "n. 灯",
        "example": "Turn on the lamp.",
        "exampleCn": "打开灯。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 25 L 55 10 H 65 L 70 25 H 50\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><line x1=\"60\" y1=\"25\" x2=\"60\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LAMP</text></svg>"
    },
    {
        "word": "law",
        "phonetic": "[lɔː]",
        "meaning": "n. 法律",
        "example": "Against the law.",
        "exampleCn": "违法。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 H 80 M 60 10 V 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LAW</text></svg>"
    },
    {
        "word": "lazy",
        "phonetic": "[ˈleɪzi]",
        "meaning": "adj. 懒惰的",
        "example": "Lazy cat.",
        "exampleCn": "懒猫。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 H 80\" stroke=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LAZY</text></svg>"
    },
    {
        "word": "lead",
        "phonetic": "[liːd]",
        "meaning": "v. 领导；n. 铅",
        "example": "Lead the team.",
        "exampleCn": "领导团队。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 20 H 110 L 100 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LEAD</text></svg>"
    },
    {
        "word": "leadership",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample leadership.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">LEADERSHIP</text></svg>"
    },
    {
        "word": "leaf",
        "phonetic": "[liːf]",
        "meaning": "n. 叶子",
        "example": "A green leaf.",
        "exampleCn": "一片绿叶。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 30 Q 40 20, 60 5 Q 80 20, 60 30 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LEAF</text></svg>"
    },
    {
        "word": "learn",
        "phonetic": "[lɜːn]",
        "meaning": "v. 学会",
        "example": "Learn to swim.",
        "exampleCn": "学会游泳。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 5, 80 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LEARN</text></svg>"
    },
    {
        "word": "leather",
        "phonetic": "[ˈleðə(r)]",
        "meaning": "n. 皮革",
        "example": "Leather belt.",
        "exampleCn": "皮带。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"5\" fill=\"brown\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">LEATHER</text></svg>"
    },
    {
        "word": "leg",
        "phonetic": "[leg]",
        "meaning": "n. 腿",
        "example": "He broke his leg.",
        "exampleCn": "他摔断了腿。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 10 L 55 35 L 65 35\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LEG</text></svg>"
    },
    {
        "word": "lemon",
        "phonetic": "[ˈlemən]",
        "meaning": "n. 柠檬",
        "example": "Sour lemon.",
        "exampleCn": "酸柠檬。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"20\" rx=\"12\" ry=\"8\" fill=\"yellow\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LEMON</text></svg>"
    },
    {
        "word": "let",
        "phonetic": "[let]",
        "meaning": "v. 让",
        "example": "Let it be.",
        "exampleCn": "顺其自然。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 V 30\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LET</text></svg>"
    },
    {
        "word": "letter",
        "phonetic": "[ˈletə(r)]",
        "meaning": "n. 信；字母",
        "example": "Write a letter.",
        "exampleCn": "写封信。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "social"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M40 15 L 60 30 L 80 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LETTER</text></svg>"
    },
    {
        "word": "level",
        "phonetic": "[ˈlevl]",
        "meaning": "n. 等级",
        "example": "Next level.",
        "exampleCn": "下一关/级。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "fun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 H 50 V 20 H 70 V 10 H 90\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LEVEL</text></svg>"
    },
    {
        "word": "library",
        "phonetic": "[ˈlaɪbrəri]",
        "meaning": "n. 图书馆",
        "example": "Quiet in library.",
        "exampleCn": "图书馆里要安静。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 V 30 M 50 10 V 30 M 60 10 V 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">LIBRARY</text></svg>"
    },
    {
        "word": "life",
        "phonetic": "[laɪf]",
        "meaning": "n. 生命；生活",
        "example": "Enjoy life.",
        "exampleCn": "享受生活。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 30 Q 60 10, 45 10 T 30 25 Q 30 40, 60 55 Q 90 40, 90 25 T 75 10 Q 60 10, 60 30\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LIFE</text></svg>"
    },
    {
        "word": "light",
        "phonetic": "[laɪt]",
        "meaning": "adj. 轻的",
        "example": "Light bag.",
        "exampleCn": "轻便包。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 5, 80 15 Q 60 25, 40 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LIGHT</text></svg>"
    },
    {
        "word": "lightning",
        "phonetic": "[ˈlaɪtnɪŋ]",
        "meaning": "n. 闪电",
        "example": "Bright lightning.",
        "exampleCn": "明亮的闪电。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 50 20 H 70 L 60 35\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">LIGHTNING</text></svg>"
    },
    {
        "word": "link",
        "phonetic": "[lɪŋk]",
        "meaning": "n. 链接；联系",
        "example": "Follow the link.",
        "exampleCn": "点击链接。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 H 80\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><circle cx=\"40\" cy=\"20\" r=\"5\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"80\" cy=\"20\" r=\"5\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LINK</text></svg>"
    },
    {
        "word": "lion",
        "phonetic": "[ˈlaɪən]",
        "meaning": "n. 狮子",
        "example": "The lion is strong.",
        "exampleCn": "狮子很强壮。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"8\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M50 20 L 45 20 M 70 20 L 75 20 M 60 10 L 60 5 M 60 30 L 60 35\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LION</text></svg>"
    },
    {
        "word": "listen",
        "phonetic": "[ˈlɪsn]",
        "meaning": "v. 听",
        "example": "Listen to me.",
        "exampleCn": "听我说。",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 65 10, 65 25\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LISTEN</text></svg>"
    },
    {
        "word": "literature",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample literature.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">LITERATURE</text></svg>"
    },
    {
        "word": "local",
        "phonetic": "[ˈləʊkl]",
        "meaning": "adj. 当地的",
        "example": "Local food.",
        "exampleCn": "当地美食。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LOCAL</text></svg>"
    },
    {
        "word": "lock",
        "phonetic": "[lɒk]",
        "meaning": "n. 锁；v. 锁上",
        "example": "Lock the door.",
        "exampleCn": "锁门。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"15\" width=\"20\" height=\"15\" rx=\"2\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M55 15 V 10 Q 60 5, 65 10 V 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LOCK</text></svg>"
    },
    {
        "word": "logic",
        "phonetic": "[ˈlɒdʒɪk]",
        "meaning": "n. 逻辑",
        "example": "Clear logic.",
        "exampleCn": "逻辑清晰",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LOGIC</text></svg>"
    },
    {
        "word": "login",
        "phonetic": "[ˈlɒɡɪn]",
        "meaning": "v./n. 登录",
        "example": "Login now.",
        "exampleCn": "登录。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 20 L 100 20 L 90 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LOGIN</text></svg>"
    },
    {
        "word": "logout",
        "phonetic": "[ˈlɒɡaʊt]",
        "meaning": "v./n. 登出",
        "example": "Safe logout.",
        "exampleCn": "安全登出。",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 20 20 L 30 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LOGOUT</text></svg>"
    },
    {
        "word": "lonely",
        "phonetic": "[ˈləʊnli]",
        "meaning": "adj. 孤独的",
        "example": "Feel lonely.",
        "exampleCn": "感到孤独。",
        "category": "adjective",
        "difficulty": 4,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"3\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LONELY</text></svg>"
    },
    {
        "word": "lose",
        "phonetic": "[luːz]",
        "meaning": "v. 丢失；输",
        "example": "Lose my wallet.",
        "exampleCn": "丢了钱包。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LOSE</text></svg>"
    },
    {
        "word": "loud",
        "phonetic": "[laʊd]",
        "meaning": "adj. 大声的",
        "example": "Loud voice.",
        "exampleCn": "大声说话。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 10 L 50 20 M 90 10 L 70 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LOUD</text></svg>"
    },
    {
        "word": "love",
        "phonetic": "[lʌv]",
        "meaning": "v. 爱；n. 喜爱",
        "example": "I love my family.",
        "exampleCn": "我爱我的家人。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 30 Q 60 10, 45 10 T 30 25 Q 30 40, 60 55 Q 90 40, 90 25 T 75 10 Q 60 10, 60 30\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LOVE</text></svg>"
    },
    {
        "word": "luck",
        "phonetic": "[lʌk]",
        "meaning": "n. 运气",
        "example": "Good luck!",
        "exampleCn": "好运！",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >LUCK</text></svg>"
    },
    {
        "word": "lucky",
        "phonetic": "[ˈlʌki]",
        "meaning": "adj. 幸运的",
        "example": "Lucky day.",
        "exampleCn": "幸运的一天。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"gold\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >LUCKY</text></svg>"
    },
    {
        "word": "machine",
        "phonetic": "[məˈʃiːn]",
        "meaning": "n. 机器",
        "example": "A big machine.",
        "exampleCn": "一台大机器。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"15\" r=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"75\" cy=\"15\" r=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">MACHINE</text></svg>"
    },
    {
        "word": "man",
        "phonetic": "[mæn]",
        "meaning": "n. 男人",
        "example": "A strong man.",
        "exampleCn": "一个强壮的男人。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "people"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 15 V 35 M 65 15 V 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MAN</text></svg>"
    },
    {
        "word": "management",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample management.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">MANAGEMENT</text></svg>"
    },
    {
        "word": "manager",
        "phonetic": "[ˈmænɪdʒə(r)]",
        "meaning": "n. 经理",
        "example": "Store manager.",
        "exampleCn": "店面经理。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">MANAGER</text></svg>"
    },
    {
        "word": "map",
        "phonetic": "[mæp]",
        "meaning": "n. 地图",
        "example": "Look at the map.",
        "exampleCn": "看地图。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"30\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M50 10 V 40 M 70 10 V 40\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MAP</text></svg>"
    },
    {
        "word": "market",
        "phonetic": "[ˈmɑːkɪt]",
        "meaning": "n. 市场",
        "example": "Food market.",
        "exampleCn": "菜市场。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 25 H 85 V 15 L 60 5 L 35 15 Z\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MARKET</text></svg>"
    },
    {
        "word": "mass",
        "phonetic": "[mæs]",
        "meaning": "n. 质量；大量",
        "example": "Mass production.",
        "exampleCn": "大规模生产。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"12\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MASS</text></svg>"
    },
    {
        "word": "match",
        "phonetic": "[mætʃ]",
        "meaning": "n. 比赛；火柴",
        "example": "Football match.",
        "exampleCn": "足球比赛。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "fun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 L 80 15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MATCH</text></svg>"
    },
    {
        "word": "math",
        "phonetic": "[mæθ]",
        "meaning": "n. 数学",
        "example": "Study math.",
        "exampleCn": "学数学。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MATH</text></svg>"
    },
    {
        "word": "may",
        "phonetic": "[meɪ]",
        "meaning": "v. 可以；可能",
        "example": "May I come in?",
        "exampleCn": "我可以进来吗？",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MAY</text></svg>"
    },
    {
        "word": "meat",
        "phonetic": "[miːt]",
        "meaning": "n. 肉",
        "example": "I like meat.",
        "exampleCn": "我喜欢吃肉。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 40 10, 50 15 Q 60 20, 70 15 Q 80 10, 80 20 Q 80 30, 70 25 Q 60 20, 50 25 Q 40 30, 40 20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MEAT</text></svg>"
    },
    {
        "word": "medicine",
        "phonetic": "[ˈmedsn]",
        "meaning": "n. 药物",
        "example": "Take medicine.",
        "exampleCn": "吃药。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 H 70 V 25 Q 60 30, 50 25 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">MEDICINE</text></svg>"
    },
    {
        "word": "meeting",
        "phonetic": "[ˈmiːtɪŋ]",
        "meaning": "n. 会议",
        "example": "Morning meeting.",
        "exampleCn": "早会。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "office"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><circle cx=\"75\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">MEETING</text></svg>"
    },
    {
        "word": "melon",
        "phonetic": "[ˈmelən]",
        "meaning": "n. 甜瓜；西瓜",
        "example": "Sweet melon.",
        "exampleCn": "甜瓜。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MELON</text></svg>"
    },
    {
        "word": "memory",
        "phonetic": "[ˈmeməri]",
        "meaning": "n. 记忆",
        "example": "Good memory.",
        "exampleCn": "好记性。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 H 80\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MEMORY</text></svg>"
    },
    {
        "word": "metal",
        "phonetic": "[ˈmetl]",
        "meaning": "n. 金属",
        "example": "Strong metal.",
        "exampleCn": "坚固的金属。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"15\" width=\"60\" height=\"5\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >METAL</text></svg>"
    },
    {
        "word": "method",
        "phonetic": "[ˈmeθəd]",
        "meaning": "n. 方法",
        "example": "A new method.",
        "exampleCn": "一种新方法",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >METHOD</text></svg>"
    },
    {
        "word": "middle",
        "phonetic": "[ˈmɪdl]",
        "meaning": "n. 中间",
        "example": "In the middle.",
        "exampleCn": "在中间。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MIDDLE</text></svg>"
    },
    {
        "word": "milk",
        "phonetic": "[mɪlk]",
        "meaning": "n. 牛奶",
        "example": "Drink some milk.",
        "exampleCn": "喝点牛奶。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 L 50 35 H 70 L 70 15 L 60 10 L 50 15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MILK</text></svg>"
    },
    {
        "word": "mirror",
        "phonetic": "[ˈmɪrə(r)]",
        "meaning": "n. 镜子",
        "example": "Look in mirror.",
        "exampleCn": "照镜子。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "bathroom"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MIRROR</text></svg>"
    },
    {
        "word": "money",
        "phonetic": "[ˈmʌni]",
        "meaning": "n. 钱",
        "example": "I have no money.",
        "exampleCn": "我没钱。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "life",
            "finance"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M60 14 V 26 M 56 18 H 64 M 56 22 H 64\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MONEY</text></svg>"
    },
    {
        "word": "monkey",
        "phonetic": "[ˈmʌŋki]",
        "meaning": "n. 猴子",
        "example": "Monkey climbs.",
        "exampleCn": "猴子爬树。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M68 15 Q 80 15, 80 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MONKEY</text></svg>"
    },
    {
        "word": "moon",
        "phonetic": "[muːn]",
        "meaning": "n. 月亮",
        "example": "Look at the moon.",
        "exampleCn": "看月亮。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 10 Q 50 20, 60 30 Q 55 20, 60 10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MOON</text></svg>"
    },
    {
        "word": "mother",
        "phonetic": "[ˈmʌðə(r)]",
        "meaning": "n. 母亲",
        "example": "Mother loves me.",
        "exampleCn": "妈妈爱我。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 60 5, 70 15 V 35 H 50 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MOTHER</text></svg>"
    },
    {
        "word": "motor",
        "phonetic": "[ˈməʊtə(r)]",
        "meaning": "n. 电动机",
        "example": "Electric motor.",
        "exampleCn": "电动机。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MOTOR</text></svg>"
    },
    {
        "word": "mountain",
        "phonetic": "[ˈmaʊntən]",
        "meaning": "n. 高山",
        "example": "Climb the mountain.",
        "exampleCn": "爬山。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 30 L 45 5 L 70 30 M 60 30 L 85 10 L 110 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">MOUNTAIN</text></svg>"
    },
    {
        "word": "mouse",
        "phonetic": "[maʊs]",
        "meaning": "n. 老鼠",
        "example": "A small mouse.",
        "exampleCn": "一只小老鼠。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"6\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M66 20 Q 80 20, 80 10\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MOUSE</text></svg>"
    },
    {
        "word": "mouth",
        "phonetic": "[maʊθ]",
        "meaning": "n. 嘴",
        "example": "Open your mouth.",
        "exampleCn": "张开你的嘴。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 25 Q 60 35, 75 25 Q 60 30, 45 25 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MOUTH</text></svg>"
    },
    {
        "word": "mud",
        "phonetic": "[mʌd]",
        "meaning": "n. 泥土",
        "example": "Dirty mud.",
        "exampleCn": "烂泥。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 Q 60 20, 90 30\" stroke=\"brown\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MUD</text></svg>"
    },
    {
        "word": "museum",
        "phonetic": "[mjuˈziːəm]",
        "meaning": "n. 博物馆",
        "example": "Visit the museum.",
        "exampleCn": "参观博物馆。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 H 90 V 10 L 60 0 L 30 10 Z\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MUSEUM</text></svg>"
    },
    {
        "word": "music",
        "phonetic": "[ˈmjuːzɪk]",
        "meaning": "n. 音乐",
        "example": "Nice music.",
        "exampleCn": "好听的音乐。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M70 10 V 25 Q 70 30, 60 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >MUSIC</text></svg>"
    },
    {
        "word": "must",
        "phonetic": "[mʌst]",
        "meaning": "v. 必须",
        "example": "Must do it.",
        "exampleCn": "必须做。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"5\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >MUST</text></svg>"
    },
    {
        "word": "nail",
        "phonetic": "[neɪl]",
        "meaning": "n. 钉子；指甲",
        "example": "Hit the nail.",
        "exampleCn": "钉钉子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 35 M 55 5 H 65\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >NAIL</text></svg>"
    },
    {
        "word": "name",
        "phonetic": "[neɪm]",
        "meaning": "n. 名字",
        "example": "My name is...",
        "exampleCn": "我的名字是...",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >NAME</text></svg>"
    },
    {
        "word": "narrow",
        "phonetic": "[ˈnærəʊ]",
        "meaning": "adj. 窄的",
        "example": "A narrow path.",
        "exampleCn": "一条窄路。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 50 30 M 70 10 L 70 30\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NARROW</text></svg>"
    },
    {
        "word": "nature",
        "phonetic": "[ˈneɪtʃə(r)]",
        "meaning": "n. 自然",
        "example": "Protect nature.",
        "exampleCn": "保护自然",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NATURE</text></svg>"
    },
    {
        "word": "network",
        "phonetic": "[ˈnetwɜːk]",
        "meaning": "n. 网络",
        "example": "Social network.",
        "exampleCn": "社交网络。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 10 L 90 25 M 30 25 L 90 10\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">NETWORK</text></svg>"
    },
    {
        "word": "never",
        "phonetic": "[ˈnevə(r)]",
        "meaning": "adv. 绝不",
        "example": "Never give up.",
        "exampleCn": "永不放弃。",
        "category": "adverb",
        "difficulty": 2,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 30 M 80 10 L 40 30\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NEVER</text></svg>"
    },
    {
        "word": "nineteen",
        "phonetic": "[ˌnaɪnˈtiːn]",
        "meaning": "num. 十九",
        "example": "Nineteen boys.",
        "exampleCn": "十九个男孩。",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">NINETEEN</text></svg>"
    },
    {
        "word": "noisy",
        "phonetic": "[ˈnɔɪzi]",
        "meaning": "adj. 嘈杂的",
        "example": "Noisy city.",
        "exampleCn": "吵闹的城市。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 10 L 50 20 M 90 10 L 70 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NOISY</text></svg>"
    },
    {
        "word": "noodle",
        "phonetic": "[ˈnuːdl]",
        "meaning": "n. 面条",
        "example": "Eat noodles.",
        "exampleCn": "吃面条。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 50 25, 60 10 T 80 10\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NOODLE</text></svg>"
    },
    {
        "word": "normal",
        "phonetic": "[ˈnɜːml]",
        "meaning": "adj. 正常的",
        "example": "Back to normal.",
        "exampleCn": "恢复正常。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"30\" y1=\"20\" x2=\"90\" y2=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NORMAL</text></svg>"
    },
    {
        "word": "north",
        "phonetic": "[nɔːθ]",
        "meaning": "n./adj. 北方",
        "example": "Face north.",
        "exampleCn": "面向北。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "direction"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 35 V 5 L 50 15 M 60 5 L 70 15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NORTH</text></svg>"
    },
    {
        "word": "nose",
        "phonetic": "[nəʊz]",
        "meaning": "n. 鼻子",
        "example": "Touch your nose.",
        "exampleCn": "摸摸你的鼻子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 15 L 50 30 L 65 30\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >NOSE</text></svg>"
    },
    {
        "word": "notebook",
        "phonetic": "[ˈnəʊtbʊk]",
        "meaning": "n. 笔记本",
        "example": "Write in notebook.",
        "exampleCn": "记在笔记本上。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">NOTEBOOK</text></svg>"
    },
    {
        "word": "nurse",
        "phonetic": "[nɜːs]",
        "meaning": "n. 护士",
        "example": "She is a nurse.",
        "exampleCn": "她是一名护士。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"5\" width=\"20\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >NURSE</text></svg>"
    },
    {
        "word": "obligation",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample obligation.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">OBLIGATION</text></svg>"
    },
    {
        "word": "ocean",
        "phonetic": "[ˈəʊʃn]",
        "meaning": "n. 海洋",
        "example": "Deep ocean.",
        "exampleCn": "深海。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10 Q 60 30, 100 10\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >OCEAN</text></svg>"
    },
    {
        "word": "offline",
        "phonetic": "[ˌɒfˈlaɪn]",
        "meaning": "adj./adv. 离线",
        "example": "Go offline.",
        "exampleCn": "离线。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"grey\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">OFFLINE</text></svg>"
    },
    {
        "word": "often",
        "phonetic": "[ˈɒfn]",
        "meaning": "adv. 经常",
        "example": "I often run.",
        "exampleCn": "我经常跑步。",
        "category": "adverb",
        "difficulty": 2,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >OFTEN</text></svg>"
    },
    {
        "word": "oil",
        "phonetic": "[ɔɪl]",
        "meaning": "n. 油；石油",
        "example": "Cooking oil.",
        "exampleCn": "食用油。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >OIL</text></svg>"
    },
    {
        "word": "ok",
        "phonetic": "[ˌəʊˈkeɪ]",
        "meaning": "adj. 可以的",
        "example": "It is ok.",
        "exampleCn": "没问题。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 50 30 L 80 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >OK</text></svg>"
    },
    {
        "word": "onion",
        "phonetic": "[ˈʌnjən]",
        "meaning": "n. 洋葱",
        "example": "Chop onion.",
        "exampleCn": "剁洋葱。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"10\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ONION</text></svg>"
    },
    {
        "word": "online",
        "phonetic": "[ˌɒnˈlaɪn]",
        "meaning": "adj./adv. 在线",
        "example": "Work online.",
        "exampleCn": "在线工作。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"green\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ONLINE</text></svg>"
    },
    {
        "word": "opportunity",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample opportunity.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">OPPORTUNITY</text></svg>"
    },
    {
        "word": "orange",
        "phonetic": "[ˈɒrɪndʒ]",
        "meaning": "adj. 橙色的",
        "example": "Orange fruit.",
        "exampleCn": "橙子。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >ORANGE</text></svg>"
    },
    {
        "word": "oven",
        "phonetic": "[ˈʌvn]",
        "meaning": "n. 烤箱",
        "example": "Hot oven.",
        "exampleCn": "热烤箱。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"50\" cy=\"25\" r=\"2\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >OVEN</text></svg>"
    },
    {
        "word": "pain",
        "phonetic": "[peɪn]",
        "meaning": "n. 疼痛",
        "example": "Feel pain.",
        "exampleCn": "感到疼痛。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 20\" stroke=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PAIN</text></svg>"
    },
    {
        "word": "paint",
        "phonetic": "[peɪnt]",
        "meaning": "v. 绘画；油漆",
        "example": "Paint a picture.",
        "exampleCn": "画张画。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "art"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 50 5, 60 30\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PAINT</text></svg>"
    },
    {
        "word": "palace",
        "phonetic": "[ˈpæləs]",
        "meaning": "n. 宫殿",
        "example": "A royal palace.",
        "exampleCn": "一座皇家宫殿。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 V 10 L 50 15 L 60 5 L 70 15 L 80 10 V 30 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PALACE</text></svg>"
    },
    {
        "word": "pan",
        "phonetic": "[pæn]",
        "meaning": "n. 平底锅",
        "example": "Frying pan.",
        "exampleCn": "平底锅。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 25 H 75 M 75 25 L 95 25\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PAN</text></svg>"
    },
    {
        "word": "pants",
        "phonetic": "[pænts]",
        "meaning": "n. 裤子",
        "example": "Short pants.",
        "exampleCn": "短裤。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 10 H 75 V 35 H 65 V 20 L 60 25 L 55 20 V 35 H 45 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PANTS</text></svg>"
    },
    {
        "word": "paper",
        "phonetic": "[ˈpeɪpə(r)]",
        "meaning": "n. 纸",
        "example": "A piece of paper.",
        "exampleCn": "一张纸。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"35\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"50\" y1=\"15\" x2=\"70\" y2=\"15\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PAPER</text></svg>"
    },
    {
        "word": "particular",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample particular.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PARTICULAR</text></svg>"
    },
    {
        "word": "password",
        "phonetic": "[ˈpɑːswɜːd]",
        "meaning": "n. 密码",
        "example": "Enter password.",
        "exampleCn": "输入密码。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PASSWORD</text></svg>"
    },
    {
        "word": "patience",
        "phonetic": "[ˈpeɪʃns]",
        "meaning": "n. 耐心",
        "example": "Have patience.",
        "exampleCn": "有耐心",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PATIENCE</text></svg>"
    },
    {
        "word": "pay",
        "phonetic": "[peɪ]",
        "meaning": "v. 支付",
        "example": "Pay the bill.",
        "exampleCn": "付账。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PAY</text></svg>"
    },
    {
        "word": "peace",
        "phonetic": "[piːs]",
        "meaning": "n. 和平",
        "example": "World peace.",
        "exampleCn": "世界和平",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PEACE</text></svg>"
    },
    {
        "word": "peach",
        "phonetic": "[piːtʃ]",
        "meaning": "n. 桃子",
        "example": "Juicy peach.",
        "exampleCn": "多汁的桃子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 30 Q 40 25, 60 10 Q 80 25, 60 30\" fill=\"pink\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PEACH</text></svg>"
    },
    {
        "word": "pear",
        "phonetic": "[peə(r)]",
        "meaning": "n. 梨",
        "example": "A sweet pear.",
        "exampleCn": "一个甜梨。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 10 Q 50 15, 55 25 Q 60 35, 65 25 Q 70 15, 60 10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PEAR</text></svg>"
    },
    {
        "word": "pencil",
        "phonetic": "[ˈpensl]",
        "meaning": "n. 铅笔",
        "example": "Sharpen the pencil.",
        "exampleCn": "削铅笔。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 H 80 L 90 20 L 80 25 H 30 Z\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PENCIL</text></svg>"
    },
    {
        "word": "perfect",
        "phonetic": "[ˈpɜːfɪkt]",
        "meaning": "adj. 完美的",
        "example": "Perfect match.",
        "exampleCn": "完美匹配。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 85 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PERFECT</text></svg>"
    },
    {
        "word": "performance",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample performance.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PERFORMANCE</text></svg>"
    },
    {
        "word": "period",
        "phonetic": "[ˈpɪəriəd]",
        "meaning": "n. 时期",
        "example": "A long period.",
        "exampleCn": "一段长时期。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 H 90\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PERIOD</text></svg>"
    },
    {
        "word": "phone",
        "phonetic": "[fəʊn]",
        "meaning": "n. 电话",
        "example": "My phone is ringing.",
        "exampleCn": "我的电话响了。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tech",
            "life"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"26\" r=\"2\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PHONE</text></svg>"
    },
    {
        "word": "photo",
        "phonetic": "[ˈfəʊtəʊ]",
        "meaning": "n. 照片",
        "example": "Take a photo.",
        "exampleCn": "拍张照。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"30\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"25\" r=\"5\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PHOTO</text></svg>"
    },
    {
        "word": "piano",
        "phonetic": "[piˈænəʊ]",
        "meaning": "n. 钢琴",
        "example": "I learn piano.",
        "exampleCn": "我学钢琴。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "music"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"10\" width=\"60\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PIANO</text></svg>"
    },
    {
        "word": "pig",
        "phonetic": "[pɪɡ]",
        "meaning": "n. 猪",
        "example": "Pigs are cute.",
        "exampleCn": "猪很可爱。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"8\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"58\" cy=\"20\" r=\"1\" opacity=\"0.4\"/><circle cx=\"62\" cy=\"20\" r=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PIG</text></svg>"
    },
    {
        "word": "pill",
        "phonetic": "[pɪl]",
        "meaning": "n. 药丸",
        "example": "A small pill.",
        "exampleCn": "一个小药丸。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"15\" rx=\"10\" ry=\"5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PILL</text></svg>"
    },
    {
        "word": "pillow",
        "phonetic": "[ˈpɪləʊ]",
        "meaning": "n. 枕头",
        "example": "Soft pillow.",
        "exampleCn": "柔软的枕头。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"15\" rx=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PILLOW</text></svg>"
    },
    {
        "word": "pilot",
        "phonetic": "[ˈpaɪlət]",
        "meaning": "n. 飞行员",
        "example": "Pilot flies plane.",
        "exampleCn": "飞行员开飞机。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 10 L 60 25 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PILOT</text></svg>"
    },
    {
        "word": "pink",
        "phonetic": "[pɪŋk]",
        "meaning": "adj. 粉色的",
        "example": "Pink flower.",
        "exampleCn": "粉色的花。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"55\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"65\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PINK</text></svg>"
    },
    {
        "word": "pipe",
        "phonetic": "[paɪp]",
        "meaning": "n. 管道",
        "example": "Water pipe.",
        "exampleCn": "水管。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"15\" width=\"60\" height=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >PIPE</text></svg>"
    },
    {
        "word": "pizza",
        "phonetic": "[ˈpiːtsə]",
        "meaning": "n. 披萨",
        "example": "Eat pizza.",
        "exampleCn": "吃披萨。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 10 L 60 30 Z\" fill=\"orange\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PIZZA</text></svg>"
    },
    {
        "word": "planet",
        "phonetic": "[ˈplænɪt]",
        "meaning": "n. 行星",
        "example": "Red planet.",
        "exampleCn": "红色行星。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><ellipse cx=\"60\" cy=\"20\" rx=\"15\" ry=\"3\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PLANET</text></svg>"
    },
    {
        "word": "plastic",
        "phonetic": "[ˈplæstɪk]",
        "meaning": "n. 塑料",
        "example": "Plastic cup.",
        "exampleCn": "塑料杯。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 H 80 V 30 H 40 Z\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PLASTIC</text></svg>"
    },
    {
        "word": "plate",
        "phonetic": "[pleɪt]",
        "meaning": "n. 盘子",
        "example": "Clean the plate.",
        "exampleCn": "洗盘子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"20\" rx=\"30\" ry=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PLATE</text></svg>"
    },
    {
        "word": "police",
        "phonetic": "[pəˈliːs]",
        "meaning": "n. 警察",
        "example": "Call the police.",
        "exampleCn": "报警。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"5\" width=\"30\" height=\"10\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >POLICE</text></svg>"
    },
    {
        "word": "politics",
        "phonetic": "[ˈpɒlətɪks]",
        "meaning": "n. 政治",
        "example": "Discuss politics.",
        "exampleCn": "讨论政治",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">POLITICS</text></svg>"
    },
    {
        "word": "pond",
        "phonetic": "[pɒnd]",
        "meaning": "n. 池塘",
        "example": "Small pond.",
        "exampleCn": "小池。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >POND</text></svg>"
    },
    {
        "word": "poor",
        "phonetic": "[pɔː(r)]",
        "meaning": "adj. 贫穷的",
        "example": "Poor people.",
        "exampleCn": "穷人。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 H 70\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >POOR</text></svg>"
    },
    {
        "word": "popular",
        "phonetic": "[ˈpɒpjələ(r)]",
        "meaning": "adj. 受欢迎的",
        "example": "Popular song.",
        "exampleCn": "流行歌曲。",
        "category": "adjective",
        "difficulty": 4,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" fill=\"red\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">POPULAR</text></svg>"
    },
    {
        "word": "population",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample population.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">POPULATION</text></svg>"
    },
    {
        "word": "post",
        "phonetic": "[pəʊst]",
        "meaning": "n. 邮政；帖子",
        "example": "Post office.",
        "exampleCn": "邮局。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "social"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >POST</text></svg>"
    },
    {
        "word": "pot",
        "phonetic": "[pɒt]",
        "meaning": "n. 锅；壶",
        "example": "A tea pot.",
        "exampleCn": "一个茶壶。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"15\" width=\"30\" height=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >POT</text></svg>"
    },
    {
        "word": "potato",
        "phonetic": "[pəˈteɪtəʊ]",
        "meaning": "n. 土豆",
        "example": "Baked potato.",
        "exampleCn": "烤土豆。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"20\" rx=\"12\" ry=\"8\" fill=\"brown\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >POTATO</text></svg>"
    },
    {
        "word": "power",
        "phonetic": "[ˈpaʊə(r)]",
        "meaning": "n. 权力；电力",
        "example": "Switch on power.",
        "exampleCn": "开启电源",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >POWER</text></svg>"
    },
    {
        "word": "present",
        "phonetic": "[ˈpreznt]",
        "meaning": "n. 现在；礼物",
        "example": "At present.",
        "exampleCn": "目前",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PRESENT</text></svg>"
    },
    {
        "word": "pride",
        "phonetic": "[praɪd]",
        "meaning": "n. 自豪",
        "example": "Take pride in.",
        "exampleCn": "引以为豪。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PRIDE</text></svg>"
    },
    {
        "word": "prison",
        "phonetic": "[ˈprɪzn]",
        "meaning": "n. 监狱",
        "example": "In prison.",
        "exampleCn": "在监狱。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 V 30 M 50 10 V 30 M 60 10 V 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PRISON</text></svg>"
    },
    {
        "word": "private",
        "phonetic": "[ˈpraɪvət]",
        "meaning": "adj. 私人的",
        "example": "Private car.",
        "exampleCn": "私家车。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"15\" rx=\"2\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PRIVATE</text></svg>"
    },
    {
        "word": "prize",
        "phonetic": "[praɪz]",
        "meaning": "n. 奖品",
        "example": "First prize.",
        "exampleCn": "一等奖。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "fun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 L 60 5 L 70 10 L 60 25 Z\" fill=\"gold\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PRIZE</text></svg>"
    },
    {
        "word": "production",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample production.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">PRODUCTION</text></svg>"
    },
    {
        "word": "proud",
        "phonetic": "[praʊd]",
        "meaning": "adj. 自豪的",
        "example": "Proud of you.",
        "exampleCn": "为你自豪。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PROUD</text></svg>"
    },
    {
        "word": "public",
        "phonetic": "[ˈpʌblɪk]",
        "meaning": "adj./n. 公共的",
        "example": "Public park.",
        "exampleCn": "公园。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><circle cx=\"60\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><circle cx=\"75\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >PUBLIC</text></svg>"
    },
    {
        "word": "queen",
        "phonetic": "[kwiːn]",
        "meaning": "n. 女王",
        "example": "The Queen lives here.",
        "exampleCn": "女王住在这里。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >QUEEN</text></svg>"
    },
    {
        "word": "quick",
        "phonetic": "[kwɪk]",
        "meaning": "adj. 快速的",
        "example": "Quick response.",
        "exampleCn": "快速反应。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20 L 40 20 M 15 25 L 35 25\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><line x1=\"10\" y1=\"15\" x2=\"30\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.2\"/><line x1=\"5\" y1=\"25\" x2=\"25\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >QUICK</text></svg>"
    },
    {
        "word": "quickly",
        "phonetic": "[ˈkwɪkli]",
        "meaning": "adv. 很快地",
        "example": "Run quickly.",
        "exampleCn": "跑快点。",
        "category": "adverb",
        "difficulty": 3,
        "tags": [
            "speed"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20 L 40 20 M 15 25 L 35 25\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">QUICKLY</text></svg>"
    },
    {
        "word": "quiet",
        "phonetic": "[ˈkwaɪət]",
        "meaning": "adj. 安静的",
        "example": "Quiet room.",
        "exampleCn": "安静的房间。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 10 V 25\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >QUIET</text></svg>"
    },
    {
        "word": "rabbit",
        "phonetic": "[ˈræbɪt]",
        "meaning": "n. 兔子",
        "example": "Cute rabbit.",
        "exampleCn": "可爱的兔子。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 15 V 5 M 65 15 V 5\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >RABBIT</text></svg>"
    },
    {
        "word": "radio",
        "phonetic": "[ˈreɪdiəʊ]",
        "meaning": "n. 收音机",
        "example": "Listen to radio.",
        "exampleCn": "听收音机。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"15\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"45\" y1=\"15\" x2=\"45\" y2=\"5\" stroke=\"currentColor\"/><path d=\"M90 10 Q 100 20, 90 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><path d=\"M100 5 Q 115 20, 100 35\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >RADIO</text></svg>"
    },
    {
        "word": "rain",
        "phonetic": "[reɪn]",
        "meaning": "n. 雨",
        "example": "It is raining.",
        "exampleCn": "正在下雨。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature",
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 Q 60 5, 70 10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/><line x1=\"50\" y1=\"15\" x2=\"48\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><line x1=\"60\" y1=\"15\" x2=\"58\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><line x1=\"70\" y1=\"15\" x2=\"68\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >RAIN</text></svg>"
    },
    {
        "word": "rainbow",
        "phonetic": "[ˈreɪnbəʊ]",
        "meaning": "n. 彩虹",
        "example": "See a rainbow.",
        "exampleCn": "看见彩虹。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 Q 60 0, 90 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">RAINBOW</text></svg>"
    },
    {
        "word": "rainy",
        "phonetic": "[ˈreɪni]",
        "meaning": "adj. 下雨的",
        "example": "Rainy season.",
        "exampleCn": "雨季。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"50\" y1=\"5\" x2=\"45\" y2=\"15\" stroke=\"blue\" opacity=\"0.3\"/><line x1=\"70\" y1=\"5\" x2=\"65\" y2=\"15\" stroke=\"blue\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >RAINY</text></svg>"
    },
    {
        "word": "ready",
        "phonetic": "[ˈreɪdi]",
        "meaning": "adj. 准备好的",
        "example": "Dinner is ready.",
        "exampleCn": "晚餐准备好了。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 H 90\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >READY</text></svg>"
    },
    {
        "word": "real",
        "phonetic": "[rɪəl]",
        "meaning": "adj. 真实的",
        "example": "Real life.",
        "exampleCn": "现实生活。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 85 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >REAL</text></svg>"
    },
    {
        "word": "realize",
        "phonetic": "[ˈriːəlaɪz]",
        "meaning": "v. 意识到；实现",
        "example": "Realize a dream.",
        "exampleCn": "实现梦想",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">REALIZE</text></svg>"
    },
    {
        "word": "reason",
        "phonetic": "[ˈriːzn]",
        "meaning": "n. 原因",
        "example": "Give a reason.",
        "exampleCn": "给个理由",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >REASON</text></svg>"
    },
    {
        "word": "reflection",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample reflection.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">REFLECTION</text></svg>"
    },
    {
        "word": "relationship",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample relationship.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">RELATIONSHIP</text></svg>"
    },
    {
        "word": "report",
        "phonetic": "[rɪˈpɔːt]",
        "meaning": "n./v. 报告",
        "example": "Daily report.",
        "exampleCn": "日报。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "office"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >REPORT</text></svg>"
    },
    {
        "word": "reputation",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample reputation.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">REPUTATION</text></svg>"
    },
    {
        "word": "resolution",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample resolution.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">RESOLUTION</text></svg>"
    },
    {
        "word": "result",
        "phonetic": "[rɪˈzʌlt]",
        "meaning": "n. 结果",
        "example": "Test result.",
        "exampleCn": "考试结果",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >RESULT</text></svg>"
    },
    {
        "word": "rice",
        "phonetic": "[raɪs]",
        "meaning": "n. 米饭",
        "example": "A bowl of rice.",
        "exampleCn": "一碗米饭。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 60 40, 80 25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"50\" cy=\"20\" r=\"1\" opacity=\"0.4\"/><circle cx=\"55\" cy=\"18\" r=\"1\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"18\" r=\"1\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"18\" r=\"1\" opacity=\"0.4\"/><circle cx=\"70\" cy=\"20\" r=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >RICE</text></svg>"
    },
    {
        "word": "rich",
        "phonetic": "[rɪtʃ]",
        "meaning": "adj. 富有的",
        "example": "Rich culture.",
        "exampleCn": "丰富的文化。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"10\" fill=\"gold\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >RICH</text></svg>"
    },
    {
        "word": "river",
        "phonetic": "[ˈrɪvə(r)]",
        "meaning": "n. 河流",
        "example": "Across the river.",
        "exampleCn": "过河。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 Q 40 5, 60 15 T 100 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >RIVER</text></svg>"
    },
    {
        "word": "rock",
        "phonetic": "[rɒk]",
        "meaning": "n. 岩石",
        "example": "Hard rock.",
        "exampleCn": "坚硬的岩石。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"10\" width=\"30\" height=\"20\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ROCK</text></svg>"
    },
    {
        "word": "roof",
        "phonetic": "[ruːf]",
        "meaning": "n. 屋顶",
        "example": "On the roof.",
        "exampleCn": "在屋顶上。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 L 60 10 L 90 30\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ROOF</text></svg>"
    },
    {
        "word": "room",
        "phonetic": "[ruːm]",
        "meaning": "n. 房间；空间",
        "example": "In the room.",
        "exampleCn": "在房间里。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"10\" width=\"50\" height=\"25\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ROOM</text></svg>"
    },
    {
        "word": "root",
        "phonetic": "[ruːt]",
        "meaning": "n. 根",
        "example": "Deep roots.",
        "exampleCn": "深根。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 30 V 10 M 60 20 L 50 10 M 60 20 L 70 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >ROOT</text></svg>"
    },
    {
        "word": "rubber",
        "phonetic": "[ˈrʌbə(r)]",
        "meaning": "n. 橡胶；橡皮",
        "example": "Rubber ball.",
        "exampleCn": "橡胶球。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >RUBBER</text></svg>"
    },
    {
        "word": "rug",
        "phonetic": "[rʌɡ]",
        "meaning": "n. 小地毯",
        "example": "A warm rug.",
        "exampleCn": "一条暖和的地毯。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"25\" width=\"80\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >RUG</text></svg>"
    },
    {
        "word": "rule",
        "phonetic": "[ruːl]",
        "meaning": "n. 规则",
        "example": "Follow the rule.",
        "exampleCn": "遵守规则。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >RULE</text></svg>"
    },
    {
        "word": "ruler",
        "phonetic": "[ˈruːlə(r)]",
        "meaning": "n. 尺子",
        "example": "Use a ruler.",
        "exampleCn": "用尺子。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"15\" width=\"60\" height=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"40\" y1=\"15\" x2=\"40\" y2=\"20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >RULER</text></svg>"
    },
    {
        "word": "sad",
        "phonetic": "[sæd]",
        "meaning": "adj. 悲伤的",
        "example": "Don't be sad.",
        "exampleCn": "别难过。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 30 Q 60 15, 75 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SAD</text></svg>"
    },
    {
        "word": "safe",
        "phonetic": "[seɪf]",
        "meaning": "adj. 安全的",
        "example": "Safe trip.",
        "exampleCn": "旅途平安。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 H 80 V 30 Q 60 40, 40 30 Z\" fill=\"green\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SAFE</text></svg>"
    },
    {
        "word": "safety",
        "phonetic": "[ˈseɪfti]",
        "meaning": "n. 安全",
        "example": "Safety first.",
        "exampleCn": "安全第一。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 H 80 V 30 Q 60 40, 40 30 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SAFETY</text></svg>"
    },
    {
        "word": "salad",
        "phonetic": "[ˈsæləd]",
        "meaning": "n. 沙拉",
        "example": "Fresh salad.",
        "exampleCn": "新鲜沙拉。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"15\" r=\"5\" fill=\"green\" opacity=\"0.2\"/><circle cx=\"70\" cy=\"15\" r=\"5\" fill=\"green\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SALAD</text></svg>"
    },
    {
        "word": "salary",
        "phonetic": "[ˈsæləri]",
        "meaning": "n. 工资",
        "example": "Annual salary.",
        "exampleCn": "年薪。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "finance"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"10\" fill=\"gold\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SALARY</text></svg>"
    },
    {
        "word": "salt",
        "phonetic": "[sɔːlt]",
        "meaning": "n. 盐",
        "example": "Add some salt.",
        "exampleCn": "加点盐。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"55\" cy=\"15\" r=\"1\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"15\" r=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SALT</text></svg>"
    },
    {
        "word": "salty",
        "phonetic": "[ˈsɔːlti]",
        "meaning": "adj. 咸的",
        "example": "Salty soup.",
        "exampleCn": "咸汤。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"55\" cy=\"10\" r=\"1\" fill=\"currentColor\" opacity=\"0.4\"/><circle cx=\"65\" cy=\"15\" r=\"1\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SALTY</text></svg>"
    },
    {
        "word": "sand",
        "phonetic": "[sænd]",
        "meaning": "n. 沙子",
        "example": "Sea sand.",
        "exampleCn": "海沙。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"60\" cy=\"15\" r=\"1\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SAND</text></svg>"
    },
    {
        "word": "scale",
        "phonetic": "[skeɪl]",
        "meaning": "n. 规模；天平；刻度",
        "example": "Large scale.",
        "exampleCn": "大规模。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80 M 60 15 V 5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SCALE</text></svg>"
    },
    {
        "word": "science",
        "phonetic": "[ˈsaɪəns]",
        "meaning": "n. 科学",
        "example": "Natural science.",
        "exampleCn": "自然科学",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SCIENCE</text></svg>"
    },
    {
        "word": "score",
        "phonetic": "[skɔː(r)]",
        "meaning": "n. 分数",
        "example": "High score.",
        "exampleCn": "高分。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "fun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SCORE</text></svg>"
    },
    {
        "word": "screen",
        "phonetic": "[skriːn]",
        "meaning": "n. 屏幕",
        "example": "Touch screen.",
        "exampleCn": "触摸屏。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"5\" width=\"60\" height=\"30\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SCREEN</text></svg>"
    },
    {
        "word": "screw",
        "phonetic": "[skruː]",
        "meaning": "n. 螺丝",
        "example": "A tiny screw.",
        "exampleCn": "一个微型螺丝。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 30 M 55 10 H 65 M 55 15 H 65\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SCREW</text></svg>"
    },
    {
        "word": "sea",
        "phonetic": "[siː]",
        "meaning": "n. 大海",
        "example": "Blue sea.",
        "exampleCn": "蓝色的大海。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 Q 30 25, 40 15 T 60 15 T 80 15 T 100 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SEA</text></svg>"
    },
    {
        "word": "secretary",
        "phonetic": "[ˈsekrətri]",
        "meaning": "n. 秘书",
        "example": "School secretary.",
        "exampleCn": "学校秘书。",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"15\" width=\"40\" height=\"20\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SECRETARY</text></svg>"
    },
    {
        "word": "see",
        "phonetic": "[siː]",
        "meaning": "v. 看见",
        "example": "I see you.",
        "exampleCn": "我看见你了。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "sense"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"15\" r=\"3\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SEE</text></svg>"
    },
    {
        "word": "seed",
        "phonetic": "[siːd]",
        "meaning": "n. 种子",
        "example": "Plant a seed.",
        "exampleCn": "种下一颗种子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"3\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SEED</text></svg>"
    },
    {
        "word": "sell",
        "phonetic": "[sel]",
        "meaning": "v. 卖",
        "example": "Sell the car.",
        "exampleCn": "卖车。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M80 15 H 40 L 45 30 H 75 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SELL</text></svg>"
    },
    {
        "word": "server",
        "phonetic": "[ˈsɜːvə(r)]",
        "meaning": "n. 服务器",
        "example": "Cloud server.",
        "exampleCn": "云服务器。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"5\" width=\"30\" height=\"30\" stroke=\"currentColor\" opacity=\"0.4\"/><circle cx=\"50\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SERVER</text></svg>"
    },
    {
        "word": "seventeen",
        "phonetic": "[ˌsevnˈtiːn]",
        "meaning": "num. 十七",
        "example": "Seventeen coins.",
        "exampleCn": "十七个硬币。",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SEVENTEEN</text></svg>"
    },
    {
        "word": "shadow",
        "phonetic": "[ˈʃædəʊ]",
        "meaning": "n. 影子",
        "example": "My shadow.",
        "exampleCn": "我的影子。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"80\" cy=\"35\" rx=\"20\" ry=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHADOW</text></svg>"
    },
    {
        "word": "shallow",
        "phonetic": "[ˈʃæləʊ]",
        "meaning": "adj. 浅的",
        "example": "Shallow lake.",
        "exampleCn": "浅湖。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 H 90\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.2\"/><path d=\"M60 15 V 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SHALLOW</text></svg>"
    },
    {
        "word": "shame",
        "phonetic": "[ʃeɪm]",
        "meaning": "n. 羞愧",
        "example": "What a shame.",
        "exampleCn": "真丢脸。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"red\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHAME</text></svg>"
    },
    {
        "word": "share",
        "phonetic": "[ʃeə(r)]",
        "meaning": "v. 分享",
        "example": "Share with me.",
        "exampleCn": "和我分享。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><circle cx=\"75\" cy=\"15\" r=\"4\" opacity=\"0.2\"/><path d=\"M49 15 H 71\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHARE</text></svg>"
    },
    {
        "word": "sharpener",
        "phonetic": "[ˈʃɑːpnə(r)]",
        "meaning": "n. 卷笔刀",
        "example": "Pencil sharpener.",
        "exampleCn": "铅笔刀。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SHARPENER</text></svg>"
    },
    {
        "word": "sheep",
        "phonetic": "[ʃiːp]",
        "meaning": "n. 绵羊",
        "example": "Sheep give wool.",
        "exampleCn": "绵羊产羊毛。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 20 Q 50 10, 60 10 Q 70 10, 75 20 Q 70 30, 60 30 Q 50 30, 45 20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHEEP</text></svg>"
    },
    {
        "word": "shelf",
        "phonetic": "[ʃelf]",
        "meaning": "n. 书架；架子",
        "example": "On the shelf.",
        "exampleCn": "在架子上。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 H 90 M 30 25 H 90\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHELF</text></svg>"
    },
    {
        "word": "shirt",
        "phonetic": "[ʃɜːt]",
        "meaning": "n. 衬衫",
        "example": "Wear a white shirt.",
        "exampleCn": "穿件白衬衫。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 L 50 10 L 70 10 L 80 15 L 80 25 L 75 25 L 75 35 H 45 V 25 L 40 25 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHIRT</text></svg>"
    },
    {
        "word": "shoes",
        "phonetic": "[ʃuːz]",
        "meaning": "n. 鞋子",
        "example": "New shoes.",
        "exampleCn": "新鞋。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 H 50 V 25 Q 30 25, 30 30 M 70 30 H 90 V 25 Q 70 25, 70 30\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHOES</text></svg>"
    },
    {
        "word": "should",
        "phonetic": "[ʃəd]",
        "meaning": "v. 应该",
        "example": "Should go.",
        "exampleCn": "应该去。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 80 20\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHOULD</text></svg>"
    },
    {
        "word": "shoulder",
        "phonetic": "[ˈʃəʊldə(r)]",
        "meaning": "n. 肩膀",
        "example": "On my shoulder.",
        "exampleCn": "在我的肩膀上。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 25 Q 60 15, 90 25\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SHOULDER</text></svg>"
    },
    {
        "word": "show",
        "phonetic": "[ʃəʊ]",
        "meaning": "v. 展示",
        "example": "Show me.",
        "exampleCn": "给我看看。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SHOW</text></svg>"
    },
    {
        "word": "shower",
        "phonetic": "[ˈʃaʊə(r)]",
        "meaning": "n. 淋浴",
        "example": "Take a shower.",
        "exampleCn": "洗个淋浴。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "bathroom"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 15 M 55 15 H 65\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"60\" y1=\"15\" x2=\"60\" y2=\"30\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SHOWER</text></svg>"
    },
    {
        "word": "sick",
        "phonetic": "[sɪk]",
        "meaning": "adj. 生病的",
        "example": "He is sick.",
        "exampleCn": "他病了。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 H 70\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SICK</text></svg>"
    },
    {
        "word": "signal",
        "phonetic": "[ˈsɪɡnəl]",
        "meaning": "n. 信号",
        "example": "Phone signal.",
        "exampleCn": "手机信号。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 V 20 M 50 30 V 15 M 60 30 V 10\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><path d=\"M90 10 Q 100 20, 90 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><path d=\"M100 5 Q 115 20, 100 35\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SIGNAL</text></svg>"
    },
    {
        "word": "silence",
        "phonetic": "[ˈsaɪləns]",
        "meaning": "n. 沉默",
        "example": "In silence.",
        "exampleCn": "在沉默中",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SILENCE</text></svg>"
    },
    {
        "word": "silk",
        "phonetic": "[sɪlk]",
        "meaning": "n. 丝绸",
        "example": "Chinese silk.",
        "exampleCn": "中国丝绸。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 Q 60 5, 90 15\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SILK</text></svg>"
    },
    {
        "word": "silly",
        "phonetic": "[ˈsɪli]",
        "meaning": "adj. 愚蠢的",
        "example": "Silly mistake.",
        "exampleCn": "愚蠢的错误。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SILLY</text></svg>"
    },
    {
        "word": "silver",
        "phonetic": "[ˈsɪlvə(r)]",
        "meaning": "n. 白银",
        "example": "Silver spoon.",
        "exampleCn": "银勺。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SILVER</text></svg>"
    },
    {
        "word": "simple",
        "phonetic": "[ˈsɪmpl]",
        "meaning": "adj. 简单的",
        "example": "Simple life.",
        "exampleCn": "简单的生活。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"15\" x2=\"80\" y2=\"15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SIMPLE</text></svg>"
    },
    {
        "word": "singer",
        "phonetic": "[ˈsɪŋə(r)]",
        "meaning": "n. 歌手",
        "example": "Famous singer.",
        "exampleCn": "著名歌手。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M70 10 V 25 Q 70 30, 60 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SINGER</text></svg>"
    },
    {
        "word": "sister",
        "phonetic": "[ˈsɪstə(r)]",
        "meaning": "n. 姐妹",
        "example": "My sister is kind.",
        "exampleCn": "我的姐妹很善良。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 Q 60 10, 70 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SISTER</text></svg>"
    },
    {
        "word": "sixteen",
        "phonetic": "[ˌsɪksˈtiːn]",
        "meaning": "num. 十六",
        "example": "Sixteen years.",
        "exampleCn": "十六岁。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SIXTEEN</text></svg>"
    },
    {
        "word": "skin",
        "phonetic": "[skɪn]",
        "meaning": "n. 皮肤",
        "example": "Soft skin.",
        "exampleCn": "柔软的皮肤。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"10\" width=\"60\" height=\"20\" fill=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SKIN</text></svg>"
    },
    {
        "word": "skirt",
        "phonetic": "[skɜːt]",
        "meaning": "n. 裙子",
        "example": "Short skirt.",
        "exampleCn": "短裙。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 15 H 75 L 85 35 H 35 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SKIRT</text></svg>"
    },
    {
        "word": "sleepy",
        "phonetic": "[ˈsliːpi]",
        "meaning": "adj. 困倦的",
        "example": "I feel sleepy.",
        "exampleCn": "我困了。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M70 10 L 80 10 L 70 20 L 80 20\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SLEEPY</text></svg>"
    },
    {
        "word": "slow",
        "phonetic": "[sləʊ]",
        "meaning": "adj. 缓慢的",
        "example": "Slow walker.",
        "exampleCn": "慢行人。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 60 15, 80 30\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SLOW</text></svg>"
    },
    {
        "word": "slowly",
        "phonetic": "[ˈsləʊli]",
        "meaning": "adv. 慢慢地",
        "example": "Walk slowly.",
        "exampleCn": "慢慢走。",
        "category": "adverb",
        "difficulty": 3,
        "tags": [
            "speed"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 60 15, 80 30\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SLOWLY</text></svg>"
    },
    {
        "word": "smart",
        "phonetic": "[smɑːt]",
        "meaning": "adj. 聪明的",
        "example": "Smart phone.",
        "exampleCn": "智能手机。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "character"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SMART</text></svg>"
    },
    {
        "word": "smell",
        "phonetic": "[smel]",
        "meaning": "v. 闻到；n. 气味",
        "example": "Smell the flower.",
        "exampleCn": "闻闻这朵花。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "sense"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 10 Q 60 5, 65 10 T 65 20\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SMELL</text></svg>"
    },
    {
        "word": "smoke",
        "phonetic": "[sməʊk]",
        "meaning": "n. 烟",
        "example": "Grey smoke.",
        "exampleCn": "灰烟。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 60 5, 70 15\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SMOKE</text></svg>"
    },
    {
        "word": "snake",
        "phonetic": "[sneɪk]",
        "meaning": "n. 蛇",
        "example": "Long snake.",
        "exampleCn": "长蛇。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 Q 45 5, 60 15 T 90 15\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SNAKE</text></svg>"
    },
    {
        "word": "snow",
        "phonetic": "[snəʊ]",
        "meaning": "n. 雪",
        "example": "Do you like snow?",
        "exampleCn": "你喜欢雪吗？",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature",
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 10 L 60 30 M 50 20 H 70 M 53 13 L 67 27 M 67 13 L 53 27\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SNOW</text></svg>"
    },
    {
        "word": "snowy",
        "phonetic": "[ˈsnəʊi]",
        "meaning": "adj. 下雪的",
        "example": "Snowy mountain.",
        "exampleCn": "雪山。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 25 M 50 15 H 70\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SNOWY</text></svg>"
    },
    {
        "word": "soap",
        "phonetic": "[səʊp]",
        "meaning": "n. 肥皂",
        "example": "Wash with soap.",
        "exampleCn": "用肥皂洗。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "bathroom"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"45\" y=\"15\" width=\"30\" height=\"15\" rx=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SOAP</text></svg>"
    },
    {
        "word": "society",
        "phonetic": "[səˈsaɪəti]",
        "meaning": "n. 社会",
        "example": "Modern society.",
        "exampleCn": "现代社会",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SOCIETY</text></svg>"
    },
    {
        "word": "sock",
        "phonetic": "[sɒk]",
        "meaning": "n. 袜子",
        "example": "A pair of socks.",
        "exampleCn": "一双袜子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 10 V 25 Q 50 35, 65 35\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SOCK</text></svg>"
    },
    {
        "word": "sofa",
        "phonetic": "[ˈsəʊfə]",
        "meaning": "n. 沙发",
        "example": "Sit on the sofa.",
        "exampleCn": "坐在沙发上。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 25 H 90 V 35 H 30 Z\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M30 25 V 15 Q 60 15, 90 25\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SOFA</text></svg>"
    },
    {
        "word": "soft",
        "phonetic": "[sɒft]",
        "meaning": "adj. 软的",
        "example": "Soft bed.",
        "exampleCn": "软床。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 10, 80 20\" stroke=\"currentColor\" stroke-dasharray=\"4 4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SOFT</text></svg>"
    },
    {
        "word": "soil",
        "phonetic": "[sɔɪl]",
        "meaning": "n. 土壤",
        "example": "Black soil.",
        "exampleCn": "黑土。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 Q 60 25, 90 30\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SOIL</text></svg>"
    },
    {
        "word": "solve",
        "phonetic": "[sɒlv]",
        "meaning": "v. 解决",
        "example": "Solve problem.",
        "exampleCn": "解决问题。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 50 30 L 80 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SOLVE</text></svg>"
    },
    {
        "word": "son",
        "phonetic": "[sʌn]",
        "meaning": "n. 儿子",
        "example": "My son.",
        "exampleCn": "我的儿子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"5\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SON</text></svg>"
    },
    {
        "word": "sorry",
        "phonetic": "[ˈsɒri]",
        "meaning": "adj. 抱歉的",
        "example": "I am sorry.",
        "exampleCn": "对不起。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 25 Q 60 15, 70 25\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SORRY</text></svg>"
    },
    {
        "word": "sound",
        "phonetic": "[saʊnd]",
        "meaning": "n. 声音",
        "example": "Loud sound.",
        "exampleCn": "大声。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "sense"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 Q 50 5, 60 15 T 80 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><path d=\"M90 10 Q 100 20, 90 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><path d=\"M100 5 Q 115 20, 100 35\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SOUND</text></svg>"
    },
    {
        "word": "soup",
        "phonetic": "[suːp]",
        "meaning": "n. 汤",
        "example": "Hot soup.",
        "exampleCn": "热汤。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M35 15 Q 35 35, 60 35 Q 85 35, 85 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SOUP</text></svg>"
    },
    {
        "word": "sour",
        "phonetic": "[ˈsaʊə(r)]",
        "meaning": "adj. 酸的",
        "example": "Sour lemon.",
        "exampleCn": "酸柠檬。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"15\" rx=\"10\" ry=\"6\" fill=\"yellow\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SOUR</text></svg>"
    },
    {
        "word": "south",
        "phonetic": "[saʊθ]",
        "meaning": "n./adj. 南方",
        "example": "Fly south.",
        "exampleCn": "飞向南方。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "direction"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 35 L 50 25 M 60 35 L 70 25\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SOUTH</text></svg>"
    },
    {
        "word": "space",
        "phonetic": "[speɪs]",
        "meaning": "n. 空间；太空",
        "example": "In outer space.",
        "exampleCn": "在外部空间。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"90\" cy=\"20\" r=\"1\" fill=\"currentColor\"/><circle cx=\"30\" cy=\"10\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"90\" cy=\"20\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"50\" cy=\"5\" r=\"0.5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SPACE</text></svg>"
    },
    {
        "word": "special",
        "phonetic": "[ˈspeʃl]",
        "meaning": "adj. 特别的",
        "example": "Special gift.",
        "exampleCn": "特别的礼物。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 70 15 L 60 25 L 50 15 Z\" fill=\"gold\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SPECIAL</text></svg>"
    },
    {
        "word": "speed",
        "phonetic": "[spiːd]",
        "meaning": "n. 速度",
        "example": "High speed.",
        "exampleCn": "高速。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 25 Q 60 5, 90 25\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><line x1=\"10\" y1=\"15\" x2=\"30\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.2\"/><line x1=\"5\" y1=\"25\" x2=\"25\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SPEED</text></svg>"
    },
    {
        "word": "spirit",
        "phonetic": "[ˈspɪrɪt]",
        "meaning": "n. 精神",
        "example": "Team spirit.",
        "exampleCn": "团队精神",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SPIRIT</text></svg>"
    },
    {
        "word": "spoon",
        "phonetic": "[spuːn]",
        "meaning": "n. 汤勺",
        "example": "Use a spoon.",
        "exampleCn": "用勺子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "kitchen"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.2\"/><line x1=\"53\" y1=\"15\" x2=\"85\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SPOON</text></svg>"
    },
    {
        "word": "sport",
        "phonetic": "[spɔːt]",
        "meaning": "n. 运动",
        "example": "I like sport.",
        "exampleCn": "我喜欢运动。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SPORT</text></svg>"
    },
    {
        "word": "spring",
        "phonetic": "[sprɪŋ]",
        "meaning": "n. 春天",
        "example": "Spring is here.",
        "exampleCn": "春天来了。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 50 5, 60 25 T 80 25\" stroke=\"green\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SPRING</text></svg>"
    },
    {
        "word": "stamp",
        "phonetic": "[stæmp]",
        "meaning": "n. 邮票",
        "example": "Postage stamp.",
        "exampleCn": "邮票。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "social"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STAMP</text></svg>"
    },
    {
        "word": "star",
        "phonetic": "[stɑː(r)]",
        "meaning": "n. 星星",
        "example": "Stars are twinkling.",
        "exampleCn": "星星在闪烁。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"60,10 63,18 70,18 64,22 66,30 60,25 54,30 56,22 50,18 57,18\" stroke=\"currentColor\" stroke-width=\"1\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"30\" cy=\"10\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"90\" cy=\"20\" r=\"1\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"50\" cy=\"5\" r=\"0.5\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >STAR</text></svg>"
    },
    {
        "word": "start",
        "phonetic": "[stɑːt]",
        "meaning": "v./n. 开始",
        "example": "Start now.",
        "exampleCn": "现在开始。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 60 20 L 40 30 Z\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >START</text></svg>"
    },
    {
        "word": "station",
        "phonetic": "[ˈsteɪʃn]",
        "meaning": "n. 车站；站",
        "example": "At the station.",
        "exampleCn": "在车站。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"20\" rx=\"2\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">STATION</text></svg>"
    },
    {
        "word": "statue",
        "phonetic": "[ˈstætʃuː]",
        "meaning": "n. 雕像",
        "example": "High statue.",
        "exampleCn": "高大的雕像。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "art"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 V 30\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STATUE</text></svg>"
    },
    {
        "word": "steak",
        "phonetic": "[steɪk]",
        "meaning": "n. 牛排",
        "example": "Cook a steak.",
        "exampleCn": "做牛排。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"60\" cy=\"15\" rx=\"20\" ry=\"10\" fill=\"brown\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STEAK</text></svg>"
    },
    {
        "word": "steam",
        "phonetic": "[stiːm]",
        "meaning": "n. 蒸汽",
        "example": "Hot steam.",
        "exampleCn": "热蒸汽。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 V 5 M 60 15 V 5 M 70 15 V 5\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STEAM</text></svg>"
    },
    {
        "word": "steel",
        "phonetic": "[stiːl]",
        "meaning": "n. 钢铁",
        "example": "Strong steel.",
        "exampleCn": "坚硬的钢铁。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"10\" width=\"60\" height=\"5\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STEEL</text></svg>"
    },
    {
        "word": "stone",
        "phonetic": "[stəʊn]",
        "meaning": "n. 石头",
        "example": "Hard stone.",
        "exampleCn": "硬石头。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 60 5, 75 15 T 60 30 T 50 15\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STONE</text></svg>"
    },
    {
        "word": "stop",
        "phonetic": "[stɒp]",
        "meaning": "v./n. 停止",
        "example": "Stop here.",
        "exampleCn": "停这儿。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"20\" fill=\"red\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >STOP</text></svg>"
    },
    {
        "word": "storm",
        "phonetic": "[stɔːm]",
        "meaning": "n. 暴风雨",
        "example": "A big storm.",
        "exampleCn": "一场大风暴。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 30, 80 10\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"50\" y1=\"20\" x2=\"45\" y2=\"30\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STORM</text></svg>"
    },
    {
        "word": "strange",
        "phonetic": "[streɪndʒ]",
        "meaning": "adj. 奇怪的",
        "example": "Strange noise.",
        "exampleCn": "奇怪的噪音。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 25, 80 10\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">STRANGE</text></svg>"
    },
    {
        "word": "stream",
        "phonetic": "[striːm]",
        "meaning": "n. 溪流",
        "example": "Cold stream.",
        "exampleCn": "凉溪。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 Q 40 25, 60 15 T 100 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STREAM</text></svg>"
    },
    {
        "word": "street",
        "phonetic": "[striːt]",
        "meaning": "n. 街道",
        "example": "Cross the street.",
        "exampleCn": "穿过街道。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10 L 40 35 M 100 10 L 80 35\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STREET</text></svg>"
    },
    {
        "word": "strong",
        "phonetic": "[strɒŋ]",
        "meaning": "adj. 强壮的",
        "example": "Strong wind.",
        "exampleCn": "强风。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 25 Q 60 5, 80 25\" stroke=\"currentColor\" stroke-width=\"6\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STRONG</text></svg>"
    },
    {
        "word": "student",
        "phonetic": "[ˈstjuːdnt]",
        "meaning": "n. 学生",
        "example": "I am a student.",
        "exampleCn": "我是一名学生。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 60 5 L 80 10 L 60 15 Z\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">STUDENT</text></svg>"
    },
    {
        "word": "study",
        "phonetic": "[ˈstʌdi]",
        "meaning": "v./n. 学习",
        "example": "Study English.",
        "exampleCn": "学英语。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 60 5 L 80 10 L 60 15 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STUDY</text></svg>"
    },
    {
        "word": "stupid",
        "phonetic": "[ˈstjuːpɪd]",
        "meaning": "adj. 愚蠢的",
        "example": "Not stupid.",
        "exampleCn": "不傻。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >STUPID</text></svg>"
    },
    {
        "word": "success",
        "phonetic": "[səkˈses]",
        "meaning": "n. 成功",
        "example": "Wish you success.",
        "exampleCn": "祝你成功。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 70 15 L 60 25 L 50 15 Z\" fill=\"gold\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SUCCESS</text></svg>"
    },
    {
        "word": "successful",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample successful.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SUCCESSFUL</text></svg>"
    },
    {
        "word": "sugar",
        "phonetic": "[ˈʃʊɡə(r)]",
        "meaning": "n. 糖",
        "example": "Sweet sugar.",
        "exampleCn": "甜糖。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"55\" y=\"10\" width=\"10\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SUGAR</text></svg>"
    },
    {
        "word": "suggestion",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample suggestion.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SUGGESTION</text></svg>"
    },
    {
        "word": "summer",
        "phonetic": "[ˈsʌmə(r)]",
        "meaning": "n. 夏天",
        "example": "Hot summer.",
        "exampleCn": "炎热的夏天。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "time"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" fill=\"red\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SUMMER</text></svg>"
    },
    {
        "word": "sun",
        "phonetic": "[sʌn]",
        "meaning": "n. 太阳",
        "example": "The sun is hot.",
        "exampleCn": "太阳很热。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.3\"/><path d=\"M60 2 L 60 5 M 60 25 L 60 28 M 47 15 L 50 15 M 70 15 L 73 15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SUN</text></svg>"
    },
    {
        "word": "sunny",
        "phonetic": "[ˈsʌni]",
        "meaning": "adj. 晴朗的",
        "example": "A sunny day.",
        "exampleCn": "一个晴天。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"orange\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SUNNY</text></svg>"
    },
    {
        "word": "support",
        "phonetic": "[səˈpɔːt]",
        "meaning": "v./n. 支持",
        "example": "I support you.",
        "exampleCn": "我支持你",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "core",
            "verb"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 25 V 5 L 50 15 M 60 5 L 70 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SUPPORT</text></svg>"
    },
    {
        "word": "sure",
        "phonetic": "[ˈʃʊə(r)]",
        "meaning": "adj. 确定的",
        "example": "Are you sure?",
        "exampleCn": "你确定吗？",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 85 10\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >SURE</text></svg>"
    },
    {
        "word": "surprise",
        "phonetic": "[səˈpraɪz]",
        "meaning": "n./v. 惊呀",
        "example": "What a surprise!",
        "exampleCn": "太惊喜了！",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">SURPRISE</text></svg>"
    },
    {
        "word": "swamp",
        "phonetic": "[swɒmp]",
        "meaning": "n. 沼泽",
        "example": "Big swamp.",
        "exampleCn": "大沼泽。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 H 90\" stroke=\"green\" stroke-width=\"4\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SWAMP</text></svg>"
    },
    {
        "word": "sweet",
        "phonetic": "[swiːt]",
        "meaning": "adj. 甜的",
        "example": "Sweet candy.",
        "exampleCn": "甜糖果。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"6\" fill=\"pink\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SWEET</text></svg>"
    },
    {
        "word": "system",
        "phonetic": "[ˈsɪstəm]",
        "meaning": "n. 系统",
        "example": "Solar system.",
        "exampleCn": "太阳系",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 H 100\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.3\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >SYSTEM</text></svg>"
    },
    {
        "word": "talk",
        "phonetic": "[tɔːk]",
        "meaning": "v. 说话",
        "example": "Can we talk?",
        "exampleCn": "我们能谈谈吗？",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action",
            "comm"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 5, 80 10 T 80 25 Q 60 30, 40 25 Z\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M45 30 L 40 35 L 55 30\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M90 10 Q 100 20, 90 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><path d=\"M100 5 Q 115 20, 100 35\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TALK</text></svg>"
    },
    {
        "word": "target",
        "phonetic": "[ˈtɑːɡɪt]",
        "meaning": "n. 目标",
        "example": "Hit the target.",
        "exampleCn": "击中目标。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"red\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"red\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TARGET</text></svg>"
    },
    {
        "word": "taste",
        "phonetic": "[teɪst]",
        "meaning": "v. 品尝；n. 味道",
        "example": "Good taste.",
        "exampleCn": "味道不错。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "sense"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 25 Q 60 35, 75 25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TASTE</text></svg>"
    },
    {
        "word": "tea",
        "phonetic": "[tiː]",
        "meaning": "n. 茶",
        "example": "Hot tea.",
        "exampleCn": "热茶。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 20 H 70 V 30 Q 70 35, 60 35 Q 50 35, 50 30 V 20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M55 15 Q 60 10, 65 15\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TEA</text></svg>"
    },
    {
        "word": "teacher",
        "phonetic": "[ˈtiːtʃə(r)]",
        "meaning": "n. 老师",
        "example": "Our teacher is kind.",
        "exampleCn": "我们的老师很和蔼。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "school"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 H 100\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">TEACHER</text></svg>"
    },
    {
        "word": "technology",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample technology.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 H 100\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.3\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">TECHNOLOGY</text></svg>"
    },
    {
        "word": "temple",
        "phonetic": "[ˈtempl]",
        "meaning": "n. 寺庙",
        "example": "Old temple.",
        "exampleCn": "古寺。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 V 15 L 60 5 L 80 15 V 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TEMPLE</text></svg>"
    },
    {
        "word": "tennis",
        "phonetic": "[ˈtenɪs]",
        "meaning": "n. 网球",
        "example": "Tennis ball.",
        "exampleCn": "网球。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "sport"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TENNIS</text></svg>"
    },
    {
        "word": "tent",
        "phonetic": "[tent]",
        "meaning": "n. 帐篷",
        "example": "In tent.",
        "exampleCn": "在帐篷里。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "object"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 L 60 5 L 90 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TENT</text></svg>"
    },
    {
        "word": "theatre",
        "phonetic": "[ˈθɪətə(r)]",
        "meaning": "n. 剧院",
        "example": "At theatre.",
        "exampleCn": "在剧院。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "city"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 10 V 30 M 90 10 V 30\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">THEATRE</text></svg>"
    },
    {
        "word": "theory",
        "phonetic": "[ˈθɪəri]",
        "meaning": "n. 理论",
        "example": "Scientific theory.",
        "exampleCn": "科学理论",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >THEORY</text></svg>"
    },
    {
        "word": "thick",
        "phonetic": "[θɪk]",
        "meaning": "adj. 厚的；粗的",
        "example": "A thick book.",
        "exampleCn": "一本厚书。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"10\" fill=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >THICK</text></svg>"
    },
    {
        "word": "thin",
        "phonetic": "[θɪn]",
        "meaning": "adj. 瘦的；薄的",
        "example": "A thin book.",
        "exampleCn": "一本薄书。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "adjective"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"5\" x2=\"60\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >THIN</text></svg>"
    },
    {
        "word": "thirsty",
        "phonetic": "[ˈθɜːsti]",
        "meaning": "adj. 口渴的",
        "example": "Feel thirsty.",
        "exampleCn": "感到口渴。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 10 V 25\" stroke=\"blue\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">THIRSTY</text></svg>"
    },
    {
        "word": "thirteen",
        "phonetic": "[ˌθɜːˈtiːn]",
        "meaning": "num. 十三",
        "example": "Thirteen stars.",
        "exampleCn": "十三颗星。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">THIRTEEN</text></svg>"
    },
    {
        "word": "thunder",
        "phonetic": "[ˈθʌndə(r)]",
        "meaning": "n. 雷声",
        "example": "Hear thunder.",
        "exampleCn": "听到雷声。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 5 Q 60 15, 80 5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">THUNDER</text></svg>"
    },
    {
        "word": "tide",
        "phonetic": "[taɪd]",
        "meaning": "n. 潮汐",
        "example": "The high tide.",
        "exampleCn": "高潮。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 30 H 100\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TIDE</text></svg>"
    },
    {
        "word": "tie",
        "phonetic": "[taɪ]",
        "meaning": "n. 领带",
        "example": "He wears a tie.",
        "exampleCn": "他系着领带。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "clothing"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 10 L 65 10 L 60 15 L 65 35 L 60 40 L 55 35 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TIE</text></svg>"
    },
    {
        "word": "tiger",
        "phonetic": "[ˈtaɪɡə(r)]",
        "meaning": "n. 老虎",
        "example": "Fierce tiger.",
        "exampleCn": "凶猛的老虎。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 10 M 40 15 L 80 15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TIGER</text></svg>"
    },
    {
        "word": "time",
        "phonetic": "[taɪm]",
        "meaning": "n. 时间",
        "example": "What time is it?",
        "exampleCn": "几点了？",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract",
            "life"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M60 20 L 60 14 M 60 20 L 66 20\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TIME</text></svg>"
    },
    {
        "word": "timer",
        "phonetic": "[ˈtaɪmə(r)]",
        "meaning": "n. 定时器",
        "example": "Set a timer.",
        "exampleCn": "设定时器。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M60 15 L 60 8\" stroke=\"currentColor\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TIMER</text></svg>"
    },
    {
        "word": "tired",
        "phonetic": "[ˈtaɪəd]",
        "meaning": "adj. 累的",
        "example": "So tired.",
        "exampleCn": "好累。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 20 H 75\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TIRED</text></svg>"
    },
    {
        "word": "tomato",
        "phonetic": "[təˈmɑːtəʊ]",
        "meaning": "n. 西红柿",
        "example": "Red tomato.",
        "exampleCn": "红番茄。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "food"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" fill=\"red\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TOMATO</text></svg>"
    },
    {
        "word": "tongue",
        "phonetic": "[tʌŋ]",
        "meaning": "n. 舌头",
        "example": "Show your tongue.",
        "exampleCn": "伸出舌头。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 25 Q 60 40, 70 25\" fill=\"pink\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TONGUE</text></svg>"
    },
    {
        "word": "tool",
        "phonetic": "[tuːl]",
        "meaning": "n. 工具",
        "example": "Hand tool.",
        "exampleCn": "手工工具。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 50 20 M 70 10 L 60 20\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TOOL</text></svg>"
    },
    {
        "word": "tooth",
        "phonetic": "[tuːθ]",
        "meaning": "n. 牙齿",
        "example": "Brush your teeth.",
        "exampleCn": "刷牙。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "body"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"8\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><rect x=\"62\" y=\"10\" width=\"8\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TOOTH</text></svg>"
    },
    {
        "word": "toothbrush",
        "phonetic": "[ˈtuːθbrʌʃ]",
        "meaning": "n. 牙刷",
        "example": "My toothbrush.",
        "exampleCn": "我的牙刷。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "bathroom"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 H 80 M 75 10 V 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">TOOTHBRUSH</text></svg>"
    },
    {
        "word": "toothpaste",
        "phonetic": "[ˈtuːθpeɪst]",
        "meaning": "n. 牙膏",
        "example": "Mint toothpaste.",
        "exampleCn": "薄荷牙膏。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "bathroom"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 H 80 Q 85 20, 85 15\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">TOOTHPASTE</text></svg>"
    },
    {
        "word": "top",
        "phonetic": "[tɒp]",
        "meaning": "n. 顶部",
        "example": "The top level.",
        "exampleCn": "顶层。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "position"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 H 80\" stroke=\"currentColor\" stroke-width=\"4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TOP</text></svg>"
    },
    {
        "word": "towel",
        "phonetic": "[ˈtaʊəl]",
        "meaning": "n. 毛巾",
        "example": "A wet towel.",
        "exampleCn": "一条湿毛巾。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "bathroom"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M45 10 V 35 H 75 V 10\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TOWEL</text></svg>"
    },
    {
        "word": "tower",
        "phonetic": "[ˈtaʊə(r)]",
        "meaning": "n. 塔",
        "example": "A high tower.",
        "exampleCn": "一座高塔。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 35 L 55 5 H 65 L 70 35\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TOWER</text></svg>"
    },
    {
        "word": "tradition",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample tradition.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">TRADITION</text></svg>"
    },
    {
        "word": "tree",
        "phonetic": "[triː]",
        "meaning": "n. 树",
        "example": "This is a big tree.",
        "exampleCn": "这是一棵大树。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M58 35 L 58 15 M 62 35 L 62 15\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TREE</text></svg>"
    },
    {
        "word": "triangle",
        "phonetic": "[ˈtraɪæŋɡl]",
        "meaning": "n. 三角形",
        "example": "Red triangle.",
        "exampleCn": "红色的三角形。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "shape"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M60 5 L 45 30 H 75 Z\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">TRIANGLE</text></svg>"
    },
    {
        "word": "truth",
        "phonetic": "[truːθ]",
        "meaning": "n. 真相",
        "example": "Tell the truth.",
        "exampleCn": "说出真相",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "core",
            "noun"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TRUTH</text></svg>"
    },
    {
        "word": "try",
        "phonetic": "[traɪ]",
        "meaning": "v. 尝试",
        "example": "Try again.",
        "exampleCn": "再试一次。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 10, 80 20\" stroke=\"currentColor\" stroke-dasharray=\"4 4\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TRY</text></svg>"
    },
    {
        "word": "turtle",
        "phonetic": "[ˈtɜːtl]",
        "meaning": "n. 乌龟",
        "example": "Slow turtle.",
        "exampleCn": "慢龟。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "animal"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 Q 60 10, 80 30 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TURTLE</text></svg>"
    },
    {
        "word": "tv",
        "phonetic": "[ˌtiːˈviː]",
        "meaning": "n. 电视",
        "example": "Watch TV.",
        "exampleCn": "看电视。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"10\" width=\"50\" height=\"25\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >TV</text></svg>"
    },
    {
        "word": "twelve",
        "phonetic": "[twelv]",
        "meaning": "num. 十二",
        "example": "Twelve months.",
        "exampleCn": "十二个月。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"45\" y1=\"5\" x2=\"45\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"3\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TWELVE</text></svg>"
    },
    {
        "word": "twenty",
        "phonetic": "[ˈtwenti]",
        "meaning": "num. 二十",
        "example": "Twenty dollars.",
        "exampleCn": "二十美元。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "number"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >TWENTY</text></svg>"
    },
    {
        "word": "ugly",
        "phonetic": "[ˈstjuːpɪd]",
        "meaning": "adj. 丑陋的",
        "example": "Ugly bug.",
        "exampleCn": "丑陋的小虫。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 15 L 80 25\" stroke=\"brown\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >UGLY</text></svg>"
    },
    {
        "word": "uncle",
        "phonetic": "[ˈʌŋkl]",
        "meaning": "n. 叔叔；舅舅",
        "example": "Uncle Tom.",
        "exampleCn": "汤姆叔叔。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 V 35 M 70 15 V 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >UNCLE</text></svg>"
    },
    {
        "word": "unique",
        "phonetic": "[juˈniːk]",
        "meaning": "adj. 独特的",
        "example": "Unique style.",
        "exampleCn": "独特风格。",
        "category": "adjective",
        "difficulty": 4,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"gold\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >UNIQUE</text></svg>"
    },
    {
        "word": "university",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample university.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">UNIVERSITY</text></svg>"
    },
    {
        "word": "unlock",
        "phonetic": "[ˌʌnˈlɒk]",
        "meaning": "v. 开锁",
        "example": "Unlock it.",
        "exampleCn": "开锁。",
        "category": "verb",
        "difficulty": 3,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"15\" width=\"20\" height=\"15\" rx=\"2\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M55 15 V 10 Q 60 5, 75 10\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >UNLOCK</text></svg>"
    },
    {
        "word": "useful",
        "phonetic": "[ˈjuːsfl]",
        "meaning": "adj. 有用的",
        "example": "Useful book.",
        "exampleCn": "有用的书。",
        "category": "adjective",
        "difficulty": 4,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 L 55 30 L 80 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >USEFUL</text></svg>"
    },
    {
        "word": "useless",
        "phonetic": "[ˈjuːsləs]",
        "meaning": "adj. 无用的",
        "example": "Useless thing.",
        "exampleCn": "没用的东西。",
        "category": "adjective",
        "difficulty": 4,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 30\" stroke=\"red\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">USELESS</text></svg>"
    },
    {
        "word": "user",
        "phonetic": "[ˈjuːzə(r)]",
        "meaning": "n. 用户",
        "example": "Active user.",
        "exampleCn": "活跃用户。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"6\" fill=\"currentColor\" opacity=\"0.2\"/><path d=\"M45 35 Q 60 20, 75 35\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >USER</text></svg>"
    },
    {
        "word": "valley",
        "phonetic": "[ˈvæli]",
        "meaning": "n. 山谷",
        "example": "Green valley.",
        "exampleCn": "绿色的山谷。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10 L 40 30 L 60 10 L 80 30 L 100 10\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >VALLEY</text></svg>"
    },
    {
        "word": "vegetable",
        "phonetic": "[...]",
        "meaning": "n./v. 核心词汇",
        "example": "Sample vegetable.",
        "exampleCn": "示例句子",
        "category": "noun",
        "difficulty": 5,
        "tags": [
            "advanced"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.1\"/><circle cx=\"60\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.2\"/><circle cx=\"80\" cy=\"15\" r=\"2\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">VEGETABLE</text></svg>"
    },
    {
        "word": "village",
        "phonetic": "[ˈvɪlɪdʒ]",
        "meaning": "n. 村庄",
        "example": "A small village.",
        "exampleCn": "一个小村庄。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "place"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 30 L 45 15 L 60 30 M 60 30 L 75 15 L 90 30\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">VILLAGE</text></svg>"
    },
    {
        "word": "violin",
        "phonetic": "[ˌvaɪəˈlɪn]",
        "meaning": "n. 小提琴",
        "example": "Play violin.",
        "exampleCn": "拉小提琴。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "music"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 10 Q 50 20, 55 30 H 65 Q 70 20, 65 10 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >VIOLIN</text></svg>"
    },
    {
        "word": "virus",
        "phonetic": "[ˈvaɪrəs]",
        "meaning": "n. 病毒",
        "example": "Computer virus.",
        "exampleCn": "电脑病毒。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "tech",
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"red\" opacity=\"0.4\"/><path d=\"M60 5 V 10 M 60 20 V 25\" stroke=\"red\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >VIRUS</text></svg>"
    },
    {
        "word": "voice",
        "phonetic": "[vɔɪs]",
        "meaning": "n. 嗓音",
        "example": "Sweet voice.",
        "exampleCn": "甜美的声音。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "sense"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 60 25, 70 15\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M90 10 Q 100 20, 90 30\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.3\"/><path d=\"M100 5 Q 115 20, 100 35\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >VOICE</text></svg>"
    },
    {
        "word": "volcano",
        "phonetic": "[vɒlˈkeɪnəʊ]",
        "meaning": "n. 火山",
        "example": "Active volcano.",
        "exampleCn": "活火山。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 L 60 5 L 80 30\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M60 5 V 0\" stroke=\"red\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">VOLCANO</text></svg>"
    },
    {
        "word": "volume",
        "phonetic": "[ˈvɒljuːm]",
        "meaning": "n. 体积；音量；卷",
        "example": "High volume.",
        "exampleCn": "高音量。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 V 10 L 50 15 V 35 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >VOLUME</text></svg>"
    },
    {
        "word": "wait",
        "phonetic": "[weɪt]",
        "meaning": "v. 等待",
        "example": "Wait for me.",
        "exampleCn": "等我。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WAIT</text></svg>"
    },
    {
        "word": "wake",
        "phonetic": "[weɪk]",
        "meaning": "v. 醒来",
        "example": "Wake up!",
        "exampleCn": "醒醒！",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><line x1=\"60\" y1=\"15\" x2=\"70\" y2=\"5\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WAKE</text></svg>"
    },
    {
        "word": "wall",
        "phonetic": "[wɔːl]",
        "meaning": "n. 墙",
        "example": "A white wall.",
        "exampleCn": "一堵白墙。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "house"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 10 H 100 M 20 20 H 100 M 20 30 H 100\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WALL</text></svg>"
    },
    {
        "word": "want",
        "phonetic": "[wɒnt]",
        "meaning": "v. 想要",
        "example": "I want this.",
        "exampleCn": "我想要这个。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "mental"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 30, 80 10\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WANT</text></svg>"
    },
    {
        "word": "war",
        "phonetic": "[wɔː(r)]",
        "meaning": "n. 战争",
        "example": "Stop the war.",
        "exampleCn": "停止战争。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 50 20 L 40 30\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WAR</text></svg>"
    },
    {
        "word": "warm",
        "phonetic": "[wɔːm]",
        "meaning": "adj. 温暖的",
        "example": "Warm water.",
        "exampleCn": "温水。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" fill=\"orange\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WARM</text></svg>"
    },
    {
        "word": "wash",
        "phonetic": "[wɒʃ]",
        "meaning": "v. 洗",
        "example": "Wash hands.",
        "exampleCn": "洗手。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"15\" r=\"3\" opacity=\"0.2\"/><circle cx=\"70\" cy=\"20\" r=\"2\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WASH</text></svg>"
    },
    {
        "word": "watch",
        "phonetic": "[wɒtʃ]",
        "meaning": "v. 看；n. 手表",
        "example": "Watch a movie.",
        "exampleCn": "看电影。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WATCH</text></svg>"
    },
    {
        "word": "water",
        "phonetic": "[ˈwɔːtə(r)]",
        "meaning": "n. 水",
        "example": "Drink some water.",
        "exampleCn": "喝点水。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "nature",
            "life"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 25 Q 45 15, 60 25 T 90 25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M30 32 Q 45 22, 60 32 T 90 32\" stroke=\"currentColor\" stroke-width=\"1\" fill=\"none\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WATER</text></svg>"
    },
    {
        "word": "waterfall",
        "phonetic": "[ˈwɔːtəfɔːl]",
        "meaning": "n. 瀑布",
        "example": "High waterfall.",
        "exampleCn": "高瀑布。",
        "category": "noun",
        "difficulty": 4,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 5 V 25 M 60 5 V 25 M 70 5 V 25\" stroke=\"blue\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"18\" fill=\"currentColor\" text-anchor=\"middle\" textLength=\"110\" lengthAdjust=\"spacingAndGlyphs\">WATERFALL</text></svg>"
    },
    {
        "word": "wave",
        "phonetic": "[weɪv]",
        "meaning": "n. 波浪",
        "example": "Ocean wave.",
        "exampleCn": "海浪。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20 Q 30 10, 40 20 T 60 20 T 80 20 T 100 20\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WAVE</text></svg>"
    },
    {
        "word": "weak",
        "phonetic": "[wiːk]",
        "meaning": "adj. 虚弱的",
        "example": "Weak heart.",
        "exampleCn": "心脏虚弱。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 80 10\" stroke=\"currentColor\" opacity=\"0.1\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WEAK</text></svg>"
    },
    {
        "word": "wealth",
        "phonetic": "[welθ]",
        "meaning": "n. 财富",
        "example": "Great wealth.",
        "exampleCn": "巨大财富。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"50\" y=\"10\" width=\"20\" height=\"10\" fill=\"gold\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WEALTH</text></svg>"
    },
    {
        "word": "weight",
        "phonetic": "[weɪt]",
        "meaning": "n. 重量",
        "example": "Lose weight.",
        "exampleCn": "减肥。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "health"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 30 H 80 L 70 10 H 50 Z\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WEIGHT</text></svg>"
    },
    {
        "word": "west",
        "phonetic": "[west]",
        "meaning": "n./adj. 西方",
        "example": "West coast.",
        "exampleCn": "西海岸。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "direction"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M90 20 H 30 L 40 10 M 30 20 L 40 30\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WEST</text></svg>"
    },
    {
        "word": "wet",
        "phonetic": "[wet]",
        "meaning": "adj. 潮湿的",
        "example": "Wet floor.",
        "exampleCn": "湿地板。",
        "category": "adjective",
        "difficulty": 1,
        "tags": [
            "feeling"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"10\" r=\"2\" fill=\"blue\" opacity=\"0.3\"/><circle cx=\"70\" cy=\"15\" r=\"2\" fill=\"blue\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WET</text></svg>"
    },
    {
        "word": "wheel",
        "phonetic": "[wiːl]",
        "meaning": "n. 轮子",
        "example": "The car wheel.",
        "exampleCn": "车轮。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/><line x1=\"60\" y1=\"8\" x2=\"60\" y2=\"32\" stroke=\"currentColor\" opacity=\"0.2\"/><line x1=\"48\" y1=\"20\" x2=\"72\" y2=\"20\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WHEEL</text></svg>"
    },
    {
        "word": "wide",
        "phonetic": "[waɪd]",
        "meaning": "adj. 宽的",
        "example": "A wide river.",
        "exampleCn": "一条宽阔的河。",
        "category": "adjective",
        "difficulty": 2,
        "tags": [
            "description"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 20 H 100\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.2\"/><path d=\"M20 20 L 30 15 M 20 20 L 30 25\" stroke=\"currentColor\" opacity=\"0.4\"/><path d=\"M100 20 L 90 15 M 100 20 L 90 25\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WIDE</text></svg>"
    },
    {
        "word": "wife",
        "phonetic": "[waɪf]",
        "meaning": "n. 妻子",
        "example": "My wife.",
        "exampleCn": "我的妻子。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "family"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 35 L 60 15 L 70 35\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WIFE</text></svg>"
    },
    {
        "word": "win",
        "phonetic": "[wɪn]",
        "meaning": "v. 赢",
        "example": "Win the game.",
        "exampleCn": "赢得比赛。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 V 20 Q 60 35, 80 20 V 10\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WIN</text></svg>"
    },
    {
        "word": "wind",
        "phonetic": "[wɪnd]",
        "meaning": "n. 风",
        "example": "The wind blows.",
        "exampleCn": "风在吹。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature",
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 20 Q 60 10, 80 20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M45 25 Q 60 35, 75 25\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WIND</text></svg>"
    },
    {
        "word": "windy",
        "phonetic": "[ˈwɪndi]",
        "meaning": "adj. 有风的",
        "example": "It is windy.",
        "exampleCn": "起风了。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "weather"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15 Q 60 5, 90 15\" stroke=\"currentColor\" stroke-dasharray=\"5 5\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WINDY</text></svg>"
    },
    {
        "word": "wire",
        "phonetic": "[ˈwaɪə(r)]",
        "meaning": "n. 电线；金属丝",
        "example": "Electric wire.",
        "exampleCn": "电线。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "tool"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 15 Q 40 25, 60 15 T 100 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WIRE</text></svg>"
    },
    {
        "word": "wish",
        "phonetic": "[wɪʃ]",
        "meaning": "v./n. 祝愿",
        "example": "Best wishes.",
        "exampleCn": "最好的祝愿。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "mental"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 L 60 25 L 80 10\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WISH</text></svg>"
    },
    {
        "word": "woman",
        "phonetic": "[ˈwʊmən]",
        "meaning": "n. 女人",
        "example": "A kind woman.",
        "exampleCn": "一位善良的女士。",
        "category": "noun",
        "difficulty": 2,
        "tags": [
            "people"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 35 L 60 15 L 70 35\" stroke=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WOMAN</text></svg>"
    },
    {
        "word": "wood",
        "phonetic": "[wʊd]",
        "meaning": "n. 木头；木材",
        "example": "Made of wood.",
        "exampleCn": "木制的。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"35\" y=\"15\" width=\"50\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WOOD</text></svg>"
    },
    {
        "word": "wool",
        "phonetic": "[wʊl]",
        "meaning": "n. 羊毛",
        "example": "Soft wool.",
        "exampleCn": "软羊毛。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "material"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"10\" stroke=\"currentColor\" stroke-dasharray=\"2 2\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WOOL</text></svg>"
    },
    {
        "word": "work",
        "phonetic": "[wɜːk]",
        "meaning": "v. 工作；n. 作品",
        "example": "He works in a bank.",
        "exampleCn": "他在银行工作。",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "office",
            "action"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"20\" r=\"6\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><circle cx=\"90\" cy=\"20\" r=\"6\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\"/><path d=\"M35 20 L 85 20\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"2 2\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"28\" fill=\"currentColor\" text-anchor=\"middle\" >WORK</text></svg>"
    },
    {
        "word": "worker",
        "phonetic": "[ˈwɜːkə(r)]",
        "meaning": "n. 工人",
        "example": "A hard worker.",
        "exampleCn": "一个勤奋的工人。",
        "category": "noun",
        "difficulty": 3,
        "tags": [
            "job"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"10\" width=\"40\" height=\"10\" fill=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WORKER</text></svg>"
    },
    {
        "word": "world",
        "phonetic": "[wɜːld]",
        "meaning": "n. 世界",
        "example": "The whole world.",
        "exampleCn": "全世界。",
        "category": "noun",
        "difficulty": 1,
        "tags": [
            "nature"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"20\" r=\"12\" stroke=\"currentColor\" stroke-dasharray=\"4 2\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WORLD</text></svg>"
    },
    {
        "word": "worry",
        "phonetic": "[ˈwʌri]",
        "meaning": "v./n. 担心",
        "example": "Don t worry.",
        "exampleCn": "别担心。",
        "category": "verb",
        "difficulty": 2,
        "tags": [
            "emotion"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M50 15 Q 60 25, 70 15\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.4\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WORRY</text></svg>"
    },
    {
        "word": "would",
        "phonetic": "[wəd]",
        "meaning": "v. 将要；愿意",
        "example": "Would you like?",
        "exampleCn": "你想要吗？",
        "category": "verb",
        "difficulty": 1,
        "tags": [
            "abstract"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40 10 Q 60 20, 80 10\" stroke=\"currentColor\" opacity=\"0.2\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >WOULD</text></svg>"
    },
    {
        "word": "yellow",
        "phonetic": "[ˈjeləʊ]",
        "meaning": "adj. 黄色的",
        "example": "Yellow banana.",
        "exampleCn": "黄色的香蕉。",
        "category": "adjective",
        "difficulty": 3,
        "tags": [
            "color"
        ],
        "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"15\" r=\"8\" fill=\"currentColor\" opacity=\"0.3\"/><text x=\"60\" y=\"50\" font-family=\"Arial\" font-weight=\"bold\" font-size=\"22\" fill=\"currentColor\" text-anchor=\"middle\" >YELLOW</text></svg>"
    }
];
