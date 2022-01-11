var canJump = function(nums) {
    let count = 0
    for( let i = nums.length - 1 ; i >= 0 ; i--){
        if(nums[i] == 0){
            for(let j = i-1; j < 0 ; j--){
                if(nums[j] > i - j){
                    count = count + 1
                }
            }
            if(count == 0) return false
        }
    }
    return true
};


//  仍需优化