import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SideBar.css';
import avatarUser from '../../images/Avatar.svg';
import CurrentUserContext from '../../context/currentUserContext';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

function SideBar({ handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const handleEditProfileClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    handleSignOut();
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
        <button onClick={handleLogout} className='side-bar__logout'>
          Log out
        </button>
      </div>
      {showModal && (
        <EditProfileModal
          isOpen={showModal}
          onClose={closeModal}
          onUpdateUser={(name, avatar) => {
            console.log('Updated user:', name, avatar);
            closeModal();
          }}
        />
      )}
    </div>
  );
}

export default SideBar;
