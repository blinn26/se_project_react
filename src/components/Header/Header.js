import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import '../Header/Navigation.css';
import headerLogo from '../../images/wtwr.svg';
import avatarUser from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import CurrentUserContext from '../../context/currentUserContext';

const Header = ({ weatherData, handleAddClick, openLoginModal, openRegisterModal }) => {
  // Destructure props
  const { city } = weatherData || {};

  // Get username from URL params
  const params = new URLSearchParams(window.location.search);
  const username = params.get('username') || 'User';

  // Set initial toggle switch state
  const [isToggleOn, setIsToggleOn] = useState(false);

  // Handle toggle switch change event
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  // Get current user from context
  const currentUser = useContext(CurrentUserContext);

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
              <span className='navigation__username'>{currentUser.name || username}</span>
              <button onClick={handleAddClick} className='navigation__button'>
                + Add clothes
              </button>
              <Link to='/profile'>
                <img className='navigation__user' src={currentUser.avatar || avatarUser} alt='user avatar' />
              </Link>
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
