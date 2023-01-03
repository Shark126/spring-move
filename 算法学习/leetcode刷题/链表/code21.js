// 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

var mergeTwoLists = function(l1, l2){
    const preHead = new ListNode(-1)

    let pre = preHead

    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            pre.next = l1
            l1 = l1.next
        }else{
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }

    pre.next = (l1 == null) ? l2 : l1
    return preHead.next
}