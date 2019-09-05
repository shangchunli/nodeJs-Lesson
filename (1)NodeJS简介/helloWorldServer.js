const http=require("http");

var server=http.createServer(function(req,res){
    res.write("hello world");
    res.end();
})

server.listen(8080);
console.log("I'm listening 8080");