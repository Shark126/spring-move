// map会返回新数组，可以用break中断，也可以用return返回到外层函数
let arr = [1,2,3,4,5]
let newArr = arr.map(item =>{
    return item += 1
})

console.log(arr,newArr);


// forEach 不会返回新数组，不能用return返回到外层函数，也不能使用break中断
let newarr=arr.forEach(i=>{
    i+=1;
   console.log(i);//2,4,5
   })
   console.log(arr)//[1,3,4]
   console.log(newarr)//undefined