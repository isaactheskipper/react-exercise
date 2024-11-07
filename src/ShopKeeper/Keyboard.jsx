// Keyboard.jsx
import React, { useState } from 'react';
import './Keyboard.css';  // Import the CSS file for keyboard styles

function Keyboard({ onKeyPress }) {
  // The keys array, divided into pages
  const allKeys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y', 'Z', '*', '#'],
  ];

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Get the keys for the current page
  const keysToShow = allKeys[currentPage];

  // Handle Previous Button Click
  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1); // Go to previous page
  };

  // Handle Next Button Click
  const handleNext = () => {
    if (currentPage < allKeys.length - 1) setCurrentPage(currentPage + 1); // Go to next page
  };

  return (
    <div className="keyboard-container">
      <div className="keyboard">
        {keysToShow.map((key) => (
          <button
            key={key}
            className="typewriter-button"
            onClick={() => onKeyPress(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="pagination-buttons">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentPage === allKeys.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Keyboard;