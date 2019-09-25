function Fibonacci(n) {
    var Fib = [];
    Fib[0] = 1;
    Fib[1] = 1;
    if(n == 0){
        return 0;
    }
    for (let i = 2; i < n; i++){
        Fib[i] = Fib[i-2] +Fib[i-1];
    }
    return Fib[n-1];
}