// f=防抖函立即执行版本
function now1(fun,wait,isOk){
    let timer
    return function(){
        if(isOk){
            isOk = !isOk
            fun.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(() =>{
            fun.apply(this,arguments)
        },wait)
    }
}