function post(){
window.onload = function(){
	var oBtn = document.getElementById("btn");
	oBtn.onclick = function(){
	var onInput = document.getElementsByTagName("input")[0];
	var userName = onInput.value;
		if(userName == "980409"){
			window.location.href="zaizai.html";
		}else{
		    alert("验证码错误");
			}
		}
	}
}