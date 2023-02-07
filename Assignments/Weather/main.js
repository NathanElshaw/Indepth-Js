import KEY from "./key.js";

window.onload = function () {
  async function getLocation() {
    navigator.geolocation.getCurrentPosition(function (pos) {
      getWeather(pos.coords.latitude, pos.coords.longitude);
    });
  }
  async function getWeather(lat, lon) {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`,
        { method: "GET", mode: "cors" }
      );
      const weatherData = await data.json();
      console.log(weatherData);
    } catch (e) {
      console.log(e);
    }
  }

  getLocation();
};
