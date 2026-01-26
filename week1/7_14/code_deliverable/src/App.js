import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React! 🚀</h1>
        <p>This is a simple React website for testing GitHub Pages deployment.</p>
        
        <div className="counter">
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
