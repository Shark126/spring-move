var permute = function(nums){
    let res = [] , path = []
    backTracking(nums,nums.length,[])
    return res

    function backTracking(n,k,used){
        if(path.length === k){
            return res.push(Array.from(path))
        }
        for(let i = 0 ; i < k ; i++){
            if(used[i]) continue
            path.push(n[i])
            used[i] = true
            backTracking(n,k,used)
            path.pop()
            used[i] = false
        }
    }
}