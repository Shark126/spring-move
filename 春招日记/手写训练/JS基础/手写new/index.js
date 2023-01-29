//首先创建空对象
//设置原型，将对象的原型设置为函数的prototype对象
//让函数的this指向这个对象，执行构造函数的代码（为对象添加属性）
//判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个引用类型的对象
function objectNew(){
    let newObject = null
    let constructor = Array.prototype.shift.call(arguments)
    let result = null
    if(typeof constructor !== 'function'){
        console.log('type error',constructor);
        return
    }

    newObject = Object.create(constructor.prototype)//设置原型
    result = constructor.apply(newObject,arguments)//this 指向新对象 并执行函数

    //判断返回对象
    let flag = result && (typeof result === "object" || typeof result === "function")
    return flag ? result : newObject

}



function createA(age){
    this.age = age
    this.name = '余涛'
}
let A = objectNew(createA,18)
console.log(A);