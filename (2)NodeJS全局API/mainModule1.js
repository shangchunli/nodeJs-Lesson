var circleModule=require("./circleModule.js");
var r=process.argv[2];
console.log("圆的半径:"+r);
console.log("圆的周长:"+circleModule.circumference(r));
console.log("圆的面积:"+circleModule.area(r));


//⑤中实验是将构造函数公开，通过调用构造函数中的方法计算出周长和面积
//⑥是将对象公开,通过调用定义在对象上面的函数计算周长和面积