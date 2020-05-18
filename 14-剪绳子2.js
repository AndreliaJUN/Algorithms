function cutRope(number)
{
    if(number<2){
		return 0;
	}
	if(number===2){
		return 1;
	}
	if(number===3){
		return 2;
	}
	var timesOf3=Math.floor(number/3);

	// 把绳子尽可能切为多个长度为3的片段，留下的最后一段绳子的长度可能为1的情况(说明绳子最后剩下的长度为4，那么我们将减去3的次数-1，这个时候更好的方法是把绳子剪成长度为2的两段)

	if(number-timesOf3*3===1){
		timesOf3-=1;
	}
	var timesOf2=Math.floor((number-timesOf3*3)/2);
	return Math.pow(3, timesOf3)*Math.pow(2, timesOf2);
}