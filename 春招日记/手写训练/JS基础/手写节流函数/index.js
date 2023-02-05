function throttle(fn,delay){
    let curTime = new Date()

    return function(){
        let context = this
        let args = arguments
        let nowTime = new Date()

        if(nowTime - curTime >= delay){
            curTime = new Date()
            return fn.apply(context,args)
        }
    }
}

function jieliu(fn,delay){
    let curTime = new Date()

    return function(){
        let context = this
        let args = arguments
        let nowTime = new Date()

        if(nowTime - curTime >= delay){
            curTime = new Date()
           return fn.apply(context,args)
        }
    }
}