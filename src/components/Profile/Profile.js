import React from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css';

function Profile({ cards, handleAddClick, onCardClick, onCardLike }) {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <SideBar />
        <ClothesSection
          cards={cards}
          handleAddClick={handleAddClick}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
        />
      </div>
    </div>
  );
}

export default Profile;
