// src/ColorList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Available Colors</h1>
      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a color</Link>
    </div>
  );
};

export default ColorList;