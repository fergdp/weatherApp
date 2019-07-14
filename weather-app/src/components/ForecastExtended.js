import React, { Component } from "react";
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}*/

const apiKey = "0d397debf0a0ba538b12007efed4da21";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        const urlForecast = `${url}?q=${this.props.city}&appid=${apiKey}`;

        fetch(urlForecast).then(
            data => (data.json())
        ).then(
            weatherData => {
                console.log(weatherData);
                const forecastData = transformForecast(weatherData);
                console.log(forecastData);
                this.setState({ forecastData })
            }
        );
    }

    renderForecasstItemDays(forecastData) {
        return forecastData.map(forecastData => (
            <ForecastItem
                key={`${forecastData.weekDay}${forecastData.hour}`}
                weekDay={forecastData.weekDay}
                hour={forecastData.hour}
                data={forecastData.data}
            />
        ));
    }

    renderProgress() {
        return <h3>"Cargando pronostico extendido..."</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                {forecastData ? this.renderForecasstItemDays(forecastData) :
                    this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;