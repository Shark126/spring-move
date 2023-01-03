// 485 最大连续1的个数
var findMaxConsecutiveOnes = function(nums) {
   let cur = 0
   let max = 0
   for(let i = 0 ; i < nums.length ; i ++){
       cur = (cur + nums[i])*nums[i]
       if(cur > max){
           max = cur
       }
   }
   console.log(max);
   return max
};

var nums = [0,1,1,1,0,1]
findMaxConsecutiveOnes(nums)


// 常规解法2
var findMax = function(nums){
    let count = 0
    let maxCount = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == 1){
            count = count + 1
            maxCount = Math.max(count,maxCount)
        }else{
            maxCount = Math.max(count,maxCount)
            count = 0
        }
    }
    return maxCount
}