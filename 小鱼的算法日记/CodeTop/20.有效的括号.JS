// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 1.左括号必须用相同类型的右括号闭合。
// 2.左括号必须以正确的顺序闭合。

var isValid = function(s) {
    if(s.length % 2 == 1) return false
    let str = []
    const pairs = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ])

    for(let item of s){
        if(pairs.has(item)){ //如果是右括号，进行判断
            if(!str.length || str[str.length - 1 ] !== pairs.get(item)){
                return false
            }
            str.pop()
        }else{
            //如果是左括号就push进去
            str.push(item)
        }
    }

    return !str.length
};