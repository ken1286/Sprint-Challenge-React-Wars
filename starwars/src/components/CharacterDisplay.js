import React from 'react';
import './StarWars.css';
import Character from './Character';

function CharacterDisplay(props) {
  return (
    <div className="card-wrapper">
    {props.characters.map(character => {
      return (
        <Character 
        charName={character.name}
        birthYear={character.birth_year}
        gender={character.gender}
        key={character.name}
        />
      )
    })}
    </div>
  )
}

export default CharacterDisplay;