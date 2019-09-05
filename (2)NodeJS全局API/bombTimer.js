function Bomb(){
    this.message="bomb!!!";
    this.explode=function(){
        console.log(this.message);
    }
}
var bom=new Bomb();
setTimeout(function(){
    bom.explode();
},2000)