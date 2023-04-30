import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ClothesSection.css';

const ClothesSection = ({ cards, handleAddClick, onCardClick, onCardLike }) => {
  return (
    <div className='clothes-section'>
      {/* ... */}
      <div className='clothes-cards-container'>
        {cards.map((card, index) => {
          return (
            <ItemCard
              key={index}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike} // Pass the onCardLike prop to the ItemCard
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
