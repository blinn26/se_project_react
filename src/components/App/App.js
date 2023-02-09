import logo from '../../images/logo.svg';
import './App.css';
import defaultClothingItems from '../../utils/defaultClothingItems.js';

function App() {
  console.log(defaultClothingItems);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Ben is weird <code>src/App.js</code> run for your life.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          This React Symbol Looks Like a Quarintine Logo
        </a>
      </header>
    </div>
  );
}

export default App;
