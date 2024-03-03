import React, { useState, useEffect } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import ResultsDisplay from '../results-display/results-display';
import './target-box.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const TextBox = ({ text, targetText }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [comparisonResults, setComparisonResults] = useState(null);

  useEffect(() => {
    if (text.length === 1 && !timerRunning) {
      setStartTime(new Date());
      setTimerRunning(true);
    }

    if (text.length === targetText['targetText'].length && timerRunning) {
      setEndTime(new Date());
      setTimerRunning(false);
      const results = compareInputs(targetText['targetText'], text);
      setComparisonResults(results);
    }
  }, [text, timerRunning, targetText, comparisonResults]);

  const elapsedTime = endTime ? ((endTime - startTime) / 1000).toFixed(2) : 0;

  const renderStyledText = () => {
    const chars = targetText['targetText'].split('');
    return chars.map((char, index) => {
      const match = text[index] === char;
      const charStyle = match ? 'matched-char' : 'unmatched-char';
      return (
        <React.Fragment key={index-1}>
          <span className={charStyle}>{char}</span>
          {index+1 === text.length && <span className="cursor">|</span>}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <div className='text-box-to-type-to'>
        {renderStyledText()}
        {text.length === targetText['targetText'].length && <span className="cursor">|</span>} {/* Show cursor at the end if all characters are typed */}
      </div>

      {!timerRunning && endTime && (
        <ResultsDisplay
          elapsedTime={elapsedTime}
          targetText={targetText['targetText']}
          text={text}           
          comparisonResults={comparisonResults}
          setTargetText={targetText['setTargetText']} // Make sure this prop is correctly passed down and used in the ResultsDisplay component
        />
      )}
    </>
  );
};

export default TextBox;

// Ensure compareInputs function is defined or imported here
//////////////////////////////////////////////////////////
// FUNCTION
//////////////////////////////////////////////////////////

// Returns accuracy, missed words, and error characters
function compareInputs(promptInput, userInput) {
  const promptInputArray = promptInput.split(" ");
  const userInputArray = userInput.split(" ");
  let missedWords = []; // Initialize as an array if you plan to push into it
  let errorCharacters = []; // Should be an array based on your usage
  let promptMap = {}; // Use 'let' for reassignable variables
  let userMap = {};

  let accuracy = calculateAccuracy(promptInput, userInput);

  let combinedWord = 0;

  for (let index = 0; index < promptInputArray.length; index++) {
    if (promptInputArray[index] !== userInputArray[index + combinedWord]) {
      /*
      while (!promptInputArray[index].includes(userInputArray[index + combinedWord]) ||
      promptInputArray[index] !== userInputArray[index + combinedWord]) {
        if (combinedWord + 1 < userInputArray.length) {
          combinedWord++;
        }
        if (index >= promptInputArray.length || index + combinedWord >= userInputArray.length) {
          break;
        }
      }
      */
      console.log("correct word: ",promptInputArray[index]);
      console.log("incorrect word: ",userInputArray[index]);
      let missedWord = promptInputArray[index].replace(", ","");
      missedWord.replace(". ","");
      missedWords.push(missedWord); // Assuming missedWords is intended to be an array

      promptMap = combineMaps(promptMap, decompStr(promptInputArray[index]));
      userMap = combineMaps(userMap, decompStr(userInputArray[index]));
    
      
    }
  }

  console.log("differences", differMaps(promptMap,userMap));
  errorCharacters = getErrorCharacters(differMaps(promptMap, userMap));
  return { accuracy, missedWords, errorCharacters };
}


// Adds elements from one map to another
function combineMaps(map1, map2) {
  const combinedMap = { ...map1};
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
    if (map1[key] < 0) {
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

