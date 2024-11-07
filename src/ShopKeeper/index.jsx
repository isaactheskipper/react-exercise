import React, { useState } from 'react';
import items from './items';  // Import items data
import Keyboard from './Keyboard';  // Import the Keyboard component
import './index.css';  // Import CSS for the app

function ShopKeeperApp() {
    const [showKeyboard, setShowKeyboard] = useState(false);  // State to control keyboard visibility
    const [input, setInput] = useState('');  // State to hold the input

    // Function to handle key press and update input
    const handleKeyPress = (key) => {
        setInput(input + key);  // Append the pressed key to the current input
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit Cost</th>
                        <th>Total Price</th> {/* New column for total price */}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        // Calculate total price
                        const totalPrice = item.unit_cost * item.qty;

                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.unit_cost}</td>
                                <td>{totalPrice.toLocaleString()}</td> {/* Format with commas */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div>
                <button onClick={() => setShowKeyboard(!showKeyboard)}>
                    {showKeyboard ? 'Hide Keyboard' : 'Show Keyboard'}
                </button>
            </div>

            {/* Display the keyboard if showKeyboard is true */}
            {showKeyboard && <Keyboard onKeyPress={handleKeyPress} />}

            <div>
                <h3>Current Input: {input}</h3>
            </div>
        </div>
    );
}

export default ShopKeeperApp;