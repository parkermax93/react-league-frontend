import React from 'react';
import CharacterList from '../CharacterList.jsx';
import CharacterInput from '../CreateCharacter.jsx';

const Characters = () => {
    return(
        <div className="App">
            <header className="App-header">
                <CharacterList />
                <CharacterInput />
            </header>
        </div>
    )
}
export default Characters