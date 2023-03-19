import React from 'react';
import './CardDeleteModal.css';

function CardDeleteModal({ onClose, onDelete }) {
  return (
    <div className='modal__delete-container'>
      <div className='modal__delete-content'>
        <div className='modal__delete-title'>Delete Card</div>
        <div className='modal__delete-close' onClick={onClose}>
          X
        </div>
      </div>
      <div className='modal__delete-body'>
        <p>Are you sure you want to delete this item?</p>
      </div>
      <div className='modal__delete-footer'>
        <button className='modal__delete-button' onClick={() => onDelete(onClose)}>
          Yes, delete item
        </button>
        <button className='modal__delete-button' onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CardDeleteModal;
