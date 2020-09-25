import React from 'react';
import bg from '../images/bg.jpg'
import { Link } from "react-router-dom";

const Home = () => {
    return(
    <div className="App">
    <header className="App-header">
    <img src={bg} className="App-logo" alt="bg" />
    <p>
     Write stuff about league here.
    </p>
    <Link to="/characters">
        Click To View All Champions
    </Link>
    </header>
    </div>
    )
}
export default Home