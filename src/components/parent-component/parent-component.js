import React, { useState } from 'react';
import Typings from '../typing-box/Typings';
import TextBox from '../target-typing-box/TextBox';

const ParentComponent = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to update the state with the new input value
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div>
      {/* Pass the handleInputChange function to Typings */}
      <Typings onInputChange={handleInputChange} />
      {/* Pass the inputValue to TextBox as a prop */}
      <TextBox text={inputValue} />
    </div>
  );
};

export default ParentComponent;
