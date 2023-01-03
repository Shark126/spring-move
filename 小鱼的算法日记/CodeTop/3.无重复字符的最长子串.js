// 3.给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

var lengthOfLongestSubstring = function(s){
    let max = 0
    let arr = []
    for(let i = 0 ; i < s.length ; i++){
        while(arr.includes(s[i])){
            arr.shift()
        }
        arr.push(s[i])
        max = Math.max(max,arr.length)
    }
    return max
}