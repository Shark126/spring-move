const { prototype } = require("koa2")

function myInstanceOf(left,right){
    //获取对象的原型
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype

    while(true){
        if(!proto) return false
        if(proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

console.log(mInstanceOf(2,Number));

function mInstanceOf(left,right){
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype

    while(true){
        if(!proto){
            return false
        }
        if(proto === prototype){
            return true
        }
    proto = Object.getPrototypeOf(prototype)
    }
}