import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  const { temperature, description, icon } = weatherData;

  // className for weather=card will describe the background proportions, positions, whatever but not image url

  const selectBackground = () => {
    // if statements
    // return image url
  };

  return (
    <div className='weather-card' style={{ backgroundImage: selectBackground() }}>
      <div className='weather-card__temp'>{temperature}0°F</div>
      <div className='weather-card__desc'>{description}</div>
      <img className='weather-card__icon' src={icon} alt={description} />
    </div>
  );
};

export default WeatherCard;
