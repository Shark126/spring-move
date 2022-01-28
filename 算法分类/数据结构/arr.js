const arr = [1,2,3,4]

const arr = new Array()
const arr = []
//这两个一样的
const arr = new Array(7)//里面会放7个empty
const arr = new Array(7).fill(1)//塞7个1

//数组循环
array.array.forEach(element => {
    
});

map//返回的是一个新的数组

//添加删除 尾部添加是push 尾部删除是pop 头部添加unshift 删除shift

// const arr = [
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5]
// ]

// const arr = new Array(7).fill([]) 不安全

const len = arr.length
for(let i = 0;i<len;i++){
    arr[i] = []
}
//正确创建方式
// slice不会影响原数组
// splice会影响原数组
// 都能切到你想要的东西