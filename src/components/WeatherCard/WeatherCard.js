import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';

const weatherImages = [
  {
    condition: 'hot',
    isDay: true,
    image: '/public/images/Sunny.svg',
  },
  {
    condition: 'warm',
    isDay: true,
    image: '/public/images/Cloudy.svg',
  },
  {
    condition: 'cold',
    isDay: true,
    image: '/public/images/Fog.svg',
  },
];

function WeatherCard({ deg, unit }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getForecastWeather();
        const filteredData = filterDataFromWeatherApi(data);
        setWeatherData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    if (!weatherData) {
      fetchData();
    }
  }, [weatherData]);

  const backImage = weatherData
    ? weatherImages.find((item) => {
        return item.condition === weatherData.condition();
      })
    : null;

  return (
    <div
      className='weather'
      style={{
        backgroundColor: 'rgba(0, 163, 255, 1)',
        backgroundImage: `url(${backImage})`,
      }}>
      {weatherData && (
        <p className='weather__temp'>
          {weatherData.temp}
          {deg}°{unit}
        </p>
      )}
      <p className='weather-hot'></p>
      <p className='weather-warm'></p>
      <p className='weather-cold'></p>
    </div>
  );
}

export default WeatherCard;
