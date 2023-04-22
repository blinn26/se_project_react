import React from 'react';
import './ItemCard.css';

const ItemCard = ({ card, onCardClick }) => {
  return (
    <div className='card'>
      <div className='card__name'> {card.name}</div>
      <img className='card__image' src={card.imageUrl} alt={card.name} onClick={() => onCardClick(card)} />
      console.log(card.imageUrl);
    </div>
  );
};

export default ItemCard;
