import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function LoginModal({ isOpen, onClose, onLogin, authError, orRegister }) {
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
        id='email'
        required
        minLength={1}
        maxLength={30}
      />
      <label className='login__label'>Password</label>
      <input
        className='login__input'
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        id='password'
        required
        minLength={4}
        maxLength={35}
      />
      {authError && (
        <p className='Incorrect Password' onClick={orRegister}>
          {authError}
          or Register
        </p>
      )}
    </ModalWithForm>
  );
}

export default LoginModal;
