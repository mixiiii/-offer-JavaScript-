function rectCover(number) {
    if (number <= 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    } else if (number == 2) {
        return 2;
    }
    else {
        return rectCover(number - 2) + rectCover(number - 1);
    }
}