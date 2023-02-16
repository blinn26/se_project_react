import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  console.log(item._id);

  return (
    <div className='card'>
      <div className='card__name'> {item.name}</div>
      <div className='card__tempature'> {item.weather}</div>
      <img className='card__image' src={item.link} alt={item.name} />
    </div>
  );
};

export default ItemCard;
