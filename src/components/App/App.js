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
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = ({ email, password }) => {
    signIn(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          checkToken(res.token)
            .then((decoded) => {
              setUser(decoded.data);
              setIsLoginModalOpen(false);
              setIsRegisterModalOpen(false);
              setAuthError('');
              setToken(res.token);
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
        setAuthError('Incorrect password');
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

  const handleCardDeleteSubmit = () => {
    setIsDeleting(true);
    Api.deleteCard(selectCard._id, token)
      .then(() => {
        setCards(cards.filter((item) => item._id !== selectCard._id));
        setActiveModal('');
        setDeleteModalOpen(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  const handleLike = (card) => {
    const { _id: id, isLiked } = card;
    const token = localStorage.getItem('token');
    if (isLiked) {
      Api.removeCardLike(id, token)
        .then((updatedCard) => {
          setCards((cards) => cards.map((c) => (c._id === id ? updatedCard.data : c)));
        })
        .catch((err) => console.log(err));
    } else {
      Api.addCardLike(id, token)
        .then((updatedCard) => {
          setCards((cards) => cards.map((c) => (c._id === id ? updatedCard.data : c)));
        })
        .catch((err) => console.log(err));
    }
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
    setActiveModal('');
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
  }, []);

  useEffect(() => {
    if (token) {
      Api.getCards(token)
        .then(({ data }) => {
          setCards(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{
          currentTemperatureUnit,
          setCurrentTemperatureUnit,
        }}>
        <div className='page'>
          <div className='page__wrapper'>
            <Header
              weatherData={weatherData}
              handleAddClick={() => setActiveModal('create')}
              openLoginModal={() => setIsLoginModalOpen(true)}
              openRegisterModal={() => setIsRegisterModalOpen(true)}
              setUser={setUser}
            />
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                <Switch>
                  <Route path='/profile'>
                    <Profile
                      cards={cards}
                      handleAddClick={handleAddClick}
                      onCardClick={onCardClick}
                      onCardLike={handleLike}
                      prop
                    />
                  </Route>
                  <Route path='/'>
                    <Main weatherData={weatherData} cards={cards} onCardClick={onCardClick} onCardLike={handleLike} />
                  </Route>
                </Switch>
                <Footer />
                {activeModal === 'create' && (
                  <AddItemModal
                    onClose={closeAllModals}
                    isOpen={activeModal === 'create'}
                    onAddItem={handleAddCardSubmit}
                  />
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
                {/* ... */}
                {isLoginModalOpen && (
                  <LoginModal
                    isOpen={isLoginModalOpen}
                    onClose={() => setIsLoginModalOpen(false)}
                    onLogin={handleLogin}
                    authError={authError}
                  />
                )}
                {isRegisterModalOpen && (
                  <RegisterModal
                    isOpen={isRegisterModalOpen}
                    onClose={() => setIsRegisterModalOpen(false)}
                    onRegister={handleRegister}
                    authError={authError}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
};
export default App;
