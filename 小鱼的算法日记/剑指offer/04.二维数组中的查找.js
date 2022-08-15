var findNumberIn2DArray = function(matrix, target) {
    for(let arr of matrix){
        if(arr.includes(target)){
            return true
        } 
    }
    return false
};

// 优化 一步到位
var findNumberIn2DArray = function(matrix, target) {
    for(let arr of matrix){
        if(target < arr[0]){
            break
        }
        if(arr.includes(target)){
            return true
        } 
    }
    return false
};

// 算法思想  因为是递增，右上角开始比较，target更大就下一行，更小的开始遍历
var findNumberIn2DArray = function(matrix, target) {
    for(let arr of matrix){
        if(target > arr[arr.length] || target < arr[0]){
            break
        }else{
            for(let i = arr.length ; i >= 0 ; i--){
                if(arr[i] === target){
                    return true
                }
            }
        }
    }
    return false
};