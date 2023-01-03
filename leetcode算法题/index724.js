// 寻找数组的中心索引
// 给你一个整数数组 nums ，请计算数组的 中心下标 。

// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let all = 0;
    let flag = 0;
    for(let item of nums.values()){
        all += item
    }
    if((all-nums[0]) == 0){
        return 0
    }

    for( let i = 0 ; i < nums.length ; i++){
        let leftNums = 0;
        flag += nums[i]
        if(i != 0){
            leftNums = flag - nums[i]
        }
        while(leftNums == all - flag){
            return i
        }
    }
    return -1

};

// 思路：先将数组所有内容相加起来，判断是否存在下标为0的情况。
// 然后进入下一层循环，计算出假设中心下标左边的和，用总和减去得到右边的和，进行比对，得出结果