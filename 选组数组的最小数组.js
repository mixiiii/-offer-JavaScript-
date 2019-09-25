function minNumberInRotateArray(rotateArray) {
    var len = rotateArray.length;
    for(i = 0;i<len-1;i++){
        if(rotateArray[i]>rotateArray[i+1]){
            return rotateArray[i+1];
        }
    }
}