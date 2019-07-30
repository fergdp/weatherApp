import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { setSelectedCity, setWeather } from './../actions';

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }

    handleSelectionLocation = city => {
        this.props.setcity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectionLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setcity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setcity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);