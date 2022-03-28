// map会返回新数组，遍历完后与原数组不一样，因为内存地址都变了
// map可以使用break中断循环，可以使用return返回到外层函数
// map和foreach只能通过return中断当次循环，不能终止函数，foreach会用抛出错误的方式来终止函数
const arr = [1,2,3,4,5];
const new_arr = arr.map((item) =>{
    return item 
});
console.log(arr === new_arr);

// for会通过continue方式来跳过当次迭代

// foreach不会返回新数组，而且不能用break终止循环，只能通过错误捕捉的方式去终止
try{
    let data = [1,2,3,4,5,6]
    data.forEach((val,index,arr)=>{
        console.log(`当前第${index+1}循环执行了`)
        if(val>3){ 
            throw new Error();
        }
        console.log('val', val)
    })
}catch(e) {
   
}
console.log("继续执行")