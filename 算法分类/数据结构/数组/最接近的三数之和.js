/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let error = target + 1
    let sum = 0
    for(let i=0; i <  nums.length - 2 ; i++){
        for(let j=i+1; j < nums.length - 1 ; j++){
            for(let k=j+1; k< nums.length; k++){
                if(Math.abs(nums[i]+nums[j]+nums[k]-target) < error){
                    sum = nums[i]+nums[j]+nums[k]
                    error = Math.abs(nums[i]+nums[j]+nums[k] - target)
                }
            }
        }
    }
    return sum
};

//这个就三重循环，然后拿绝对值进行比较，将更小的绝对值保存下来，最后将最小的绝对值给返回就行