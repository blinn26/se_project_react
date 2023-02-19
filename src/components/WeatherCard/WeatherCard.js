import React, { useContext } from 'react';

function WeatherCard() {
  const { currentTemperatureUnit, weatherData } = useContext(CurrentTemperatureUnitContext);

  return (
    <div className='weather-card'>
      <div className='weather-temperature'>
        {weatherData.temperature && weatherData.temperature[currentTemperatureUnit]}
      </div>
    </div>
  );
}

export default WeatherCard;
