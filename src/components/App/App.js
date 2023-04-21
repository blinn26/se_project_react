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
import Api from '../../utils/Api';
import CardDeleteModal from '../CardDeleteModal/CardDeleteModal';
import { checkToken } from '../../utils/auth';
const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState('');
  const [selectCard, setSelectCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [cards, setCards] = useState(defaultClothingItems);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      checkToken(token)
        .then((data) => {
          if (data && data.user) {
            setUser(data.user);
          } else {
            localStorage.removeItem('token');
          }
        })
        .catch((error) => {
          console.error('Error checking token:', error);
          localStorage.removeItem('token');
        });
    }
  }, []);

  const onCardClick = (card) => {
    setActiveModal('preview');
    setSelectCard(card);
  };

  const handleAddClick = (card) => {
    setActiveModal('create');
  };

  const handleAddCardSubmit = (name, link, weather) => {
    Api.addCard({ name, imageUrl: link, weather })
      .then((newCard) => {
        setCards([...cards, newCard]);
        closeAllModals();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleCardDeleteSubmit() {
    setIsDeleting(true);
    Api.deleteCard(selectCard.id)
      .then(() => {
        setCards(cards.filter((item) => item.id !== selectCard.id));
        setActiveModal(''); // Close the preview modal
        setDeleteModalOpen(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  }

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
    setActiveModal(''); // Close the preview modal
  };

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
    Api.getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
        setCards(defaultClothingItems);
      });
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
          <ItemModal card={selectCard} onClose={closeAllModals} onOpenDeleteModal={openDeleteModal} />
        )}
        {deleteModalOpen && (
          <CardDeleteModal
            onClose={() => setDeleteModalOpen(false)}
            handleDelete={handleCardDeleteSubmit}
            isLoading={isDeleting}
            onItemDeleted={closeAllModals} // Add this line
          />
        )}
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;
