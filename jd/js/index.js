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
	
	//
	
	
	
})
