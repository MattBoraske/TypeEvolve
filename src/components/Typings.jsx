import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import "./Typings.css";

const Typings = () =>{
    
    const [text, setText] = useState("");

    function updateText(event) {
        setText(event.target.value)
    }


    return <Form className="typingForm">
        <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="" value={text} onChange={updateText} />
      </Form.Group>
    </Form>
};


export default Typings;