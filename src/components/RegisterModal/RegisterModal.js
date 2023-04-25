import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal(props) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({ name, avatar, email, password });
  }

  return (
    <ModalWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title='Sign Up'>
      <label className='modal__label'>Email</label>
      <input
        className='register__input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email*'
        required
      />
      <input
        className='register__input'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password*'
        required
      />
      <input
        className='register__input'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        required
      />
      <input
        className='register__input'
        type='url'
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder='Avatar URL'
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
