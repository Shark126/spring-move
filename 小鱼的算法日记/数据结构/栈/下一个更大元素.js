// 496. 下一个更大元素 ①
// 一旦要求下一个更大的元素，就是用单调栈解！ 力扣题库相似的题目都是这个解法

// 哈希映射 + 单调栈
var nextGreaterElement = function(nums1,nums2){
    const map = new Map()
    const stack = []

    for(let i = nums2.length - 1 ; i >= 0 ; --i){
        const num = nums2[i]
        while(stack.length && num > stack[stack.length - 1]){ //如果此时num大于右边第一个，将右边第一个也就是栈顶的弹出
            stack.pop()
        }
        map.set(num,stack.length ? stack[stack.length - 1] : -1) //如果栈为空，说明此时其右边没有大于它的数，存入-1
        stack.push(num) //进栈 此时num位于stack栈顶
    }
    const res = new Array(nums1.length).fill(0).map((item,index)=>{
        map.get(nums1[index])
    })
    return res
}