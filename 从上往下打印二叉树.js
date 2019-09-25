/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    if(!root){
        return [];
    }
    var queue = [];
    queue.push(root);
    var result = [];
    while(queue.length){
        var tmp = queue.shift();
        result.push(tmp.val);
        if(tmp.left){
            queue.push(tmp.left);
        }
        if(tmp.right){
            queue.push(tmp.right);
        }
    }
    return result;
}