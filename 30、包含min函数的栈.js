// var stack=[];
// function push(node)
// {
//     stack.push(node);
// }
// function pop()
// {
//     return stack.length==0?null:stack.pop();
// }
// function top()
// {
//    return stack.length==0?null:stack[stack.length-1];
// }
// function min()
// {
//     return Math.min.apply(this, stack);
// }
var stack=[];
var minStack=[];
function push(node)
{
	stack.push(node);
	if(minStack.length===0||node<minStack[minStack.length-1]){
		minStack.push(node);
	}else{
		minStack.push(minStack[minStack.length-1]);
	}
}
function pop()
{
	if( stack.length === 0 ){
        return null;
    }
   if(minStack.length!==0){
	  
	   minStack.pop();
	  
   }
   return  stack.pop();
}
function top()
{
   return stack.length==0?null:stack[stack.length-1];
}
function min()
{
    if(minStack.length === 0){
        return null;
    }else{
        return minStack[minStack.length - 1];
    }
}