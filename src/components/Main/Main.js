import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css';

const Main = ({ defaultClothingItems, onItemClick }) => {
  return (
    <main class='main'>
      {defaultClothingItems.map((item) => (
        <ItemCard item={item} key={item._id} onItemClick={onItemClick} />
      ))}
    </main>
  );
};

export default Main;
