// 解题思路：
// 普通栈的 push() 和 pop() 函数的复杂度为 O(1)O(1) ；而获取栈最小值 min() 函数需要遍历整个栈，复杂度为 O(N)O(N) 。

// 本题难点： 将 min() 函数复杂度降为 O(1)O(1) ，可通过建立辅助栈实现；
// 数据栈 AA ： 栈 AA 用于存储所有元素，保证入栈 push() 函数、出栈 pop() 函数、获取栈顶 top() 函数的正常逻辑。
// 辅助栈 BB ： 栈 BB 中存储栈 AA 中所有 非严格降序 的元素，则栈 AA 中的最小元素始终对应栈 BB 的栈顶元素，即 min() 函数只需返回栈 BB 的栈顶元素即可。
// 因此，只需设法维护好 栈 BB 的元素，使其保持非严格降序，即可实现 min() 函数的 O(1)O(1) 复杂度。
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.Stack = []
    this.min_stack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.Stack.push(x)
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1],x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.Stack.pop()
    this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.Stack[this.Stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.min_stack[this.min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */