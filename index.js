function getLongestPalindrome( str ) {
    let max = 0
    let map = new Map()
    // write code here
    for(let i = 0 ; i < str.length ; i++){
        let n1 = str.indexOf(str[i])
        let n2 = str.lastIndexOf(str[i])
        let n = n2 - n1 
        if(n > max){
            max = n
            map.set(max,[n1,n2])
        }
    }
    let arr = map.get(max);
    return str.slice(arr[0],arr[1]+1)
    
}

let str = 'cbeaeba'
getLongestPalindrome(str)