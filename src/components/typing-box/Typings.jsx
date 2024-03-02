import React from "react";
import Form from "react-bootstrap/Form";
import "./Typings.css";

const Typings = () =>{
    
    return <Form className="typingForm">
        <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="" />
      </Form.Group>
    </Form>
};

export default Typings;