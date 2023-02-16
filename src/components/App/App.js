import './App.css';
import defaultClothingItems from '../../utils/defaultClothingItems.js';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  console.log(defaultClothingItems);
  console.log(defaultClothingItems.length);

  return (
    <div className='App'>
      <Header />
      <Main defaultClothingItems={defaultClothingItems} />

      <Footer className='footer'>This is the footer</Footer>
    </div>
  );
}

export default App;
