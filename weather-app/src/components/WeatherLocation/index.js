import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from "./../../services/transformWeather";
import { apiWeather } from "./../../constants/apiUrls";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Cordoba",
      data: null,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () => {
    console.log("handleUpdateClick");

    fetch(apiWeather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    console.log("render");

    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={70}/> }
      </div>
    );
  }
}

export default WeatherLocation;
