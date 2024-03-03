import React from 'react';
import Keyboard from '../keyboard-component/keyboard';
import './results-display.css';

const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults, keysTyped }) => {
  return (
    <div className="results-display fade-in"> {/* Add the fade-in class here */}
      {comparisonResults && (
        <div>
          <h3>Results</h3>
          <p>Accuracy: {comparisonResults.accuracy}%</p>
          <p>WPM: {(text.split(" ").length/(elapsedTime / 60)).toFixed(0)}</p>
          <p>Missed words: {comparisonResults.missedWords.join(", ")}</p>
          <p>Error characters: {comparisonResults.errorCharacters.join(", ")}</p>
          <p>Elapsed time: {elapsedTime} seconds</p>
          <h3>Keyboard Heatmap</h3>
          <Keyboard 
          targetText={targetText}
          text={text}
          keysTyped={keysTyped}/>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
