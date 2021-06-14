import React from "react";
import WeatherNow from "../weather-now";

const HomePage = () => {
  const weather = {
    id: 1,
    name: "lviv",
    country: "ukr",
    days: [
      {
        id: 123,
        name: "Monday",
      },
    ],
  };
  return (
    <div>
      <WeatherNow weather={weather} />
    </div>
  );
};

export default HomePage;
