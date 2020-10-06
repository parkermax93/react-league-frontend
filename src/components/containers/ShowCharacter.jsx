import React from 'react';
import { Link } from "react-router-dom";
import CharacterCard from '../CharacterCard.jsx';
import CharactersLink from '../CharactersLink.jsx'

const ShowCharacter = () => {
    return(
    <div className="CharacterCard">
        <CharacterCard />
        <CharactersLink />
    </div>
    )
}
export default ShowCharacter