import React from 'react';
import './ModalWithForm.css';

function ModalWithForm({ title, name, buttonText, onSubmit, children, isOpen, onClose, isValid, additionalClass }) {
  const buttonClassName = isValid ? 'modal__button-submit modal__button-submit-valid' : 'modal__button-submit';

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? 'modal_open' : ''} ${additionalClass}`} onClick={handleCloseOnOverlayClick}>
      <form className='modal__form' name={name} onSubmit={onSubmit}>
        <h2 className='modal__title'>{title}</h2>
        {children}
        <button className={buttonClassName} type='submit' disabled={!isValid}>
          {buttonText || 'Submit'}
        </button>
        <button className='modal__button-close' type='button' onClick={onClose}></button>
      </form>
    </div>
  );
}

export default ModalWithForm;
