// 重置 font-size 
function resize () {
	var clientWidth = document.documentElement.clientWidth;
	var scaleWidth = clientWidth/375*100;
	document.getElementsByTagName("html")[0].style.fontSize = scaleWidth +"px";
	console.log(scaleWidth)
	console.log(document.getElementsByTagName("html")[0].style.fontSize)
}
resize();
window.addEventListener("resize",resize,false);
