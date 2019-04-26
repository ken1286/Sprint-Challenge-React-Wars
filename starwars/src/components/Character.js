import React from 'react';
import './StarWars.css';

function Character(props) {
  return(
    <div className="char-card">
      <h1>Name: {props.charName}</h1>
      <h3>Gender: {props.gender}</h3>
      <h3>Birth Year: {props.birthYear}</h3>
    </div>
  )
}

export default Character;