import './App.css';
import React from 'react';

function App() {
  const items = ["Apple", "Banana", "Cherry", "Date"];
  const filter = "A";
  return (
    <>
      <h2>Array Rendering</h2>
      <ul>
        {items.map((item, index) => (
          <div>

            <li> Key = {index}, Value={item}</li>
          </div>
        ))}
      </ul>
      <h2> Conditional Rendering with Arrays</h2>
      <ul>
        {items
          .filter(item => item.startsWith(filter))
          .map(item => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
}

export default App;