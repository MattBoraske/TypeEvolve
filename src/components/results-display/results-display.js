import React, {useState} from 'react';
import Keyboard from '../keyboard-component/keyboard';
import StatsDisplay from '../stats-component/stats'; // Import the new component
import './results-display.css';

const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults, keysTyped }) => {
  const [realComparisonResults, setRealComparisonResults] = useState(comparisonResults);

  function clearDisplay(e){
    e.preventDefault();
    setRealComparisonResults(null);
  }

  return (
    <div className="results-display fade-in">
      {realComparisonResults && (
        <div>
          {/* Use the StatsDisplay component and pass the necessary props */}
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
          <button className='reset' onClick={clearDisplay}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
