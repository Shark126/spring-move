// 217 存在重复元素
var containsDuplicate = function(nums) {
    const map = new Map()
    for(let item of nums){
        if(map.has(item)){
            return true
        }else{
            map.set(item)
        }
    }
    return false
};
// 没啥说的呀，造就完了