// 冒泡排序

// 思想

// 冒泡排序只会操作相邻的两个数据。
// 每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求。如果不满足就让它俩互换。
// 一次冒泡会让至少一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作。

// 特点

// 优点：排序算法的基础，简单实用易于理解。
// 缺点：比较次数多，效率较低。


// 未优化
const bubbleSort  = arr =>{
    console.time('改进前冒泡排序耗时');
    const length = arr.length;
    if(length < 1) return
    // i < length - 1 是因为外层只需要lengh-1次就排好了，第length次比较是多余的
    for(let i = 0 ; i < length - 1 ; i++){
        // j < length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
        for(let j = 0 ; j < length - i - 1 ; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log('改进前arr:',arr);
    console.timeEnd('改进前冒泡排序耗时');
}

// 优化：当某次冒泡操作已经没有数据交换时，说明已经达到完全有序，不用再继续执行后续的冒泡操作。

// 已优化
const bubbleSort2 = arr =>{
    console.time('改进后的冒泡牌序耗时')
    const length = arr.length
    if( length < 1) return 
    for(let i = 0 ; i < length - 1 ; i++){
        let hasChange = false //提前退出冒泡循环的标志位
        for(let j = 0 ; j < length - i - 1 ; j++ ){
            if(arr[j] > arr[j+1]){
                const temp = arr[i]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                hasChange = true
            }
        }
        if(!hasChange) break //如果false 说明所有元素已经都到位，没有数据交换，提前退出
    }
    console.log('改进后 arr :', arr);
	console.timeEnd('改进后的冒泡牌序耗时');
}
const arr = [7, 8, 4, 5, 6, 3, 2, 1]
bubbleSort(arr)
bubbleSort2(arr)