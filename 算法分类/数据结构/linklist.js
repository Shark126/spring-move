//数据域
let list = {
    val : 1,
    //指针域
    next: {
        val : 2,
    }
}


function ListNode(val){
    this.val = val,
    this.next = null
}

// const node = new ListNode(1)
// node.next = new ListNode(2)

const node4 = new ListNode(4)
node4.next = node2.next
node2.next = node4
//在2和3中插入4

const arr = [1,2,3,4]
const arr = ['haha',1,{a:1}]//此时数组里的元素不是连续的 因为JavaScript中的对象是存在堆里的 JavaScript未必是真正的数组 可能是链表

