import React from 'react';
import bg from '../../images/bg.jpg'
import CharactersLink from '../CharactersLink.jsx'

const Home = () => {
    return(
    <div className="App">
    <header className="App-header">
    <img src={bg} className="App-logo" alt="bg" />
    <p>
    League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. Inspired by Defense of the Ancients, the game follows a freemium model. A freemium model being that you can pay for skins and champions, or you can play the game an obtain in-game currency to buy the skins or champions.The game was released on October 27, 2009.The character buying process is very slow moving at first, until you build up your champion pool and can accumulate more than the lane you are "maining".
    </p>
    <CharactersLink />
    </header>
    </div>
    )
}
export default Home