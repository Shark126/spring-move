// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.length == 1){
        if(nums[0] == target) return 0
        else return -1
    }
    let low = 0
    let mid = 0
    let guess = 0
    let high = nums.length - 1

    while(low <= high){
        mid = Math.floor((low + high)/2)
        guess = nums[mid]

        if(guess == target) return mid

        if(guess > target){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return  -1
};