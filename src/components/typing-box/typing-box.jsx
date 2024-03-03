import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './typing-box.css';

const Typings = ({ onInputChange }) => {
  // State to keep track of the growing string
  const [growingString, setGrowingString] = useState('');

  const handleChange = (event) => {
    // Call onInputChange with the new value for any UI updates or validations
    onInputChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'Backspace' && event.key !== "Enter") {
      const newGrowingString = growingString + event.key;
      setGrowingString(newGrowingString);
    }
    else{
      event.preventDefault()
    }
  };

  return (
    <Form className="typingForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Capture key down events
          placeholder='Type Here:'
        />
      </Form.Group>
    </Form>

  );
};
////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////

export default Typings;


