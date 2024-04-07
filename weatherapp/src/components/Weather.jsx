import React from 'react';
import clouds from "../assets/clouds.png";
import "../styles/Weather.css";
const Weather = () => {
  return (
    <div className='Weather'>
      <img src={clouds} alt="clouds" />
      <h1 class="poppins-thin">22°C</h1>
      <p class="poppins-thin">New York</p>
    </div>
  );
}

export default Weather; 