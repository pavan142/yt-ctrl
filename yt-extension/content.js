console.log("content: of black youtube");

var init = function() {
    console.log(" ---- intializing ---")
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
        // debugger;
        console.log("got a message");
        if (request.message === "toggle-play") {
            let togglePlay = document.querySelector('.ytp-play-button');
            togglePlay.click();
        }
    });
    chrome.runtime.sendMessage({"message":"hi from contentScript"});    
};
init();
// window.addEventListener("load",init);