// Function.prototype.myCall=function(ob){
//     const obj=ob||window;
//     obj.sayName=this;
//     let arg=[...arguments].slice(1);
//     let result;
//     result=arg.length>1?obj.sayName(...arg):obj.sayName();
//     delete obj.sayName;
//     return result;
// }
// Function.prototype.myApply=function(obj){
//     const o=obj||window;
//     o.fn=this;
//     let result;
//     result=arguments[1]?o.fn(...arguments[1]):o.fn();
//     return result;
// }
// Function.prototype.myBind=function(obj){
//     const o=obj||window;
//     o.fn=this;
//     var arg=[...arguments].slice(1);
//     return function(){
//         var allArg=arg.concat([...arguments]);
//         return o.fn(...allArg);
//     }
// }
// var person1={
//     name:"xiaohong",
//     sayName:function(a,b){
//         console.log(a+b+this.name);      
//     }
// }
// var person2={
//     name:"aa"
// }
// var f=person1.sayName.myBind(person2,"你好，");
// f("我是");//你好，我是aa
js的继承
第一种 原型链继承
将子类的原型设置为父类的实例
能拿到原型链上的属性
子类的实例共享同一个原型，其中一个实例修改原型会影响其他的实例
第二种 构造函数继承
在子类中使用call来调用父类的构造函数
解决了原型链继承中子类实例共享父类引用对象的问题，实现多继承
缺点是只能继承父类构造函数上的属性无法继承原型上的属性  实例并不是父类的实例，只是子类的实例
第三种 组合继承
前两种方式的组合
既能。。。又能。。。
缺点是父类的构造函数执行了两次，造成内存上的浪费
第四种 寄生组合
call create 
第五种 extends


