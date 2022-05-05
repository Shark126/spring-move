// 20. 有效的括号
var isValid = function(s){
    if(s.length % 2 == 1) return false
    let str = []
    const pairs = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ])

    for(let item of s){
        if(pairs.has(item)){
            if(!str.length || str[str.length - 1 ] !== pairs.get(item)){
                return false
            }
            str.pop()
        }else{
            str.push(item)
        }
    }

    return !str.length
}