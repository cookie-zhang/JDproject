$(function(){
	$(".jd_top_clear_main_x").click(function(){
		$(this).parent().parent().fadeOut();
	})
	
	//城市
	$(".city").mouseenter(function(){
		$(".kindcity_box").css({"display":"block"})
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
		$(".my_jd").css({"display":"block"})
	}).mouseleave(function(){
		$(".my_jd").css({"display":"none"})
	})
	//我的客服
	$(".my_kehu_par").mouseenter(function(){
		$(".my_kehu").css({"display":"block"})
	}).mouseleave(function(){
		$(".my_kehu").css({"display":"none"})
	})
	//网页导航
	$(".my_nav_par").mouseenter(function(){
		$(".my_nav").css({"display":"block"})
	}).mouseleave(function(){
		$(".my_nav").css({"display":"none"})
	})
	
	
	//
	$(".phone_jd").mouseenter(function(){
		$(".three").css({"display":"block"})
	}).mouseleave(function(){
		$(".three").css({"display":"none"})
	})
	
	//menu
	$(".jd_menu_ul li").mouseenter(function(){
		$(this).children("div").css({"display":"block"})	            
	}).mouseleave(function(){
		$(this).children("div").css({"display":"none"})	
	})
	
	//轮播图
	$(".jd_lb_box_ul li").eq(0).show();
	$(".lb_slid_ol li").mouseover(function(){
		clearInterval(timer)
		$(this).css({"background":"#991B1C"}).siblings().css({"background":"#fff"});
		var index = $(this).index();
		i = index;
		$(".jd_lb_box_ul li").eq(i).fadeIn(500).siblings().fadeOut(500)
	})
	
	
	var timer = setInterval(atuoplay,2000)
		var i = 0;
	function atuoplay(){
	
		$(".lb_slid_ol li").eq(i).css({"background":"#991B1C"}).siblings().css({"background":"#fff"});
		i++;
		if(i == 8){
			i=0;
		}
		$(".jd_lb_box_ul li").eq(i).fadeIn(300).siblings().fadeOut()	
	}
	
	$(".jd_lb_box_ul").hover(function(){
		$(".left").show();
		$(".right").show();
		clearInterval(timer);
	},function(){
		$(".left").hide();
		$(".right").hide();
		
		timer=setInterval(atuoplay,2000)
	})
	function left(){

		$(".lb_slid_ol li").eq(i).css({"background":"#991B1C"}).siblings().css({"background":"#fff"});
		i--;
		if(i == 0){
			i=8;
		}
		$(".jd_lb_box_ul li").eq(i).fadeIn(300).siblings().fadeOut()
	}
	
	$(".right").click(function(){
		atuoplay();
		clearInterval(timer)
	})
	$(".left").click(function(){
		clearInterval(timer)
		left();
	})
	
	
	
	
	
	
	
	
	//公告
	$(".gonggao").mouseenter(function(){
		
		$(".hengxian").stop().animate({"left":"60px"},500);
		$(".jd_words_02").css({"display":"block"})
	}).mouseleave(function(){
		$(".hengxian").stop().animate({"left":"60px"},500)
		
	})
	$(".cuxiao").mouseenter(function(){
		
		$(".hengxian").stop().animate({"left":"0px"},500);
		$(".jd_words_02").css({"display":"none"})
	}).mouseleave(function(){
		$(".hengxian").stop().animate({"left":"0px"},500)
	})
	
	
	
	
	
	
	///
	
	$.ajax({
		type:"get",
		url:"data/lb02.json",
		success:function(json){
			var str = "";
			for(var i=0;i<json.length;i++){
				
			str+=`
				<li class="kill_lb02_ul_li">
							<div class="kill_lb02_ul_li_pic kill_lb02_ul_li">
								<a href="javascript:;">
									<img class="kill_picture" src="${json[i].img}" />
									<span class="jieshao">${json[i].formation}</span>
								</a>
								<span class="kill_item"></span>
							</div>
							<p class="pirce">
								<span class="xianjian"><i>￥</i><span>${json[i].pric[0]}</span></span>
								<span class="yujian"><i>￥</i><s>${json[i].pric[1]}</s></span>
							</p>
						</li>			
			`
			
			}
			
			$(".kill_lb02_ul").html(str)
			
			//lb02
			$(".kill_picture").mouseover(function(){
				
				$(this).stop().animate({"top":"6px"},200)
			}).mouseleave(function(){
				$(this).stop().animate({"top":"10px"},200)
			})
		}
	});
	
	
	//////
	$(".second_kill_top02").mouseover(function(){
		$(".kill_lb02_right").css("display","block")
		$(".kill_lb02_left").css("display","block")
	}).mouseleave(function(){
		$(".kill_lb02_right").css("display","none")
		$(".kill_lb02_left").css("display","none")	
	})
	
	$(".kill_lb02_right").click(function(){
		i++;
		if(i>4){
			i=0;
		}
		$(".kill_lb02_ul").css({"left":-1000*i})
	})
	$(".kill_lb02_left").click(function(){
		
		i--;
		if(i==0){
			i=3;
		}
		$(".kill_lb02_ul").css({"left":-1000*i})
	})
	
	////////////
	$(".miaosha_lb ol span").mouseover(function(){
		clearInterval(tmer_miaosha_lb)
		$(this).addClass("dian_selected").siblings().removeClass("dian_selected")
		ind = $(this).index();
		$(".miaosha_lb ul a").eq(ind).fadeIn(200).siblings().fadeOut(200)
	}).mouseleave(function(){
		tmer_miaosha_lb = setInterval(miao_play,1500)
	})
	
	var tmer_miaosha_lb = setInterval(miao_play,1500)
	var j = 0;
	function miao_play(){
		$(".miaosha_lb ol span").eq(j).addClass("dian_selected").siblings().removeClass("dian_selected")
		j++;
		if(j >2){
			j=0;
		}
		$(".miaosha_lb ul a").eq(j).fadeIn(500).siblings().fadeOut(500)	
	}
	
	
	//ajax京东主会场
	$.ajax({
		type:"get",
		url:"data/jd_zhuhuichang.json",
		success:function(json){
			var str = "";
			for(var i = 0 ; i<json.length ; i++){
				str+=`
					<li class="act_item_li">
						<a href="javascript:;">
							<img src="${json[i].img}" />
							<span class="zhezhao"></span>
						</a>
					</li>
				`
			}
			$(".jd_main_right_ul").html(str)
			$(".act_item_li a").mouseover(function(){
				$(this).children("img").stop().animate({"height":"205px"},200)
				$(this).children("span").show()
			}).mouseleave(function(){
				$(this).children("img").stop().animate({"height":"200px"},200)
				$(this).children("span").hide()
			})
				
			
		}
	});
	
	//京东主会场特效
	$(".jd_main_page_main_right ol li").mouseover(function(){
				$(this).find(".zhezhao02").show()
		}).mouseleave(function(){
				$(this).find(".zhezhao02").hide()
	})
	
	//发现好物品  
	$(".find_good_left_main_ul li a").mouseover(function(){
		
		$(this).children("img").stop().animate({"right":"15px"},200)
	}).mouseleave(function(){
		$(this).children("img").stop().animate({"right":"10px"},200)
	})
	
	
	//发现好物品轮播图
	$(".find_good_center_main_ul li").eq(0).show();
	$(".can_buy").mouseover(function(){
		clearInterval(can_buy_timer);
		$(this).addClass("can_buy_selected").siblings().removeClass("can_buy_selected");
		var index = $(this).index();
		k = index;
		$(".find_good_center_main_ul li").eq(k).fadeIn(500).siblings().fadeOut();
	}).mouseleave(function(){
		can_buy_timer = setInterval(can_buy_play,2000)
	})
	
	var can_buy_timer = setInterval(can_buy_play,2000)
	var k = 0;
	function can_buy_play(){
		$(".can_buy").eq(k).addClass("can_buy_selected").siblings().removeClass("can_buy_selected");
		k++;
		if(k == 3){
			k=0;
		}
		$(".find_good_center_main_ul li").eq(k).fadeIn(300).siblings().fadeOut()
	}
	
	//排行榜tab
	$(".tab_top_ul li").mouseover(function(){
		var index = $(this).index();
		$(".youdong").stop().animate({"left":37*index},200)
	})
	
	$.ajax({
		type:"get",
		url:"data/paihang.json",
		success:function(json){
			var str = "";
			for(var i = 0;i<json.length;i++){
				str+=`
					<li>
						<a href="javascript:;">
							<img src="${json[i].img}" />
							<span>${json[i].formation}</span>
						</a>
					</li>
				`
			}
			
			$(".tab_pic_ul").html(str);
			$(".aaaa").mouseover(function(){
				
				var index = $(this).index();
				$(".tab_pic_ul").stop().animate({"left":-390*index/2},200)
			})
		}
	});
	
	//券
	$(".jd_getquan_left_bottom li a").mouseover(function(){
		$(this).children("img").stop().animate({"right":"10px"},500)
	}).mouseleave(function(){
		$(this).children("img").stop().animate({"right":"25px"},500)
	})
	
	
	
	//寻觅lb03
	$(".xunni_conten").eq(0).show();
	$(".xunni_dian").mouseover(function(){
		clearInterval(xuni_timer);
		$(this).addClass("xunni_dian_selected").siblings().removeClass("xunni_dian_selected");
		var index = $(this).index();
		o = index;
		$(".xunni_conten").eq(o).fadeIn(500).siblings().fadeOut();
	}).mouseleave(function(){
		xuni_timer = setInterval(xuni_play,2000)
	})
	
	var xuni_timer = setInterval(xuni_play,2000)
	var o = 0;
	function xuni_play(){
		$(".xunni_dian").eq(o).addClass("xunni_dian_selected").siblings().removeClass("xunni_dian_selected");
		o++;
		if(o == 5){
			o=0;
		}
		$(".xunni_conten").eq(o).fadeIn(300).siblings().fadeOut()
	}
	
	///
	$(".xiang_main_left_ul li a").mouseover(function(){
		$(this).children("img").stop().animate({"right":"0"},500)
	}).mouseleave(function(){
		$(this).children("img").stop().animate({"right":"-20px"},500)
	})
	
	
	//直播lb05
	$(".xiang_main_right ul li").eq(0).show();
	$(".zhibo_dian").mouseover(function(){
		clearInterval(zhibo_timer);
		$(this).addClass("zhibo_dian_bg").siblings().removeClass("zhibo_dian_bg");
		var index = $(this).index();
		l = index;
		$(".xunni_conten").eq(l).fadeIn(500).siblings().fadeOut();
	}).mouseleave(function(){
		zhibo_timer = setInterval(zhibo_play,2000)
	})
	
	var zhibo_timer = setInterval(zhibo_play,2000)
	var l = 0;
	function zhibo_play(){
		$(".zhibo_dian").eq(l).addClass("zhibo_dian_bg").siblings().removeClass("zhibo_dian_bg");
		l++;
		if(l == 5){
			l=0;
		}
		$(".xiang_main_right ul li").eq(l).fadeIn(300).siblings().fadeOut()
	}
	
	
	
	//
	$(".zhibo_bottom_01 img").mouseover(function(){
		$(this).stop().animate({"right":"0px"},500)
	}).mouseleave(function(){
		$(this).stop().animate({"right":"-20px"},500)
	})
	$(".zhibo_bottom_02 img").mouseover(function(){
		$(this).stop().animate({"right":"0px"},500)
	}).mouseleave(function(){
		$(this).stop().animate({"right":"-20px"},500)
	})
	
	
	//
	$(".love_words_02").mouseenter(function(){
		$(this).children("span").show()
	}).mouseleave(function(){
		$(this).children("span").hide()
	})
	$(".love_words_02")
	
	//
	$(".love_guang_left_bottom img").mouseover(function(){
		$(this).animate({"right":"0px"},200)
	}).mouseleave(function(){
		$(this).animate({"right":"-10px"},200)
	})
	
	
	
	//还没逛够 ajax请求数据
	$.ajax({
		type:"get",
		url:"data/go_buy.json",
		success:function(json){
			var str = "";
			for(var i = 0 ; i<json.length ; i++){
				str+=`
					<li>
						<a href="javascript">
							<img src="${json[i].img}" />
							<p class="no_go_buy_conten">${json[i].content}</p>
							<span><i>￥</i>${json[i].price}</span>
						</a>
					</li>
				
				`
			}
			
			$(".no_go_buy_ul").html(str);
			
			$(".no_go_buy_ul li a").mouseover(function(){
				$(this).css({"border":"1px solid red"})
			}).mouseleave(function(){
				$(this).css({"border":"1px solid #ccc"})
			})
			
			
		}
	
	})
	
	
	
	
	//楼梯
/*	
var $lis = $("#LoutiNav ul li");
var $divs = $(".jd_louti");



var $ulTop = $("#LoutiNav ul").height();
var $goTop = $(".last");
$(window).scroll(function(){
	
	//兼容   然后拿到滚动条的高度
	//var $sTop = document.body.scrollTop || document.documentElement.scrollTop;
	
	if($(document).scrollTop()>$ulTop){
		$("#LoutiNav").show(1000)
	}else{
		$("#LoutiNav").hide(1000)
	}


	//可视窗口高度
    var winH = $(window).height();
    //鼠标滚动的距离
    var iTop = $(window).scrollTop();


	//根据滚动条滑动的高度找到对应的楼梯，高亮显示
	$divs.each(function(){
		if(winH + iTop - $(this).offset().top > winH / 2) {
           	$lis.find("span").css({"display":"none"});
            $lis.eq($(this).index()).find("span").css({"display":"block","background":"darkred","color":"#fff"});
            
        }
	})
	

	
})
	//点击回到当前楼层
	$lis.click(function(){
		var t = $divs.eq($(this).index()).offset().top;
		$("html,body").animate({
			"scrollTop":t
		},1000)
		
	})*/
	
	
	
	
	/*
	 1、点击 top  滚动条运动到 最顶端
	 2、点击左侧的楼层号 出现对应的楼
	 	如何出现 ：  控制页面滚走的距离  就是该楼层号对应的楼层的 top    
	 3、触发滚动条，某个楼层在可视区的面积最大   控制对应的楼层号 变色
	   如何找哪一个楼层在可视区面积最大 ：　　楼层的ｏｆｆｓｅｔＴｏｐ　－　页面滚走的距离　＜　　ｈ／２  	
	 */
	
	
	
	
	
	
	
	
	
	
	
	//回到顶端
	$(".last").click(function(){
		flag = false;
		$("body,html").animate({ "scrollTop" : 0 },1000,function(){
			flag = true;
			//清空所有楼层号样式
			$("#LoutiNav li:not(:last)").find("span").removeClass("active");
		});
	})
	var flag = true;//假设开关变量值为true时  滚动条可以滚动
	//点击左侧楼层号 控制对应的楼层显示
	$("#LoutiNav li:not(:last)").click(function(){
		//点击楼层号  不触发滚动移动效果 
		flag = false;
		//点击控制当前li中span样式
		$(this).find("span")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass("active");
		//根据当前楼层号  控制楼层的显示 （通过下标对应）
		var _top = $(".jd_louti").eq( $(this).index() ).offset().top;//获取每一个楼层相对于文档的top值
	
		
		$("body,html").animate({ "scrollTop" : _top },1000,function(){
			//运动结束后  将开关变量值改为 true   手动触发滚动条 可以执行代码
			flag = true;
		});
	})
	//触发滚动条 控制楼层号
	$(window).scroll(function(){
		if( flag ){ //如果开关变量值为true  触发滚动条 
			
			//获取页面滚走的距离
			var sTop = $(document).scrollTop();
			//可视窗口高度
   			 var winH = $(window).height();
   			 
   			 
			//通过 filter 方式 过滤 查找哪一个楼层 满足  ：  Math.abs(楼层的top - 页面滚走的距离) < 楼层高度/2
			$floor = $(".jd_louti").filter(function(){
				return  Math.abs( $(this).offset().top  - sTop) < $(this).height()/2;
			})
			
			
			
			
			
			
			
			$(".jd_louti").each(function(){
			if(winH + sTop - $(this).offset().top > winH / 2) {
			
			$("#LoutiNav li:not(:last)").eq($(this).index()).find("span").addClass("active").siblings().find("span").removeClass("active");
											
											
											
			
		
            
        }
	})
			
			
			
			
			
			
			
   			
			
			
			//得到满足条件的楼层的下标
			/*var index = $floor.index();*/
			
		/*	if( index != -1 ){//控制最后一个li （服务）的样式
				alert()
				//根据楼层的下标控制 楼层号的样式
				$("#LoutiNav li:not(:last)").eq(index)
											.find("span")
											.addClass("active")
											.end()
											.siblings()
											.find("span")
											.removeClass("active");
			}*/
		}
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
