chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'Hello'){
        sendResponse('Hello from background.');
    } else if(message = 'yourName') {
        sendResponse('Henson')
    }
});