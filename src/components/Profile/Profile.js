import React, { useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css';
import CurrentUserContext from '../../context/currentUserContext';

function Profile({ cards, handleAddClick, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className='profile'>
      <div className='profile-container'>
        <SideBar />
        {/* Example: Display user's avatar */}
        {currentUser && <img src={currentUser.avatar} alt={currentUser.name} className='profile-avatar' />}
        <ClothesSection cards={cards} handleAddClick={handleAddClick} onCardClick={onCardClick} />
      </div>
    </div>
  );
}

export default Profile;
