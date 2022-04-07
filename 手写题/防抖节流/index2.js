// 这是节流
// 节流就是说函数在规定时间里只能被触发一次，如果这个单位时间内触发多次，也只有一次生效
// 可以理解为是射击游戏的枪的射速，不管你点击频率多快，它的射速都一样

// 应用场景： 1.鼠标不断的点击，设置节流让它只触发一次
//          2.监听滚动事件，比如是否滚到地步加载更多，用节流来判定

function jieliu(fun,time){
    let t1 = 0
    return function(){
        let t2 = new Date()
        let args = arguments
        if(t2 - t1 > time){
            fun.apply(this,args)
            t1 = t2
        }
    }
}