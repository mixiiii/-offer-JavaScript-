/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    var i = 0, stack = [];
    var tmp = head;
    while (tmp) {
        stack.push(tmp);
        tmp = tmp.next;
    }
    let result;
    for (let j = 0; j < k; j++){
        result = stack.pop();
    } 
    return result;
}