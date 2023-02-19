import React from 'react';
import './App.css';
import defaultClothingItems from '../../utils/defaultClothingItems.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  console.log(defaultClothingItems);
  console.log(defaultClothingItems.length);

  const onItemClick = (card) => {
    console.log(card);
  };

  return (
    <div className='App'>
      <Header />

      <Main defaultClothingItems={defaultClothingItems} onItemClick={onItemClick} />
      <h1>HI HI HI HI</h1>
      <Footer />
    </div>
  );
}

export default App;
