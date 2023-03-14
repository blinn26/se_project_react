import React from 'react';
import './SideBar.css';
import avatarUser from '../../images/Avatar.svg';

function SideBar() {
  return (
    <div className='side-bar'>
      <div className='side-bar__container'>
        <img src={avatarUser} alt='avatar' className='side-bar__avatar' />
        <p className='side-bar__username'> Ben Linn </p>
      </div>
    </div>
  );
}
export default SideBar;
