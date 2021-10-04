import React from 'react';
import logo from './logo.svg';
import './App.css';

const { useState } = React;

function App() {

  const [counter, setCounter] = useState(0);
  const [command, setCommand] = useState('');

  const increment = () => {
    setCounter(counter + 1);

  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          INTERVIEW PREP
        </p>
      </header>

      {/* COUNTER */}

      <p>{counter}</p>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => increment()}>Increment</button>



    </div>
  );
}

export default App;
