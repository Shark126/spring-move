// 23.合并k个升序列表
// 归并大法好，分治保平安

var mergeKLists = function(lists) {
    if(!lists.length) return null; 
    return mergeList(lists, 0, lists.length - 1);
};

function mergeList(lists, start, end) {
    if(start === end) {
        return lists[start];
    }
    const mid = start + ((end - start) >> 1);
    const leftList = mergeList(lists, start, mid);
    const rightList = mergeList(lists, mid + 1, end);
    return merge(leftList, rightList); 
}

function merge(head1, head2) {
    let newHead = new ListNode(0), p = newHead;
    while(head1 && head2) {
        if(head1.val <= head2.val) {
            p.next = head1;
            head1 = head1.next;
        } else {
            p.next = head2;
            head2 = head2.next;
        }
        p = p.next;
    }
    p.next = head1 ? head1 : head2;
    return newHead.next;
}
