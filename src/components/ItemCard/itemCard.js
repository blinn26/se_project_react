import React from 'react';
import './ItemCard.css';
import '../Main/Main';
import '../App/App';

const ItemCard = ({ item, onItemClick }) => {
  console.log(item._id);

  return (
    <div className='card'>
      <div className='card__name'> {item.name}</div>

      <img className='card__image' src={item.link} alt={item.name} onClick={() => onItemClick(item)} />
    </div>
  );
};

export default ItemCard;
