// var obj = {
//         name: 'baidu',
//         arr: ['a', 'b', 'c']
// }

// var obj2 = obj
// var arr = obj.arr

// obj2.arr = ['a', 'b', 'c', 'd']
// obj2.name = 'inke'

// console.log(arr) //['a', 'b', 'c']
// console.log(obj.name) // 'inke'
// console.log(obj === obj2) // true
// console.log(obj.arr === obj2.arr) // true
// console.log(obj.arr === arr) // false

// var MAP = {
//         onclick: function () {

//         },

//         curry: function (val) {
//                 return function (z) { // 100++ + 200
//                         return val++ + z
//                 }
//         }
// }

// var getInfo = function (val) {
//         return MAP[val]
// }
// var fn = getInfo('curry')

// var a = fn(100)

// console.log(a(200))// 300
// console.log(a(300)) // 401
// console.log(fn(100)(200)) // 300
// console.log(getInfo('curry')(100)(300)) // 400


// var name = 'oop'
// var Person = function (options) {
//         this.name = options.name
// }
// Person.prototype.name = 'iron man'
// Person.prototype.getName = function () {
//         return this.name
// }
// Person.getName = function() {
//     return this.name;
// }
// console.log(Person.name);
// var p = new Person({ name: 'inke' })

// console.log(p.constructor ===  Person) // true
// console.log(p instanceof Person) // true
// console.log(p.__proto__ === Person.prototype) // true
// console.log(p.hasOwnProperty('name')) // true
// console.log(p.hasOwnProperty('getName')) // true
// var getName = p.getName
// console.log(getName === Person.prototype.getName) // true
// console.log(getName()) // oop
// console.log(Person.prototype.getName()) // undefined
// console.log(p.getName()) // inke
// console.log(Person.getName()) //iron man ???
// console.log(Person.name);


// let const
// () => {}
// Set() weakSet()
// Map() weakMap()
// Promise
// Proxy reflect
// let { data } = obj 解构赋值
// [...data]
// [a,b] = [ b ,a]

// var arr = [1, 3, 4, 2, 5, 8, 6]
// const size = arr.length
// let temp
// for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size - 1; j++) {
//                 if (arr[j] > [arr[j + 1]]) {
//                         temp = arr[j]
//                         arr[j] = arr[j + 1]
//                         arr[j + 1] = temp
//                 }
//         }
// }

// for (let i = 0; i < size; i++) {
//         for (let j = i + 1; j < size; j++) {
//                 if (arr[i] > arr[j]) {
//                         temp = arr[i]
//                         arr[i] = arr[j]
//                         arr[j] = temp
//                 }
//         }
// }

// console.log(arr);

// beforeCreate(){},
// created() {},
// beforeMount() {},
// 挂载
// mounted() {}, // 访问
// beforeUpdate() {},
// updated() {},
// beforeDestroy() {},
// destroyed() {},

// git add *
// git add ./someData
// git -m commit '注释'
// git push 推到远程仓库
// git pull 拉取远程仓库
// git clone 克隆远程仓库
// git restHard master 清空缓冲区
