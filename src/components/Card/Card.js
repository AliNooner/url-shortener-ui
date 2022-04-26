import React from 'react';
import './Card.css';

const Card = ({id, longUrl, shortUrl, title}) => {

  return (
    <div className='card'>
      <h3 className='card-title'>{title}</h3>
      <p>{longUrl}</p>
      <p>{shortUrl}</p>
      <button className='delete-button'>Delete</button>
    </div>
  )
}


export default Card;
