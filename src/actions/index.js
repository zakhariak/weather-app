const weatherLoaded = (newCityData) => {
  return {
    type: "WEATHER_LOADED",
    payload: newCityData,
  };
};

export { weatherLoaded };
