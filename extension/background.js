var test;
function toggleYoutubePause() {
    console.log("background script: printing tabs");
    var query = {};
    // function callback(tabs) {
    //     var currentTab = tabs[0]; // there will be only one in this array
    //     console.log(currentTab); // also has properties like currentTab.id
    // };
    chrome.tabs.query(query, (tabs) => {
        for (let i = 0, n = tabs.length; i<n; i++) {
            let tab = tabs[i];
            test = tab;
            let url = tab.url;
            if (url.substring(0,23) == "https://www.youtube.com") {
                console.log("youtube is present");
                chrome.tabs.update(tab.id, {active: true});
                setTimeout(() => {
                    console.log("sending message from master control");
                    chrome.tabs.sendMessage(tab.id, {"message": "toggle-play"});
                },3000);                
                return;
            }
        }
    });
}

  toggleYoutubePause();
var ws = new WebSocket("ws://localhost:1402");
ws.onmessage = (message) => {
    console.log(message);
    if (message.data === "toggle-play") {
        toggleYoutubePause();
    }
};  
// setTimeout(toggleYoutubePause, 2000);