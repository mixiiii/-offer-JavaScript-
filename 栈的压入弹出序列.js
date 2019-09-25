function IsPopOrder(pushV, popV) {
    var indexPre, indexNow;
    var flag = [];
    if (pushV.length == 1) {
        return pushV[0] == popV[0];
    }
    for (let i = 1; i < popV.length; i++) {
        flag[i] = 0;
    }
    flag[pushV.indexOf(popV[0])] = 1;
    if (popV.length < 3) {
        return true;
    }
    for (let i = 1; i < popV.length - 1; i++) {
        indexPre = pushV.indexOf(popV[i - 1]);
        indexNow = pushV.indexOf(popV[i]);
        for (let j = indexPre; j >= 0; j--) {
            if (flag[j] == 0) {
                indexPre = j;
                break;
            }
        }
        if (indexNow == indexPre) {
            flag[indexNow] = 1;
            continue;
        } else if (indexNow > indexPre) {
            flag[indexNow] = 1;
            continue;
        } else {
            return false;
        }
    }
    return true;
}