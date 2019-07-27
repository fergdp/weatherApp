import React from "react";
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecasstItemDays = (forecastData) => {
    return forecastData.map(forecastData => (
        <ForecastItem
            key={`${forecastData.weekDay}${forecastData.hour}`}
            weekDay={forecastData.weekDay}
            hour={forecastData.hour}
            data={forecastData.data}
        />
    ));
}

const renderProgress = () => {
    return <h3>"Cargando pronostico extendido..."</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
        {forecastData ?
            renderForecasstItemDays(forecastData) :
            renderProgress()}
    </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;