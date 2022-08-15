// function  containsNearbyDuplic(nums, k) {
//       for(let i = 0 ; i < nums.length ; i++){
//         let n1 = nums.indexOf(nums[i])
//         let n2 = nums.lastIndexOf(nums[i])
//         if(n1 !== n2){
//           if( n2 - n1 <= k ){
//             return true
//           }
//         }
//       }
//       return false
//     }

// let nums = [1,2,3,1]
// let k = 3
// containsNearbyDuplic(nums,k)


function longestWPI(hours) {
    let normal = 0, unnormal = 0, max = 0
    let arr =[]
    hours.forEach((day) =>{
      if(day > 8){
        unnormal = unnormal + 1
        arr.push(day)
      }else{
        normal = normal + 1
        arr.push(day)
      }
      if(normal > unnormal){
        arr.shift()
      }
      if(normal < unnormal){
        max = Math.max(max,arr.length)
      }
    })
    return max

  }