$(function(){
	//头部 分离引入
	$(".details_head").load("./head.html .jd_nav_main",function(){
		
			//城市
			$(".city").mouseenter(function(){
				$(".kindcity_box").css({"display":"block","z-index":888})
			}).mouseleave(function(){
				$(".kindcity_box").css({"display":"none"})
			})
			
			//ajax获取citys
			$.ajax({
				type:"get",
				url:"data/city.json",
				success:function(json){
					var str = "";
					for(var i = 0 ; i < json.length ; i++){
						str+=`
							<div class="ever_city"><a href="javascript:;">${json[i]}</a></div>
						`	
						
					}
					$(".kindcity_box").append(str)
					$(".ever_city").eq(0).addClass("city_in")
					//点击某一个城市，添加到上面，并改变样式
					$(".kindcity_box").on("click",".ever_city",function(){
						$(this).addClass("city_in").siblings().removeClass("city_in");
						$(".allkind").html($(this).children().html())
					})
				}
				
			});
			
		
			//我的京东
			$(".my_jd_par").mouseenter(function(){
				$(".my_jd").css({"display":"block","z-index":888})
			}).mouseleave(function(){
				$(".my_jd").css({"display":"none"})
			})
			//我的客服
			$(".my_kehu_par").mouseenter(function(){
				$(".my_kehu").css({"display":"block","z-index":888})
			}).mouseleave(function(){
				$(".my_kehu").css({"display":"none"})
			})
			//网页导航
			$(".my_nav_par").mouseenter(function(){
				$(".my_nav").css({"display":"block","z-index":888})
			}).mouseleave(function(){
				$(".my_nav").css({"display":"none"})
			})
			
					//
			$(".phone_jd").mouseenter(function(){
				$(".three").css({"display":"block","z-index":888})
			}).mouseleave(function(){
				$(".three").css({"display":"none"})
			})
	})
	//logo_search  fen	
	$(".details_logo_search").load("./logo_search.html .logo_search_f",function(){
				
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
		input1.onkeyup = function(e){
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

		
		
	})
	
	
	
	
	//
	$(".smart").mouseenter(function(){
		$(".allkid_chuizi").css("display","block")
	}).mouseleave(function(){
		$(".allkid_chuizi").css("display","none")
	})
	
	//放大镜
	$("#bottom li").mouseenter(function(e){
 		var e = e || window.event;
 		//获取下标
 		var index = $(this).index();
 		$("#small img").eq(index).show().siblings().hide();
 		$("#big img").eq(index).show().siblings().hide();
 		
 	})
	//当鼠标进入大图框，放大镜和右边的最大框显示
 	$("#small").mouseover(function(){
 		$("#mask").show()
 		$("#big").show()
 	})
	
	//当鼠标离开大图框，放大镜和右边最大框消失
 	$("#small").mouseout(function(){
 		$("#mask").hide()
 		$("#big").hide()
 	})
	
	//鼠标移动，放大镜跟着移动，右边的大框图片也要运动
 	$("#small").mousemove(function(e){
 		var e = e || window.event;
 		
 		var disx = e.pageX - $("#mask").width()/2 - $(".Magnifier_box").offset().left;
 		var disy = e.pageY - $("#mask").height()/2 - $(".Magnifier_box").offset().top;
 		
 		if(disx<0)disx=0;
 		if(disy<0)disy=0;
 		if(disx>$(".Magnifier_box").width()-$("#mask").width()){
 			disx=$(".Magnifier_box").width()-$("#mask").width()
 		}
 		if(disy>$(this).width()-$("#mask").width()){
 			disy=$(this).height()-$("#mask").height()
 		}
 		
 		$("#mask").css({
 			"left":disx,
 			"top":disy
 		})
 		
 		var bigImgx = disx * ($(".bigImage").width()/$("#mm").width());
 		var bigImgy = disy * ($(".bigImage").height()/$("#mm").height());
 		
 		
 		$(".bigImage").css({
 			"left":-bigImgx,
 			"top":-bigImgy
 		})
 		
 		
 	})
 	$(".glas_righ").mouseover(function(){
 		
 	})
 	
 	$(".glas_righ").click(function(){
 		$("#bottom").animate({"left":"-70px"})
 	})
	$(".glas_lef").click(function(){
 		$("#bottom").animate({"left":"0px"})
 	})
	
	$("#bottom li").mouseover(function(){
		$(this).css("border","1px solid red")
	}).mouseleave(function(){
		$(this).css("border","2px solid #fff")
	})
	
	
	
	///
	$(".delis_main_right_top_05").mouseover(function(){
		//$(this).css({"height":"240px"});
		$(".right_top_05_02_yin").css("display","block")
	}).mouseleave(function(){
		//$(this).css({"height":"75px"});
		$(".right_top_05_02_yin").css("display","none")
	})
	
	
})
