import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from './../../constants/weathers';

const location = "Provincia de Córdoba, AR";
const apiKey = "0d397debf0a0ba538b12007efed4da21";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/weather";

const apiWeather = `${urlBaseWeather}?q=${location}&appid=${apiKey}`;


const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Cordoba",
            data: data,
        };
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getWeatherState = weatherData => {
        return SUN;
    }

    getData = weatherData => {
        const {humidity, temp} = weatherData.main;
        const {speed} = weatherData.wind;
        const weatherState = this.getWeatherState(weatherData.weather);
        const temperature = this.getTemp(temp);
        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }
        
        return data;
    }

    handleUpdateClick = () => {
        console.log("actualizado");

        fetch(apiWeather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather,
            });
        });
    }

    render () {
        const {city,data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;