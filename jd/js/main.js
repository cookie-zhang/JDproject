
//配置模块
require.config({
	paths : {
		jquery:"jquery-1.11.1.min",
		cookie:"jquery.cookie",
		register : "register_requre"
	},
    shim:{
        'cookie':{
            deps:['jquery']
        }
    }
})


//使用模块
require(["cookie","register"],function(cookie,register){

	//用户名
	//$.cookie("user","45464654646");
	$(".user_input").focus(function(){
		$(".tishi01").css("color","red");
		$(".tishi01").html("请输入：4到16位（字母，数字，下划线，减号）");
		$(this).blur(function(){
			var userFlag = register.user($(this).val())
			//console.log(userFlag)
			if(userFlag){
				$(".tishi01").css("color","green");
				$(".tishi01").html("用户名合法");
			}else{
				$(".tishi01").html("用户名不合法");
			}
			
		})

	})
	
	
	
	//密码
	$(".paw_input").focus(function(){
		$(".tishi02").css("color","red");
		$(".tishi02").html("请输入：输入6-20个字母、数字、下划线 ");
		$(this).blur(function(){
			if($(this).val()==""){
				$(".tishi02").html("请输入：输入6-20个字母、数字、下划线 ");
			}else{
				var userFlag = register.user($(this).val())
					//console.log(userFlag)
					if(userFlag){
						$(".tishi02").css("color","green");
						$(".tishi02").html("密码合法");
					}else{
						$(".tishi02").html("密码不合法");
					}
			}
					
		})
	})
	
	//确认密码
	$(".Tpwd_input3").focus(function(){
		$(".tishi03").css("color","red");
		$(".tishi03").html("请确认密码");
		$(this).blur(function(){
			if($(this).val()==""){
				$(".tishi03").html("请确认密码");
			}else{
				if($(this).val() == $(".paw_input").val()){
					$(".tishi03").css("color","green");
					$(".tishi03").html("确认密码正确");
				}else{
					$(".tishi03").html("密码不正确");
				}
			}
			
		})
	})
	
	
	//手机号
	$(".phe_input").focus(function(){
		$(".tishi04").css("color","red");
		$(".tishi04").html("请输入正确格式手机号");
		$(this).blur(function(){
			var userFlag = register.phone($(this).val())
			//console.log(userFlag)
			if(userFlag){
				$(".tishi04").css("color","green");
				$(".tishi04").html("手机号可用");
			}else{
				$(".tishi04").html("手机号格式不正确");
			}
			
		})
		
		
	})
	
	//点击注册
	$(".zhu_btn").click(function(){
		if($(".user_input").val()!=="" && $(".paw_input").val()!=="" && $(".Tpwd_input3").val()!=="" && $(".phe_input").val()){
			
			//存cookie
			var panduan=$.cookie("conten");
			
			//console.log(panduan)
			
			if(!panduan){//cookie里啥也没的时候
				var loginobj ={
					"user":$(".user_input").val(),
					"name":$(".phe_input").val(),
					"pwd":$(".paw_input").val()
					
				};
				
				/*var a = $(".phe_input").val();
				var c = $(".paw_input").val();
				loginobj[a]=c;//对象键值对*/
				
				
				var loginstr = JSON.stringify(loginobj)//转化为字符串
				
				$.cookie("conten",loginstr,{expires:7,path:"/"})//这是设置cookie
				console.log($.cookie("conten"))
				//console.log($.cookie("zhu"))
			}else{//cookie里已经存在信息的时候
				
				var loginobj = JSON.parse($.cookie("conten"))
				
				var loginobj ={
					"user":$(".user_input").val(),
					"name":$(".phe_input").val(),
					"pwd":$(".paw_input").val()
					
				};
				
				
				if(!loginobj.user){//用户名没有存储的时候设置cookie
					
					var loginstr = JSON.stringify(loginobj)
					$.cookie("conten",loginstr,{expires:7,path:"/"})//这是设置cookie
				} 
			}
		
			
			alert("注册成功")	
			self.location='login.html'; 
			
			
		}else{
			alert("请完善信息")
		}
		
		
		
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
})


