// 测试用例
let myUndefined = void 0
let myNull  = null
let myboolean = true
let myString = '1'
let myNumber = 1
let mySymbol = Symbol()
let myBigInt = 123n


let myObject = {
    a: '你好',
    b: 123
}

let myArray = [1,2,3,4,5,6]
let myFunction = function(){
    console.log('余涛真帅');
}
let myDate = new Date()
// 1.用typeof  typeof判定 对象、数组、null（机器码为000 对应对象的类型标签都为000）为object

// 2.用instancof 只能判定引用对象，不能判定基本类型（因为是用看能否在原型链上找到原型）

// 3.constructor  直接().constructor === 对应的类型   还有一个用法是 实例.constructor === 它的构造函数

// 4.Object.prototype.toString.call()  因为toString是Object的原型方法，而Array和Function作为实例，重写了toString 所以要借用


console.log(myboolean == myString);
console.log('1' == { name: 'js' });
console.log(-0 === +0);
console.log(Object.is(NaN,NaN));