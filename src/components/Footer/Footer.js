import React from 'react';
import './Footer.css';

export function Footer() {
  console.log('Footer');

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__title'>CREATEDbyBENLINN</p>
        <p className='footer__year'>2023</p>
      </div>
    </footer>
  );
}
export default Footer;
