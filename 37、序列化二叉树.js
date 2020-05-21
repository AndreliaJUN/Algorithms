/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot,arr=[])
{
    if(pRoot===null){
		arr.push('#');
	}
	else{
		arr.push(pRoot.val);
		Serialize(pRoot.left,arr);
		Serialize(pRoot.right,arr);
	}
	return arr.join(',');
}
function Deserialize(s)
{
    if(!s){
		return null;
	}else{
		return  deserialize(s.split(','));
	}
}
function  deserialize(arr){
   var node=null;
   const current=arr.shift();
   if(current!=="#"){
	   node={val:current};
	   node.left=deserialize(arr);
	   node.right=deserialize(arr);
   }
   return node;
}