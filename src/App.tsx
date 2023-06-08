import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo from "./components/Logo/Logo";
import LogoBackground from "./components/LogoBackground/LogoBackground";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoBackground/>
        <Logo/>
      </header>
    </div>
  );
}

export default App;
