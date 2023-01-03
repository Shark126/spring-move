
// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，
// 其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    nums.sort((a,b) => a-b)
    let n = nums.length
    if(nums[0] != nums[1]){
        return nums[0]
    }else if(nums[n-1] !== nums[n-2]){
        return nums[n-1]
    } //排除了头尾两种情况


    let index = -1
    for(let i = 1 ; i < n - 1 ; i++){
        if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1]){
            index = i;
            break
        }
    }
    return nums[index]
};