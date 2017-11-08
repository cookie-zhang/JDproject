define(function(){
	return {
		
		
		//用户名
		user:function(str){
			var reg = /^[a-zA-Z0-9_-]{4,16}$/;
			if( reg.test(str) ){
				return true;
			}else{
				return false;
			}
		},
		
		
		//密码
		pwd:function(str){
			var reg = /^(\w){6,20}$/;
			if( reg.test(str) ){
				return true;
			}else{
				return false;
			}
		},
		
		
		//手机号
		phone:function(str){
			var reg = /^1[34578]\d{9}$/;
			if( reg.test(str) ){
				return true;
			}else{
				return false;
			}
		},
		
		
		cookie:function(str){
			return	$.cookie(str) ;
		}
		
		
		
		
		
	};
	
	
})