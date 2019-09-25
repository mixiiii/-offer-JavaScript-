/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    var newHead, tmp;
    if (!pHead) {
        return null;
    }
    if (!pHead.next) {
        return pHead;
    }
    newHead = ReverseList(pHead.next);
    tmp = pHead.next;
    tmp.next = pHead;
    pHead.next = null;
    return newHead;
}