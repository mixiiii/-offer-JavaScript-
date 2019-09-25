/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    if (!pRoot1 || !pRoot2) {
        return false;
    }
    if (isSubtree(pRoot1, pRoot2)) {
        return true;
    } else {
        return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
    }

} function isSubtree(pRoot1, pRoot2) {
    if (!pRoot2) {
        return true;
    }
    if (!pRoot1) {
        return false;
    }
    if (pRoot1.val == pRoot2.val) {
        return isSubtree(pRoot1.left, pRoot2.left) && isSubtree(pRoot1.right, pRoot2.right);
    } else {
        return false;
    }
}