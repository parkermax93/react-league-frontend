import React from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

const Home = () => {
    return(
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
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