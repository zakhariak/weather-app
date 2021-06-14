import React, { Component } from "react";

import "./weather-now.scss";

class WeatherNow extends Component {
  render() {
    const { weather } = this.props;
    console.log(weather);
    return <div>weather now work</div>;
  }
}

export default WeatherNow;
