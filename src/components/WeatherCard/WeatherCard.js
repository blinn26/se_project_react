import React from 'react';

function WeatherCard(props) {
  const { weatherData } = props;
  const { temperature, description, icon } = weatherData;

  return (
    <div className='weather-card'>
      <h2>{temperature}°F</h2>
      <img src={`${icon}.png`} alt='Weather Icon' />
      <p>{description}</p>
    </div>
  );
}

export default WeatherCard;
