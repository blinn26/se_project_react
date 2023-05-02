import React, { useContext } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import { CurrentTemperatureUnitContext } from '../../context/currentTemperatureUnit';

function Main({ cards, weatherData, onCardClick, onCardLike }) {
  const actualWeather = weatherData.temperature;
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherType = () => {
    if (actualWeather >= 86) {
      return 'hot';
    } else if (actualWeather >= 66 && actualWeather < 85) {
      return 'warm';
    } else if (actualWeather <= 65) {
      return 'cold';
    }
  };

  const filterCard = cards.filter((item) => {
    return item.weather && item.weather.toLowerCase() === weatherType();
  });

  return (
    <main className='main'>
      <WeatherCard weatherData={weatherData} />
      <section className='main__clothes'>
        <div className='main__info'>
          <div className='main__description-container'>
            Today is{' '}
            {currentTemperatureUnit === 'F'
              ? `${Math.round(actualWeather)} °F`
              : `${Math.round(((actualWeather - 32) * 5) / 9)} °C`}
            {weatherType()} / You may want to wear
          </div>
        </div>
        <ul className='main__items'>
          {Array.isArray(filterCard) &&
            filterCard.map((card, index) => (
              <ItemCard key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
