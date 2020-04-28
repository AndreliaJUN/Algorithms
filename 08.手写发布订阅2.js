const publish={};
publish.clientList={};

publish.listen=function(type,fn){
    if(!this.clientList[type]){
        this.clientList[type]=[];
    }
    this.clientList[type].push(fn);
};
publish.trigger=function(type,...args){
    const fns=this.clientList[type];
    if(!fns||fns.length===0){
        return false;
    }
    fns.forEach(fn=>{
        fn.apply(publish,args);
    });
};
publish.listen('60',price=>{
    console.log(price);//120
});
publish.trigger('60','120');

