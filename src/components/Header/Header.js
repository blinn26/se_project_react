import './Header.css';
import wtwr from '../../images/wtwr.svg';
import Avatar from '../../images/Avatar.svg';

const Header = () => {
  console.log('Header');

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <img src={wtwr} alt='logo' />
          <div className='header__menu-bar'>
            <p className='header__date-placeholder'>
              Terrence Tegegene
              <div className='header__avatar'>
                <img src={Avatar} alt='Avatar' />
              </div>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
