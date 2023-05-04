import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import Validation from '../../utils/validation';

function RegisterModal({ isOpen, onClose, onRegister, switchToLogin }) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gim.test(email);

    setIsFormValid(Validation(email));
  }, [email, password, name]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name, avatar, email, password });
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Sign Up'
      buttonText='Next'
      isValid={isFormValid}>
      <label className='register__label'>Email</label>
      <input
        className='register__input'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required
      />
      <label className='register__label'>Password</label>
      <input
        className='register__input'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
        autoComplete='new-password'
      />
      <label className='register__label'>Name</label>
      <input
        className='register__input'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        required
      />
      <label className='register__label'>Avatar URL</label>
      <input
        className='register__input'
        type='url'
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder='Avatar URL'
      />
      <p className='or__log-in' onClick={switchToLogin}>
        or Log in
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
