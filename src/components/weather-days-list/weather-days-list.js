import React from "react";
import WeatherService from "../../services/weather-servise";

import "./weather-days-list.scss";

const WeatherDaysListItem = ({ dayData }) => {
  return (
    <div className="listItem">
      <h3>{dayData.date.day}</h3>
      <img src={dayData.icon} alt={dayData.description} />
      <h3 className="temp">{`${dayData.temp}${"\u00B0"}`}</h3>
      <p className="description">{dayData.description}</p>
    </div>
  );
};

const WeatherDaysList = ({ daysData }) => {
  const weatherService = new WeatherService();
  const transformedDays = daysData.map((day) =>
    weatherService.getWeatherByDay(day)
  );
  let fourDays = transformedDays.filter(
    (day) =>
      day.date.date > transformedDays[0].date.date && day.date.hour === "12"
  );
  fourDays.length = 4;
  
  return (
    <ul className="days-list">
      {fourDays.map((dayData) => {
        return (
          <li key={fourDays.indexOf(dayData)}>
            <WeatherDaysListItem dayData={dayData} />
          </li>
        );
      })}
    </ul>
  );
};

export default WeatherDaysList;
