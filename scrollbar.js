function load_css(filename){
	var t=document.createElement("link");
	t.setAttribute("rel", "stylesheet");
	t.setAttribute("type", "text/css");
	t.setAttribute("href", chrome.extension.getURL(filename));
	document.head.appendChild(t);
}

function load_scroll_bar(){
	chrome.extension.sendRequest({cmd:"get_color"}, 
    	function(response) {
	     	var favorite = response.tcolor;
	     	switch(favorite){
			case "Dark":
				load_css("css/t-scroll-bars-dark.css");
				break;
			case "Light":
				load_css("css/t-scroll-bars-light.css");
				break;
			default:
				load_css("css/t-scroll-bars-light.css");
			}
  	});
}

var exclude = /(\.google\.com|omgubuntu\.co\.uk)/i;
var except = /((www|play)\.google\.com)/i;

function filter_url(url){
	if (exclude.test(url) && !except.test(url))
		return;
	load_scroll_bar();
}

filter_url(document.URL);