// 给定一个无重复元素的有序整数数组 nums 。

// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

var summaryRanges = function (nums) {
    let res = [], begin = nums[0], end = nums[0]
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] === end + 1) {
            end++
            continue
        }
        res.push(begin === end ? begin.toString() : begin + "->" + end)
        begin = nums[i]
        end = nums[i]
    }
    return res
};

//与非条件可以取代if else
//与非条件可以取代if else
