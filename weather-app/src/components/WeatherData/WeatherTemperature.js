import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD,
    CLODY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
} from '../../../constants/weathers';

const icons = {
    [CLOUD]: "cloud",
    [CLODY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [FOG]: "day-fog",
};

const getWeatherIcon = weatherState => {
    console.log(weatherState);
    const icon = icons[weatherState];
    if (icon) {
        return <WeatherIcons name={icon} size="2x" />
    }
    else {
        return <WeatherIcons name={"day-sunny"} size="2x" />
    }
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;