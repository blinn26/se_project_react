import React from 'react';
import './ItemModal.css';

function ItemModal({ card, onClose, onCardDelete }) {
  function handleDelete() {
    onCardDelete(card);
  }
  return (
    <div className='item-modal__preview'>
      <div className='item-modal__container'>
        <button type='button' className='item-modal__close-button' onClick={onClose}></button>
        <img className='item-modal__preview-image' alt={card.name} src={card.imageUrl} />
        <div className='item-modal__description'>
          <h2 className='item-modal__title'>{card.name}</h2>
          <button type='button' className='item-modal__delete-button' onClick={handleDelete}>
            Delete item
          </button>
          <p className='item-modal__weather'>Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
