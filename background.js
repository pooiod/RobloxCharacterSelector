const minWidth = 750;
const minHeight = 200;
let windowId = null;

// Create a popup window when the icon is clicked
chrome.browserAction.onClicked.addListener(() => {
  chrome.windows.create({
    url: "https://www.roblox.com/my/avatar?RobloxCharacterSelector",
    type: "popup",
    width: minWidth,
    height: minHeight
  }, (window) => {
    windowId = window.id;
    startSizeCheck();
  });
});

// Function to check and enforce minimum window size
function checkWindowSize() {
  if (windowId === null) return;

  chrome.windows.get(windowId, (window) => {
    if (window.width < minWidth || window.height < minHeight) {
      chrome.windows.update(windowId, {
        width: Math.max(window.width, minWidth),
        height: Math.max(window.height, minHeight)
      });
    }
  });
}

// Start checking the window size at intervals
function startSizeCheck() {
    chrome.windows.get(windowId, (window) => {
        chrome.windows.update(windowId, {
            width: Math.max(window.width, 800),
            height: Math.max(window.height, 600)
        });
    });
    
  setInterval(checkWindowSize, 100); // Check every 100ms
}
