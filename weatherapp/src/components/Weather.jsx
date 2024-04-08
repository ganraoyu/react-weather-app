import React, { useContext } from 'react';
import clouds from "../assets/clouds.png";
import "../styles/Weather.css";
import { WeatherContext } from './WeatherProvider';

const Weather = () => {
  const { weatherData } = useContext(WeatherContext); // Destructure weatherData from context

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className='Weather'>
      <img src={clouds} alt="clouds" />
      <h1 className="poppins-thin">{Math.round(weatherData.main.temp - 273.15)}°C</h1>
      <p className="poppins-thin">{weatherData.name}</p>
    </div>
  );
}

export default Weather;