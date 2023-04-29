import React from 'react';
import './ItemCard.css';

const ItemCard = ({ card, onCardClick, onCardLike }) => {
  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <div className='card'>
      <div className='card__name'> {card.name}</div>
      <img className='card__image' src={card.imageUrl || card.link} alt={card.name} onClick={() => onCardClick(card)} />
      <button
        className={`card__like-button ${card.isLiked ? 'card__like-button_filled' : ''}`}
        onClick={handleLikeClick}>
        {/* Render a heart icon here */}
      </button>
    </div>
  );
};

export default ItemCard;
