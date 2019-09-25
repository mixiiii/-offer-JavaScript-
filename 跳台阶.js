function jumpFloor(number) {
    var times = [];
    times[0] = 1;
    times[1] = 2;
    if (number <= 0) {
        return 0;
    }
    for (let i = 2; i < number; i++) {
        times[i] = times[i - 2] + times[i - 1];
    }
    return times[number - 1];
}