var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list',function(res,res,next){
  res.end("users list");
})

router.get('/list/users',function(res,res,next){
  res.end("users list users");
})

module.exports = router;
