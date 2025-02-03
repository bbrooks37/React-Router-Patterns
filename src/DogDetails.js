// src/DogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name);

  if (!dog) {
    return <div>Dog not found!</div>; // Handle the case where the dog is not found
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;