import React from 'react';
import './ItemModal.css';

function ItemModal({ card, onClose, onDelete }) {
  return (
    <div className='item-modal__preview'>
      <div className='item-modal__container'>
        <button type='button' className='item-modal__close-button' onClick={onClose}></button>
        <img className='item-modal__preview-image' alt={card.name} src={card.link} />
        <div className='item-modal__content'>
          <div className='item-modal__description'>
            <h2 className='item-modal__title'>{card.name}</h2>

            <p className='item-modal__weather'>Weather: {card.weather}</p>
          </div>
          <p className='item-modal__delete' onClick={onDelete}>
            Delete Text
          </p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
