import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  const { temperature, description, icon } = weatherData;

  return (
    <div className='weather-card'>
      <div className='weather-card__temp'>{temperature}°F</div>
      <div className='weather-card__desc'>{description}</div>
      <img className='weather-card__icon' src={icon} alt={description} />
    </div>
  );
};

export default WeatherCard;
