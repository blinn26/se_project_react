import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import '../Header/Navigation.css';
import headerLogo from '../../images/wtwr.svg';
import avatarUser from '../../images/Avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Header = ({ weatherData, handleAddClick, currentUser }) => {
  // Destructure props
  const { city } = weatherData || {};

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
          <Link to='/'>
            <img src={headerLogo} alt='wtwr logo' className='header__logo' />
          </Link>
          <p className='header__date'>
            {`${new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}, ${city}`}
          </p>
        </div>

        <div className='header__nav'>
          <ToggleSwitch isChecked={isToggleOn} onToggle={handleToggle} />

          <span className='navigation__username'>{currentUser ? currentUser.name : 'Ben Linn'}</span>
          <button onClick={handleAddClick} className='navigation__button'>
            + Add clothes
          </button>
          <Link to='/profile'>
            <img className='navigation__user' src={currentUser ? currentUser.avatar : avatarUser} alt='user avatar' />
          </Link>
        </div>
      </header>
    )
  );
};

export default Header;
