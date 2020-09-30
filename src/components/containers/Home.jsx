import React from 'react';
import bg from '../../images/bg.jpg'
import CharactersLink from '../CharactersLink.jsx'

const Home = () => {
    return(
    <div className="App">
    <header className="App-header">
    <img src={bg} className="App-logo" alt="bg" />
    <p>
     About program here.
    </p>
    <CharactersLink />
    </header>
    </div>
    )
}
export default Home