var express = require('express');
var router = express.Router();
const path=require("path");
const fs=require("fs");
const querystring=require("querystring");

var dataPath=path.join(__dirname,'../data.json');
var dataContent=fs.readFileSync(dataPath).toString();
var allList=JSON.parse(dataContent);
// console.log(allList.users[0].username);
// console.log(allList.chapterList[0].title);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Express' });
});

router.get('/list',function(req,res,next){
  /**
   * render：页面的渲染
   * 读取ejs文件内容，将文件中占位符（<%=userName %>）替换成
   * 后端给定的数据（也就是render的第二个参数）
   * 再将文件中的代码内容响应到客户端去
   */
  res.render('list',{userName:'yaya',title:'hello list',
    newList:[{'newId':1,"newTitle":'脱贫攻坚让农村贫困人口住进安全温暖的新家'},
    {'newId':2,newTitle:'互利共赢，搭乘中国发展快车'}]});
})

router.get("/login",function(req,res,next){
  res.render("blog",{username:allList.users[0].username,
    pwd:allList.users[0].password});
})

router.post("/login",function(req,res,next){
  console.log("111");
  console.log(req.body);
  console.log(req.body.username,allList.users[0].username);
if(req.body.username==allList.users[0].username&&req.body.pwd==allList.users[0].password){
  window.location = "http://localhost:3000/addChapter";

  res.get("/addChapter",function(req,res,next){
    res.render("addChapter");

  })
  // res.end("hellp")
}else{
  res.end("your message is wrong");
}
  // req.on("data",function(chunk){
  //     message+=chunk;
  // });
  // console.log(message);
  // req.on("end",function(){
  //   var user=querystring.parse(message);
  //   var username=user.username;
  //   var pwd=user.pwd;
  //     if(allList[0].username==username&&
  //       allList[0].password==pwd){
  //         res.end("success");
  //         res.render("addChapter",{username:'yaya',pwd:'123'});
  //     }else{
  //         res.end("I'm sorry");
  //     }
  // })
})

router.get("/addChapter",function(req,res,next){
  res.render("addChapter",{username:'yaya',pwd:'123'});
})



module.exports = router;
