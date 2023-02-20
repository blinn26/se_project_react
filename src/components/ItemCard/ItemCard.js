import React from 'react';
import './ItemCard.css';

const ItemCard = ({ clothingItem, onItemClick }) => {
  console.log(clothingItem._id);

  return (
    <div className='card'>
      <div className='card__name'> {clothingItem.name}</div>

      <img
        className='card__image'
        src={clothingItem.link}
        alt={clothingItem.name}
        onClick={() => onItemClick(clothingItem)}
      />
    </div>
  );
};

export default ItemCard;
