import React, { useState, useEffect } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import defaultClothingItems from '../../utils/defaultClothingItems';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';
import { location } from '../../utils/constants';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';
import './App.css';

const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [clothingItems, setClothingItems] = useState({});
  const [activeModal, setActiveModal] = useState();
  const [selectCard, setSelectCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveModal('preview');
    setSelectCard(card);
  };

  const closeAllModals = () => {
    setActiveModal();
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
  console.log(activeModal);
  return (
    <div className='page'>
      <div className='page__wrapper'>
        <Header weatherData={weatherData} handleAddClick={() => setActiveModal('create')} />
        <Main weatherData={weatherData} cards={clothingItems} onCardClick={handleCardClick} />
        <Footer />
      </div>
      {activeModal === 'create' && (
        <ModalWithForm title='New garment' name='new-card' onClose={closeAllModals}>
          <label className='modal__label'>
            <input
              type='text'
              name='name'
              id='place-name'
              className='modal__input modal__input_type_card-name'
              placeholder='title'
              required
              minLength='1'
              maxLength='30'
            />
            <span className='modal__error' id='place-name-error'></span>
          </label>
          <label className='modal__label'>
            <input
              type='url'
              name='link'
              id='place-link'
              className='modal__input modal__input_type_url'
              placeholder='Image URL'
              required
            />
            <span className='modal__error' id='place-link-error'></span>
          </label>
          <p> Select the weather type:</p>
          <div className='modal__input modal__input_type_radio'>
            <input type='radio' id='choicHot' name='weatherType' value='Hot' />
            <label className='modal__label_radio' htmlFor='choicHot'>
              Hot
            </label>
          </div>
          <div>
            <input type='radio' id='choiceWarm' name='weatherType' value='warm' />
            <label className='modal__label_radio' htmlFor='choiceWarm'>
              Warm
            </label>
          </div>
          <div>
            <input type='radio' id='choiceCold' name='weatherType' value='cold' />
            <label className='modal__label_radio' htmlFor='choiceCold'>
              Cold
            </label>
          </div>
        </ModalWithForm>
      )}

      {activeModal === 'preview' && <ItemModal card={selectCard} onClose={closeAllModals} />}
    </div>
  );
};
export default App;
