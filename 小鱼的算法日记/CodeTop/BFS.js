//广度优先打印二叉树
var levelOrder = function(root) {
    //存储结果
    const res = [];
    //判断是否为空
    if(root == null){
        return res
    }
    //声明一个队列
    const queue = [];
    queue.push(root);

    while(queue.length>0){
        //队列：先进先出，拿到第一个值，也就是root。
        //此时queue.为空
        let curNode = queue.shift();
        //把curNode.val值添加到res
        res.push(curNode.val);
        //判断左右边是否有值
        if(curNode.left){
            queue.push(curNode.left)
        }
        if(curNode.right){
            queue.push(curNode.right)
        }
    }
    return res
};

let root = [3,9,20,null,null,15,7]
levelOrder(root)