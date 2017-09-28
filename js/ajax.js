// 原生 ajax 封装

ajax = {
	/*
		get请求参数
		url:"" 
		success:fucntion(){}
		fail:function(){}
	*/
	get:function (obj) {
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xhr.open("GET",obj.url,true);

		xhr.onload = function () {
			obj.success(xhr.responseText); 
		}
		xhr.send(null);
	},
	gett:function(obj){
        var xhr=window.XMLHttpRequest?new window.XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET",obj.url,true);
        xhr.onreadystatechange=function (){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    obj.success(xhr.responseText);
                }else{
                   obj.fail(xhr.responseText);
                }
            }
        }

        xhr.send(null);
    },

	/*
		psot请求参数
		url:''
		success:function (){}
		fail:function (){}
		data: 参数

	*/
	post:function (obj) {
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xhr.open("POST",obj.url,true);
		xhr.onreadystatechange = function (){
			if(xhr.readyState==4){
                if(xhr.status==200){
                    obj.success(xhr.responseText);
                }else{
                   obj.fail(xhr.responseText);
                }
            }
		}
		// 使用 post 请求提交表单，需要添加这个请求头
		if(typeof obj.data == "string"){
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
		}
		xhr.send(obj.data);
	}





}