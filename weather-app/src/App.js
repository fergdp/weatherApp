import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Cordoba, ar',
  'Mendoza, ar',
  'Bogota, col',
  'Mexico, mx',
  'Lima, pe',
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;
