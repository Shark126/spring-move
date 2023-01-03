/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let n = nums.length
    nums.sort(c)
    if(nums[n-1] !== n ) return n
    for(let i = 0 ; i < n ; i++){
        if(nums[i] != i) return i
    }
};
function c ( a, b ){
    return a - b 
}

//手撕instanceof
function instance_of(L,R){
    const baseType = ['number','string','symbol','boolean','undefined']
    if(baseType.includes(L)) return false

    let RP = R.prototype
    L = L.__proto__
    while(true){
        if(L === null){
            return false
        }
        if(L === RP){
            return true
        }
        L = L.__proto__
    }
}
