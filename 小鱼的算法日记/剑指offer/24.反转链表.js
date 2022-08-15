var reverseList = function(head) {
    let pre = null
    let cur = head
    let temp
    while(cur){
        temp = cur.next
        cur.next = pre
        pre = cur 
        cur = temp
    }
    return pre
};