function Fibonacci(n)
{
    if(n<=1){
        return n;
    }
    var f0=0;
    var f1=1;
    for(var i=2;i<=n;i++){
        var f2=f0+f1;
        f0=f1;
        f1=f2;
    }
    return f2;
}