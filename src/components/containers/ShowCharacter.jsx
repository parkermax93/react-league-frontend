import React from 'react';
import bg from '../../images/bg.jpg'
import { Link } from "react-router-dom";

const ShowCharacter = () => {
    return(
    <div className="CharacterCard">
    <p>
Character Card goes here.
    </p>
    <Link to="/characters">
        Click To View All Champions
    </Link>
    </div>
    )
}
export default ShowCharacter