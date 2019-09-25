function VerifySquenceOfBST(sequence) {
    var len = sequence.length;
    if (!len) {
        return false;
    }
    return judge(0, len - 1);
    function judge(start, end) {
        if (start >= end) {
            return true;
        }
        var root = sequence[end];
        // for (let i = start; i < end && sequence[i] < root; i++);
        // var index = i;
        // for (i = i + 1; i < end; i++) {
        //     if (sequence[i] < root) {
        //         return false;
        //     }
        // }
        for (var i = start; i < end && sequence[i] < root; i++);
        var index = i;
        for (i = i + 1; i < end; i++) {
            if (sequence[i] < root) {
                return false;
            }
        }
        return judge(start, index - 1) && (judge(index, end - 1));
    }
}