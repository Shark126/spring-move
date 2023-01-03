// 只考虑对象类型

function shallowCopy(obj){
    if(typeof obj !== 'object')return

    let newObj = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]  = obj[key]
        }
    }
    return newObj
}

let obj = [1,2,3,4,5,6]
let newObj = shallowCopy(obj)
console.log('新数组为',newObj);