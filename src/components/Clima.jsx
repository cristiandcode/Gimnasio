// src/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'San Miguel De Tucuman',
            id: 3836873,
            lon: 65.2226,
            lat: 26.8241,
            appid: '0e07a23af7fe7f92c30bb8cadbddb5dc',
            units: 'metric' 
          }
        });
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='text-align-center'>
      <h6>Clima en {weatherData.name}</h6>
      <p>{weatherData.main.temp}°C</p>
    </div>
  );
};

export default Weather;
