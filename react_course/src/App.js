import './App.css';
import UserInfo from "./UserInfo";
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>User Information</h1>
      {/* Passing props to the UserInfo component */}
      <UserInfo name="Alice" age={25} />
      <UserInfo name="Bob" age={30} />
    </div>
  );
}

export default App;