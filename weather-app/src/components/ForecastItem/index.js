import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}

const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <div>{weekDay} Hora: {hour}</div>
        <WeatherData data={data}></WeatherData>
    </div>
    
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;