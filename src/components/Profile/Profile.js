import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css';

function Profile({ cards, handleAddClick, onCardClick, onCardLike }) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  }, [history]);

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
