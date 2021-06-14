const initialState = {
  weather: {
    id: 1,
    name: "lviv",
    country: "ukr",
    days: [
      {
        id: 123,
        name: "Monday",
      },
    ],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_LOADED":
      return {
        weather: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
