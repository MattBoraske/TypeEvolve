import React from 'react';
import Keyboard from '../keyboard-component/keyboard';
import './results-display.css';

const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults }) => {
  return (
    <div className="results-display fade-in"> {/* Add the fade-in class here */}
      <h3>Results</h3>
      {comparisonResults && (
        <div>
          <p>Accuracy: {comparisonResults.accuracy}%</p>
          <p>Missed words: {comparisonResults.missedWords.join(", ")}</p>
          <p>Error characters: {comparisonResults.errorCharacters.join(", ")}</p>
          <p>Elapsed time: {elapsedTime} seconds</p>
          <h3>Keyboard Heatmap</h3>
          <Keyboard />
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
