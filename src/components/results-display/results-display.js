import React, {useState} from 'react';
import Keyboard from '../keyboard-component/Keyboard';
import './results-display.css';


const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults, keysTyped }) => {

  const [realComparisonResults, setRealComparisonResults] = useState(comparisonResults);


  //Simply clears the stats of the screen
  function clearDisplay(e){
    e.preventDefault();
    setRealComparisonResults(null);
  }

const ResultsDisplay = ({ elapsedTime, targetText, text, comparisonResults}) => {
  return (
    <div className="results-display fade-in"> {/* Add the fade-in class here */}
      {realComparisonResults && (
        <div>
          <h3>Results</h3>
          <p>Accuracy: {realComparisonResults.accuracy}%</p>
          <p>WPM: {(text.split(" ").length/(elapsedTime / 60)).toFixed(0)}</p>
          <p>Missed words: {realComparisonResults.missedWords.join(", ")}</p>
          <p>Error characters: {realComparisonResults.errorCharacters.join(", ")}</p>
          <p>Elapsed time: {elapsedTime} seconds</p>
          <h3>Keyboard Heatmap</h3>
          <Keyboard 
          targetText={targetText}
          text={text}
          keysTyped={keysTyped}/>
          <button className='reset' onClick={clearDisplay}>Reset</button>
        </div>
      )}
      
    </div>
  );
};

export default ResultsDisplay;
