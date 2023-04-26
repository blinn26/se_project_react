import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import { location } from '../../utils/constants';
import { getForecastWeather, filterDataFromWeatherApi } from '../../utils/weatherApi';
import './App.css';
import { CurrentTemperatureUnitContext } from '../../context/currentTemperatureUnit';
import CurrentUserContext from '../../context/currentUserContext';
import Profile from '../Profile/Profile';
import AddItemModal from '../AddItemModal/AddItemModal';
import Api from '../../utils/Api';
import CardDeleteModal from '../CardDeleteModal/CardDeleteModal';
import { checkToken, signIn, signUp } from '../../utils/auth';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';

const APIKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log(APIKey);

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState('');
  const [selectCard, setSelectCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [cards, setCards] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentUser, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [authError, setAuthError] = useState('');

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

  const handleLogin = ({ email, password }) => {
    signIn(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          checkToken(res.token)
            .then((data) => {
              setUser(data.user);
              setIsLoginModalOpen(false);
              setAuthError('');
            })
            .catch((error) => {
              console.error('Error checking token:', error);
              setAuthError('Error checking token');
            });
        } else {
          setAuthError(res.message || 'Invalid credentials');
        }
      })
      .catch((error) => {
        console.log(error);
        setAuthError('Error signing in');
      });
  };

  const handleRegister = ({ name, avatar, email, password }) => {
    signUp(name, avatar, email, password)
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
    Api.deleteCard(selectCard._id)
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
      .then(({ data }) => {
        console.log(data);
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
        // setCards(defaultClothingItems);
      });
  }, []);
  console.log(cards);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{
          currentTemperatureUnit,
          setCurrentTemperatureUnit,
        }}>
        <div className='page'>
          <div className='page__wrapper'>
            <Header weatherData={weatherData} handleAddClick={() => setActiveModal('create')} />
            <button onClick={() => setIsLoginModalOpen(true)}>Log in</button>
            <button onClick={() => setIsRegisterModalOpen(true)}>Sign up</button>
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
              onItemDeleted={closeAllModals}
            />
          )}
          {isLoginModalOpen && (
            <LoginModal
              onClose={() => setIsLoginModalOpen(false)}
              onLogin={handleLogin}
              authError={authError}
              setAuthError={setAuthError}
            />
          )}
          {isRegisterModalOpen && (
            <RegisterModal
              onClose={() => setIsRegisterModalOpen(false)}
              onRegister={handleRegister}
              authError={authError}
              setAuthError={setAuthError}
            />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
