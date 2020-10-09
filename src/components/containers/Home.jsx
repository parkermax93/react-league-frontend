import React from 'react';
import bg from '../../images/bg.jpg'
import CharactersLink from '../CharactersLink.jsx'

const Home = () => {
    return(
    <div className="App">
    <header className="App-header">
    <img src={bg} className="App-logo" alt="bg" />
    <p>
    League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. Inspired by Defense of the Ancients, the game follows a freemium model. The game was released on October 27, 2009.
    </p>
    <CharactersLink />
    </header>
    </div>
    )
}
export default Home