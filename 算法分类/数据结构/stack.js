//栈和队列可以认为是特殊的数组
const arr = [1,2]

arr.unshift(0) //[0,1,2]

arr.push(3) //[1,2,3]

arr.splice(1,0,3) // 起始的索引值 要删除的值 插入进去值 1，3，2

const arr = [1,2,3]

arr.pop()//arr = [1,2]
arr.push(4)//arr = [1,2,3,4]
