// // 模拟实现new操作符

function newOperator(ctor){
    if(typeof ctor !== 'function'){
        throw '这个的第一个参数必须是一个函数!'
    }
    newOperator.target = ctor
    //1.创建一个全新的对象
    //2.并将新对象的__Proto__指向构造函数的prototype
    //通过new创建的每个对象都会被[[prototype]]链接到这个函数的prototype对象上
    var newObj = Object.create(ctor.prototype)
    //除去arguments的其余参数，先将其转为数组，然后切割
    //除去ctor的其余参数
    var argsArr = [].slice.call(arguments,1)

    //3.生成新的对象绑定到函数调用的this
    //获取到ctor函数的返回结果

    var ctorReturnResult = ctor.apply(newObj,argsArr)
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction){
        return ctorReturnResult;
    }
     // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象
    return newObj
}
