var arg1=process.argv[2];

if(arg1==undefined||arg1=="-h"){
    console.log("请求帮助");
}
else{    
     console.log(arg1+"=%d",eval(arg1));  
}