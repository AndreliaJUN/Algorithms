function reOrderArray(array)
{
	var arr1=[];
	var arr2=[];
	for(var i=0;i<array.length;i++){
		if(array[i]%2!==0){
            arr1.push(array[i]);
		}else{
			arr2.push(array[i]);
		}
	}
	return arr1.concat(arr2);
}