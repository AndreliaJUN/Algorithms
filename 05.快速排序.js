function quickSort(arr){
    if(arr.length===0){
        return [];
    }
    var lesser=[];
    var greater=[];
    var pivot=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            lesser.push(arr[i]);
        }
        if(arr[i]>pivot){
            greater.push(arr[i]);
        }
    }
    return quickSort(lesser).concat(pivot,quickSort(greater));
}
// 参考《数据结构与算法JavaScript描述》p164