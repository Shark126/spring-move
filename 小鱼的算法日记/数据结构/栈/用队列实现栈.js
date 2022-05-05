// 232. 用栈实现队列
// 双栈思路分析，由于队列是先入先出，栈是先入后出，所以我们最新push进去的数要后面出来，也就是说我们新push进去的数要放在栈底部。
// 那么我们用两个栈，一个栈用作储存，另一个栈用于作暂存处理
// 假设我们第一个栈为s1，第二个栈为s2
// 当新元素进来的时候，我们将s1中原来的元素依次弹出并push进s2，此时将新元素push进s1，然后再将s2中原来的元素弹出，再push进s1


// 每次pop或者peek时,输出栈为空则将输入栈的全部数据依次弹出并压入输出栈,这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序


var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

MyQueue.prototype.pop = function() {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack.pop();
};

MyQueue.prototype.peek = function() {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function() {
    return this.outStack.length === 0 && this.inStack.length === 0;
};

MyQueue.prototype.in2out = function() {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
};