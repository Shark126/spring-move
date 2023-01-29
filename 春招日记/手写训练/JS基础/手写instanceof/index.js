const { isReadable } = require("stream")

function myInstanceOf(left,rigth){
    let proto = Object.getPrototypeOf(left)
    let prototype = rigth.prototype

    while(true){
        if(!proto) return false  //查找到顶还是找不到 说明就不是 那就返回false
        if(proto === prototype) return true

        //此层未寻得，那就接着下一层
        proto = Object.getPrototypeOf(proto)
    }
}

console.log(myInstanceOf('2',String));


