import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css';
import Header from '../Header/Header';

const Main = ({ defaultClothingItems, onItemClick }) => {
  return (
    <Main class='main'>
      {defaultClothingItems.map((item) => (
        <ItemCard item={item} key={item._id} onItemClick={onItemClick} />
      ))}
    </Main>
  );
};

export default Main;
