// 给你一个单链表的头节点head，请你判断该链表是否为回文链表。如果是，返回true；否则，返回false

var isPalindrome = function(head) {
     // 判断头节点，空 or 单个直接返回 true
     if (head == null || head.next == null) {
        return true;
    }
    
    // 定义快慢指针
    let slow = head, fast = head;
    // 定义指针 cur 记录当前位置 & pre 记录前一位置
    let cur = head, pre = null;
    // 非空判断，注意 fast.next.next 要保证 fast != null && fast.next != null
    // 快指针是慢指针后移速度的两倍，使得循环结束后，慢指针位于链表中间位置
    // 在后移过程中反转链表前半部分
    while(fast != null && fast.next != null) {
        cur = slow  //记录下当前需要翻转的部分
        slow = slow.next //因为需要翻转的已经保存好了，所以指针开始移动
        fast = fast.next.next//不解释
        cur.next = pre // 将当前那个值指向pre ，也就是反转部分
        pre = cur //  
    }
    // 如果链表长度为单数，慢指针后移
    // 0 1 2 3 4 5 ^; 0 1 2 3 4 5 6 ^
    //       s     f        s     f 
    if(fast != null) {
        slow = slow.next;
    }
    // 遍历链表后半部分和已经反转的前半部分
    while(pre != null && slow != null) {
        if(pre.val != slow.val) {
            return false;
        }
        pre = pre.next;
        slow = slow.next;
    }
    return true;
};