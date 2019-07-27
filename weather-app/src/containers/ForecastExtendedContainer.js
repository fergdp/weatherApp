import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { getForecastDataFromCities } from './../reducers/cities';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastdata: PropTypes.array,
};

const mapStateToProps = state => ({ city: state.city, forecastData: getForecastDataFromCities(state.cities, state.city) });
export default connect(mapStateToProps, null)(ForecastExtendedContainer);