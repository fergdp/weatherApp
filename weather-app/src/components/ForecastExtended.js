import React, { Component } from "react";
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
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
}

class ForecastExtended extends Component {

    renderForecasstItemDays() {
        return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>);
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                {this.renderForecasstItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;