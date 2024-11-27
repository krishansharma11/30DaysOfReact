import './App.css';
import React, { useState } from 'react';

class App extends React.Component {

  constructor(props) {
    super()
    this.state = { count: 0 }
  }

  Welcome = (props) => {
    return <h1>State and Props in {props.msg}</h1>
  }

  UpdateCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <this.Welcome msg="Class Component" />
        <p>Count: {this.state.count}</p>
        <button onClick={this.UpdateCount}>Increment</button>

      </div>
    );
  }
}


export default App;

