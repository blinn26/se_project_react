import React from 'react';
import './ItemModal.css';

function ItemModal({ card, onClose, onOpenDeleteModal }) {
  return (
    <div className='item-modal__preview'>
      <div className='item-modal__container'>
        <button type='button' className='item-modal__close-button' onClick={onClose}></button>
        <img className='item-modal__preview-image' alt={card.name} src={card.imageUrl} />
        <div className='item-modal__content'>
          <div className='item-modal__description'>
            <h2 className='item-modal__title'>{card.name}</h2>

            <p className='item-modal__weather'>Weather: {card.weather}</p>
          </div>
          <button className='item-modal__delete' onClick={onOpenDeleteModal} type='button'>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
