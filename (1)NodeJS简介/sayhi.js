const http=require("http");

var server=new http.Server();

server.on("request",function(req,res){

    res.write("my name is lily, I'll sayhi to you");
    res.end();
})

server.listen(8087);

console.log("I'm listening 8087");