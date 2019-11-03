const http=require("http");
const fs=require('fs');
const path=require('path');
const url=require("url");
const querystring=require("querystring");

http.createServer(function(req,res){
    var jsonPath=path.join(__dirname,'/detail.json');
    var jsonContent=fs.readFileSync(jsonPath).toString();
    var list=JSON.parse(jsonContent);

    var userPath=path.join(__dirname,'/user.json');
    var userPath=fs.readFileSync(userPath);
    var userList=JSON.parse(userPath);
    // console.log(userList[0].username);
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    // console.log(urlObj);
    if(pathName=='/list'){
        showIndex(res,'/chapterList');
    }else if(pathName=='/getList'){
        var listStr=JSON.stringify(list);
        res.end(listStr);
    }else if(pathName=='/detail'){
        showIndex(res,"/chapter");
    }else if(pathName=='getDetail'){
        var urlObject=url.parse(req.url,true);
        for(var i=0;i<list.length;i++){
            if(urlObject.query.chapterId==list[i].chapterId){
                var listStr=JSON.stringify(list[i]);
                res.end(listStr);
            }
        }
    }else if(pathName=='/listmanager'){
        showIndex(res,'/list');
       
    }else if(pathName=='/addChapter'){
        showIndex(res,pathName)
        
    }else if(pathName=='/login_bg.jpg'){
        console.log("11111");
        showImgs(res,pathName);
    }else if(pathName.indexOf('images')){
        console.log("images");
        showImgs(res,pathName);
    }else if(pathName=='/add'){
        var news="";
        req.on("data",function(chunk){
            news+=chunk;
        });
        req.on("end",function(){
            var addContent=queryString.parse(news);
            var title=addContent.title;
            var content=addContent.content;
            var newObj={
                "chapterId": list[l.length-1].chapterId+1,
                "chapterName": title ,
                "imgPath": "",
                "chapterDes": content,
                "chapterContent": content,
                "publishTimer": new Date().toLocaleDateString(),
                "author": "admin",
                "views": 1022
            };
            chapterList.push(newObj);
            res.end("success!");
        })
    }
    else if(pathName=='/login'){
        showIndex(res,pathName);

    }else if(pathName=='/checkM'){
        var message="";
        req.on("data",function(chunk){
            message+=chunk;
        });
        req.on("end",function(){
            var user=querystring.parse(message);
            var username=user.username;
            var pwd=user.pwd;
            for(var i=0;i<user.length;i++){
                if(userList[i].username==username&&userList[i].pwd==pwd){
                    res.end("success!");
                }else{
                    res.end("I'm sorry");
                }
            }
        })
    }else if(pathName.slice(0,4)=='/css'){
        console.log("11");
        var cssPath=path.join(__dirname,'/css'+pathName.slice(4));
        var cssFile=fs.readFileSync(cssPath);
        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(cssFile);
    }else if(pathName.indexOf('.js')){
        showJs(res);
    }
}).listen(8083);

function showIndex(res,pathName){
    var filePath=path.join(__dirname,pathName+'.html');
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();

};
function showImgs(res,pathName){
    var imagesPath=path.join(__dirname,pathName);
    console.log("1111");
    fs.readFile(imagesPath,'binary',function(err,data){
        if(err){
            console.log(err);
        }else{
            res.write(data,'binary');
            res.end();
        }
    })
}


function showJs(res,pathName){
    var jsPath=path.join(__dirname,'/js/baiduTemplate.js');
    var jsFile=fs.readFileSync(jsPath);
    res.writeHead(200,{"Content-Type":"text/js"});
    res.end(jsFile);
}

console.log("listening 8083");