
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
var def=$.ajax({
	type:"get",
	url:"data/list_shopping.json",
});
def.done(function(json){
	//console.log(json)
	//总页数
	pageCount =Math.ceil( json.length / 40 );
	//显示第一页的数据
	var index = 1;
	var html="";
	 for( var i = (index-1)*40 ; i < index*40 ; i++ ){
		if(i<json.length){
			
			
			/*$(".list_allpic_ul").append(*/
			html+=`
	        			<li>
							<div class="div_bigImg">
								<a class="div_bigImg_a" href="details.html?list_Id=${json[i].id}">
								
								</a>
							</div>
							<div class="div_smllImg">
								<ul class="div_smllImg_ul">
								
								</ul>
							</div>
							<p class="price"><i>￥</i>${json[i].pirce}</p>
							<p class="content"><a href="javascript:;"> ${json[i].content}</a></p>
							<span class="neicui_gb">
								
							
							</span>
							<p class="pingjia">已有35万+人评价</p>
							<p class="ziying"><a href="javascript:;">华为京东自营官方旗舰店....<i></i> </a> </p>
						</li>
				`
			/*)*/
			
		}
	}	
	
	$(".list_allpic_ul").html(html)
	
	
	
	
	
	
	
	//foreach方法
	/*json.forEach(function(str,i){
		console.log(str)
		//console.log(i)
		$(".list_allpic_ul").append(
			`
        			<li>
						<div class="div_bigImg">
							<a class="div_bigImg_a" href="details.html?list_Id=${str.id}">
							
							</a>
						</div>
						<div class="div_smllImg">
							<ul class="div_smllImg_ul">
							
							</ul>
						</div>
						<p class="price"><i>￥</i>${str.pirce}</p>
						<p class="content"><a href="javascript:;"> ${str.content}</a></p>
						<span class="neicui_gb">
							
						
						</span>
						<p class="pingjia">已有35万+人评价</p>
						<p class="ziying"><a href="javascript:;">华为京东自营官方旗舰店....<i></i> </a> </p>
					</li>
			`
		)
	})*/
	var n=json.length;
		for(let i=0; i<n; i++ ){
			for(var j of json[i].smalImg){
				$(".div_smllImg_ul").eq(i).append(`
					<li class="ppp">
						<img src="${j}" alt="" />
					</li>	
				`)
			}
		}
		for(let i=0; i<n; i++ ){
			//console.log(json[i].bigImg)
			for(var j of json[i].bigImg){
				$(".div_bigImg_a").eq(i).append(`
						<img src="${j}"/>
				`)
			}
		}
		
		for(let i=0; i<n; i++ ){
			//console.log(json[i].size)
			for(var j of json[i].size){
				$(".neicui_gb").eq(i).append(`
						<a href="javascript:;"> ${j}</a>
						
				`)
			}
		}
		//鼠标小图滑过显示大图
		$(".div_smllImg_ul li").mouseover(function(){
    			
    			$(this).parent().parent().prev().find("img").eq( $(this).index() ).show().siblings().hide()
		})
		
		
		
		//分页请求
        $(".M-box").pagination({
			pageCount :pageCount,
			callback:function(api){
		        var data = {
		            page: api.getCurrent()//获取当前页
		        };
		        $.getJSON('data/list_shopping.json',function(json){
		            var index = data.page;
		            var str="";
			            for( var i = (index-1)*40 ; i < index*40 ; i++ ){
							if(i<json.length){					
								/*$(".list_allpic_ul").append(*/
								str+=`
						        			<li>
												<div class="div_bigImg">
													<a class="div_bigImg_a" href="details.html?list_Id=${json[i].id}">
													
													</a>
												</div>
												<div class="div_smllImg">
													<ul class="div_smllImg_ul">
													
													</ul>
												</div>
												<p class="price"><i>￥</i>${json[i].pirce}</p>
												<p class="content"><a href="javascript:;"> ${json[i].content}</a></p>
												<span class="neicui_gb">
												</span>
												<p class="pingjia">已有35万+人评价</p>
												<p class="ziying"><a href="javascript:;">华为京东自营官方旗舰店....<i></i> </a> </p>
											</li>
									`
								/*)*/
								
							}
						}	
						
						$(".list_allpic_ul").html(str)
		            
		            var n=json.length;
						for(let i=0; i<n; i++ ){
							for(var j of json[i].smalImg){
								$(".div_smllImg_ul").eq(i).append(`
									<li class="ppp">
										<img src="${j}" alt="" />
									</li>	
								`)
							}
						}
						for(let i=0; i<n; i++ ){
							//console.log(json[i].bigImg)
							for(var j of json[i].bigImg){
								$(".div_bigImg_a").eq(i).append(`
										<img src="${j}"/>
								`)
							}
						}
						
						for(let i=0; i<n; i++ ){
							//console.log(json[i].size)
							for(var j of json[i].size){
								$(".neicui_gb").eq(i).append(`
										<a href="javascript:;"> ${j}</a>
										
								`)
							}
						}
		            
		            
		            //鼠标小图滑过显示大图
		$(".div_smllImg_ul li").mouseover(function(){
    			
    			$(this).parent().parent().prev().find("img").eq( $(this).index() ).show().siblings().hide()
		})
		            
		            

		            
		            
		        });
		    }
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/*//鼠标小图滑过显示大图
		$(".div_smllImg_ul li").mouseover(function(){
    			
    			$(this).parent().parent().prev().find("img").eq( $(this).index() ).show().siblings().hide()
		})*/
})	
	






















		$(".list_foot").load("./foot.html .fot")






})