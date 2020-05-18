/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList ( pHead ) {
    // 定义三个指针，分别指向当前节点curNode,当前节点的前一个节点preNode,当前节点的后一个节点nextNode
    var preNode = null;
    var curNode = pHead;
    var reverseHead = null;
    while ( curNode != null ) {
        var nextNode = curNode.next;
        // 当当前节点没有下一个节点的时候，那么它就是原来链表的尾节点 也是反转后链表的头节点
        // 我们先找到要输出的最终的头节点再去反转链表
        if ( nextNode == null ) {
            reverseHead = curNode;
        }
        // 开始反转
        curNode.next=preNode;
        preNode=curNode;
        curNode=nextNode;
    }
        return reverseHead;
}
// 反转的过程结合p143的图
// a->b->...->h->i->j->null
// null<-a<-b<-...<-h<-i<-j
// 初始化三个指针: curNode=pHead=a(从头开始反转，第一个当前节点是头节点),
// preNode=null(初始化前一个节点，因为头节点的前一个节点是null),
// nextNode=curNode.next=b;
// 第一次反转:
// a.next=null;preNode=a;curNode=b;   null<-a b(cur)
// 第二次反转:
// b.next=a; preNode=b;curNode=c   a<-b c(cur)
// 最后一次反转:
// j.next=i;  preNode=j ; curNode=null null <- a <- b <- ... <- h <- i <- j
