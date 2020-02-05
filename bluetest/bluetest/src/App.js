import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function connectBluetooth() {
    navigator.bluetooth
      .requestDevice({
        filters: [{ name: "LG" }, { namePrefix: "Prefix" }]
      })
      .then(device => console.log(device))
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button title="connent" onClick={() => connectBluetooth()}></button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
