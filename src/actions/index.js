const addCityName = (name) => {
  return {
    type: "ADD_CITY_NAME",
    payload: name,
  };
};

const weatherLoaded = (newCityData) => {
  return {
    type: "WEATHER_LOADED",
    payload: newCityData,
  };
};

const weatherRequested = () => {
  return {
    type: "WEATHER_REQUESTED",
  };
};

const weatherError = (error) => {
  return {
    type: "WEATHER_ERROR",
    payload: error,
  };
};

export {
  addCityName,
  weatherLoaded,
  weatherRequested,
  weatherError,
};
