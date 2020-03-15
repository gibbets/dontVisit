chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return {cancel: true}; },
        {urls: ["*://www.facebook.com/*"]},
        ["blocking"]);