const initialState = {
  weather: {},
  coverImages: [
    {
      id: "01d",
      src: "../assets/images/broken-clouds.svg",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_LOADED":
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
