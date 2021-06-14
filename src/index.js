import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErroBoundry from "./components/error-boundry";
import WeatherService from "./services/weather-servise";
import { WeatherServiceProvider } from "./components/weather-service-context";

import store from "./store";

const weatherService = new WeatherService();

ReactDOM.render(
  <Provider store={store}>
    <ErroBoundry>
      <WeatherServiceProvider value={weatherService}>
        <Router>
          <App />
        </Router>
      </WeatherServiceProvider>
    </ErroBoundry>
  </Provider>,
  document.getElementById("root")
);
