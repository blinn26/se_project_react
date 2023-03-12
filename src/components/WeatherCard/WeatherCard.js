import { useContext } from 'react';
import './WeatherCard.css';
import { CurrentTemperatureUnitContext } from '../../context/currentTemperatureUnit';
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

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  if (!weatherData.condition) {
    return null;
  }

  const backImage = weatherData
    ? weatherImages.find((item) => {
        return item.condition === weatherData.condition();
      })
    : null;

  return (
    <div className='weather'>
      {weatherData && (
        <p className='weather__temperature'>
          {currentTemperatureUnit === 'F'
            ? `${weatherData.temperature}F`
            : `${((weatherData.temperature - 32) * 5) / 9}C`}
          °
        </p>
      )}
      <img src={backImage?.image || ''} className='weather__image' alt='Weather' />
    </div>
  );
}

export default WeatherCard;
