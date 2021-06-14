import React from "react";
import { withWeatherService } from "../hoc";
import { Route, Switch } from "react-router-dom";
import Header from "../header";
import { HomePage, CityWeatherDetails, SettingsPage } from "../pages";

import "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/details" component={CityWeatherDetails} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </div>
  );
};

export default withWeatherService()(App);
