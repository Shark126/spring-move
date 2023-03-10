// 1. 双重暴力循环
// 先定义一个包含原始数组第一个元素的数组，然后遍历原始数组，
// 将原始数组中的每个元素与新数组中的每个元素进行比对，
// 如果不重复则添加到新数组中，最后返回新数组；因为它的时间复杂度是O(n^2)，如果数组长度很大，效率会很低。
function quchong(arr){
    let len = arr.length
    for(let i = 0 ; i < len ; i ++){
        for(let j = i + 1 ; j < len ; j ++){
            if(arr[i] === arr[j]){
                arr.splice(j,1)
                len -- 
                j --
            }
        }
    }
}

// let arr = [1,1,1,2,3,4,4,5,6,6]
// quchong(arr)
// console.log(arr);


// 2. 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，如果不等则说明该元素是重复元素
function quchong2(arr) {
    let newArr = arr.filter((item, index)=> {
        return arr.indexOf(item) === index
    })
    console.log(newArr);
}

let arr = [1,1,1,2,3,4,4,5,6,6]
quchong2(arr)
// console.log(newArr);

//  3. Array.sort加一行遍历冒泡
function quchong3(arr){
    var res = []
    var sortedArray = arr.concat().sort()
    var seen
    for(var i = 0 ; i < arr.length ; i++){
        if(!i || seen !== sortedArray[i]){
            res.push(sortedArray[i])
        }
        seen = sortedArray[i]
    }
    return res
}

// 4. 用set
function quchong4(arr){
    return Array.from(new Set(arr))
}
// 简化
function easy(arr){
    return [...new Set(arr)]
}
// 再简化
let soEasy = (arr) => [...new Set(arr)]


// 5. Object 键值对去重
function quchong5(arr){
    var obj = {}
    return arr.filter(function(item,index,arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true )
    })
}

// 6. 键值对去重 
// 7. reduce去重