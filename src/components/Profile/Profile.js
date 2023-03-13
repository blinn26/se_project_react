import React from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile({ cards, handleAddClick, onCardClick }) {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <SideBar />
        <ClothesSection cards={cards} handleAddClick={handleAddClick} onCardClick={onCardClick} />
      </div>
    </div>
  );
}

export default Profile;
