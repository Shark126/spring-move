// 3.无重复字符的最长子串
var lengthOf = function(s){
    let res = []
    let max = 0
    for(let item of s){
        while(res.includes(item)){
            res.shift()
        }
        res.push(item)
        max = Math.max(max,res.length)
    }
}