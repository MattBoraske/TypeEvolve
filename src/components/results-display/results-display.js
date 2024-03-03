import React, { useState } from 'react';
import Keyboard from '../keyboard-component/keyboard';
import StatsDisplay from '../stats-component/stats';
import ResetButton from '../reset-button/reset-button';
import './results-display.css';
import axios from 'axios';

const difficultyLevels = ['very simple', 'simple', 'average', 'complex', 'very complex'];

const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults, keysTyped, setTargetText}) => {
  //console.log('comparisonResults beginning of results display', comparisonResults);
  const [realComparisonResults, setRealComparisonResults] = useState(comparisonResults);

  const clearDisplay = (e) => {
    e.preventDefault();
    setRealComparisonResults(null);
    // call createStory with the words and letters from the comparisonResults
    let words = comparisonResults.missedWords;
    let letters = comparisonResults.errorCharacters;
    let difficulty = difficultyLevels[determineDifficulty(comparisonResults.accuracy)];
    
    console.log('words', words);
    console.log('letters', letters);
    console.log('difficulty', difficulty);

    createStory(words, letters, difficulty).then((story) => {
      setTargetText(story);
    });
  };

  return (
    <div className="results-display fade-in">
      {realComparisonResults && (
        <div>
          <StatsDisplay 
            realComparisonResults={realComparisonResults} 
            text={text} 
            elapsedTime={elapsedTime} 
          />
          <h3>Keyboard Heatmap</h3>
          <Keyboard 
            targetText={targetText}
            text={text}
            keysTyped={keysTyped}
          />
          {/* Pass clearDisplay as a callback to onReset */}
          <ResetButton onReset={clearDisplay} />
        </div>
      )}
    </div>
  );
};

async function createStory(words, letters, difficulty) {
  const formattedWords = words.slice(0, -1).join(', ') + ', and ' + words[words.length - 1];
  const formattedLetters = letters.slice(0, -1).join(', ') + ', and ' + letters[letters.length - 1];

  const sysPrompt = `Adopt the persona of a knowledgeable yet approachable guide in English language and communication.`;
  const userPrompt = `Create a story within a 50-word limit, that includes the words ${formattedWords}, and ${difficulty} words with letters ${formattedLetters}.`;

  try {
      const response = await axios.post('http://localhost:8080/v1/chat/completions', {
          model: "gpt-3.5-turbo",
          messages: [
              {
                  role: "system",
                  content: sysPrompt
              },
              {
                  role: "user",
                  content: userPrompt
              }
          ]
      }, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer no-key'
          }
      });

      const message = response.data.choices[0].message;
      return message['content'];
  } catch (error) {
      console.error('Error:', error);
      return null; // or handle the error as you prefer
  }
}

function determineDifficulty(accuracy) {
  if (accuracy < 0 || accuracy > 100) {
      throw new Error('Accuracy must be between 0 and 100');
  }
  // Adjust the formula to ensure a maximum difficulty of 4
  return Math.min(Math.floor(accuracy / 25), 4);
}

export default ResultsDisplay;