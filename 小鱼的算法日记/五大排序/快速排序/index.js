// 快速排序  递归方法
const quicklySort = arr =>{
    if(arr.length <= 1){
        return arr
    }
    let minIndex = Math.floor(arr.length/2)
    const valArr = arr.splice(minIndex, 1);
    let midVal = valArr[0]
    let leftArr = [] //用来存小的
    let rightArr = [] //用来存大的

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > midVal){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }
    return quicklySort(leftArr).concat(midVal,quicklySort(rightArr))
}
const array = [5,4,3,2,1]
console.log('排序好后的数据:',quicklySort(array));



// 复习一下快排
const quicklySort2 = arr =>{
    if(arr.length <= 1){
        return arr
    }

    let minIndex = Math.floor(arr.length/2)
    const valArr = arr.splice(minIndex,1)
    let midVal = valArr[0]
    let rightArr = [] //用来存小的
    let leftArr = [] //用来存大的
    
    for(let i = 0; i <arr.length ; i++){
        if(arr[i] > midVal){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }

    return quicklySort2(leftArr).concat(midVal,quicklySort2(rightArr))
}