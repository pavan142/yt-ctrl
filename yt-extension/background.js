var testMessage = function() {
    var query = { currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
        for (let i = 0, n = tabs.length; i<n; i++) {
            let tab = tabs[i];
            test = tab;
            let url = tab.url;
            if (url.substring(0,23) == "https://www.youtube.com") {
                console.log("youtube is present");
                chrome.tabs.sendMessage(tab.id, {"message": "toggle-play"});
                return;
            }
        }
    });
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    // debugger;
    console.log("got a message");
    console.log(request);
    setTimeout(testMessage,5000);
    });
chrome.runtime.onMessageExternal.addListener(
    function(message, sender, sendResponse) {
        console.log("got external message");
    });    
// setTimeout(testMessage, 5000);