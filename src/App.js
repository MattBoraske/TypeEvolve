import React from 'react';
import './App.css';
import ParentComponent from './components/textbox-typingbox-parent/textbox-typingbox-parent';
import ResultsDisplay from './components/results-display/results-display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="AppName">
          TetraTyper
        </h1>
        <h3 className="typingEffect">
        The AI Typing Helper.
        </h3>
        <ParentComponent />
        <ResultsDisplay/>
      </header>
    </div>
  );
}

export default App;
