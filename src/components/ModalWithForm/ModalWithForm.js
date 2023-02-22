import React, { useState } from 'react';
import './ModalWithForm.css';

function ModalWithForm({ title, name, buttonText, onsubmit, children, onclose }) {
  return (
    <div className='modal'>
      <form className='modal__form' name={name} onSubmit={onsubmit}>
        <h2 className='modal__title'>{title}</h2>
        {children}
        <button className='modal__button-submit' type='submit'>
          {buttonText}
        </button>
        <button className='modal__button-close' onClick={onclose}>
          Close
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
