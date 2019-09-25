function replaceSpace(str) {
    var newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            newStr[i] = '%20';
        } else {
            newStr[i] = str[i];
        }
    }
    return newStr.join('');
}