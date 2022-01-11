function process(arr,L,R){
    if(L == R){
        return
    }
    let mid = L + ((R-L)>>1)
    process(arr,L,mid);
    process(arr,mid+1,R); 
    merge(arr,L,mid,R)
}

function merge(arr,L,M,R){
    // int[] help = new int[R-L+1]
    let help = []
    let i = 0
    let p1 = L
    let p2 = M + 1

    //两边都不越界的情况下
    while(p1 <= M && p2 <= R){
        help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
    }
    //如果p1没越界就把p1里剩下的数挪到help里去
    while(p1 <= M){
        help[i++] = arr[p1++];
    }
    //如果p2没越界就把p2里剩下的数挪到help里去
    while(p2 <= R){
        help[i++] = arr[p2++];
    }
    for(let j = 0 ; j<help.length ; j++){
        arr[L + j] = help[j] //为什么是L+j，因为是在L，R范围上merge的，L不一定从0开始
    }

}

let arr = [2,34,5,1,4,6,8,9]
process(arr,0,7)
console.log(arr);


