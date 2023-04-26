import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ isOpen, onClose, onRegister, authError }) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name, avatar, email, password });
  }

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} title='Sign Up' buttonText='Sign Up'>
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

      {authError && <p className='error-message'>{authError}</p>}
    </ModalWithForm>
  );
}

export default RegisterModal;
