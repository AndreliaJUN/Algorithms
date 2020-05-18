const publish={};//发布者
publish.clientList={};//事件列表

publish.listen=function(type,fn){
    // 订阅者往事件列表添加事件
    if(!this.clientList[type]){
         // 如果没有存放过此类消息才创建一个针对此类消息的缓存列表
        this.clientList[type]=[];
    }
    this.clientList[type].push(fn);
};
publish.trigger=function(type,...args){
    const fns=this.clientList[type];
    // 如果没有此类型的消息则不执行
    if(!fns||fns.length===0){
        return false;
    }
    fns.forEach(fn=>{
        fn.apply(publish,args);
    });
};
// 测试
publish.listen('60',price=>{
    console.log(price);//120
});
publish.trigger('60','120');
console.log(publish);


