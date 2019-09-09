const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    var imgPath=path.join(__dirname,'/mei.jpg');
    var imgSrc=fs.readFileSync(imgPath);
    var base64Data=imgSrc.toString("base64");
    var imgBufferSrc="data:image/jpg;base64,"+base64Data;
    var htmlContent="<html><head></head>"+"<body><img src='"+imgBufferSrc+"'/></body>"
    +"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
}).listen(8083);

console.log("i'm listening 8083");