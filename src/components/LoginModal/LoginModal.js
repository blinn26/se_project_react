import React, { useState } from 'react';

import ModalWithForm from '../ModalWithForm/ModalWithForm';

function LoginModal({ isOpen, onClose, onLogin, handleOrRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} title='Log In' buttonText='Log In'>
      <label className='login__label'>Email</label>
      <input
        className='login__input'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required
        minLength={1}
        maxLength={30}
        autoComplete='new-password'
      />
      <label className='login__label'>Password</label>
      <input
        className='login__input'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
        minLength={4}
        maxLength={35}
        autoComplete='new-password'
      />

      <p className='or__register' onClick={handleOrRegister}>
        or Register
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
