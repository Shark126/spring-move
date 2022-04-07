// 快排
const quicklySort = arr =>{
    if(arr.length <=1){
        return arr
    }
    let midIndex = Math.floor(arr.length/2)
    let valArr = arr.splice(midIndex,1)
    let midVal = valArr[0]
    let leftArr = []
    let rightArr = []

    for(let i = 0 ; i < arr.length ; i++ ){
        if(arr[i] < midVal){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    return quicklySort(leftArr).concat(midVal,quicklySort(rightArr))

}

const array = [5,4,3,2,1]
console.log('排序好后的数据:',quicklySort(array));