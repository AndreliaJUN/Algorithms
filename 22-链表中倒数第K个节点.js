/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
	// 1.考虑鲁棒性，判断输入是否合法
    if(head==null||k===0){
		return null;
	}
	var pAhead=head;
	var pBehind=null;
	// 2.考虑如果链表的节点数少于k，那么for循环中遍历链表中遍历链表可能会出现指向null的next
	// 所以我们要在for循环中加一个if判断
	for(var i=0;i<k-1;i++){
		if(pAhead.next!==null)
		pAhead=pAhead.next;
		else return null;
	}
	pBehind=head;
	while(pAhead.next!==null){
		pAhead=pAhead.next;
		pBehind=pBehind.next;
	}
	return pBehind;
}