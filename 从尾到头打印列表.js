/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    if(!head){
        return 0;
    }else{
        var curr = head,arr=[];
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr.reverse();
    }
}