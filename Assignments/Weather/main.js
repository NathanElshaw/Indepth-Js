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
    (forecast = [
      forecastData.list[0],
      forecastData.list[1],
      forecastData.list[2],
      forecastData.list[3],
      forecastData.list[4],
      forecastData.list[5],
      forecastData.list[6],
    ]),
    (forecast = [
      forecastData.list[7],
      forecastData.list[8],
      forecastData.list[9],
      forecastData.list[10],
      forecastData.list[11],
      forecastData.list[12],
      forecastData.list[13],
      forecastData.list[14],
    ]),
    (forecast = [
      forecastData.list[15],
      forecastData.list[16],
      forecastData.list[17],
      forecastData.list[18],
      forecastData.list[19],
      forecastData.list[20],
      forecastData.list[21],
      forecastData.list[22],
    ]),
    (forecast = [
      forecastData.list[23],
      forecastData.list[24],
      forecastData.list[25],
      forecastData.list[26],
      forecastData.list[27],
      forecastData.list[28],
      forecastData.list[29],
      forecastData.list[30],
    ]),
    (forecast = [
      forecastData.list[31],
      forecastData.list[32],
      forecastData.list[33],
      forecastData.list[34],
      forecastData.list[35],
      forecastData.list[36],
      forecastData.list[37],
      forecastData.list[38],
    ]),
  ];

  function min(arg) {
    let num = 1000;
    for (let i = 0; i < arg.length; i++) {
      if (arg[i].main.temp_min < num) {
        num = arg[i].main.temp_min;
      }
    }
    console.log(num);
    return num;
  }

  function max(arg) {
    let num = 0;
    for (let i = 0; i < arg.length; i++) {
      if (arg[i].main.temp_min > num) {
        num = arg[i].main.temp_min;
      }
    }
    console.log(num);
    return num;
  }

  forecastArr.forEach((forecast) => {
    console.log(forecastArr);
    forecastInfo.innerHTML += `
    <div>
    <p>Date: ${Date(forecast[0].dt)}</p> 
   <h2>${forecast[0].weather[0].main}</h2>
    <p>H: ${max(forecast)} L: ${min(forecast)}</p>
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
