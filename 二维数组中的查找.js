function Find(target, array) {
    let row = array.length, col = array[0].length;
    for (let i = row - 1, j = 0; i >= 0 && j < col;) {
        if (target == array[i][j]) {
            return true;
        } else if (target > array[i][j]) {
            j++;
            continue;
        } else if (target < array[i][j]) {
            i--;
            continue;
        }
    }
    return false;
}