import React, { useState, useEffect } from 'react';
import './target-box.css'; // Make sure the CSS path is correct
import ResultsDisplay from '../results-display/results-display'; // Ensure this component is correctly imported
import { compareInputs } from '../typing-box/typing-box'// Adjust the path as necessary

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
  }, [text, timerRunning, targetText]);

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
      <div className="elementBelowTextBox">        
        Your prompt:
      </div>
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
