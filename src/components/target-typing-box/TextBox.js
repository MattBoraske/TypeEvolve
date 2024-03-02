import React from 'react';
import './TextBox.css'; // Ensure the CSS file name matches

const TextBox = () => {
  // Hardcoded plain sample text
  const text = "do each can can find as been see some day which how that been it would him so did them on into people";

  return (
    <div className="text-box">
      {text}
    </div>
  );
};

export default TextBox;
