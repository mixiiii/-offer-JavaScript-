/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
    if (pre.length == 0 || vin.length == 0) {
        return null;
    }
    var index = vin.indexOf(pre[0]);
    var left = vin.slice(0, index);
    var right = vin.slice(index + 1);
    var node = new TreeNode(vin[index]);
    node.left = reConstructBinaryTree(pre.slice(1, index + 1), left);
    node.right = reConstructBinaryTree(pre.slice(index + 1), right);
    return node;
}