import React from 'react';
import { Link } from "react-router-dom";
import CharacterList from '../CharacterList.jsx';

const Characters = () => {
    return(
        <div className="App">
            <header className="App-header">
                <p>
                    Fetched hyperlink list of characters goes here! 
                </p>
                <CharacterList />
            </header>
        </div>
    )
}
export default Characters