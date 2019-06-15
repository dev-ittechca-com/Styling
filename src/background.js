setInterval(function() {
  browser.storage.local.get(function(item) {
    if (item.disabled == "true") {
      browser.browserAction.setIcon({path: "../images/StylingDisabled.png"});
    } else {
      browser.browserAction.setIcon({path: "../images/Styling.png"});
    }
  });
},10000);
