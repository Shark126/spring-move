var reverseLeftWords = function(s, n) {
    // let a = s.slice(0,n)
    let arr = Array.from(s)
    for(let i = 0 ; i < n ; i++){
        arr.push(arr[0])
        arr.shift()
    }
    return arr.join('')
};

let s = 'abcdefg'
let n = 2
reverseLeftWords(s,n)


// 方法二
var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0,n);
};
