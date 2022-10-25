document.addEventListener('DOMContentLoaded', cityWeather)
function weatherDataFetch(city) {
    var key="559b01018d1357db4e2132b83d795dd9"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(function(resp){
    return resp.json()
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(){

    });
}
function cityWeather(e){
    weatherDataFetch('Tallinn')
}
