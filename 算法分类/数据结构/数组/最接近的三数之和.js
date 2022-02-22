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
//但这种跑起来特别慢 O(n三次方)

//优化
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>{a-b})
    let result = nums[0] + nums[1] + nums[2]
    for(let i = 0 ; i < nums.length - 2 ; i++){
        let start = i + 1 
        let end = nums.length - 1
        while(start < end){
            let sum = nums[i] + nums[start] + nums[end]
            if(Math.abs(target - sum) < Math.abs(target - result)){
                result = sum
            }
            if(sum > target){
                end --
            }
            else if(sum < target){
                start ++
            }
            else {return result}
        }
        return result
    }

}