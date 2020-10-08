import React from 'react';
import { Link } from "react-router-dom";

const LinkToCharacters = (props) => {
    return(
        <div>
            <li key={props.character.id}>
                <Link to= {`/characters/${props.character.id}`}>
                        {props.character.attributes.name}
                </Link>
            </li>
        </div>
    )
}

export default LinkToCharacters