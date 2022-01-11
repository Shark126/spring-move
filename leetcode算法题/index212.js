// 寻找重复数组2   212题
// 初始版本
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let newNmus = [...new Set(nums)]
    if(nums.length < newNmus.length) return false

    for(let i = 0 ; i < nums.length ; i++){
        let res = nums[i]
        let ret = nums.lastIndexOf(res)
        if(ret != -1 && (ret - i) <= k ){
            return true
        }
    }
};
//第二版本
//set版本
//set版本
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        return true
      }
      set.add(nums[i])
      if (set.size > k) {
        set.delete(nums[i - k])
      }
    }
    return false
  };
//   map版本
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return true
      }
      map.set(nums[i], true)
      if (map.size > k) {
        map.delete(nums[i - k])
      }
    }
    return false
  };
  //数组版本
  const queue = []
  for (let i = 0; i < nums.length; i++) {
    if (queue.includes(nums[i])) {
      return true
    }
    queue.push(nums[i])
    if (queue.length > k) {
      queue.shift()
    }
  }
  return false

  //object版本
  var containsNearbyDuplicate = function(nums, k) {
    const object = {}
    for (let i = 0; i < nums.length; i++) {
      if (object[nums[i]]) {
        return true
      }
      object[nums[i]] = true
      if (Object.keys(object).length > k) {
        delete object[nums[i - k]]
      }
    }
    return false
  };

  //object版本
  var containsNearbyDuplicate = function(nums, k) {
    const object = {}
    for (let i = 0; i < nums.length; i++) {
      if (object[nums[i]]) {
        return true
      }
      object[nums[i]] = true
      if (Object.keys(object).length > k) {
        delete object[nums[i - k]]
      }
    }
    return false
  };