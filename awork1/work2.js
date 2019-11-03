const http=require("http");
const fs=require('fs');
const path=require('path');
const url=require("url");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=='/list'){
        var filePath=path.join(__dirname,'./chapterList.html');
        var fileContent=fs.readFileSync(filePath).toString();
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }else if(pathName=='/detail'){
        pathName="chapter";

        showIndex(res,pathName);
        // console.log("detail");
        // var urlObj=url.parse(req.url,true);
        // console.log(urlObj.query.chapterId);
        // var filePath=path.join(__dirname,'./chapter.html');
        // var fileContent=fs.readFileSync(filePath).toString();
        // res.writeHead(200,{"Content-Type":"text/html"});
        // res.write(fileContent);
        // res.end();
    }else if(pathName=='/listmanager'){
        var filePath=path.join(__dirname,'./list.html');
        var fileContent=fs.readFileSync(filePath).toString();
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }else if(pathName=='/addChapter'){
        showIndex(res,pathName)
        // var filePath=path.join(__dirname,'./addChapter.html');
        // var fileContent=fs.readFileSync(filePath).toString();
        // res.writeHead(200,{"Content-Type":"text/html"});
        // res.write(fileContent);
        // res.end();
    }else if(pathName=='/login'){
        showIndex(res,pathName);
        showImg(res,"login_bg.jpg");

    }
}).listen(8083);

function showIndex(res,pathName){
    var filePath=path.join(__dirname,pathName+'.html');
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();

};
function showImg(res,pathName){
    var imgPath=path.join(__dirname,pathName);
    var imgContent=fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/jpg"});
    res.end(imgContent);
}

console.log("listening 8083");