
/*function RandomListNode(x){
this.label = x;
this.next = null;
this.random = null;
}*/
function Clone ( pHead ) {
	if ( pHead == null ) {
		return null;
	}
	cloneNodes( pHead );
	cloneRandom( pHead );
	return reconnectNodes( pHead );
}
function cloneNodes ( pHead ) {
	var current = pHead;
	while ( current ) {
		var cloneNode = {
			label: current.label,
			next: current.next
		};
		current.next = cloneNode;
		current = cloneNode.next;
	}
}
function cloneRandom ( pHead ) {
	var current = pHead;
	var cloneNode = null;
	while ( current ) {
		cloneNode = current.next;
		if ( current.random ) {
			cloneNode.random = current.random.next;
		} else {
			cloneNode.random = null;
		}
		current = cloneNode.next;
	}
}
function reconnectNodes ( pHead ) {
	var current = pHead;
	var cloneNode = pHead.next;
	var cloneHead = pHead.next;
	while ( current ) {
		current.next = cloneNode.next;
		current = cloneNode.next;
		if ( current ) {
			cloneNode.next = current.next;
			cloneNode = current.next;
		} 
	}
	return cloneHead;
}
// 拆分成三步

// 1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N·,把N·直接放在N的next位置，让复制后的链表和原始链表组成新的链表。

// 2.给复制的链表random赋值，即N.random=N.random.next。

// 3.拆分链表，将N·和N进行拆分，保证原始链表不受影响。