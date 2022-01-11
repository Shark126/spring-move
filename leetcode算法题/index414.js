//找出第三大的值，如果没有就返回最大的数字
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b);
    nums.reverse();
    for (let i = 1, diff = 1; i < nums.length; ++i) {
        if (nums[i] !== nums[i - 1] && ++diff === 3) { // 此时 nums[i] 就是第三大的数,在两数不相等的情况下加diff
            return nums[i];
        }
    }
    return nums[0];
};

//总结：在if判断语句中可以放 参数++等条件