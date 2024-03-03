import React from 'react';

const StatsDisplay = ({ realComparisonResults, text, elapsedTime }) => {
  return (
    <div>
      <h3>Results</h3>
      <p>Accuracy: {realComparisonResults.accuracy}%</p>
      <p>WPM: {(text.split(" ").length / (elapsedTime / 60)).toFixed(0)}</p>
      <p>Missed words: {realComparisonResults.missedWords.join(", ")}</p>
      <p>Error characters: {realComparisonResults.errorCharacters.join(", ")}</p>
      <p>Elapsed time: {elapsedTime} seconds</p>
    </div>
  );
};

export default StatsDisplay;
