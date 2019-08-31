import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { setSelectedCity, setWeather } from './../actions';
import  {getWeatherCities, getCity} from './../reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setcity, cities, city } = this.props;

        setWeather(cities);

        setcity(city);
    }

    handleSelectionLocation = city => {
        this.props.setcity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectionLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setcity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city:PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setcity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);