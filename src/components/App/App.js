import React from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { defaultClothingItems } from '../../utils/defaultClothingItems.js';
import ItemCard from '../ItemCard/ItemCard';
import { location } from '../../utils/constants';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';

const App = () => {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState({});
  const [activeModal, setActiveModal] = React.useState();
  const [selectCard, setSelectCard] = React.useState(null);

  const handleCardClick = (card) => {
    setActiveModal('preview');
    setSelectCard(card);
  };

  const closeAllModals = () => {
    setActiveModal();
  };

  React.useEffect(() => {
    if (location.latitude && location.longitude) {
      // app key
      getForecastWeather(location.latitude, location.longitude)
        .then((data) => {
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <div className='page'>
      <div clasName='page__wrapper'>
        <Header weatherData={weatherData} handleCardClick={() => setActiveModal('create')} />
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
