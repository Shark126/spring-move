// 剑指offer 03 数组中重复的数字
var findRepeatNumber = function(nums) {
    let myMap = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        if(myMap.has(nums[i])){
            return nums[i]
        }else{
            myMap.set(nums[i])
        }
    }
};

// 没啥好说的，map直接秒掉

// 头尾查找也许，不过时间复杂度很高
var findRepeatNumber = function(nums) {
    for(let i = 0 ; i<nums.length ; i++){
        if(nums.indexOf(nums[i]) != i) return nums[i]
    }
 };