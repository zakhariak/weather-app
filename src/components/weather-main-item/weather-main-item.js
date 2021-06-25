import React, { useEffect } from "react";
import WeatherDetails from "../weather-details";
import WeatherDaysList from "../weather-days-list";
import { connect } from "react-redux";

import { withWeatherService } from "../hoc";
import { weatherLoaded, weatherRequested, weatherError } from "../../actions";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./weather-main-item.scss";

const WeatherMainItem = (props) => {
  const {
    cityName,
    weather,
    loading,
    error,
    weatherLoaded,
    weatherRequested,
    weatherError,
    weatherService,
  } = props;

  useEffect(() => {
    weatherRequested();
    if (cityName) {
      weatherService
        .getWeatherInCity(cityName)
        .then((data) => {
          weatherLoaded(data);
        })
        .catch((err) => weatherError(err));
    }
  }, [cityName, weatherLoaded, weatherRequested, weatherError, weatherService]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    cityName && (
      <div>
        <div className="weather-main-item">
          <h2>{`${weather.name}, ${weather.country}`}</h2>
          <WeatherDetails
            details={weatherService.getWeatherByDay(weather.weatherByDays[0])}
          />
        </div>
        <WeatherDaysList daysData={weather.weatherByDays} />
      </div>
    )
  );
};

const mapStateToProps = ({
  cityName,
  weather,
  selectedDay,
  loading,
  error,
  coverImages,
}) => {
  return { cityName, weather, selectedDay, loading, error, coverImages };
};

const mapDispatchToProps = {
  weatherLoaded,
  weatherRequested,
  weatherError,
};

export default withWeatherService()(
  connect(mapStateToProps, mapDispatchToProps)(WeatherMainItem)
);
