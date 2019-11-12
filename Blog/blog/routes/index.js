var express = require('express');
var router = express.Router();
const path=require("path");
const fs=require("fs");


//读取data.json文件中的信息
var dataPath=path.join(__dirname,'../data.json');
var dataContent=fs.readFileSync(dataPath).toString();
var allList=JSON.parse(dataContent);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//登录显示login页面上
router.get("/login",function(req,res,next){
  res.render("blog");
})

//登录提交信息时校验信息
router.post("/login",function(req,res,next){
if(req.body.username==allList.users[0].username&&req.body.pwd==allList.users[0].password){
  res.end("true");
}else{
  res.end("");
}
})


//渲染文章列表
router.get("/list",function(req,res,next){
  res.render("list",{list:allList.chapterList});
})



module.exports = router;
