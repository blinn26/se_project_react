import React from 'react';
import '../Header/Header.css';
import '../Header/Navigation.css';

const Header = ({ weatherData, handleAddClick }) => {
  // Destructure props
  const { city } = weatherData || {};

  // Get username from URL params
  const params = new URLSearchParams(window.location.search);
  const username = params.get('username');

  return (
    city && (
      <header className='header'>
        <div className='header__container'>
          <img src='../../images/wtwr.svg' alt='wtwr logo' className='header__logo' />
          <p className='header__date'>
            {`${new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}, ${city}`}
          </p>
        </div>

        <div className='header__nav'>
          <span className='navigation__username'>{username || 'Ben Linn'}</span>
          <button onClick={handleAddClick} className='navigation__button'>
            + Add clothes
          </button>
          <img className='navigation__user' src='../../images/Avatar.svg' alt='user avatar default' />
        </div>
      </header>
    )
  );
};

export default Header;
