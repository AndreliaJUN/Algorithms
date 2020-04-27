function shellSort(a){
    for(gap=3;gap>0;gap--){
        for(var i=0;i<gap;i++){
            for(var j=i+gap;j<a.length;j+=gap){
                if(a[j]<a[j-gap]){
                    var temp=a[j];
                    var k=j-gap;
                    while(k>=0&&a[k]>temp){
                        a[k+gap]=a[k];
                        k=k-gap;
                    }
                    a[k+gap]=temp;
                }
            }
        }
    }
    return a;
}
// 就是在插入排序外层多了两层循环并且将原来是1的替换成gap