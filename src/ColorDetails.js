// src/ColorDetails.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ColorDetails = ({ colors }) => {
  const { color } = useParams();
  const foundColor = colors.find(c => c.name === color);

  if (!foundColor) {
    return <Navigate to="/colors" />; // Redirect if color not found
  }

  return (
    <div style={{ backgroundColor: foundColor.value, width: '100%', height: '300px' }}>
      <h1>{foundColor.name}</h1>
    </div>
  );
};

export default ColorDetails;