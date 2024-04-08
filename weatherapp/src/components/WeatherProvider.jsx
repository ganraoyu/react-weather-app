import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09b7fed94a27a21249fdc8323345978f`);
        if (!response.ok) {
          throw new Error(`Could not fetch weather data for city: ${city}`);
        }
        const data = await response.json();
        console.log(data);  
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.toString());
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ weatherData, setCity, error }}>
      {children}
    </WeatherContext.Provider>
  );
};