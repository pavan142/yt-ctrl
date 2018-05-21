chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    //debugger;
     console.log("------------------got a message in ytctrl------------");
     if (request.message === "toggle-play") {
        let togglePlay = document.querySelector('.ytp-play-button');
        togglePlay.click();
    }
    });
  