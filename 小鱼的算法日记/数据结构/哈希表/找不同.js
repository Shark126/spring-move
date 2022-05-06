// 389.找不同
var findTheDifference = function(s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};

//因为那个多余的数肯定是奇数，所以一直异或下去一定是多余的那个数

//异或大法好，入教保平安！！！