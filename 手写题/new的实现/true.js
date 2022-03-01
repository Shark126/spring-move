function myNew(ctor){
 if(typeof ctor !== 'function'){
     throw '参数不是一个函数'
 }
 myNew.target = ctor
 var newObj = Object.create(ctor.prototype)
 var arrsObj = [].slice.call(arguments,1)

 var objReturn = ctor.apply(newObj,arrsObj)

 var isObject = typeof objReturn === 'object' && objReturn !== null
 var isFunction = typeof objReturn === 'function'
 if(isObject || isFunction){
     return objReturn
 }

 return newObj
}

function MyBaby(name,age){
    this.name = name
    this.age = age
}

var newObj = myNew(MyBaby,'王敏',22)
console.log(newObj);

