import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>You clicked {count} times</p>
        <Button variant="info"  size="lg" onClick={() => setCount(count + 1)}>
          click me!
        </Button>
        {/* onClick={()=>console.log("aaa")} */}

        <Link to="cal">Calculator</Link>
        <Link to="todo">todoApp</Link>
        <Link to="weather">WeatherApp</Link>
      </header>
    </div>
  );
  function a() {
    // console.log("aaa");
    alert("aaa");
  }
}

export default App;
