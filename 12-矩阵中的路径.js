function hasPath(matrix, rows, cols, path)
{
    if(rows<=0||cols<=0||!path) return false;
    let strLength=0;//当前要匹配的字符串下标
    var visitedArr=new Array();
    // 初始化标记数组
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            visitedArr[2][j]=false;
        }
    }
    for(let row=0;row<rows;row++){
        for(let col=0;col<cols;col++){
            //循环遍历二维数组，找到起点等于path第一个元素的值，再递归判断四周是否有符合条件的----回溯法
            if(hasPathCore(matrix, rows, cols, path, strLength, row, col, visitedArr)){
                return true;
            }
        }
    }
    return false;
}
// 初始矩阵，矩阵总行数，矩阵总列数，要匹配的字符串路径，匹配的字符串当前匹配到的位置下标，当前匹配到的行和列，标志数组
function hasPathCore(matrix,rows,cols,path,strLength,row,col,visitedArr){
    // 递归终止条件
    // 若strLength已经到path的末尾了，说明之前的都已经匹配成功了，直接返回true即可
    if (path[strLength] == undefined) return true;

    var hasPath=false;
    if (row >= 0 && row < rows && col >= 0 && col < cols && arr[row][col] == path[strLength] && !visitedArr[row][col]) {
        visitedArr[row][col] = true;
        ++strLength;
        hasPath = hasPathCore(matrix, rows, cols, path, strLength, row, col + 1, visitedArr) ||
            hasPathCore(matrix, rows, cols, path, strLength, row, col - 1, visitedArr) ||
            hasPathCore(matrix, rows, cols, path, strLength, row + 1, col, visitedArr) ||
            hasPathCore(matrix, rows, cols, path, strLength, row - 1, col, visitedArr)

        if (!hasPath) {
            --strLength;
            visitedArr[row][col] = false;
        }
    }
    return hasPath;
}