import React from 'react';
import './App.css';
import MasterComponent from './masterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="AppName">
        Type Evolve
        </h1>
        <h2 className="typingEffect">
        The AI Typing Trainer.
        </h2>
        <MasterComponent />
      </header>
    </div>
  );
}

export default App;
