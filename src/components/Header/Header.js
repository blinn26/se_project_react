import React from 'react';
import '../Header/Header.css';
import '../Header/Navigation.css';

const Header = ({ weatherData, handleAddClick }) => {
  if (!weatherData) return null;
  const currentDate = new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });
  const username = '';

  return (
    <header className='header'>
      <div className='header__container'>
        <img src='/images/wtwr.svg' alt='wtwr logo' className='header__logo' />
        <p className='header__date'>
          {currentDate}, {weatherData.city}
        </p>
      </div>{' '}
      <div className='header__nav'>
        {username}

        <button onClick={handleAddClick} className='navigation__button '>
          + Add clothes
        </button>

        <img className='navigation__user' src='/images/Avatar.svg' alt='user avatar default' />
      </div>
    </header>
  );
};

export default Header;
