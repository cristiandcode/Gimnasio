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
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            q: 'SanMiguelDeTucuman', // Reemplaza 'TuCiudad' con el nombre de la ciudad que deseas
            id: 502491,
            appid: 'f319557b48875028faf44fa51e5d6832', // Reemplaza 'TuClaveAPI' con tu clave de API
            units: 'metric' // Para obtener la temperatura en Celsius
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
    <div>
      <h2>Clima en {weatherData.name}</h2>
      <p>Temperatura: {weatherData.main.temp}°C</p>
      <p>Clima: {weatherData.weather[0].description}</p>
      <p>Humedad: {weatherData.main.humidity}%</p>
      <p>Viento: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
