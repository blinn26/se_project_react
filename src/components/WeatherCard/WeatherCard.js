import React, { useContext } from 'react';
import CurrentTemperatureUnitContext from '../contexts/CurrentTemperatureUnitContext';

function WeatherCard() {
  const { currentTemperatureUnit, weatherData } = useContext(CurrentTemperatureUnitContext);

  return (
    <div className='weather-card'>
      <div className='weather__temperature'>
        {weatherData.temperature && weatherData.temperature[currentTemperatureUnit]}
      </div>
    </div>
  );
}

export default WeatherCard;
