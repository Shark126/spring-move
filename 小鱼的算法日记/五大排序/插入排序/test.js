//  插入排序
const insertionSort = arr =>{
    console.time('这是插入排序的速度')
    let len = arr.length
    if(len <= 1) return

    let preIndex,current
    for(let i = 1 ; i < len ; i++){
        preIndex = i - 1
        current = arr[i]
        while( preIndex > 0 && arr[preIndex] > current){
            arr[preIndex+1] = arr[preIndex]
            preIndex --
        }
        if(preIndex + 1 != i){
            // 避免自己赋值给自己
            preIndex[i+1] = current
        }
    }
    console.log('排序后的arr:',arr);
    console.timeEnd('这是插入排序的速度')
    return arr
}

const array = [1,3,5,6,8,62,5,84,241,2]
insertionSort(array)