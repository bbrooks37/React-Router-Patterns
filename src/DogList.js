// src/DogList.js
import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Dog List</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}> {/* Use Link for navigation */}
              <img src={dog.src} alt={dog.name} style={{ maxWidth: '100px' }} />
              {dog.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;