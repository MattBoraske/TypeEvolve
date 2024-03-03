import React from 'react';
import Keyboard from '../keyboard-component/Keyboard';

const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults }) => {
  return (
    <div className="results-display">
      <h3>Results</h3>
      <p>Time taken: {elapsedTime} seconds</p>
      <p>Target: {targetText}</p>
      <p>Actual: {text}</p>
      {comparisonResults && (
        <div>
          <p>Accuracy: {comparisonResults.accuracy}%</p>
          <p>Missed words: {comparisonResults.missedWords.join(", ")}</p>
          <p>Error characters: {comparisonResults.errorCharacters.join(", ")}</p>
        </div>
      )}
      <h3>Keyboard Heatmap</h3>
      <Keyboard />
    </div>
  );
};

export default ResultsDisplay;
