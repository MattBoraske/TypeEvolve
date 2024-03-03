import React from 'react';

const StatsDisplay = ({ realComparisonResults, text, elapsedTime }) => {
  return (
    <div className="stats-container">
      <h3 className="results-heading">Results</h3> {/* Added a class name to the heading */}
      <div className="stats-row">
        <div className="stats-column">
          <p><strong>Accuracy:</strong> {realComparisonResults.accuracy}%</p>
          <p><strong>WPM:</strong> {(text.split(" ").length / (elapsedTime / 60)).toFixed(0)}</p>
        </div>
        <div className="stats-column">
          <p><strong>Missed words:</strong> {realComparisonResults.missedWords.join(", ")}</p>
          <p><strong>Error characters:</strong> {realComparisonResults.errorCharacters.join(", ")}</p>
          <p><strong>Elapsed time:</strong> {elapsedTime} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
