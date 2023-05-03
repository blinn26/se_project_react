import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import CurrentUserContext from '../../context/currentUserContext';
import './Profile.css';
import AddItemModal from '../AddItemModal/AddItemModal';

function Profile({ cards, handleAddClick, onCardClick, onCardLike, handleSetUserNull, handleEditProfileOpen }) {
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    handleSetUserNull();
    history.push('/');
  };

  const handleAddFormOpen = () => {
    console.log('Toggling Add Form');
    setIsAddFormOpen(!isAddFormOpen);
  };

  const handleAddItem = (itemName, itemLink, weatherType) => {
    handleAddClick(itemName, itemLink, weatherType);

    setIsAddFormOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  }, [history]);

  return (
    <div className='profile'>
      <div className='profile__title'>Your Items</div>
      <p className='profile__click' onClick={handleAddFormOpen}>
        + Add New
      </p>{' '}
      {/* Add onClick event handler */}
      <div className='profile-container'>
        <SideBar
          currentUser={currentUser}
          handleSignOut={handleSignOut}
          handleEditProfileOpen={handleEditProfileOpen}
        />
        <ClothesSection
          cards={cards}
          handleAddClick={handleAddClick}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
        />
      </div>
      <AddItemModal isOpen={isAddFormOpen} onAddItem={handleAddItem} onClose={handleAddFormOpen} />{' '}
      {/* AddItemModal component  */}
    </div>
  );
}

export default Profile;
