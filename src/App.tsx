import React from 'react';
import axios from 'axios';

import './App.css';

const { useState, useEffect } = React;

function App() {

  const [counter, setCounter] = useState(0);
  const [jsonRes, setJsonRes] = useState('');

  const increment = () => {
    setCounter(counter + 1);

  }

  const decrement = () => {
    setCounter(counter - 1);
  }



  useEffect(() => {
    const jsonGet = async () => {
      try {
        let { data: { results } } = await axios.get('https://randomuser.me/api');
        // console.log(data);
        setJsonRes(JSON.stringify(results, null, 10));

      } catch (err) {
        console.error(err);
      }
    }
    jsonGet();
  }, [counter])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          INTERVIEW PREP
        </p>
      </header>

      {/* ------------ COUNTER ------------ */}

      <p>{counter}</p>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => increment()}>Increment</button>

      {/* ------------ AXIOS CALL -------------- */}

      <p>
        {jsonRes}
      </p>

    </div>
  );
}

export default App;
