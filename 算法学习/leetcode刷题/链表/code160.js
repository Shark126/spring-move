// 160.相交链表
// 哈希集合思想
var getIntersectionNode = function(headA, headB) {
    let setHead = new Set()
    let temp = headA
    while(temp){
        setHead.add(temp)
        temp = temp.next
    }
 
    temp = headB
    while(headB){
        if(setHead.has(headB)){
            return headB
        }else{
            headB = headB.next
        }
    }
    return null
 };

// 双指针思想
var getNode = function(headA,headB){
    if( !headA || !headB) return null
    let she = headA
    let you = headB

    while(she != you){
        she = she ? she.next : headB
        you = you ? you.next : headA
    }
    return you
}