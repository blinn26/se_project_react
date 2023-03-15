import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [itemLink, setItemLink] = useState('');
  const [weatherType, setWeatherType] = useState('');

  useEffect(() => {
    setItemName('');
    setItemLink('');
    setWeatherType('');
  }, [isOpen]);

  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  function handleImageChange(event) {
    setItemLink(event.target.value);
  }

  function handleWeatherTypeChange(event) {
    setWeatherType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(itemName, itemLink, weatherType);
  }

  function handleRadioChange(event) {
    setWeatherType(event.target.value);
  }

  return (
    <ModalWithForm
      card='new-card'
      buttonText='Add garment'
      isOpen={isOpen}
      title='New garment'
      onSubmit={handleSubmit}
      onClose={onClose}>
      <label className='modal__label'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        className='modal__input modal__input_type-name'
        placeholder='Name'
        required
        minLength='1'
        maxLength='30'
        value={itemName}
        onChange={handleNameChange}
      />

      <input
        type='url'
        name='link'
        id='link'
        className='modal__input modal__input_type-url'
        placeholder='Image URL'
        required
        value={itemLink}
        onChange={handleImageChange}
      />

      <span className='modal__error' id='place-link-error'></span>

      <p>Select the weather type:</p>
      <div className='modal__input modal__input_type_radio'>
        <input
          type='radio'
          id='choiceHot'
          name='weatherType'
          value='Hot'
          checked={weatherType === 'Hot'}
          onChange={handleWeatherTypeChange}
        />
        <label className='modal__label_radio' htmlFor='choiceHot'>
          Hot
        </label>
      </div>
      <div>
        <input
          type='radio'
          id='choiceWarm'
          name='weatherType'
          value='warm'
          checked={weatherType === 'warm'}
          onChange={handleRadioChange}
        />
        <label className='modal__label_radio' htmlFor='choiceWarm'>
          Warm
        </label>
      </div>
      <div>
        <input
          type='radio'
          id='choiceCold'
          name='weatherType'
          value='cold'
          checked={weatherType === 'cold'}
          onChange={handleRadioChange}
        />
        <label className='modal__label_radio' htmlFor='choiceCold'>
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
