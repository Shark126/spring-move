var findWords = function(words) {
    const list = [];
    const rowIdx = "12210111011122000010020202";
    for (const word of words) {
        let isValid = true;
        const idx = rowIdx[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
        for (let i = 1; i < word.length; ++i) {
            if (rowIdx[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== idx) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            list.push(word);
        }
    }
    console.log(list)
    console.log('a'.charCodeAt());
    console.log('b'.charCodeAt());
    console.log('c'.charCodeAt());
    return list;
};


let words = ["Hello","Alaska","Dad","Peace"]
findWords(words)

// 我们为每一个英文字母标记其对应键盘上的行号，然后检测字符串中所有字符对应的行号是否相同。
// 我们可以预处理计算出每个字符对应的行号。
// 遍历字符串时，统一将大写字母转化为小写字母方便计算。
