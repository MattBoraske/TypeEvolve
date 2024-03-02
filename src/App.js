import logo from './logo.svg';
import './App.css';
import Typings from './components/Typings';


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
      <Typings></Typings>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
