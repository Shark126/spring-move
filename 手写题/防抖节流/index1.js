// 这是防抖
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
// 可以理解为防抖就是玩游戏时的技能回调，当你没读完时又去点技能就会重新读条


// 应用场景： 1.搜索框，避免用户在输入时不断的发送请求，节约请求资源
//          2.window去操纵屏幕的size时候，不断变化也会一直触发事件，所以对其设置防抖使其只触发一次


let addBtn = document.getElementById('add')
function addOne(){
    console.log('增加一个');
}
function debounce(fun,time){
    let timer
    return function(){
        clearTimeout(timer)
        let args = arguments
        timer = setTimeout(()=>{
            fun.apply(this,args)
        },time)
    }
}
addBtn.addEventListener('click',debounce(addOne,2000))

function fangdou(fun,time){
    let timer
    return function(){
        clearTimeout(timer)
        let args = arguments
        timer = setTimeout(() =>{
            fun.apply(this,args)
        },time)
    }
}


// 立即执行版本
function fd(fun,time,isOk){
    if(isOk){
        isOk = !isOk
        fun.apply(this,arguments)
    }
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
        fun.apply(this,arguments)
    },time)
}

