import React from "react";
import CityWeather from "../city-weather";
import Header from "../header";
import WeatherService from "../../services/weather-servise";

import "./app.scss";

const App = () => {
  const { getWeatherInCity, getDataWeatherByDay } = new WeatherService();
  getWeatherInCity("paris").then((data) => {
    console.log(getDataWeatherByDay(data.weatherByDays[0]));
  });

  return (
    <div>
      <Header />
      <CityWeather />
    </div>
  );
};

export default App;
