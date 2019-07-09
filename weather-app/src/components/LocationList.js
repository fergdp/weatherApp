import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities,  onSelectedLocation}) => {

    const handleWeatherLocactionClick = city => {
        console.log("handleWeatherLocactionClick");
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map(city =>
            <WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocactionClick(city)} />
        )
    );

    return (
        <div>
            {strToComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};
export default LocationList;