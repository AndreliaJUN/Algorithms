/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // 鲁棒性问题
    if(pHead1==null){
        return pHead2;
    }
    else if(pHead2==null){
        return pHead1;
    }
    var MergeHead=null;
    // 合并是一个递归的过程
    if(pHead1.val<pHead2.val){
        MergeHead=pHead1;
        MergeHead.next=Merge(pHead1.next, pHead2)
    }
    else{
        MergeHead=pHead2;
        MergeHead.next=Merge(pHead1, pHead2.next);
    }
    return MergeHead;
}