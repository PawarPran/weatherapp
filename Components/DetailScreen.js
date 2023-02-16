import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './DetailScreen.css'

const DetailScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { location } = useParams();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = "47bc6318fef16f4afac2a0d325a65b7f";
      const BASE_URL = "https://api.openweathermap.org/data/2.5";
      const query = `q=${location}&units=metric&appid=${API_KEY}`;
      const { data } = await axios.get(`${BASE_URL}/weather?${query}`);
      setWeatherData(data);
    };

    fetchWeatherData();
  }, [location]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{new Date().toLocaleDateString()}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Feels Like: {weatherData.main.feels_like}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} km/h</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailScreen;
