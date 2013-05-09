chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if (request.cmd == 'get_color')
    		sendResponse({tcolor: localStorage['scrollbar_color']});
});