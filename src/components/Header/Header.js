import React, { useState } from 'react';
import '../Header/Header.css';
import '../Header/Navigation.css';
import headerLogo from '../../images/wtwr.svg';
import avatarUser from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Header = ({ weatherData, handleAddClick }) => {
  // Destructure props
  const { city } = weatherData || {};

  // Get username from URL params
  const params = new URLSearchParams(window.location.search);
  const username = params.get('username');

  // Set initial toggle switch state
  const [isToggleOn, setIsToggleOn] = useState(false);

  // Handle toggle switch change event
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    city && (
      <header className='header'>
        <div className='header__container'>
          <img src={headerLogo} alt='wtwr logo' className='header__logo' />
          <p className='header__date'>
            {`${new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}, ${city}`}
          </p>
        </div>

        <div className='header__nav'>
          <ToggleSwitch isChecked={isToggleOn} onToggle={handleToggle} />

          <span className='navigation__username'>{username || 'Ben Linn'}</span>
          <button onClick={handleAddClick} className='navigation__button'>
            + Add clothes
          </button>
          <img className='navigation__user' src={avatarUser} alt='user avatar default' />
        </div>
      </header>
    )
  );
};

export default Header;
