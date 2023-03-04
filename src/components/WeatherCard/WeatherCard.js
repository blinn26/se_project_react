import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';
import sunnyDay from '../../images/Sunny.svg';
import cloudyDay from '../../images/Cloudy.svg';
import fogDay from '../../images/Fog.svg';

const weatherImages = [
  {
    condition: 'hot',
    isDay: true,
    image: sunnyDay,
  },
  {
    condition: 'warm',
    isDay: true,
    image: cloudyDay,
  },
  {
    condition: 'cold',
    isDay: true,
    image: fogDay,
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
      } catch (error) {}
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
    <div className='weather'>
      {weatherData && (
        <p className='weather__temperature'>
          {weatherData.temperature}
          {deg}°{unit}
        </p>
      )}
      <img src={backImage?.image || ''} className='weather__image' alt='Weather' />
    </div>
  );
}

export default WeatherCard;
