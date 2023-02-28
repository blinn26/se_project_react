import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import { getForecastWeather, filterDataFromWeatherApi } from '../utils/weatherApi';

const weatherImages = [
  {
    condition: 'Fog',
    isDay: false,
    image: '/public/images/Fog.svg',
  },
  {
    condition: 'Clear',
    isDay: true,
    image: '/public/images/Sunny.svg',
  },
  // Add more objects for other weather conditions
];

function WeatherCard({ deg, unit }) {
  const [weatherData, setWeatherData] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [backColor, setBackColor] = useState(null);
  const [backImageObject, setBackImageObject] = useState(null);

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
    fetchData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      setBackColor(weatherData.isDay ? 'rgba(0, 163, 255, 1)' : 'rgba(40, 104, 151, 1)');
      setBackImageObject(
        weatherImages.find((item) => {
          return item.condition === weatherData.condition && item.isDay === weatherData.isDay;
        })
      );
    }
  }, [weatherData]);

  useEffect(() => {
    if (backImageObject) {
      setBackImage(backImageObject.image);
    }
  }, [backImageObject]);

  return (
    <div
      className='weather'
      style={{
        backgroundColor: backColor,
        backgroundImage: `url(${backImage})`,
      }}>
      {weatherData && (
        <p className='weather__temp'>
          {weatherData.temperature}
          {deg}°{unit}
        </p>
      )}
      <p></p>
    </div>
  );
}

export default WeatherCard;
