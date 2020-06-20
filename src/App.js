import React from 'react';
import './App.css';
import Calculator from './Components/Calcualtor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator/>
        <a
          className="App-link"
          href="https://www.captec.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Captec
        </a>
      </header>
    </div>
  );
}

export default App;
