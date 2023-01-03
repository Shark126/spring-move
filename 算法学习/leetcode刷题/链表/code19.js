// 删除链表的倒数第N个节点
// 给你一个链表，删除链表的倒数第n个节点，并且返回链表的头节点

var removeNthFromEnd = function(head, n){
    // 定义快慢指针，快指针先走n步，之后同步
    let slow = head,fast = head
    for(let i = 0 ; i < n ; i++){
        fast = fast.next
    }
    if(!fast){
        return head.next
    }
    while(fast.next != null){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return head
}