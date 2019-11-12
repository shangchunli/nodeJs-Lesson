var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.end("this is news page");
})

router.get('/list',function(req,res,next){
    res.end("this is news list");
})

module.exports=router;