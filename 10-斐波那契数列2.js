function jumpFloor(number)
{
    if(number<=2){
        return number;
    }
    var f1=1;
    var f2=2;
    for(var i=3;i<=number;i++){
        f3=f1+f2;
        f1=f2;
        f2=f3;
    }
    return f3;
    
}