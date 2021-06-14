import React, { Component } from "react";
import { connect } from "react-redux";

import "./weather-now.scss";

class WeatherNow extends Component {
  render() {
    const { weather } = this.props;
    console.log(weather);
    return <div>{/* <h1>{weather.name}</h1> */}</div>;
  }
}


const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherNow);
