import React from 'react';

function Profile({ card, handleAddClick, onCardClick }) {
  return (
    <div className='profile'>
      <div className='profile-container'>
        <SideBar />
        <ClothesSection cards={card} handleAddClick={handleAddClick} onCardClick={onCardClick} />
      </div>
    </div>
  );
}

export default Profile;
