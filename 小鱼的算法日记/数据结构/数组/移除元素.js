// 27题，移除元素
var removeElement = function(nums, val) {
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == val){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
};

// 第二种解法 ， 双指针
// 同样是两种指针，左指针指向下一个将要赋值的位置，右指针指向当前要处理的元素
// 思路：如果右指针指向的值不等于val，说明它是属于要输出的值，将其赋值给左指针，同时将左右指针同时向右边移动。
// 如果右指针指向的值 等于 val 说明这个值要被输出，它不能存在数组里，此时左指针不动，右指针移动。
var removeVal = function(nums,val){
    const len = nums.length;
    let left = 0;
    for(let right = 0 ; right < len ; right++){
        if(nums[right] !== val){
            nums[left] = nums[right]
            left++
        }
    }
    return left
}