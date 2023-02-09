import './Header.css';
import wtwr from '../../images/wtwr.svg';

const Header = () => {
  console.log('Header');

  return (
    <header className='header'>
      This is the header
      <div className='header__container'>
        <div className='header__logo'>
          <img src={wtwr} alt='logo' />
        </div>
      </div>
    </header>
  );
};
export default Header;
