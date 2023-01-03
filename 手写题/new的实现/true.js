function myNew(ctor){
    if(typeof ctor !== 'function') return false

    myNew.target = ctor
    var newObj = Object.create(ctor.prototype)
    var newArrs = [].slice.call(arguments,1) //这个方法类似Array.prototype.slice.call(arguments,1) 可以把带有length属性的东西转为类数组 

    var returnObj = ctor.apply(newObj,newArrs)
    
    var isObject = typeof returnObj === 'object' && returnObj !== null
    var isFunction = typeof returnObj === 'function'

    return (isObject || isFunction) ? returnObj : newObj
}

function MyBaby(name,age){
    this.name = name
    this.age = age
}

var newObj = oneNew(MyBaby,'余涛',22)
console.log(newObj);

function oneNew(ctor){
    if(typeof ctor !== 'function') return false
    oneNew.target = ctor
    var newObj = Object.create(ctor.prototype)
    var newArrs = [].slice.call(arguments,1)

    var returnObj = ctor.apply(newObj,newArrs)

    var isObject = typeof returnObj === 'object' && returnObj !== null
    var isFunction = typeof returnObj === 'function'

    return (isFunction || isObject) ? returnObj : newObj
}
