var isPalindrome = function(head) {
    const vals = [];
        while (head !== null) {
            vals.push(head.val);
            head = head.next;
        }
        for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
            if (vals[i] !== vals[j]) {
                return false;
            }
        }
        return true;
    };
    //把链表转为数组来做
    //按数组来做有些取巧说实话