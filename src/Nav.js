// src/Nav.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ dogs }) => {
  return (
    <nav>
      <NavLink 
        to="/dogs"  // Link to the main dog list page (homepage)
        style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }} 
        activeStyle={{ fontWeight: "bold", color: "red" }} 
      >
        Dog List  {/* The "Dog List" link */}
      </NavLink>

      {dogs.map(dog => (
        <NavLink
          key={dog.name}
          to={`/dogs/${dog.name.toLowerCase()}`}
          style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          activeStyle={{ fontWeight: "bold", color: "red" }}
        >
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;