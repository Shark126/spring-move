// 给定一个排序的整数数组 nums 和一个整数目标值 target ，请在数组中找到 target ，
// 并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let L = 0
    let R = nums.length - 1
    let mid = 0 
    let guess = 0

    while( L <= R ){
        mid =  L + ((R-L)>>1)
        guess = nums[mid]

        if(guess == target){
            return mid
        }

        if( guess > target ){
            R = mid - 1
        }else{
            L = mid + 1
        }
    }
    return L
};

 

