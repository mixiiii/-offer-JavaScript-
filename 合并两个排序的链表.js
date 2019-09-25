/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    if (!pHead1) {
        return pHead2 ? pHead2 : null;
    }
    if (!pHead2) {
        return pHead1;
    }
    var p1 = pHead1, p2 = pHead2;
    var result = new ListNode(-1);
    var curr = result;
    while (p1 && p2) {
        if (p1.val < p2.val) {
            curr.next = p1;
            p1 = p1.next;
        } else {
            curr.next = p2;
            p2 = p2.next;
        }
        curr = curr.next;
    }
    if (p1) {
        curr.next = p1;
    }
    if (p2) {
        curr.next = p2;
    }
    curr = result.next;
    result.next = null;
    result = curr;
    curr = p1 = p2 = null;
    return result;
}