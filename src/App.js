import './App.css';
import React from "react";
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
        <main>
          <h1>Dictionary</h1>
          <Dictionary />
        </main>
      </header>
    </div>
    </div>
  );
}

