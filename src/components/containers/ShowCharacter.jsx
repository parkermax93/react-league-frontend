import React from 'react';
import { Link } from "react-router-dom";
import CharacterCard from '../CharacterCard.jsx';
import CharactersLink from '../CharactersLink.jsx'
import LikeButton from '../LikeButton.jsx'

const ShowCharacter = () => {
    return(
    <div className="CharacterCard">
        <CharacterCard />
        <LikeButton />
        <CharactersLink />
    </div>
    )
}
export default ShowCharacter