import React, { useState } from 'react';
import Typings from '../typing-box/typing-box';
import TextBox from '../target-box/target-box';

const ParentComponent = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to update the state with the new input value
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div>
      <Typings onInputChange={handleInputChange} />
      <TextBox text={inputValue} />
    </div>
  );
};

export default ParentComponent;
