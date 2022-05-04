// 203 . 移除链表元素
var removeElements = function(head,val){
    const dummyHead = new NodeList(0)
    dummyHead.next = head
    let temp = dummyHead
    while(temp.next !== null){
        if(temp.next.val == val){
            temp.next = temp.next.next
        }else{
            temp = temp.next
        }
    }
    return dummyHead.next
}

// 无敌的迭代，先定义一个空节点，将空节点的next指向head，然后开始while循环，遇到等于val的值，直接将其next指向到下下个就行了，最后返回该空节点的next。