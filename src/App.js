import React from 'react';
import './App.css';
import ParentComponent from './components/parent-component/parent-component';// Adjust the import path as necessary

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="AppName">
          TetraTyper
        </h1>
        <h3>
          The AI Typing Helper.
        </h3>
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
