import React from 'react';

export function Footer() {
  console.log('Footer');
  const date = new Date().toLocaleDateString();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__name'> Made by Ben Linn</div>
        <div className='footer__date'>{date}</div>
      </div>
    </footer>
  );
}
