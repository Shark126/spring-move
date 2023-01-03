// 节流函数得立即执行版本
function throttleNow(fun,wait){
    let doNow = null
    return function(){
        if(!doNow){
            fun.apply(this,arguments)
            doNow = setTimeout(() =>{
                doNow = null;
            },wait)
        }
    }
}


function jl(fun,wait){
    let doNow = null
    return function(){
        if(!doNow){
            fun.apply(this,arguments)
            doNow = setTimeout(()=>{
                doNow = null
            },wait)
        }
    }
}
// 防抖节流都涉及了闭包的知识