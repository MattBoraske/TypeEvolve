import React from 'react';
import './App.css';
import MasterComponent from './masterComponent';

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
        <MasterComponent />
      </header>
    </div>
  );
}

export default App;
