// ResetButton.js
import React from 'react';
import './reset-button.css'; // Ensure this path is correct

const ResetButton = ({ onReset }) => {
  const handleMouseDown = (e) => {
    e.target.style.transform = 'scale(0.95)'; // Scales down the button
    e.target.style.opacity = '0.7'; // Reduces opacity to give a pressed effect
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = 'scale(1)'; // Resets the button scale
    e.target.style.opacity = '1'; // Resets the button opacity
  };

  return (
    <button
      className='reset'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Resets the style if the cursor leaves the button while pressed
      onClick={onReset}
    >
      Generate new prompt
    </button>
  );
};

export default ResetButton;
