// Keyboard.jsx
import React from 'react';
import './Keyboard.css';  // Import the CSS file for keyboard styles

function Keyboard({ onKeyPress }) {
    const keys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    return (
        <div className="keyboard">
            {keys.map(key => (
                <button 
                    key={key} 
                    className="typewriter-button"  // Apply the typewriter-button class
                    onClick={() => onKeyPress(key)}
                >
                    {key}
                </button>
            ))}
        </div>
    );
}

export default Keyboard;
