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
      title='Change profile data'
      onSubmit={handleSubmit}
      onClose={onClose}>
      <div className='edit-profile__content'>
        <label className='edit-profile__label-name'>Name</label>
        <input
          title='Name'
          type='text'
          name='name'
          id='name'
          className='edit-profile__input-name'
          placeholder='Name'
          required
          minLength='1'
          maxLength='30'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className='edit-profile__label-avatar'>Avatar URL</label>
        <input
          title='Avatar'
          type='url'
          name='avatar'
          id='avatar'
          className='edit-profile__input-avatar'
          placeholder='Avatar URL'
          required
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <span className='modal__error' id='avatar-url-error'></span>
      </div>
    </ModalWithForm>
  );
};
export default EditProfileModal;
