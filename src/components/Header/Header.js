import React from 'react';
import '../Header/Header.css';
import '../Header/Navigation.css';

const Header = ({ weatherData, handleAddClick }) => {
  if (!weatherData) return null;
  const currentDate = new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });
  const username = 'Ben Linn';

  return (
    <header className='header'>
      <div className='header__container'>
        <img src='/images/wtwr.svg' alt='wtwr logo' className='header__logo' />
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
                <img className='navigation__user' src='/images/Avatar.svg' alt='user avatar default' />
                <span className='navigation__user  navigation__user_type_none'></span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
