var compareVersion = function(version1, version2) {
    let a = version1.split('.')
    let b = version2.split('.')
    let maxLength = Math.max(a.length,b.length)
    for(let i = 0 ; i < maxLength ; i++){
        let pre = a[i] || 0
        let next = b[i] || 0
        if(pre === next) continue
        if(parseInt(pre) > parseInt(next)){
            return 1
        }else if(parseInt(pre) < parseInt(next)){
            return -1
        }
    }
    return 0
};