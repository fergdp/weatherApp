import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { setcity } from './../actions';

class LocationListContainer extends Component {

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
    setcity: value => dispatch(setcity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);