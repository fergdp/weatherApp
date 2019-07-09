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
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
    
  };
  
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
      </div>
    );
  }
}

export default App;
