function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result) {
    result = JSON.parse(result);
    var list = result.list;
    var table = '<table><tr><th>城市</th><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
    for (var i in list) {
        var d = new Date(list[i].dt * 1000);
        table += '<tr>';
        table += '<td>' + list[i].name + '</td>';
        table += '<td>' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '</td>';
        table += '<td>' + list[i].weather[0].description + '</td>';
        table += '<td>' + Math.round(list[i].main['temp_min'] - 273.15) + ' °C</td>';
        table += '<td>' + Math.round(list[i].main['temp_max']  - 273.15) + ' °C</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city ? city : 'Beijing';
// var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + ',china&lang=zh_cn';
var url = 'http://openweathermap.org/data/2.5/find?q=' + city + '&type=like&sort=population&cnt=30&appid=b1b15e88fa797225412429c1c50c122a1&_=1504101996200'

var loadBtn = document.getElementById('load');
loadBtn.addEventListener('click', function () {
    httpRequest(url, showWeather);
})
httpRequest(url, showWeather);