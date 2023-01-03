// 给重复字符串加序号
// 题目描述 [ 'ab','c','d','ab','c']

function addSerial(arr){
    let result = []
    let map = new Map()
    let totalMap = new Map()
    arr.forEach(item =>{
        if(map.has(item)){
            map.set(item,map.get(item)+1)
        }else{
            map.set(item,1)
        }
        totalMap.set(item,1)
    })


    arr.forEach((item,index) => {
        if(arr.indexOf(item) == arr.lastIndexOf(item)){
            result.push(item)
        }else{
            let val = totalMap.get(item) //得到该字符串出现第几次
            result.push(item+val)
            totalMap.set(item,val+1)
        }
    });
    return result
}

console.log(addSerial(['ab','c','d','ab','c']));