import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';

const weatherImages = [
  {
    condition: 'hot',
    isDay: true,
    image: '/images/Sunny.svg',
  },
  {
    condition: 'warm',
    isDay: true,
    image: '/images/Cloudy.svg',
  },
  {
    condition: 'cold',
    isDay: true,
    image: '/images/Fog.svg',
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
        console.log(item.condition);
        /*  console.log(weatherData.condition()); */
        console.log(weatherData);
        return item.condition === weatherData.condition();
      })
    : null;

  return (
    <div
      className='weather'
      // style={{
      //   backgroundColor: 'rgba(0, 163, 255, 1)',
      //   backgroundImage: `url(${backImage?.image})`,
      // }}
    >
      {weatherData && (
        <p className='weather__temperature'>
          {weatherData.temperature}
          {deg}°{unit}
        </p>
      )}
      <img src={backImage?.image || ''} className='weather__image' />
    </div>
  );
}

export default WeatherCard;
