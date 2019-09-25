function reOrderArray(array) {
    var resule = [], even = [];
    if(array.length == 0){
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2==1){
            resule.push(array[i]);
        }else{
            even.push(array[i]);
        }
    }
    return resule.concat(even);
}