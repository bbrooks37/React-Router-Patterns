// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Removed NavLink import, since it's in Nav.js
import whiskey from './whiskey.jpg';
import duke from './duke.jpg';
import perry from './perry.jpg';
import tubby from './tubby.jpg';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav'; // Correct import for Nav

const App = (props) => {
  const dogs = props.dogs || [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

  return (
    <BrowserRouter>
      <div>
        <Nav dogs={dogs} />
        <Routes> {/* Use Routes instead of Switch */}
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} /> {/* Use element prop */}
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} /> {/* Use element prop */}
          <Route path="*" element={<Navigate to="/dogs" />} /> {/* Use Navigate instead of Redirect, and the "*" path for catch-all */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;