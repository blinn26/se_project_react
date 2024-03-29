import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../Header/Header.css';
import '../Header/Navigation.css';
import headerLogo from '../../images/wtwr.svg';
import avatarUser from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import CurrentUserContext from '../../context/currentUserContext';

const Header = ({ weatherData, handleAddClick, openLoginModal, openRegisterModal, setUser }) => {
  const { city } = weatherData || {};

  const params = new URLSearchParams(window.location.search);
  const username = params.get('username') || 'User';

  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    history.push('/');
  };

  const isMainPage = location.pathname === '/';
  const isProfilePage = location.pathname === '/profile';

  return (
    city && (
      <header className='header'>
        <div className='header__container'>
          <Link to='/'>
            <img src={headerLogo} alt='wtwr logo' className='header__logo' />
          </Link>
          <p className='header__date'>
            {`${new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}, ${city}`}
          </p>
        </div>

        <div className='header__nav'>
          <ToggleSwitch isChecked={isToggleOn} onToggle={handleToggle} />

          {currentUser ? (
            <>
              <button onClick={handleAddClick} className='navigation__button'>
                + Add clothes
              </button>
              <span className='navigation__username'>{currentUser.name || username}</span>
              <Link to='/profile'>
                <img className='navigation__user' src={currentUser.avatar || avatarUser} alt='user avatar' />
              </Link>
              {!isMainPage && !isProfilePage && (
                <button onClick={handleSignOut} className='navigation__button'>
                  Sign out
                </button>
              )}
            </>
          ) : (
            <>
              <span className='navigation__link' onClick={openLoginModal}>
                Log in
              </span>
              <span className='navigation__link' onClick={openRegisterModal}>
                Sign up
              </span>
            </>
          )}
        </div>
      </header>
    )
  );
};

export default Header;
