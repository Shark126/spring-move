// 冒泡排序测试
const bubbleSort = arr =>{
    console.time('运行时间')
    let len = arr.length
    if(len <= 1) return
    for(let i = 0 ; i < len - 1 ; i++ ){
        let isChange = false
        for(let j = 0 ; j < len - i - 1 ; j++ ){
                if(arr[j] > arr[j+1]){
                    let temp =  arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    isChange = true
                } 
        }
        if(!isChange){
            break
        }
    }
    console.log('排序后的arr:',arr);
    console.timeEnd('运行时间')
}

let arr = [1,3,,56,7,8,9,655,32,6,4,8]
bubbleSort(arr)