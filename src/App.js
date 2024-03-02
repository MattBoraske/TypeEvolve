import './App.css';
import Typings from './components/typing-box/Typings';


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
      </header>
    </div>
  );
}

export default App;
