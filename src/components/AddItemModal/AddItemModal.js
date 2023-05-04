import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [itemLink, setItemLink] = useState('');
  const [weatherType, setWeatherType] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setItemName('');
    setItemLink('');
    setWeatherType('');
  }, [isOpen]);

  useEffect(() => {
    setIsFormValid(itemName.length > 0 && itemLink.length > 0 && weatherType.length > 0);
  }, [itemName, itemLink, weatherType]);

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

  return (
    <ModalWithForm
      name='new-card'
      buttonText='Add garment'
      isOpen={isOpen}
      title='New garment'
      onSubmit={handleSubmit}
      onClose={onClose}
      isValid={isFormValid}
      additionalClass='add-item-modal'>
      {' '}
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
      <label className='modal__label'>Image URL</label>
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
      <div className='modal__input modal__input_type_radio hot'>
        <input
          type='radio'
          id='choiceHot'
          name='weatherType'
          value='Hot'
          checked={weatherType === 'Hot'}
          onChange={handleWeatherTypeChange}
        />
        <label className='modal__label-hot' htmlFor='choiceHot'>
          Hot
        </label>
      </div>
      <div className='modal__input modal__input_type_radio warm'>
        <input
          type='radio'
          id='choiceWarm'
          name='weatherType'
          value='warm'
          checked={weatherType === 'warm'}
          onChange={handleWeatherTypeChange}
        />
        <label className='modal__label-warm' htmlFor='choiceWarm'>
          Warm
        </label>
      </div>
      <div className='modal__input modal__input_type_radio cold'>
        <input
          type='radio'
          id='choiceCold'
          name='weatherType'
          value='cold'
          checked={weatherType === 'cold'}
          onChange={handleWeatherTypeChange}
        />
        <label className='modal__label-cold' htmlFor='choiceCold'>
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
