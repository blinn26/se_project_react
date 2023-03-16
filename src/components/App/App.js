import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import defaultClothingItems from '../../utils/defaultClothingItems';

import ItemModal from '../ItemModal/ItemModal';
import { location } from '../../utils/constants';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';
import './App.css';
import { CurrentTemperatureUnitContext } from '../../context/currentTemperatureUnit';
import Profile from '../Profile/Profile';
import AddItemModal from '../AddItemModal/AddItemModal';

const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [filterCard, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState('');
  const [selectCard, setSelectCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [cards, setCards] = useState(defaultClothingItems);

  const onCardClick = (card) => {
    setActiveModal('preview');
    setSelectCard(card);
  };

  const handleAddClick = (card) => {
    setActiveModal('preview');
    setSelectCard(card);
  };

  const handleAddCardSubmit = (name, link, weather) => {
    setCards([
      ...cards, // spread operator
      {
        _id: Date.now(),
        name,
        link,
        weather,
      },
    ]);
  };

  function handleCardDeleteSubmit() {
    setSelectCard(selectCard.id);
    setClothingItems(filterCard.filter((item) => item.id !== selectCard.id));
    setActiveModal('');
  }

  const closeAllModals = () => {
    setActiveModal('');
  };

  const fetchWeatherData = () => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, APIKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchWeatherData();
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{
        currentTemperatureUnit,
        setCurrentTemperatureUnit,
      }}>
      <div className='page'>
        <div className='page__wrapper'>
          <Header weatherData={weatherData} handleAddClick={() => setActiveModal('create')} />
          <Switch>
            <Route path='/profile'>
              <Profile cards={cards} handleAddClick={handleAddClick} onCardClick={onCardClick} />
            </Route>
            <Route path='/'>
              <Main weatherData={weatherData} cards={cards} onCardClick={onCardClick} />
            </Route>
          </Switch>
          <Footer />
        </div>
        {activeModal === 'create' && (
          <AddItemModal onClose={closeAllModals} isOpen={activeModal === 'create'} onAddItem={handleAddCardSubmit} />
        )}
        {activeModal === 'preview' && (
          <ItemModal card={selectCard} onClose={closeAllModals} onDelete={handleCardDeleteSubmit} />
        )}
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;
