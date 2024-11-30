import './App.css';
import React from 'react';

function App() {
  const isLoggedIn = true;
  const isTernoryOp = true;

  let content;
  if (isLoggedIn) {
    content = <h1>Welcome Back!</h1>;
  } else {
    content = <h1>Please Log In</h1>;
  }

  return <div>{content}
    <div>
      {isTernoryOp ? <h1>Ternory Operator!</h1> : <h1>Not a ternory operator</h1>}
    </div>
  </div>;
}

export default App;