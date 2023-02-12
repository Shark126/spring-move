// bind函数的实现步骤
// 1. 判断调用对象是否为函数，可能会出现使用call等方式调用的情况
// 2. 保存当前函数的引用，获取其余传入参数值
// 3. 创建一个函数返回
// 4. 函数内部使用apply来绑定函数调用，需要判断函数作为构造函数的情况，
// 这个时候需要传入当前函数的this给apply调用，其余情况都传入指定的上下文对象

// bind 函数实现
Function.prototype.myBind = function(context){
    // 判断调用对象是否为函数
    if(typeof this !== 'function'){
        throw new TypeError('Error')
    }

    //获取参数
    var args = [...arguments].slice(1)
    var fn = this

    return function Fn(){
        //根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}

var arr1 = [1,2,3]
var arr2 = [2,3,4]
console.log(arr1.concat(arr2));