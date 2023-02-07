import KEY from "./key.js";
const city = document.querySelector("#cityId");
const getCity = document.querySelector("#weatherSearch");
const weatherInfo = document.querySelector("#weatherInfo");

async function getWeather(val1, val2) {
  let data = "";
  console.log(typeof val1);
  if (typeof val1 === "string") {
    try {
      data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${val1}&units=imperial&appid=${KEY}`,
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
    } catch (e) {
      console.log(e);
    }
  }
  const weatherData = await data.json();
  console.log(weatherData);
  weatherInfo.innerHTML = `
  <h2>${weatherData.name}</h2>
  <p>${weatherData.weather[0].main} <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"</p>
  <p>Temp: ${weatherData.main.temp}</p>
  <p>H: ${weatherData.main.temp_max} L: ${weatherData.main.temp_min}</p>
  <p>Feels like:    ${weatherData.main.feels_like}</p>`;
}

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
