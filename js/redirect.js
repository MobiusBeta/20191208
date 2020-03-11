window.oncontextmenu=function(){return false;};
window.onkeydown=function(e){if((e.ctrlKey||e.metaKey)&&e.keyCode==83)return false;};

var int=setInterval("countDown()", 1000);
var num=5;function countDown(){
    num>0 ? num-- : clearInterval(int);
    countDownNum.innerHTML=num;
}

