
$(function(){
	

	//头部 分离引入
	$(".list_head").load("./head.html .jd_nav_main",function(){
		
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
	$(".list_search").load("./logo_search.html .logo_search_f",function(){
				
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
			lis =ol1.getElementsByTagName("li");
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
	
	

		//列表页  ajax
		$.ajax({
			type:"get",
			url:"data/list_shopping.json",
			success:function(json){
				var str = "";
				for(var i=0;i<json.length;i++){
					
					str+=`
					
						<li>
							<div class="div_bigImg">
								<a href="javascript:;">
									<img src="${json[i]}" />
									<img src="" />
									<img src="" />
									<img src="" />
									<img src="" />
								</a>
							</div>
							<div class="div_smllImg">
								<ul class="div_smllImg_ul">
									<li>
										<a href="javascript:;">
											<img src=""/>
										</a>
									</li>
									<li>
										<a href="javascript:;">
											<img src=""/>
										</a>
									</li>
									<li>
										<a href="javascript:;">
											<img src=""/>
										</a>
									</li>
									<li>
										<a href="javascript:;">
											<img src=""/>
										</a>
									</li>
									<li>
										<a href="javascript:;">
											<img src=""/>
										</a>
									</li>
								</ul>
							</div>
							
							<p class="price"><i>￥</i>146.00</p>
							<p class="content"><a href="javascript:;">华为 畅享6 蓝色 移动联通电信4G手机 双卡双待</a></p>
							<span class="neicui_gb">
								<a href="javascript:;">5.0-4.6英寸</a>
								<a href="javascript:;">5.0-4.6英寸</a>
								<a href="javascript:;">5.0-4.6英寸</a>
							</span>
							<p class="pingjia">已有35万+人评价</p>
							<p class="ziying"><a href="javascript:;">华为京东自营官方旗舰店....<i></i> </a> </p>
							
						</li>
					
					
					
					`
					
					//<!--小图是不是可以在ajax里面再一次循环-->
					//		<!--<a>
					//			<img src="https://img11.360buyimg.com/n7/jfs/t3637/275/652996370/280419/2a134044/58105e15N75fb0595.jpg" />
					//		</a>-->
				}
				
				$(".div_smllImg_ul li").mouseover(function(){
					$(this)
				})
			}
		});






















})