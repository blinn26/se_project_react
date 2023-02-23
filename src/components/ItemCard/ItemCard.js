import React from 'react';
import './ItemCard.css';

const ItemCard = ({ clothingItem, onCardClick }) => {
  return (
    <div className='card'>
      <div className='card__name'> {clothingItem.name}</div>

      <img
        className='card__image'
        src={clothingItem.link}
        alt={clothingItem.name}
        onClick={() => onCardClick(clothingItem)}
      />
    </div>
  );
};

export default ItemCard;
