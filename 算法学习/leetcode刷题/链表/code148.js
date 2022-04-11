// 148.排序链表
// 这题可以用自顶向下的归并，也可以用自底向上

// 自顶向下的方法
const merge = (head1, head2) => {
    const dummyHead = new ListNode(0);
    let temp = dummyHead, temp1 = head1, temp2 = head2;
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }
    temp.next = temp1 ? temp1 : temp2 // 看哪个链表还有剩余，直接拼接上去就可以了
    return dummyHead.next; //返回头结点
}

const toSortList = (head, tail) => {
    if (head === null) { //如果链表直接为空，直接返回就好了
        return head;
    }
    if (head.next === tail) { // 当该结点的next为tail时，说明已经到了该段链表的有边界，拆分完毕，直接return
        head.next = null;
        return head;
    }
    let slow = head, fast = head;
    while (fast !== tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) { // 在快指针进行第二次移动时，要判断是否到达边界，如果已经到达边界就说明已经到底，跳出
            fast = fast.next;
        }
    }
    const mid = slow; // 得到中点，用于拆分链表
    return merge(toSortList(head, mid), toSortList(mid, tail)); // 由于这里的mid在toSortList的第一个参数中不参与计算，仅作为边界条件，所以第二个参数以mid为头结点
}

var sortList = function(head) {
    return toSortList(head, null); // 首先要对链表进行拆分
};