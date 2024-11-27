import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  function Welcome(props) {
    return <h1>State In, {props.msg}!</h1>;
  }

  function UpdateCount(props) {
    return setCount(props.data + 1)

  }

  return (
    <div className="App">
      <Welcome msg="Function Component" />
      <p>Count: {count}</p>
      <button onClick={() => UpdateCount({ data: count })}>Increment</button>

    </div>
  );
}


export default App;

