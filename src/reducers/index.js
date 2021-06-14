const initialState = {
  days: [],
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
