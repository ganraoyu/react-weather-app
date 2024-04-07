import React from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <SearchBar />
      <Weather />
      <WeatherDetails />
    </div>
  );
}

export default App;