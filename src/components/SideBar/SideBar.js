import React, { useContext } from 'react';
import './SideBar.css';
import avatarUser from '../../images/Avatar.svg';
import CurrentUserContext from '../../context/currentUserContext';

function SideBar() {
  const currentUser = useContext(CurrentUserContext);

  const handleOpenProfileModal = () => {};

  return (
    <div className='side-bar'>
      <div className='side-bar__container'>
        <img src={currentUser?.avatar || avatarUser} alt='avatar' className='side-bar__avatar' />
        <p className='side-bar__username'>{currentUser?.name || 'User'}</p>
        <button onClick={handleOpenProfileModal} className='side-bar__button'>
          Change Profile Data
        </button>
      </div>
    </div>
  );
}

export default SideBar;
