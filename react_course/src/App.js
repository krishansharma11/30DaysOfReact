import './App.css';
import React from 'react';

function App() {
  const items = ["Apple", "Banana", "Cherry", "Date"];
  const filter = "A";
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
  ];


  function Fruit({ name }) {
    return <li>{name}</li>;
  }
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
      <h2>Array with multiple data</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
      <h2>Rendering Components in a List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <Fruit key={index} name={fruit.name} />
        ))}
      </ul>
    </>
  );
}

export default App;