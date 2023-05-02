import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import CurrentUserContext from '../../context/currentUserContext';
import './Profile.css';

function Profile({ cards, handleAddClick, onCardClick, onCardLike, setUser }) {
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);

  const handleSignOut = () => {
    localStorage.removeItem('token');

    setUser(null);

    history.push('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  }, [history]);

  return (
    <div className='profile'>
      <div className='profile-container'>
        <SideBar currentUser={currentUser} handleSignOut={handleSignOut} />
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
