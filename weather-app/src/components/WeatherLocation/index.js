import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from "./../../services/transformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
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
    
    const apiWeather = getUrlWeatherByCity(this.state.city);
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
        {data ? <WeatherData data={data} /> : <CircularProgress size={70} />}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}

export default WeatherLocation;
