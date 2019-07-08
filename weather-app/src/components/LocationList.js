import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
    return (
        <div>
            <WeatherLocation city="Cordoba" />
            <WeatherLocation city="Mendoza" />
            <WeatherLocation city="Bogota" />
        </div>
    );
};

export default LocationList;