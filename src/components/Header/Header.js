/* import React from 'react';
import './Header.css';
import wtwr from '../../images/wtwr.svg';
import Avatar from '../../images/Avatar.svg';

const currentdate = new Date().toLocaleDateString();
const currentWeather = 'Sunny';

const handleClickButton = () => {
  console.log('Button clicked');
};

const Header = () => {
  console.log('Header');

  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={wtwr} alt='logo' />
        <div className='header__date-title'>
          {currentdate}
          {currentWeather}
        </div>
        <button className='header__plus-clothes' type='button' onClick={handleClickButton}>
          + Add Clothes
        </button>
        <p className='header__user-name'>
          Terrence Tegegne
          <img src={Avatar} alt='Avatar' className='header__user-Avatar' />
        </p>
      </div>
    </header>
  );
};

export default Header; */

import React from 'react';
import './Header.css';
import wtwr from '../../images/wtwr.svg';
import Avatar from '../../images/Avatar.svg';
/* import '.Navigation.css'; */

const Header = ({ weatherData, handleAddClick }) => {
  if (!weatherData) return null;
  const currentDate = new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });
  const username = 'Ben Linn';
  const avatar = '';

  return (
    <header className='header'>
      <div className='header__container'>
        <img src={wtwr} alt='wtwr logo' className='header__logo' />
        <p className='header__date'>
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className='header__nav'>
        <nav className='navigation'>
          <ul className='navigation__container'>
            <li>
              <button onClick={handleAddClick} className='navigation__button'>
                + Add clothes
              </button>
            </li>
            <li>
              <div className='navigation__link'>
                {username}
                {avatar ? (
                  <img className='navigation__user' src={avatar || avatarDefault} alt='user avatar default' />
                ) : (
                  <span className='navigation__user  navigation__user_type_none'>
                    {username?.toUpperCase().charAt(0) || ''}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
