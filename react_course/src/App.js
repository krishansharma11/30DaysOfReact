import './App.css';
import React from 'react';

function App() {

  function Welcome(props) {
    return <h1>Hello, {props.msg}!</h1>;
  }


  return (
    <div className="App">
      <Welcome msg="Function Component" />
      <WelcomeClass msg="Class component" />
    </div>
  );
}

class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.msg}!</h1>;
  }
}

export default App;

