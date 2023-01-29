var obj = {
  name: 'baidu',
  arr: ['a', 'b', 'c']
}

var obj2 = obj //此时obj与obj2的引用地址都是指向同一个地方
var arr = obj.arr //此时获取的是 obj内的arr的指针指向的内存地址中的 ['a','b','c']

obj2.arr = ['a', 'b', 'c', 'd'] //由于arr是引用类型，这相当于把指针指向了新数组，但是原地址中的['a','b','c']未改变
obj2.name = 'inke'//没啥说

console.log(arr) // ['a','b','c']
console.log(obj.name) // inke
console.log(obj === obj2) // true 必须的
console.log(obj.arr === obj2.arr)// true 必须的
console.log(obj.arr === arr)// false
//第一次提交test