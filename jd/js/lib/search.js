/******搜索************/
/**
 * 搜索框
 * **/


function callback(obj){
	ol1.innerHTML = "";
	obj.s.forEach(function(v){
		var li = document.createElement("li");
		ol1.appendChild(li);
		li.innerHTML = v;
	});
}

function jsonp(url){
	var script = document.createElement("script");
	document.getElementsByTagName("head")[0].appendChild(script);
	script.src = url;
}


var ind = -1, lis, len;
(input1).onkeyup = function(e){
	lis = ol1.getElementsByTagName("li");
	len = lis.length;
	e = e || window.event;
	var code = e.which || e.keyCode;
	switch( code ){
		case 10:
		case 13:
			//window.open("https://www.baidu.com/s?wd="+this.value);
			a1.href = "https://www.baidu.com/s?wd="+this.value;
			a1.target = "_blank";
			ol1.innerHTML = "";
			this.value="";
			a1.click();
			break;
		case 38://shang
			ind--;
			if(ind<=-1)ind=len-1;
			changeStyle();
			break;
		case 40://xia
			ind++;
			if(ind>=len)ind=0;
			changeStyle();
			break;
		default:
			ind=-1;
			var w = this.value;
			if( w!="" ){
				jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=callback&wd="+w);
			}else{
				ol1.innerHTML = "";
				
			}
	}
}



function changeStyle(){
	Array.from(lis).forEach(function(li){
		li.className = "";
	});
	lis[ind].className = "selected";
	input1.value = lis[ind].innerText;
}

//鼠标进入点击
function dianji(){
	
}

input1.onfocus=function(){
	this.value=" ";
}
