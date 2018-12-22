  chrome.runtime.onInstalled.addListener(function() {
	  console.log('Hello, now i am fucking installed');
	  
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });
  
