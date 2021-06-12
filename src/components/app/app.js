import React from "react";
import CityWeather from "../city-weather";
import Header from "../header";

import "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <CityWeather />
    </div>
  );
};

export default App;
