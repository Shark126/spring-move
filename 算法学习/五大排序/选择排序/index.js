const selectSort = arr =>{
    let len = arr.length
    let minIndex,temp
    for(let i = 0 ; i < len - 1 ; i++){
        minIndex = i
        for(let j = i + 1 ; j < len ; j++ ){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log('排序后的arr:',arr);
    return arr
}

const arr = [ 1,2,4,32,1,2,1,5,6,78,6,5 ]
selectSort(arr)