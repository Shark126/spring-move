function flatten1(arr){
    return arr.flat(Infinity)
}

function flatten2(arr){
    return arr.toString().split(',').map(item => parseFloat(item))
}


function flatten3(arr){
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten3(arr[i]))
        }else{
            result.push(arr[i])
        }
    } 
    return result
}

let arr = [1,[2,3,[4,5]],6]

console.log(flatten3(arr));

// 