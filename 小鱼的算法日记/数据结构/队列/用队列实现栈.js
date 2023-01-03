// 225 用队列实现栈
let MyStack = function(){
    this.queue = []  //作为主队列，用于存储数据
    this._queue = [] //作为暂存队列，用于临时存放数据
}

MyStack.prototype.push = function(x){
    this.queue.push(x)
}

MyStack.prototype.pop = function(){
    while(this.queue.length > 1){ //如果主队列始终有大于1的值，就一直循环，将主队列从头开始移除到暂存队列中，最后主队列中剩下的那个值就是栈顶元素
        this._queue.push(this.queue.shift())
    }
    let ans = this.queue.shift() //用一个变量存储栈顶元素,并将其移除
    while(this._queue.length){
        this.queue.push(this._queue.shift()) // 将暂存队列中的数，依次从头push进去主队列
    }
    return ans
}

MyStack.prototype.top = function(){
    return this.queue.slice(-1)[0] //返回栈顶的元素
}

MyStack.prototype.empty = function(){
    return !this.queue.length 
}