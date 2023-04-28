import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './EditProfileModal.css';

const EditProfileModal = ({ isOpen, onClose, currentUser, onUpdateUser }) => {
  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(name, avatar);
  };

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <h2 className='edit-profile-modal__title'>Edit Profile</h2>
      <input
        type='text'
        className='edit-profile-modal__input'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        className='edit-profile-modal__input'
        placeholder='Avatar URL'
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button type='submit' className='edit-profile-modal__submit'>
        Save Changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
