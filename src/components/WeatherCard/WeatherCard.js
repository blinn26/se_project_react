import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';

const weatherImages = [
  {
    backColor: 'Fog',
    isDay: true,
    image: '/public/images/Fog.svg',
  },
  {
    condition: 'Sunny',
    isDay: true,
    image: '/public/images/Sunny.svg',
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
        return item.condition === weatherData.condition && item.isDay === weatherData.isDay;
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
      <p></p>
    </div>
  );
}

export default WeatherCard;
