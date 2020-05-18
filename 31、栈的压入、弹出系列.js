function IsPopOrder(pushV, popV)
{
	if (!pushV || !popV ) {
        return;
      }
   var stack=[];
   var idx=0;
   for(var i=0;i<pushV.length;i++){
	   stack.push(pushV[i]);
	   while(stack.length&&stack[stack.length-1]===popV[idx]){
		   stack.pop();
		   idx++;
	   }
	   
   }
   return stack.length===0;
}
// 1.借助一个辅助栈来模拟压入、弹出的过程。

// 2.设置一个索引idx，记录popV（出栈序列）栈顶的位置

// 3.将pushV（压入顺序）中的数据依次入栈。

// 4.当辅助栈栈顶元素和压popV栈顶元素相同时，辅助栈出栈。每次出栈索引idx+1。

// 5.出栈有可能在任意一次入栈后进行，当辅助栈栈顶元素和压popV栈顶元素相同时，继续让pushV入辅助栈。

// 6.当所有数据入栈完成，如果出栈顺序正确，那么辅助栈应该为空。

