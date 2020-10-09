import React from 'react';
import CharacterList from '../CharacterList.jsx';
import CharacterCreate from '../CreateCharacter.jsx';

const Characters = () => {
    return(
        <div className="App">
            <header className="App-header">
                <CharacterList />
                <CharacterCreate />
            </header>
        </div>
    )
}
export default Characters