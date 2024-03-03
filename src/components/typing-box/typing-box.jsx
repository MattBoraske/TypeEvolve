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


// Returns accuracy, missed words, and error characters
export const compareInputs = (promptInput, userInput) => {
  const promptInputArray = promptInput.split(" ");
  const userInputArray = userInput.split(" ");
  let missedWords = []; // Initialize as an array if you plan to push into it
  let errorCharacters = []; // Should be an array based on your usage
  let promptMap = {}; // Use 'let' for reassignable variables
  let userMap = {};

  let accuracy = calculateAccuracy(promptInput, userInput.trim());

  for (let index = 0; index < promptInputArray.length; index++) {
    if (promptInputArray[index] !== userInputArray[index]) {
      missedWords.push(promptInputArray[index]); // Assuming missedWords is intended to be an array

      promptMap = combineMaps(promptMap, decompStr(promptInputArray[index]));
      userMap = combineMaps(userMap, decompStr(userInputArray[index]));
    }
  }

  errorCharacters = getErrorCharacters(differMaps(promptMap, userMap));
  return { accuracy, missedWords, errorCharacters };
}


// Adds elements from one map to another
function combineMaps(map1, map2) {
  const combinedMap = {map1};
  for (let key in map2) {
    if (combinedMap.hasOwnProperty(key)) {
      combinedMap[key] += map2[key];
    } else {
      combinedMap[key] = map2[key];
    }
  }
  return combinedMap;
}

// Subtracts elements from one map from another
function differMaps(map1, map2) {
  const differMap = { ...map1};
  for (let key in map2) {
  if (differMap.hasOwnProperty(key)) {
    differMap[key] -= map2[key];
  } else {
    differMap[key] = -map2[key];
  }
}
return differMap;
}

// Returns the characters that do not match.
function getErrorCharacters(map1) {
  const errorCharacters = [];
  for (let key in map1) {
    if (map1[key] > 0) {
      errorCharacters.push(key);
    }
  }
  return errorCharacters;
}



// Breaks down a string into the characters and their occurences.
function decompStr(inputStr) {
  let size = inputStr != null ? inputStr.length: 0;
  const charMap = {};
  for (let index = 0; index < size; index++) {
    if (charMap[inputStr.charAt(index)]) {
      charMap[inputStr.charAt(index)]++;
    } else {
      charMap[inputStr.charAt(index)] = 1;
    }
  }
  return charMap;
}

// Calculates the accuracy of one string with another
function calculateAccuracy(str1, str2) {
  const longerLength = Math.max(str1.length, str2.length);
  const distance = levenshteinDistance(str1, str2);
  const accuracy = ((longerLength - distance) / longerLength) * 100;
  return accuracy.toFixed(2);
}

// Calculates the distance using levenshtein algorithm
function levenshteinDistance(str1, str2) {
  const matrix = [];
  for (let index = 0; index <= str1.length; index++) {
    matrix[index] = [index];
  }

  for (let index = 0; index <= str2.length; index++) {
    matrix[0][index] = index;
  }
  // Calculate the Levenshtein distance
  for (let rowIndex = 1; rowIndex <= str1.length; rowIndex++) {
    for (let colIndex = 1; colIndex <= str2.length; colIndex++) {
      if (str1.charAt(rowIndex - 1) === str2.charAt(colIndex - 1)) {
        matrix[rowIndex][colIndex] = matrix[rowIndex - 1][colIndex - 1];
      } else {
        matrix[rowIndex][colIndex] = Math.min(
          matrix[rowIndex - 1][colIndex - 1] + 1,
          matrix[rowIndex][colIndex - 1] + 1,
          matrix[rowIndex - 1][colIndex] + 1
        );
      }
    }
  }
  return matrix[str1.length][str2.length];
}

