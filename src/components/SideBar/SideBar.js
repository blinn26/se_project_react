import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SideBar.css';
import avatarUser from '../../images/Avatar.svg';
import CurrentUserContext from '../../context/currentUserContext';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SideBar() {
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
    localStorage.removeItem('token');
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
      {showModal && <ModalWithForm onClose={closeModal} />}
    </div>
  );
}

export default SideBar;
