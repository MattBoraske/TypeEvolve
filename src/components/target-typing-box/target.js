import React, { useState, useEffect } from 'react';
import './target.css';

const TextBox = ({ text, backendtext }) => {
  ////////////////////////////////////////////////////////////////
  // The target text to type goes here:
  /////////////////////////////////////////////////////////////////
  const targetText = "This is the target text"; 

  ////////////////////////////////////////////////////////////////
  // Set variables:
  /////////////////////////////////////////////////////////////////
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  ////////////////////////////////////////////////////////////////
  // Timer starts when textbox length is 1
  /////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (text.length === 1 && !timerRunning) {
      setStartTime(new Date());
      setTimerRunning(true);
    }

  ////////////////////////////////////////////////////////////////
  // Stop timer when text matches target text
  /////////////////////////////////////////////////////////////////
    if (text.length === targetText.length && timerRunning) {
      setEndTime(new Date());
      setTimerRunning(false);
    }
  }, [text, timerRunning, targetText]); // Dependencies for useEffect

  ////////////////////////////////////////////////////////////////
  // Get timer diff:
  /////////////////////////////////////////////////////////////////
  const elapsedTime = endTime ? ((endTime - startTime) / 1000).toFixed(2) : 0;

  return (
    <>
      <div className='text-box-to-type-to'>
        {targetText}
      </div>
      <div className="text-box">
        {text}
      </div>
      {/* Optionally display the timer or completion message */}
     {!timerRunning && endTime && (
        <div>Time taken: {elapsedTime} seconds
        Target: {targetText}
        Actual:  {text}
        </div>
      )}
    </>
  );
};

export default TextBox;


