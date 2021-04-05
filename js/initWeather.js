// http: //pv.sohu.com/cityjson?ie=utf-8
var currentWeather;
let weathList;
let indexW = 1;

var proxyWeather;

let initWeather = () => {

    if (returnCitySN) {
        let cityName = returnCitySN.cname.split("省")[1]
        var request = new XMLHttpRequest();
        request.open("get", "http://wthrcdn.etouch.cn/weather_mini?city=" + cityName);
        // request.send(returnCitySN.cname.split("省")[1]);
        request.send(null);
        request.onload = function() {
            if (request.status == 200) {
                var result = JSON.parse(request.responseText);
                document.getElementById("position").innerHTML = result.data.city;
                weathList = [result.data.yesterday, ...result.data.forecast];
                proxyWeather.wendu = `  当前温度:${result.data.wendu}℃`;
                initWeatherBox(indexW);
            }
        }
    }
}


let initWeatherBox = (index) => {
    proxyWeather.date = `  ${weathList[index].date.slice(-3)}`;
    proxyWeather.wenduRange = `  温度区间:${weathList[index].low.slice(2)}-${weathList[index].high.slice(2)}`;
    proxyWeather.wind = weathList[index].fengxiang ? weathList[index].fengxiang : "";
    proxyWeather.windLevel = weathList[index].fengxiang;
    proxyWeather.type = weathList[index].type;
}


let findNext = () => {
    if (indexW < weathList.length) {
        indexW += 1;
    }
    initWeatherBox(indexW);
}

let findPrev = () => {
    if (indexW > 0) {
        indexW -= 1;
    }
    initWeatherBox(indexW);
}

let returnToday = () => {
    initWeatherBox(1);

}

let bindData = () => {
    currentWeather = {
        date: "今天",
        wenduRange: `111`,
        wind: "1",
        windLevel: "weathList[index].fengxiang",
        type: " weathList[index].type",
        wendu: "0℃"
    }

    proxyWeather = new Proxy(currentWeather, {
        set: function(target, key, value) {
            switch (key) {
                case 'date':
                    document.getElementById("date").innerHTML = value;
                    break;
                case 'wendu':
                    document.getElementById("wendu").innerHTML = value;
                    break;
                case 'wenduRange':
                    document.getElementById("wenduRange").innerHTML = value;
                    break;
                case 'wind':
                    document.getElementById("wind").innerHTML = value;
                    break;
                case 'type':
                    //changetype
                    document.getElementById("type").innerHTML = value;
                    break;
            }
            target[key] = value;
            return true;
        },
        get: function(target, key) {
            return target[key];
        }
    });
}