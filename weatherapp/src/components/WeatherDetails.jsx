import React from 'react'
import "../styles/WeatherDetails.css"
import humidity from "../assets/humidity.png"
import wind from "../assets/wind.png"
const WeatherDetails = () => {
  return (
    <div className='WeatherDetails'>
      <div className='div1'>
        <img src={humidity} alt="humidity" />
        <p>64%</p>
      </div>
      <div className='div1'>
        <img src={wind} alt="wind" />
        <p>18km/h</p>
      </div>
    </div>
  )
}

export default WeatherDetails