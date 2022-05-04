// 283 移动0
var moveZeroes = function(nums) {
    let len = nums.length
    for(let i = 0 ; i < len ; i++){
        if(nums[i] == 0){
           nums.push(nums[i])
           nums.splice(i,1)
        }
    }
    console.log(nums);
    return nums
};
var nums = [0,1,0,3,12]

moveZeroes(nums)

// 双指针写法
// 两个指针同时从0出发，左指针遇0等待，右指针遇到非0数与左指针进行交换就行，当右指针遍历完后，全部交换完毕。
var move = function(nums){
    let len = nums.length
    let left = 0,right = 0
    while(right < len){
        if(nums[right]){
            [nums[left],nums[right]] = [nums[right],nums[left]]
            left++
        }
        right++
    }
    return nums
}