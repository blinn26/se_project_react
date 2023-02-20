import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';

function Main({ weatherData, cards = [], onCardClick }) {
  const actualWeather = weatherData.tempature;

  const weatherType = () => {
    if (actualWeather >= 86) {
      return 'hot';
    } else if (actualWeather >= 66 && actualWeather < 85) {
      return 'wearm';
    } else if (actualWeather <= 65) {
      return 'cold';
    }
  };

  return (
    <main className='main'>
      <WeatherCard weatherData={weatherData} />
      <section className='main__clothes'>
        <div className='main__info'>
          <div className='main__description-container'>
            <p className='main__description'>
              Today is{actualWeather}°F and it {weatherType()}
            </p>
            <p className='main__description_slash'> / </p>
            <p className='main__description'>You may want to wear</p>
          </div>
        </div>
        <ul className='main__items'>
          {Array.isArray(cards) &&
            cards
              .filter((card) => card.weather === weatherType())
              .map((filterCard) => <ItemCard key={filterCard.id} card={filterCard} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
