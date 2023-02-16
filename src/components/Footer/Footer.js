import React from 'react';

export function Footer() {
  console.log('Footer');
  const date = new Date().toLocaleDateString();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__name'> Made by Ben Linn</p>
        <p className='footer__date'>{date}</p>
      </div>
    </footer>
  );
}
export default Footer;
