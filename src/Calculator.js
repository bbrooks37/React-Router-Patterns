// src/Calculator.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Calculator = () => {
  const { operation, num1, num2 } = useParams();
  const n1 = Number(num1); // Convert to numbers
  const n2 = Number(num2);

  let result;

  switch (operation) {
    case 'add':
      result = n1 + n2;
      break;
    case 'subtract':
      result = n1 - n2;
      break;
    case 'multiply':
      result = n1 * n2;
      break;
    case 'divide':
      result = n2 === 0 ? "Cannot divide by zero" : n1 / n2; // Handle divide by zero
      break;
    default:
      return <Navigate to="/add/0/0" />; // Redirect for invalid operations
  }

  return (
    <div>
      <h1>Result: {result}</h1>
    </div>
  );
};

export default Calculator;