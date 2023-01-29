// 622 设计循环队列
var MyCircularQueue = function(k) {
    this.capacity = k; // 容量
    this.queue = [];
    this.headIndex = 0; // 队列头部
    this.count = 0; // 队列长度
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    this.queue[(this.headIndex + this.count) % this.capacity] = value;
    this.count++;
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    // 删掉一个元素，直接把头指针向右移动1位(+1)即可，为了防止头部指针大于容器长度，这里取余
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count--;
    return true;
};

MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;
    return this.queue[this.headIndex];
};

MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;
    // 获取队尾，tailIndex=(headIndex+count−1) % capacity
    const tailIndex = (this.headIndex + this.count - 1) % this.capacity;
    return this.queue[tailIndex];
};

MyCircularQueue.prototype.isEmpty = function() {
    return (this.count == 0);
};

MyCircularQueue.prototype.isFull = function() {
    return (this.count == this.capacity);
};
