import React from "react";

import "./weather-details.scss";

const WeatherDetails = ({ details }) => {
  return (
    <div>
      {details && (
        <div className="weather-wrap">
          <h1 className="temp">{`${details.temp}${"\u00B0"}`}</h1>
          <img src={details.icon} alt={details.description} />
          <h1 className="description">{details.description}</h1>
          <div className="monthDate">
            <p>{details.date.month}</p>
            <p>{details.date.date}</p>
          </div>
          <div className="dayTime">
            <p>{details.date.day}</p>
            <p>{`${details.date.hour}:${details.date.minutes}`}</p>
          </div>
          <div className="weatherDetails">
            <p>{`Wind ${details.wind} m/s`}</p>
            <p>{`Pressure ${details.pressure} hPa`}</p>
          </div>
          <div className="weatherDetails">
            <p>{`Humidity ${details.humidity} %`}</p>
            <p>{`Cloudliness ${details.cloudliness} %`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
