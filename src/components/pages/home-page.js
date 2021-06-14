import React from "react";
import WeatherNow from "../weather-now";
// import WeatherService from "../../services/weather-servise";

const HomePage = () => {
  // const weather = {
  //   id: 1,
  //   name: "lviv",
  //   country: "ukr",
  //   days: [
  //     {
  //       id: 123,
  //       name: "Monday",
  //     },
  //   ],
  // };
  return (
    <div>
      <WeatherNow />
    </div>
  );
};

export default HomePage;
