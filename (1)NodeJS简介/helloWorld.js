const http = require("http");

//回调函数  第一个请求参数 第二个回应参数
var server = http.createServer(function(req,res){
    res.write("hello world");
    res.end();
});

server.listen(8081);
console.log("server is listening 8081");
//127.0.0.1   http:localhost:8081显示上述hello world字符串
/*
1、shift+鼠标右键  点击打开power shell窗口

2、编译node.js文件  node+文件名

3、每次修改了js文件后，需要重新执行node+文件名

4、node中的js文件，必须得编译才能执行
*/