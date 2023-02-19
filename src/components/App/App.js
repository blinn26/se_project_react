import React from 'react';
import './App.css';
import defaultClothingItems from '../../utils/defaultClothingItems.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ItemCard from '../ItemCard/ItemCard';

function App() {
  console.log(defaultClothingItems);
  console.log(defaultClothingItems.length);
  const onItemClick = (card) => {
    console.log(card);
  };

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <div>
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} key={item._id} onItemClick={onItemClick} />
          ))}
        </div>
      </main>

      <Footer className='footer'>This is the footer</Footer>
    </div>
  );
}

export default App;
