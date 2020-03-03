console.log("\n纪念所有在这些苦难中逝去的生命");
/* JavaScript written by R.X. Mao */
var version="20w10a";
var splashScreen="1";

window.oncontextmenu=function(){return false;};
window.onkeydown=function(e){if((e.ctrlKey||e.metaKey)&&e.keyCode==83)return false;};
if(splashScreen==="1"){
	setTimeout(function(){
		splashScr.style.opacity="0";
		setTimeout(function(){
			splashScr.style.display="none";
		},500);
	},2500);
}else{
	splashScr.style.display="none";
}
versionInfo.innerText=version;


