// ES6 自带API flat处理
const arr = [1,[2,[3,[4,5]]],6]

function flatten(params){
    return params.flat(Infinity)
}
console.log(flatten(arr));

//toString扁平化
const arr1 = [1,[2,[3,[4,5]]],6]
function flatten1(arr){
    return arr.toString().split(',').map(item =>parseInt(item))
}
console.log(flatten1(arr1));


//递归思想
function flatten2(arr){
    let result = [ ]
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten2(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flatten2(arr))