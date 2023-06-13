import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo from "./components/Logo/Logo";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
