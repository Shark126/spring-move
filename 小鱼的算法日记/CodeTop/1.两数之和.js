var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        let num = target - nums[i]
        if(map.has(num)){
            console.log([map.get(num),i]);
            return [map.get(num),i]
        }
        map.set(nums[i],i)
    }
};

twoSum([1,2,3,4,5],6)

 
function debounce(fun,time){
    let timer
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            let args = arguments
            fun.apply(this,args)
        },time)
    }
}

function throllte(fun,time){
    let t1 = 0
    return function(){
        let t2 = new Date()
        if(t2 - t1 > time){
            let args = arguments
            fun.apply(this,args)
            t1 = t2
        }
    }
}
