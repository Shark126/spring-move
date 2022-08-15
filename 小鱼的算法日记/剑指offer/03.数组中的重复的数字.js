var findRepeatNumber = function(nums) {
    nums.sort((a,b)=>{ return a - b})
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === nums[i+1]){
            console.log(nums[i]);
            return nums[i]
        }
    }
};

let nums = [2,3,1,0,2,5,3]
findRepeatNumber(nums)

// 哈希字典
var findRepeatNumber = function(nums) {
    let obj = {}
    let cur
    for(let i = 0; i < nums.length; i++){
        cur = nums[i]
        if(obj[cur] == true){
            return cur
        }else{
            obj[cur] = true
        }
    }
}