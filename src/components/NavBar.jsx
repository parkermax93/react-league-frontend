import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <ul className="navbar">
      <NavLink to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home Page</NavLink>

      <NavLink to="/characters"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Characters</NavLink>
    </ul>
  );
};
export default NavBar;