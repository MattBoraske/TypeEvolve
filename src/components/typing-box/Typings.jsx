import React from 'react';
import Form from 'react-bootstrap/Form';
import './Typings.css';

const Typings = ({ onInputChange = () => {} }) => { // Provide a default empty function
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      event.preventDefault(); // Prevent the Backspace key's default behavior
    }
  };


  return (
    <Form className="typingForm">
      <Form.Group controlId="formBasicEmail">
      <Form.Control
          type="text"
          placeholder=""
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Add the onKeyDown event listener
        />      </Form.Group>
    </Form>
  );
};


export default Typings;
