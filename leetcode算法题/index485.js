// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0  
//     let maxcount = 0
//     for( let i = 0 ; i < nums.length  ; i++){
//         if(nums[i] == 1){
//             count = count + 1
//             maxcount = Math.max(count,maxcount)
//         }else{
//             maxcount = Math.max(count,maxcount)
//             count = 0 
//         }
//     }
//     return maxcount
// };

let nums = [1,1,0,1,1,1]
var findMaxConsecutiveOnes = function(nums) {
    let newArr = nums.toString()
    let arr = newArr.split('0')
    console.log(arr);
    for(item of arr){
        console.log(item.length);
    }
};

findMaxConsecutiveOnes(nums)