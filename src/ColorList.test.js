// src/ColorList.test.js (Example test file for ColorList.js)
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ColorList from './src/ColorList';

describe('ColorList Component', () => {
  it('renders the list of colors', () => {
    const colors = [
      { name: "red", value: "#FF0000" },
      { name: "green", value: "#00FF00" },
    ];
    render(
      <BrowserRouter>
        <ColorList colors={colors} />
      </BrowserRouter>
    );
    const redLink = screen.getByRole('link', { name: 'red' }); // Use role for better accessibility
    const greenLink = screen.getByRole('link', { name: 'green' });
    expect(redLink).toBeInTheDocument();
    expect(greenLink).toBeInTheDocument();

    // screen.debug(); // Uncomment to see the rendered HTML (for debugging)
  });

  it('renders the "Add a color" link', () => {
    render(
      <BrowserRouter>
        <ColorList colors={[]} /> {/* Pass an empty array for colors */}
      </BrowserRouter>
    );
    const addColorLink = screen.getByRole('link', { name: 'Add a color' });
    expect(addColorLink).toBeInTheDocument();
  });
});

