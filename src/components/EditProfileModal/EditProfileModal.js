import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (name.length > 0 && avatar.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, avatar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(name, avatar);
  };

  return (
    <ModalWithForm
      title='Change profile data'
      name='edit-profile'
      buttonText='Save changes'
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}>
      <label className='edit-profile-modal__input-label'>
        Name
        <input
          className='edit-profile-modal__input'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className='edit-profile-modal__input-label'>
        Avatar URL
        <input
          className='edit-profile-modal__input'
          type='url'
          placeholder='Avatar URL'
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
