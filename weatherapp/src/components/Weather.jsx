import React, { useContext } from 'react';
import clouds from "../assets/clouds.png";
import clear from '../assets/clear.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import drizzle from '../assets/drizzle.png';
import mist from '../assets/mist.png';
import "../styles/Weather.css";
import { WeatherContext } from './WeatherProvider';

const weatherImages = {
  Clear: clear,
  Rain: rain,
  Snow: snow,
  Drizzle: drizzle,
  Mist: mist,
  Clouds: clouds,
};

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return <div>Loading...</div>;

  const weatherCondition = weatherData.weather[0].main;
  const weatherImage = weatherImages[weatherCondition];

  return (
    <div className='Weather'>
      <img src={weatherImage} alt={weatherCondition} />
      <h1 className="poppins-thin">{Math.round(weatherData.main.temp - 273.15)}°C</h1>
      <p className="poppins-thin">{weatherData.name}</p>
    </div>
  );
}

export default Weather;