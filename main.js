function cc_set(Mv) {
    Mv.setAttribute("auto-rotate", "");
}

mv = document.getElementById("mv");

if (mv.loaded == false | mv.loaded == undefined){
    ThunkableWebviewerExtension.postMessage("loading");
}

check_interval = setInterval(check_load);

function check_load(){
    if (mv.loaded == true){
        clearInterval(check_interval);
        ThunkableWebviewerExtension.postMessage("loaded");
        ThunkableWebviewerExtension.postMessage((this.matches) ? "portrait" : "landscape");
    }
}

mv.addEventListener("touchstart", function(){
    ThunkableWebviewerExtension.postMessage("touchstarted");
});

orien = window.matchMedia("(orientation: portrait)");
orien.addListener(function (){
    ThunkableWebviewerExtension.postMessage((this.matches) ? "portrait" : "landscape");
    console.log((this.matches) ? "portrait" : "landscape");
});
