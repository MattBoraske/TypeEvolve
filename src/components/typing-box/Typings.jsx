import React from 'react';
import Form from 'react-bootstrap/Form';
import './Typings.css';

const Typings = ({ onInputChange = () => {} }) => { // Provide a default empty function
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <Form className="typingForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="" onChange={handleChange} style={{ whiteSpace: "pre-wrap", width: "100%", height: "200px" }}/>
      </Form.Group>
    </Form>
  );
};


export default Typings;
