// 142.环形链表Ⅱ
// 看是否为环 还要找到连接的结点
var detectCycle = function(head) {
    let slow = head , fast = head
    let isCycle = false
    while(slow != null && fast.next != null && fast.next.next != null){
        slow = slow.next
        fast = fast.next.next
        if(fast == slow){
          isCycle = !isCycle
          break;
        }
    }

    if(isCycle){
        let nowHead = head
        while(nowHead != slow){
            nowHead = nowHead.next
            slow = slow.next
        }
        return nowHead
    }else{
        return null
    }
    
};