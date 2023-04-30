import React from 'react';
import './ItemCard.css';
import HeartLiked from '../../images/HeartLiked.svg';
import HeartNotLiked from '../../images/HeartNotLiked.svg';

const ItemCard = ({ card, onCardClick, onCardLike }) => {
  const handleLikeClick = () => {
    onCardLike(card);
  };

  console.log('Card ID:', card._id, 'Is Liked:', card.isLiked);

  return (
    <div className='card'>
      <div className='card__name'>{card.name}</div>
      <img className='card__image' src={card.imageUrl || card.link} alt={card.name} onClick={() => onCardClick(card)} />
      <button
        className={`card__like-button ${card.isLiked ? 'card__like-button_filled' : ''}`}
        onClick={handleLikeClick}>
        {card.isLiked ? <img src={HeartLiked} alt='Heart Liked' /> : <img src={HeartNotLiked} alt='Heart Not Liked' />}
      </button>
    </div>
  );
};

export default ItemCard;
