import React from 'react';
import './TextBox.css';

const TextBox = ({ text }) => { // Destructure the text prop

  return (
    <div className="text-box">
      {text} 
    </div>
  );
};

export default TextBox;
