function myNew(ctor){
    if( typeof ctor !== 'function'){
        throw '这个参数不是函数!'
    }
    myNew.target = ctor

    var newObj = Object.create(ctor.prototype)
    var arrs = [].slice.call(arguments,1)

    var ctorResult = ctor.apply(newObj,arrs)

    var isObject = typeof ctorResult === 'object' && typeof ctorResult !== null
    var isFunction = typeof ctorResult === 'function' 
    if(isObject || isFunction){
        return ctorResult
    }

    return newObj
}

function MyBaby(name,age){
    this.name = name
    this.age = age
}

var newObj = myNew(MyBaby,'王敏',22)
console.log(newObj);