import React from "react";
import SearchBox from "../search-box/search-box";
import WeatherMainItem from "../weather-main-item";

import "./home-page.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <SearchBox />
      <WeatherMainItem />
    </div>
  );
};

export default HomePage;
