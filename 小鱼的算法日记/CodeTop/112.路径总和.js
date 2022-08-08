var hasPathSum = function(root, targetSum) {
    const traversal = (node,count) =>{
        if(!node.right && !node.left && count === 0) return true
        if(!node.right && !node.left) return false
        if(node.right && traversal(node.right,count - node.right.val)) return true
        if(node.left && traversal(node.left,count - node.left.val)) return true
        return false
    }

    if(!root) return false
    return traversal(root,targetSum - root.val)
};