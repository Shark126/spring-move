var getIntersectionNode = function(headA, headB) {
    let A = headA
    let B = headB
    while (A != B) {
            A = A != null ? A.next : headB;
            B = B != null ? B.next : headA;
        }
        return A;
};
//双指针解法