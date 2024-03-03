import React from 'react';
import Keyboard from '../keyboard-component/keyboard';

const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults }) => {
  return (
    <div className="results-display">

      <h3>Keyboard Heatmap</h3>
      <Keyboard />
    </div>
  );
};

export default ResultsDisplay;
