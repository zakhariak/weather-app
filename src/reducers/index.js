const initialState = {
  cityName: null,
  weather: {},
  loading: false,
  error: null,
  coverImages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY_NAME":
      return {
        ...state,
        cityName: action.payload,
        weather: {},
        loading: true,
        error: null,
      };
    case "WEATHER_REQUESTED":
      return {
        ...state,
      };
    case "WEATHER_LOADED":
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };
    case "WEATHER_ERROR":
      return {
        ...state,
        cityName: null,
        weather: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
