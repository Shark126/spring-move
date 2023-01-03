var climbStairs = function(n) {
    if(n <= 0){
        return 0
    }
    // 初始化
    let dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2

    // 关系式
    for(let i = 3 ; i <= n ; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};