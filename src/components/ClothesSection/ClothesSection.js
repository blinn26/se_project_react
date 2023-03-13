import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ClothesSection.css';

const ClothesSection = ({ cards, handleAddClick, onCardClick }) => {
  return (
    <div className='clothes-section'>
      <div className='clothes-section-header'>
        <h2 className='clothes-section-title'>Your Items</h2>
        <button className='clothes-section-add-button' onClick={handleAddClick}>
          {' '}
          + Add new
        </button>
      </div>
      <div className='clothes-cards-container'>
        {cards.map((item) => (
          <ItemCard key={item.id} item={item} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
