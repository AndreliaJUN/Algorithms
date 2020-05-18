// Function.prototype.myCall=function(ob){
//     const obj=ob||window;
//     obj.sayName=this;
//     let arg=[...arguments].slice(1);
//     let result;
//     result=arg.length>1?obj.sayName(...arg):obj.sayName();
//     delete obj.sayName;
//     return result;
// }
// Function.prototype.myApply=function(obj){
//     const o=obj||window;
//     o.fn=this;
//     let result;
//     result=arguments[1]?o.fn(...arguments[1]):o.fn();
//     return result;
// }
// Function.prototype.myBind=function(obj){
//     const o=obj||window;
//     o.fn=this;
//     var arg=[...arguments].slice(1);
//     return function(){
//         var allArg=arg.concat([...arguments]);
//         return o.fn(...allArg);
//     }
// }
// var person1={
//     name:"xiaohong",
//     sayName:function(a,b){
//         console.log(a+b+this.name);      
//     }
// }
// var person2={
//     name:"aa"
// }
// var f=person1.sayName.myBind(person2,"你好，");
// f("我是");//你好，我是aa
// js的继承
// 第一种 原型链继承
// 将子类的原型设置为父类的实例
// 能拿到原型链上的属性
// 子类的实例共享同一个原型，其中一个实例修改原型会影响其他的实例
// 第二种 构造函数继承
// 在子类中使用call来调用父类的构造函数
// 解决了原型链继承中子类实例共享父类引用对象的问题，实现多继承
// 缺点是只能继承父类构造函数上的属性无法继承原型上的属性  实例并不是父类的实例，只是子类的实例
// 第三种 组合继承
// 前两种方式的组合
// 既能。。。又能。。。
// 缺点是父类的构造函数执行了两次，造成内存上的浪费
// 第四种 寄生组合
// call create 
// 第五种 extends

// var publish={};
// publish.mesList={};
// publish.listen=function(type,fn){
//         if(!this.mesList[type]){
//             this.mesList[type]=[];
//         }
//         this.mesList[type].push(fn);
// }
// publish.trigger=function(type,...args){
//     const fns=this.mesList[type];
//     if(!fns||fns.length===0){
//         return false;
//     }
//     fns.forEach(fn=>{
//         fn.apply(publish,args);
//     })

// }
// var a={
//     "type":[function(){console.log("haha")}]
// }
// console.log(a);;
// console.log(a["type"]);
// { type: [ [Function] ] }
// [ [Function] ]


// var publish={};
// publish.clintList={};
// publish.listen=function(type,fn){
//     if(this.clintList[type]==null){
//         this.clintList[type]=[];
//     }
//     this.clintList[type].push(fn);
// }
// publish.trigger=function(type,...args){
//     const fns=this.clintList[type];
//     if(!fns||fns.length===0){
//         return false;
//     }
//     fns.forEach(fn=>{
//         fn.apply(publish,args);
//     })
// }
// 手写apply
Function.prototype.myApply=function(obj){
    const o=obj||window;
    o.fn=this;
    var result=arguments[1]?o.fn(...arguments[1]):o.fn();
    delete o.fn;
    return result;
}
// 手写call
Function.prototype.myCall=function(obj){
    const o=obj||window;
    o.fn=this;
    var args=[...arguments].slice(1);
    var result=args.length>0?o.fn(...args):o.fn();
    delete o.fn;
    return result;
}
// 手写bind
Function.prototype.myBind=function(obj){
    const context=obj||window;
    context.fn=this;
    var args=[...arguments].slice(1);
    return function(){
        var allArgs=args.concat([...arguments]);
        return arguments.length>0?obj.fn(...[args.concat([...arguments])]):obj.fn(...args);
    }
}
Function.prototype.myBind = function ( obj ) {
    obj = obj || window;
    obj.fn = this;
    let args = [ ...arguments ].slice( 1 );

    return function () {
        let allArgs = args.concat( [ ...arguments ] );
        return allArgs.length > 0 ? obj.fn( ...allArgs ) : obj.fn();
    }
}


public class Solution {
    public boolean hasPath(char[] matrix, int rows, int cols, char[] str)
    {
        //标志位，初始化为false
        boolean[] flag = new boolean[matrix.length];
        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                 //循环遍历二维数组，找到起点等于str第一个元素的值，再递归判断四周是否有符合条件的----回溯法
                 if(judge(matrix,i,j,rows,cols,flag,str,0)){
                     return true;
                 }
            }
        }
        return false;
    }
     
    //judge(初始矩阵，索引行坐标i，索引纵坐标j，矩阵行数，矩阵列数，待判断的字符串，字符串索引初始为0即先判断字符串的第一位)
    private boolean judge(char[] matrix,int i,int j,int rows,int cols,boolean[] flag,char[] str,int k){
        //先根据i和j计算匹配的第一个元素转为一维数组的位置
        int index = i*cols+j;
        //递归终止条件
        if(i<0 || j<0 || i>=rows || j>=cols || matrix[index] != str[k] || flag[index] == true)
            return false;
        //若k已经到达str末尾了，说明之前的都已经匹配成功了，直接返回true即可
        if(k == str.length-1)
            return true;
        //要走的第一个位置置为true，表示已经走过了
        flag[index] = true;
         
        //回溯，递归寻找，每次找到了就给k加一，找不到，还原
        if(judge(matrix,i-1,j,rows,cols,flag,str,k+1) ||
           judge(matrix,i+1,j,rows,cols,flag,str,k+1) ||
           judge(matrix,i,j-1,rows,cols,flag,str,k+1) ||
           judge(matrix,i,j+1,rows,cols,flag,str,k+1)  )
        {
            return true;
        }
        //走到这，说明这一条路不通，还原，再试其他的路径
        flag[index] = false;
        return false;
    }
 
 
}



function hasPath(matrix, rows, cols, path) {
    if (rows <= 0 || cols <= 0 || !path) return false;
    let strLength = 0;//当前要匹配的字符串下标
    var visitedArr = new Array();
    //初始化标记数组
    for (let i = 0; i < rows; i++) {
        visitedArr[i] = new Array();
        for (let j = 0; j < cols; j++) {
            visitedArr[i][j] = false;
        }
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (hasPathCore(matrix, rows, cols, path, strLength, row, col, visitedArr))
                return true;
        }
    }
    return false;
}

function hasPathCore(matrix, rows, cols, path, strLength, row, col, visitedArr) {
    if (path[strLength] == undefined) return true;

    var hasPath = false;
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

// class Solution {
//     double power(double base, int exp) {
//         if (exp == 1) return base;
//         if ((exp & 1) == 0) {
//             int tmp = power(base, exp >> 1);
//             return tmp * tmp;
//         } else {
//             int tmp = power(base, (exp - 1) >> 1);
//             return tmp * tmp * base;
//         }
//     }
// public:
//     double Power(double base, int exp) {
//         if (base == 0) {
//             if (exp > 0) return 0;
//             else if (exp == 0) return 0;
//             else throw invalid_argument("Invalid input!");
//         } else {
//             if (exp > 0) return power(base, exp);
//             else if (exp == 0) return 1;
//             else return 1 / power(base, -exp);
//         }
//     }
// };