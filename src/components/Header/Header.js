import React from 'react';
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
        <div className='header__menu-bar'>
          {/* <ToggleSwitch /> */}
          <button className='header__plus-clothes' type='button' onClick={handleClickButton}>
            + Add Clothes
          </button>
          <p className='header__user-name'>
            Terrence Tegegne
            <img src={Avatar} alt='Avatar' className='header__user-Avatar' />
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
