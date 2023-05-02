import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './SideBar.css';
import avatarUser from '../../images/Avatar.svg';
import CurrentUserContext from '../../context/currentUserContext';

function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();

  const handleEditProfileClick = () => {
    history.push('/');
  };

  return (
    <div className='side-bar'>
      <div className='side-bar__container'>
        <img src={currentUser?.avatar || avatarUser} alt='avatar' className='side-bar__avatar' />
        <p className='side-bar__username'>{currentUser?.name || 'User'}</p>
        <button onClick={handleEditProfileClick} className='side-bar__button'>
          Change Profile Data
        </button>
      </div>
    </div>
  );
}

export default SideBar;
