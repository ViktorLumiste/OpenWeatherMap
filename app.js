document.addEventListener('DOMContentLoaded', cityWeather)
function weatherDataFetch(city) {
    var key="559b01018d1357db4e2132b83d795dd9"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(function(resp){
    return resp.json()
    })
    .then(function(data){
        console.log(data);
        drawWeather(data)
    })
    .catch(function(){

    });
}
function cityWeather(e){
    weatherDataFetch('Tallinn')
}
function drawWeather(data){
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temp").innerHTML = celcius + "&deg;";
    document.querySelector("#location").innerHTML = data.name;
}