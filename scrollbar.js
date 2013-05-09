function load_css(filename){
	var fileref=document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", chrome.extension.getURL(filename));
	document.head.appendChild(fileref);
}

function load_scroll_bar(){
	chrome.extension.sendRequest({cmd:"get_color"}, 
    	function(response) {
	     	var favorite = response.tcolor;
	     	switch(favorite){
			case "Dark":
				load_css("css/t-scroll-bars.css");
				break;
			case "Light":
				load_css("css/t-scroll-bars-light.css");
				break;
			default:
				load_css("css/t-scroll-bars.css");
			}
  	});
}

function filter_url(url){
	load_scroll_bar();
}

filter_url(document.URL);