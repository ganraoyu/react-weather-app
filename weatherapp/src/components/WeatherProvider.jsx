import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York'); // default city

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09b7fed94a27a21249fdc8323345978f`);
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [city]); // re-fetch when city changes

  return (
    <WeatherContext.Provider value={{ weatherData, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};