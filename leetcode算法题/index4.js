let nums1 = [1,3]
let nums2 = [2]


function zhong(nums1 , nums2) {
    let nums = nums1.concat(nums2)
    nums.sort(c)
    // console.log(nums);
    if(nums.length == 0){return nums[0]}
    if(nums.length%2 !== 0){
        console.log(nums[((nums.length-1)/2)]);
        return nums[((nums.length-1)/2)]
    }else if(nums.length%2 == 0){
        let left = nums.length/2 - 1
        let right = nums.length/2
        console.log((nums[left] + nums[right])/2);
        return ((nums[left] + nums[right])/2)
    }
}
function c(a,b) {
    return a - b
}
zhong(nums1,nums2)