function printMatrix(matrix) {
    var row = matrix.length;
    var col = matrix[0].length;
    var len = row * col;
    var circleNum = 0;
    var result = [];
    if (row == 0 || col == 0) {
        return null;
    }
    while (result.length != len) {
        //从左到右打印一行
        for (let j = circleNum; j < col-circleNum; j++) {
            result.push(matrix[circleNum][j]);
        }
        if (result.length == len) {
            break;
        }
        for (let i = circleNum + 1; i < row - circleNum; i++) {
            result.push(matrix[i][col - circleNum - 1]);
        }
        if (result.length == len) {
            break;
        }
        for (let j = col - circleNum - 2; j >= circleNum; j--) {
            result.push(matrix[row - circleNum - 1][j]);
        }
        if (result.length == len) {
            break;
        }
        for (let i = row - circleNum - 2; i > circleNum; i--) {
            result.push(matrix[i][circleNum]);
        }
        circleNum++;
    }
    return result;
}