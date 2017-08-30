function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function () {
        callback(false);
    }
    xhr.send(null);
}

function checkStatus() {
    httpRequest('https://www.baidu.com/', function (status) {
        console.log(status)
        chrome.browserAction.setIcon({
            path: 'images/' + (status ? 'online.png' : 'offline.png')
        });
        setTimeout(checkStatus, 1000);
    });
}

checkStatus();