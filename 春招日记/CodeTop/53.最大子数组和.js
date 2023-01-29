function maxSubArray(arr){
    let res = arr[0]
    let sum = 0
    for(let item of arr){
        if(sum > 0){
            sum = item + sum
        }else{
            sum = item
        }
        res = Math.max(sum,res)
    }console.log(res);
    return res
}

let arr = [5,4,-1,7,8]
maxSubArray(arr)