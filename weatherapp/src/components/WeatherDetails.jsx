import React, { useContext } from 'react';
import "../styles/WeatherDetails.css";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import { WeatherContext } from './WeatherProvider';

const WeatherDetails = () => {
  const { weatherData } = useContext(WeatherContext); // Destructure weatherData from context

  return (
    <div className='WeatherDetails'>
      <div className='div1'>
        <img src={humidity} alt="humidity" />
        <p>{weatherData && weatherData.main && weatherData.main.humidity}%</p>
      </div>
      <div className='div1'>
        <img src={wind} alt="wind" />
        <p>{weatherData && weatherData.wind && weatherData.wind.speed}km/h</p>
      </div>
    </div>
  )
}

export default WeatherDetails;