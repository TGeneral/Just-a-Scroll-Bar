function load_style(bg, bor, lin, rad){
    var shtml = '::-webkit-scrollbar{width:13px;height:13px}::-webkit-scrollbar-track{border:1px solid '+bor+';background-color:'+bg+'}::-webkit-scrollbar-track:horizontal{border-right:0;border-left:0}::-webkit-scrollbar-track:vertical{border-bottom:0;border-top:0}::-webkit-scrollbar-corner{width:0;height:0;background-color:'+bg+';border:1px solid '+bor+';border-top:0;border-left:0}::-webkit-scrollbar-thumb{border-radius:'+rad+';min-height:28px;border:1px solid '+bor+';background:-webkit-linear-gradient(left,#fafafa,'+lin+')}::-webkit-scrollbar-thumb:hover{background:-webkit-linear-gradient(left,#fafafa,'+lin+')}::-webkit-scrollbar-thumb:horizontal{background:-webkit-linear-gradient(top,#fafafa,'+lin+')}::-webkit-scrollbar-thumb:horizontal:hover{background:-webkit-linear-gradient(top,#fafafa,'+lin+')}';
    var s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = shtml;
    document.getElementsByTagName('head')[0].appendChild(s);
    (document.body || document.head || document.documentElement).appendChild(s);
}

function load_scroll_bar(){
    chrome.extension.sendRequest({cmd:"get_color"}, 
        function(response) {
            var favorite = response.tcolor;
            switch(favorite){
            case "Dark-nr":
                load_style('#424242','#2E2E2E','#D8D8D8', '0px');
                break;
            case "Dark":
                load_style('#424242','#2E2E2E','#D8D8D8', '5px');
                break;
            case "Light-nr":
                load_style('#D8D8D8','#BDBDBD','#F2F2F2', '0px');
                break;
            case "Light":
            default:
                load_style('#D8D8D8','#BDBDBD','#F2F2F2', '5px');
            }
    });
}

function filter_url(url){
    var exclude = /(\.google\.com|omgubuntu\.co\.uk)/i;
    var except = /((www|play)\.google\.com)/i;
    if (exclude.test(url) && !except.test(url))
        return;
    load_scroll_bar();
}

filter_url(document.URL);