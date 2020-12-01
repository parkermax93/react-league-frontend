import React from 'react';
import { Link } from "react-router-dom";
import LikeButton from './LikeButton.jsx';

const LinkToCharacters = (props) => {
    return(
        <div>
            <li key={props.character.id}>
                <Link to= {`/characters/${props.character.id}`}>
                        {props.character.attributes.name}
                </Link>
                <LikeButton />
            </li>
        </div>
    )
}

export default LinkToCharacters