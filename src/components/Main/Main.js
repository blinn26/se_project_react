import React, { useContext } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import WeatherCard from '../WeatherCard/WeatherCard';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import './Main.css';

const Main = ({ cards, onCardClick, weatherType, defaultClothingItems, onItemClick }) => {
  const { currentTemperatureUnit, weatherData } = useContext(CurrentTemperatureUnitContext);

  function cardFilter() {
    return cards
      .filter((card) => card.weather === weatherType)
      .map((filteredCard) => <ItemCard key={filteredCard.id} card={filteredCard} onCardClick={onCardClick} />);
  }

  return (
    <Main className='main'>
      <WeatherCard />
      <section className='main__clothes'>
        <div className='main__info'>
          <div className='main__description-container'>
            <p className='main__description'>
              Today is {weatherData.temperature && weatherData.temperature[currentTemperatureUnit]} and it is{' '}
              {weatherType}
            </p>
            <p className='main__description'>&nbsp;/&nbsp;</p>
            <p className='main__description'>You may want to wear:</p>
          </div>
        </div>
        <ul className='main__items'>
          {cards
            ? cardFilter()
            : defaultClothingItems.map((item) => <ItemCard item={item} key={item._id} onItemClick={onItemClick} />)}
        </ul>
      </section>
    </Main>
  );
};

export default Main;
