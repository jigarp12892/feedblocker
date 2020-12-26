// background.js
var click_count = 0;
chrome.browserAction.onClicked.addListener(function(block) {
  // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    click_count=click_count+1;

    if( (click_count%2) === 0 )
    {
      
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
      
    }
    else 
    {      
      chrome.tabs.sendMessage(activeTab.id, {"message": "unclicked_browser_action"});
    }
  });
});


