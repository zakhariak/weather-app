import React from "react";
import { withWeatherService } from "../hoc";
import { Route, Switch } from "react-router-dom";
import Header from "../header";
import { HomePage } from "../pages";

import "./app.scss";

const App = () => {
  return (
    <div className="container-body">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
};

export default withWeatherService()(App);
