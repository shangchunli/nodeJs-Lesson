var base64Str='emhhbmdzYW46MTIzNDU2';

var baseStr=Buffer.from(base64Str,"base64");
console.log(baseStr.toString("utf-8"));