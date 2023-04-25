import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function LoginModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({ email, password });
  }

  return (
    <ModalWithForm isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title='Sign In'>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
    </ModalWithForm>
  );
}

export default LoginModal;
