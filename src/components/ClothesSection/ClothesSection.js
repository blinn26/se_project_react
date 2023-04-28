import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ClothesSection.css';

const ClothesSection = ({ cards, handleAddClick, onCardClick, currentUser }) => {
  return (
    <div className='clothes-section'>
      <div className='clothes-section-header'>
        <h2 className='clothes-section-title'>{currentUser ? `${currentUser.name}'s Items` : 'Your Items'}</h2>
        <button className='clothes-section-add-button' onClick={handleAddClick} type='button'>
          + Add new
        </button>
      </div>
      <div className='clothes-cards-container'>
        {cards.map((card, index) => {
          return <ItemCard key={index} card={card} onCardClick={onCardClick} />;
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
