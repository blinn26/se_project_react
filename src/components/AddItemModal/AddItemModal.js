import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const [ itemName, setItemName ] = useState('');
  const [ itemLink, setItemLink ] = useState('');
  const [ weatherType, setWeatherType ] = useState('');
  // declare state for each input field

  // use a useEffect hook to reset the input field state to empty strings when 
  // the modal is opened
  useEffect(() => { 
    setItemName('');
    setItemLink('');
    setWeatherType('');
  }, [ isOpen ]);
  // create onChange handlers corresponding to each state variable


  function handleNameChange(event) {
    setItemName(event.target.value);
  }


  function handleImageChange(event) {
    setItemName(event.target.value);
  }

  function handleWeatherTypeChange(event) {
    setItemLink(event.target.value);
  }

 
    // prevent default behavior
    // call onAddItem with appropriate arguments
  

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(itemName, itemLink, weatherType);
  }
    // prevent default behavior
    // call onAddItem with appropriate arguments
  

  return (
    {/* don't forget to pass appropriate props to ModalWithForm */}
         <ModalWithForm
            card='new-card'
            buttonText = 'Add garment'
            isOpen = { isOpen }
            onAddItem = { onAddItem }
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
            />
            <span className='modal__error' id='place-name-error'></span>

            <label className='modal__label'>Link</label>
            <input
              type='url'
              name='link'
              id='link'
              className='modal__input modal__input_type-url'
              placeholder='Image URL'
              required
            />
            <span className='modal__error' id='place-link-error'></span>

            <p> Select the weather type:</p>
            <div className='modal__input modal__input_type_radio'>
              <input type='radio' id='choicHot' name='weatherType' value='Hot' />
              <label className='modal__label_radio' htmlFor='choicHot'>
                Hot
              </label>
            </div>
            <div>
              <input type='radio' id='choiceWarm' name='weatherType' value='warm' />
              <label className='modal__label_radio' htmlFor='choiceWarm'>
                Warm
              </label>
            </div>
            <div>
              <input type='radio' id='choiceCold' name='weatherType' value='cold' />
              <label className='modal__label_radio' htmlFor='choiceCold'>
                Cold
              </label>
            </div>
          </ModalWithForm>
  );
};

export default AddItemModal;