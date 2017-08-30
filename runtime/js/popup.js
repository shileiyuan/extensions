var container = document.querySelector('#container');

var hello = function () {
    chrome.runtime.sendMessage('Hello', function (response) {
        // document.write(response);
        container.insertAdjacentHTML('beforeend', '<h4>' + response + '</h4>')
    });
}

var yourName = function () {
    chrome.runtime.sendMessage('yourName', function (response) {
        container.insertAdjacentHTML('beforeend', '<h4>' + response + '</h4>')
    });
}

document.getElementById('hello').addEventListener('click', hello)
document.getElementById('yourName').addEventListener('click', yourName)