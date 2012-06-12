(function(){
	//加入过滤器标示并建立好对象
	var list_uin=$("#list_uin label");
	var user_name=list_uin.html();
	chrome.extension.sendRequest({url: user_name});

} )();