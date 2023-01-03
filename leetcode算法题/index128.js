/**
 * @param {number[]} nums
 * @return {number}
 */
let nums  = [0,3,7,2,5,8,4,6,0,1]
 function longestConsecutive(nums) {
    nums.sort(c)
    let head = nums[0]
    let end = 1
    let arr = []
    for( let i = 1 ; i < nums.length ; i ++){
        if(nums[i] == head + 1){
            end = end + 1
            head = nums[i]
            continue
        }
        arr.push(end)
        head = nums[i]
        end = 1
    }
    arr.sort(c)
    console.log(arr);
    return arr[arr.length - 1]
};
function c (a,b){
    return a - b
}
longestConsecutive(nums)


///**
var longestConsecutive = function(nums) {
   if(nums.length == 0 || nums == null) return 0
   nums.sort(c)
   let ans = 1 , l = 1
   for( let i = 1 ; i <= nums.length ; i ++){
       if(nums[i] - nums[i-1] == 0){
           continue
       }
       if(nums[i] - nums[i-1] == 1){
           l++
       }else{
           ans = Math.max(ans,l)
           l = 1
       }
   }
  ans = Math.max(ans,l)
  return ans
};
function c (a,b){
   return a - b
}