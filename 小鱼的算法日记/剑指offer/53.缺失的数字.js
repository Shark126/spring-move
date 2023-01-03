var missingNumber = function(nums) {
        if (nums[nums.length - 1] === nums.length - 1) {
            return nums.length;
        }
        var start = 0, end = nums.length - 1, mid;
        while (start <= end) {
            mid = start + Math.floor((end - start) / 2);
            if (nums[mid] === mid) {//说明小于mide的是不缺少的
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start; //start已经大于end了
};

// 数学方法，整数和与 元素和作差

var missingNumber = function(nums) {
    const n = nums.length + 1;
    let total = Math.floor(n * (n - 1) / 2);
    let arrSum = 0;
    for (let i = 0; i < n - 1; i++) {
        arrSum += nums[i];
    }
    return total - arrSum;
};
