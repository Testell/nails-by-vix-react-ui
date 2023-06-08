import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo from "./components/Logo/Logo";
import LogoBackground from "./components/LogoBackground/LogoBackground";
import MenuButton from "./components/MenuButton/MenuButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoBackground />
        <Logo />
        <MenuButton />
      </header>
    </div>
  );
}

export default App;
