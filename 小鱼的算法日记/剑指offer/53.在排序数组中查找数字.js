var search = function(nums, target) {
    if(nums.indexOf(target) === -1 ) return 0
    let index = nums.indexOf(target)
    let count = 0
    for(let i = index ; i < nums.length ; i++ ){
        if(nums[i] === target){
            count += 1
        }
    }
    return count
};

// 方法二
var search = function(nums, target) {
    if(nums.indexOf(target) === -1 ) return 0
    let index1 = nums.indexOf(target)
    let index2 = nums.lastIndexOf(target)
    return index2 - index1 + 1
};

// 方法三
var search = function(nums, target) {
    
    // 1.创建哈希表
    let map = new Map();

    // 2.遍历数组忘哈希表中加入元素
  for(let i of nums){
      if(map.has(i)){
          map.set(i,map.get(i) + 1)
      }else{
          map.set(i,1);
      }
  }

    // 3.判断返回值
  if(map.has(target)){
      return map.get(target);
  }else{
      return 0;
  }
};
