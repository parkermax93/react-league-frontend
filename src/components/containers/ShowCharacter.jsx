import React from 'react';
import { Link } from "react-router-dom";
import CharacterCard from '../CharacterCard.jsx';
import CharactersLink from '../CharactersLink.jsx'

const ShowCharacter = () => {
    return(
    <div className="CharacterCard">
    <p>
        <CharacterCard />
        <CharactersLink />
    </p>
    </div>
    )
}
export default ShowCharacter