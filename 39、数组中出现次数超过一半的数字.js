function MoreThanHalfNum_Solution(numbers)
{
	if(numbers&&numbers.length===0){
		return null;
	}
	var temp={};
	var len=numbers.length;
	for(var i=0;i<len;i++){
		if(temp['s'+[numbers[i]]]){
			temp['s'+[numbers[i]]]++;
		}else{
			temp['s'+[numbers[i]]]=1;
		}
		if(temp['s'+[numbers[i]]]>len/2){
			return numbers[i];
		}
	}
  return 0;
}