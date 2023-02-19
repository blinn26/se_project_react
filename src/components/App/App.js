import React from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { defaultClothingItems } from '../../utils/defaultClothingItems.js';
import ItemCard from '../ItemCard/ItemCard';
import { location } from '../../utils/constants';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';

const App = () => {
  const [wetherData, setWetherData] = React.useState({});
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
          setWetherData(filterDataFromWeatherApi(data));
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
        <Header wetherData={wetherData} handleCardClick={() => setActiveModal('create')} />
      </div>
    </div>
  );
};

export default App;
