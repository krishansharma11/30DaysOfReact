import './App.css';

function App() {

  function Welcome(props) {
    return <h1>Hello, {props.msg}!</h1>;
  }


  return (
    <div className="App">
      <Welcome msg="Function Component" />
    </div>
  );
}

export default App;
