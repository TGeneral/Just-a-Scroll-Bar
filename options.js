
function save_options(v) {
    localStorage["scrollbar_color"] = v;
    restore_options();
    var status = document.getElementById("save_status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

function restore_options() {
    var favorite = localStorage["scrollbar_color"];
    if (!favorite) return;
    var light = document.getElementById("light");
    var dark = document.getElementById("dark");
    light.setAttribute("class", "item");
    dark.setAttribute("class", "item");
    switch(favorite){
    case "Dark":
        dark.setAttribute("class", "item select");
        break;
    case "Light":
        light.setAttribute("class", "item select");
        break;
    default:
        light.setAttribute("class", "item select");
    }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#light').addEventListener('click',  function(){save_options("Light")});
document.querySelector('#dark').addEventListener('click',  function(){save_options("Dark")});