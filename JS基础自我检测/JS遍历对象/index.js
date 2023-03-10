// 1. for in ，for（const key in obj） 也可以遍历数组，可以遍历一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性
// 好像是会遍历原型链上的属性，因此不推荐使用来遍历数组
const obj = {
    name: "nordon",
    age: 12
  };
  
  for (const key in obj) {
    console.log(key, '---', obj[key]);
  }

// 2. for of 取巧，设计初衷是为了迭代一些拥有可迭代对象 Array、Set、Map、argiments
// 所以我们要将普通对象改造为可迭代对象
const iteratorObj = {
    *[Symbol.iterator]() {
        yield 'name'
        yield 'age'
    },
    name: "nordon",
    age: 12,
};

for (const key of iteratorObj) {
    console.log(key, "---", iteratorObj[key]);
}

// 3. Objec.keys  将一个对象自身可枚举属性组成数组并返回，最终得到由对象的可枚举key值组成的数组。
const obj2 = {
    name: 'yt',
    age: 21,
    sex: true
}

Object.keys(obj2).forEach(key =>{
    console.log(key,obj2[key]);
})

// 4. Object.entries 方法可以将一个对象自身可枚举属性的键值对作为数组返回
// console.log(Object.entries(obj2));

for(const [key,value] of Object.entries(obj2)){
    console.log(key,'------',value);
}