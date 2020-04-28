
// const publish = {
//     clientList: [  ],//console.log(area,price);
//     // 监听
//     listen: function ( fn ) {
//         this.clientList.push( fn );
//     },
//     // 触发
//     trigger:function(...arg){
//         this.clientList.forEach(event=>{
//             event.apply(publish,arg);
//         })
//     }
// }
// 基本版
const publish = {};//发布者
publish.clientList = [];//事件列表

// 订阅者往事件列表添加事件
publish.listen = function ( fn ) {
    this.clientList.push( fn );
}
// 发布者发布事件
publish.trigger = function ( ...args ) {
    this.clientList.forEach( event => {
        event.apply( publish, args );
    } )
}
publish.listen( ( area, price ) => {
    console.log( area, price );
} );
publish.trigger( '60', '120' );
