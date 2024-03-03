import React, { useState, useEffect } from 'react';
import './target-box.css';

const TextBox = ({ text, backendtext }) => {
  const targetText = "This is the target text";
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [comparisonResults, setComparisonResults] = useState(null); // State to hold comparison results

  useEffect(() => {
    if (text.length === 1 && !timerRunning) {
      setStartTime(new Date());
      setTimerRunning(true);
    }

    if (text.length === targetText.length && timerRunning) {
      setEndTime(new Date());
      setTimerRunning(false);
      // Call compareInputs here and save the results in state
      const results = compareInputs(targetText, text);
      setComparisonResults(results); // Save comparison results to state
    }
  }, [text, timerRunning, targetText]);

  const elapsedTime = endTime ? ((endTime - startTime) / 1000).toFixed(2) : 0;

  return (
    <>
      <div className='text-box-to-type-to'>{targetText}</div>
      <div className="text-box">{text}</div>
      {!timerRunning && endTime && (
        <div>
          Time taken: {elapsedTime} seconds <br></br>
          Target: {targetText} <br></br>
          Actual: {text} <br></br>
          {/* Display comparison results */}
          {comparisonResults && (
            <div>
              <br></br>
              Accuracy: {comparisonResults.accuracy}% <br></br>
              Missed words: {comparisonResults.missedWords.join(", ")} <br></br>
              Error characters: {comparisonResults.errorCharacters.join(", ")}
              
              {/* Render missed words and error characters as needed */}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TextBox;

// Ensure compareInputs function is defined or imported here


// Returns accuracy, missed words, and error characters
function compareInputs(promptInput, userInput) {
  const promptInputArray = promptInput.split(" ");
  const userInputArray = userInput.split(" ");
  let missedWords = []; // Initialize as an array if you plan to push into it
  let errorCharacters = []; // Should be an array based on your usage
  let promptMap = {}; // Use 'let' for reassignable variables
  let userMap = {};

  let accuracy = calculateAccuracy(promptInput, userInput);

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

// Get matches of characters side by side (NOT NEEDED)
function compCountStr(str1,str2) {
  let maxlength = Math.max(str1.length,str2.length);
  let matchCount = 0;
  for (let index = 0; index < maxlength; index++) {
      if(index < str1.length && index < str2.length) {
          if (str1.charAt(index) === str2.charAt(index)) {
              matchCount++;
          }
      }
  }
  return matchCount;
} 

// Breaks down a string into the characters and their occurences.
function decompStr(inputStr) {
  const charMap = {};
  for (let inputChar of inputStr) {
    if (charMap[inputChar]) {
      charMap[inputChar]++;
    } else {
      charMap[inputChar] = 1;
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

