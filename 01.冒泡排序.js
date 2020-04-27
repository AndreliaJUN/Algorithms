function bubbleSort(arr) {
    var len = arr.length;
    // 第一层循环控制趟数，第二层循环控制每趟比较的次数
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            // 最后的是已经排序好的不用再比较了，所以-i,-1是因为有arr[j+1]防止数组下标越界
            if (arr[j] > arr[j+1]) {        
                var temp = arr[j+1];       
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}