const stream=require("stream");
function MyReadable(){
    // stream.Readable.call(this);
}
MyReadable.prototype.__proto__=stream.Readable();
var reader=new MyReadable();

reader.push("abcdefghijklmnopqrstuvwsyz");
reader.push(null);
reader.pipe(process.stdout);
 