import React, { useContext } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import WeatherCard from '../WeatherCard/WeatherCard';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import './Main.css';

function Main({ defaultClothingItems, onItemClick }) {
  const { currentTemperatureUnit, weatherData } = useContext(CurrentTemperatureUnitContext);

  function cardFilter() {
    return defaultClothingItems
      .filter((item) => item.weather === weatherData.type)
      .map((filteredItem) => <ItemCard key={filteredItem._id} item={filteredItem} onItemClick={onItemClick} />);
  }

  return (
    <Main className='main'>
      <WeatherCard />
      <section className='main__clothes'>
        <div className='main__info'>
          <div className='main__description-container'>
            <p className='main__description'>
              Today is {weatherData.temperature && weatherData.temperature[currentTemperatureUnit]} and it is{' '}
              {weatherData.type}
            </p>
            <p className='main__description'>&nbsp;/&nbsp;</p>
            <p className='main__description'>You may want to wear:</p>
          </div>
        </div>
        <ul className='main__items'>{defaultClothingItems ? cardFilter() : null}</ul>
      </section>
    </Main>
  );
}

export default Main;
