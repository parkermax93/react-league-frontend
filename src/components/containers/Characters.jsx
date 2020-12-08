import React from 'react';
import CharacterList from '../CharacterList.jsx';
import CharacterCreate from '../CreateCharacter.jsx';
import HomeButton from '../HomeButton.jsx';
import SearchBar from '../SearchBar.jsx';

const Characters = () => {
    return(
        <div className="App">
            <header className="App-header">
                <SearchBar />
                <CharacterList />
                <CharacterCreate />
                <HomeButton />
            </header>
        </div>
    )
}
export default Characters