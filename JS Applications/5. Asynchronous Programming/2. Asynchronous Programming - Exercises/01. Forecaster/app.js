import Fetch from '../fetchData.js';
import { createCurrentForecastDiv, createUpcomingForecastDiv } from './view.js';

const selectors = {
   locationTextBox: () => document.querySelector("#location"),
   getWeatherBtn: () => document.querySelector("#submit"),
   currentWeatherDiv: () => document.querySelector("#current"),
   upcomingWeatherDiv: () => document.querySelector("#upcoming"),
   forecastSection: () => document.querySelector("#forecast")
}

selectors.getWeatherBtn().addEventListener("click", showWeather);

async function showWeather() {
   selectors.currentWeatherDiv().innerHTML = `<div class="label">Current conditions</div>`;
   selectors.upcomingWeatherDiv().innerHTML = `<div class="label">Three-day forecast</div>`;

   const rootUrl = "https://judgetests.firebaseio.com/";
   const locInput = selectors.locationTextBox().value;
   selectors.locationTextBox().value = "";

   try {

      const availableLocations = await Fetch.get(rootUrl + "locations.json");
      const location = availableLocations.find(obj => obj.name === locInput);
      const { code } = location;

      const currentForecast = await Fetch.get(rootUrl + `forecast/today/${code}.json`);
      const currentForecastDiv = createCurrentForecastDiv(currentForecast);
      selectors.currentWeatherDiv().appendChild(currentForecastDiv);

      const upcomingForecast = await Fetch.get(rootUrl + `forecast/upcoming/${code}.json`);
      const upcomingForecastDiv = createUpcomingForecastDiv(upcomingForecast);
      selectors.upcomingWeatherDiv().appendChild(upcomingForecastDiv);

      selectors.forecastSection().style.display = "block";

   } catch {

      selectors.forecastSection().style.display = "none";
      alert("Error!");

   }
}