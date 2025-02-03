// src/NewColorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [value, setValue] = useState('#000000'); // Default color value

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, value });
    navigate('/colors'); // Redirect to color list
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorName">Color Name:</label>
      <input
        type="text"
        id="colorName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required // Name is required
      />

      <label htmlFor="colorValue">Color Value:</label>
      <input
        type="color" // Use a color input
        id="colorValue"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Add Color</button>
    </form>
  );
};

export default NewColorForm;