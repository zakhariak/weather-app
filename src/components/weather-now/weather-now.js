import React, { useEffect, useState } from "react";
import { withWeatherService } from "../hoc";
import { connect } from "react-redux";

import "./weather-now.scss";

const WeatherDetails = ({ details }) => {
  console.log("work", details);
  return (
    <div className="weather-wrap">
      <h1 className="temp">{`${details.temp}${"\u00B0"}`}</h1>
      {/* <img src={details.coverImages[0].src} alt="sds" /> */}
      <div className="img"></div>
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
  );
};
////main component//////////////////
const WeatherNow = (props) => {
  const [dayNow, setDayNow] = useState();

  const { weatherLoaded, weatherService, coverImages } = props;

  useEffect(() => {
    async function fetchData() {
      const data = await weatherService.getWeatherInCity("warsaw");
      await weatherLoaded(data);
      const dataByDay = await data.weatherByDays[0];
      setDayNow({
        ...weatherService.getDataWeatherByDay(dataByDay),
        coverImages: coverImages,
      });
    }
    fetchData();
  }, [weatherLoaded, weatherService, coverImages]);

  return (
    <div className="weather-now">
      <h2>{`${props.weather.name}, ${props.weather.country}`}</h2>
      {dayNow ? <WeatherDetails details={dayNow} /> : <div></div>}
    </div>
  );
};
////helper function//////////////////
const mapStateToProps = ({ weather, coverImages }) => {
  return { weather, coverImages };
};

const mapDispatchToProps = (dispatch) => {
  return {
    weatherLoaded: (newCityData) => {
      dispatch({
        type: "WEATHER_LOADED",
        payload: newCityData,
      });
    },
  };
};

export default withWeatherService()(
  connect(mapStateToProps, mapDispatchToProps)(WeatherNow)
);
