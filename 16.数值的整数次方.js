function Power(base, exponent)
{
    if(base===0){
		if(exponent>0) return 0;
		else if(exponent===0) return 0;
		else  throw new Error("分母不能小于等于0");
	}
	else{
		if(exponent>0) return power(base,exponent);
		if(exponent===0) return 1;
		if(exponent<0) return 1/power(base, -exponent);
	}
}
function power(base,exponent){
	if(exponent===1) return base;
	var result=power(base,exponent>>1);
	result*=result;
	if(exponent&1===1){
		result*=base;
	}
	return result;
}
