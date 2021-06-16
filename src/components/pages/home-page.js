import React from "react";
import SearchBox from "../search-box/search-box";
import WeatherNow from "../weather-now";

import "./home-page.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <SearchBox />
      <WeatherNow />
    </div>
  );
};

export default HomePage;
