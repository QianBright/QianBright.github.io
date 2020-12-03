
function age(){
	str = "岁"
    var p = document.getElementById("age");
    var now= Date.now();
    var born = Date.parse("May 11, 1999");
    
    var days = parseInt((now - born) / (1000 * 60 * 60 * 24 * 365));
    str = days + str;
	
	p.innerText = str;
 
	setTimeout(getTime,1000);
}
 
 
window.onload = function(){
	age();
}