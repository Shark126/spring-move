// offer53 在排序数组中查找数字Ⅰ


// 没啥说的，用map直接秒掉了
var search = function(nums, target) {
    let count = 0
    nums.forEach((item) =>{
       if(item == target){
           count++
       }
   })

   return count
};

search([5,7,7,8,8,10],8)

// 不过面试官要你用二分法做，看到排序数组就是二分法
var search = function(nums,target){
    
    var findRight =function(x,nums){
    let L = 0 , R = nums.length - 1

    while(L <= R){
        mid = L + ((R-L)>>1)
        if(nums[mid] <= x){
            L = mid + 1
        }else{
            R = m-1
        }
        return L
    }
}

   return findRight(target,nums) - findRight(target-1,nums)
}



