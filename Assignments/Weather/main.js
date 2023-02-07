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
        `https://api.openweathermap.org/data/2.5/weather?q=${val1}&units=imperial&appid=${KEY}`
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
  weatherInfo.innerHTML = `Name: ${weatherData.name} Temp: ${weatherData.main.temp} Feels Like: ${weatherData.main.feels_like}`;
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
