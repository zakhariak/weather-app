import React from "react";

import CityWeatherDetails from "../city-weather-details";
import WeatherByDays from "../weather-by-days";
import SearchBox from "../search-box";

const CityWeather = () => {
  return (
    <div>
      <SearchBox />
      <CityWeatherDetails />
      <WeatherByDays />
    </div>
  );
};

export default CityWeather;
