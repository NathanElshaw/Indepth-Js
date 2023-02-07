import KEY from "./key.js";

window.onload = function () {
  //   async function getLocation() {
  //     navigator.geolocation.getCurrentPosition(function (pos) {
  //       getWeather(pos.coords.latitude, pos.coords.longitude);
  //     });
  //   }
  async function getWeather(lat, lon) {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${KEY}`,
        { method: "GET", mode: "cors" }
      );
      const weatherData = await data.json();
      console.log(weatherData);
      document.body.innerHTML = `Temp: ${weatherData.main.temp} Feels Like: ${weatherData.main.feels_like}`;
    } catch (e) {
      console.log(e);
    }
  }
  getWeather(44.59, -89.123);
  //   getLocation();
};
