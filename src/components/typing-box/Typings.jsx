import React from 'react';
import Form from 'react-bootstrap/Form';
import './Typings.css';

const Typings = ({ onInputChange, currentInput }) => {
  const handleChange = (event) => {
    // Call onInputChange with the new value and the current input value
    onInputChange(event.target.value, currentInput);
  };

  return (
    <Form className="typingForm">
      <Form.Group controlId="formBasicEmail">
      <Form.Control
          type="text"
          placeholder=""
          onChange={handleChange}
        />      </Form.Group>
    </Form>
  );
};


export default Typings;
