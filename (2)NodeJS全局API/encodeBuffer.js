var username=process.argv[2];
var password=process.argv[3];
console.log("用户名:"+username+" 密码:"+password);

var buf1=Buffer.from(username+password,"utf-8");
var base64Str=buf1.toString("base64");
console.log(buf1.toString("base64"));