import KEY from "./key.js";
const city = document.querySelector("#cityId");
const getCity = document.querySelector("#weatherSearch");
const weatherInfo = document.querySelector("#weatherInfo");
const forecastInfo = document.querySelector("#forecastInfo");

async function getWeather(val1, val2) {
  let data = "";
  let forecast;
  console.log(typeof val1);
  if (typeof val1 === "string") {
    try {
      data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${val1}&units=imperial&appid=${KEY}`,
        { method: "GET", mode: "cors" }
      );
      forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${val1}&lon=${val2}&appid=${KEY}`,
        { method: "GET", mode: "cors" }
      );
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${val1}&lon=${val2}&units=imperial&appid=${KEY}`,
        { method: "GET", mode: "cors" }
      );
      forecast = await fetch(
        (forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${val1}&lon=${val2}&units=imperial&appid=${KEY}`),
        { method: "GET", mode: "cors" }
      );
    } catch (e) {
      console.log(e);
    }
  }
  const weatherData = await data.json();
  const forecastData = await forecast.json();

  weatherInfo.innerHTML = `
  <h2>${weatherData.name}</h2>
  <p>${weatherData.weather[0].main} <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"</p>
  <p>Temp: ${weatherData.main.temp}</p>
  <p>H: ${weatherData.main.temp_max} L: ${weatherData.main.temp_min}</p>
  <p>Feels like:    ${weatherData.main.feels_like}</p>`;

  let forecastArr = [
    forecastData.list[0],
    forecastData.list[7],
    forecastData.list[15],
    forecastData.list[23],
    forecastData.list[31],
  ];
  forecastArr.forEach((forecast) => {
    forecastInfo.innerHTML += `
    <div>
    <p>Date: </p> 
   <h2>${forecast.weather[0].main}</h2>
    <p>Temp:</p>
    <p>H: ${forecast.main.temp_max} L: ${forecast.main.temp_min}</p>
    <p>Feels like:</p>
    </div>`;
  });
} //0,7,15,23,31
window.onload = function () {
  //   async function getLocation() {
  //     navigator.geolocation.getCurrentPosition(function (pos) {
  //       getWeather(pos.coords.latitude, pos.coords.longitude);
  //     });
  //   }

  getCity.addEventListener("click", (event) => {
    event.preventDefault();
    getWeather(city.value);
  });

  getWeather(44.59, -89.123);
  //   getLocation();
};
