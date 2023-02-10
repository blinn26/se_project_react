import './App.css';
import defaultClothingItems from '../../utils/defaultClothingItems.js';
import Header from '../Header/Header';

function App() {
  console.log(defaultClothingItems);

  return (
    <div className='App'>
      <Header />
      <main className='main'>This is Main</main>
      <footer className='footer'>This is the footer</footer>
    </div>
  );
}

export default App;
