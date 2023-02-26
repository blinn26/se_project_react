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
      return 'warm';
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
            Today is{actualWeather}°F and it {weatherType()}/ You may want to wear
          </div>
        </div>
        <ul className='main__items'>
          {Array.isArray(cards) &&
            cards.map((filterCard) => (
              <ItemCard key={filterCard._id} clothingItem={filterCard} onCardClick={onCardClick} />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
