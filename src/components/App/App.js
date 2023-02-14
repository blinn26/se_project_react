import './App.css';
import defaultClothingItems from '../../utils/defaultClothingItems.js';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Main from '../Main/Main';
import ItemCard from '../ItemCard/ItemCard';

function App() {
  console.log(defaultClothingItems);
  console.log(defaultClothingItems.length);

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        This is Main
        <div>
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} key={item._id} />
          ))}
        </div>
      </main>

      <Footer className='footer'>This is the footer</Footer>
    </div>
  );
}

export default App;
