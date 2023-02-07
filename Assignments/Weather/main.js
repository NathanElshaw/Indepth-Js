import KEY from "./key.js";

window.onload = function () {
  async function getWeather(url) {
    try {
      const data = await fetch(url, { method: "GET", mode: "cors" });
      const weatherData = await data.json();
      console.log(weatherData);
    } catch (e) {
      console.log(e);
    }
  }

  getWeather(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${KEY}`
  );
};
