function VerifySquenceOfBST(sequence)
{
    if(!sequence||sequence.length===0){
		return;
	}
	var root=sequence[sequence.length-1]
	// 注意这里是小于length-1，不要比较根元素
	for(var i=0;i<sequence.length-1;i++){
		if(sequence[i]>root){
			break;
		}
	}
	for(var j=i;j<sequence.length-1;j++){
		if(sequence[j]<root){
			return false;
		}
	}
	var left=true,right=true;
	if(i>0){
		left=VerifySquenceOfBST(sequence.slice(0,i));
	}
	if(i<sequence.length-1){
		right=VerifySquenceOfBST(sequence.slice(i,sequence.length-1));
	}
	return left&&right;
}

// 1.后序遍历：分成三部分：最后一个节点为根节点，第二部分为左子树的值比根节点都小，第三部分为右子树的值比根节点都大。

// 2.先检测左子树，左侧比根节点小的值都判定为左子树。

// 3.除最后一个节点外和左子树外的其他值为右子树，右子树有一个比根节点小，则返回false。

// 4.若存在，左、右子树，递归检测左、右子树是否复合规范。