var stack1 = [], stack2 = [];
function push(node) {
    stack1.push(node)
}
function pop() {
    var tmp = stack1.pop();
    while(tmp){
        stack2.push(tmp);
        tmp = stack1.pop();
    }
    var result = stack2.pop()
    tmp = stack2.pop();
    while(tmp){
        stack1.push(tmp);
        tmp = stack2.pop();
    }
    return result;
}