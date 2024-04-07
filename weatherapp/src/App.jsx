import React from 'react'
import SearchBar from './components/SearchBar'
import Weather from './components/Weather'
import WeatherDetails from './components/WeatherDetails'

const App = () => {
  return (
    <div>
      <SearchBar />
      <Weather />
      <WeatherDetails />
    </div>
  )
}

export default App