import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item, onCardClick }) => {
  return (
    <div className='card'>
      <div className='card__name'> {item.name}</div>

      <img className='card__image' src={item.link} alt={item.name} onClick={() => onCardClick(item)} />
    </div>
  );
};

export default ItemCard;
