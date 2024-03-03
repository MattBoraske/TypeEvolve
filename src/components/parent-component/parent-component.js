import React, { useState } from 'react';
import Typings from '../typing-box/Typings';
import TextBox from '../target-typing-box/Target';

const ParentComponent = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to update the state with the new input value
  const handleInputChange = (newValue) => {
    if (newValue.length >= inputValue.length) {
      setInputValue(newValue);
    }
  };

  return (
    <div>
      <Typings onInputChange={handleInputChange} />
      <TextBox text={inputValue} />
    </div>
  );
};

export default ParentComponent;
