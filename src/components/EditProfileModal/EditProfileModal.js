import React, { useState, useEffect, useContext } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import CurrentUserContext from '../../context/currentUserContext';

const EditProfileModal = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(name, avatar);
  };

  return (
    <ModalWithForm
      name='edit-profile'
      buttonText='Save Changes'
      isOpen={isOpen}
      title='Edit Profile'
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className='modal__label'>Avatar URL</label>
      <input
        type='url'
        name='avatar'
        id='avatar'
        className='modal__input modal__input_type-url'
        placeholder='Avatar URL'
        required
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <span className='modal__error' id='avatar-url-error'></span>
    </ModalWithForm>
  );
};

export default EditProfileModal;
