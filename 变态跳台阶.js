function jumpFloorII(number) {
    if(number <= 0){
        return 0;
    }
    return Math.pow(2,number-1);
}