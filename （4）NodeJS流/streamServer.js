const http=require("http");
const fs=require("fs");
const path=require("path");

http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/data.txt");
    var readeStream=fs.createReadStream(filePath);
    readeStream.pipe(res);
}).listen(8082);
console.log("listening 8082");

