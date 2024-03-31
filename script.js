function getCountry(){
    var countryName =  document.getElementById("search").value; 
    // document.getElementById("search").value = "";
    document.getElementById("container1").textContent = "";

    var url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
    .then(res =>  res.json())
    .then(data => displayCountry(data));
}

var lat = 0;
var long = 0;

function displayCountry(info){

    var container = document.getElementById("container");

 
    container.innerHTML = `<h2>Country: ${info[0].name.common}</h2>
    
    <img src="${info[0].flags.png}">
    <div class="box">
        <div class="region"><h3>Region: ${info[0].region}</h3> </div>
        <div class="capital"><h3>Capital: ${info[0].capital}</h3> </div>
    </div>
    
    ` ;

    lat = info[0].latlng[0];
    long = info[0].latlng[1];

}

function getWeather(){
    // console.log(lat,long);
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b600f96ed988432b7361ea6db0cbcd00&units=metric`;
    fetch(url)
    .then(res =>  res.json())
    .then(data => displayWeather(data)); 
}

function displayWeather(info){

    var container1 = document.getElementById("container1");

    container1.innerHTML = `
    <h2>Weather</h2>
    <img src = "http://openweathermap.org/img/w/${info.weather[0].icon}.png">
    <h3> ${info.weather[0].main}</h3>
    <h3>Temperature: ${info.main.temp} °C</h3>
    <h3>Feels Like: ${info.main.feels_like} °C</h3>
    <h3>Cloud Cover: ${info.clouds.all}%</h3>
    <h3>Humidity: ${info.main.humidity}%</h3>
    <h3>Pressure: ${info.main.pressure} Pa</h3>
    <h3>Wind Gusts: ${info.wind.gust} m/s</h3>
    `;

}








