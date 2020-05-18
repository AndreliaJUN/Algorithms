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
	// 最优解并不是必须切1次，可以不切
	var products=[number+1];
	products[0]=0;
	products[1]=1;
	products[2]=2;
	products[3]=3;
	var max=0;
	for(var i=4;i<=number;++i){
		max=0;
		for(var j=1;j<=i/2;++j){
			var result=products[j]*products[i-j];
			if(max<result){
				max=result;
			}
			products[i]=max
		}
	}
	max=products[number];
	delete products;
	return max;
}