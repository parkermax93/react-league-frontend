import React from 'react';
import { Link } from "react-router-dom";

const CharactersLink = () => {
    return(
        <div>
            <Link to="/characters">
                Click Here To View All Champions!
            </Link>
        </div>
    )
}

export default CharactersLink
