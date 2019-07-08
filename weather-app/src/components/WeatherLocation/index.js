import React, { Component } from "react";
import transformWeather from "./../../services/transformWeather";
import { apiWeather } from "./../../constants/apiUrls";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN } from "./../../constants/weathers";

const data = {
  temperature: 10,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Cordoba",
      data: data
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
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
