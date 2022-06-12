import './App.css';
import React from "react";
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
    <div className="container">
    <div style={{ backgroundImage: "url(/flower.png)" }}>
      <header className="App-header">
        <main>
          <Dictionary defaultKeyword="Euphoria"/>
        </main>
        <footer>Coded by <a href='https://aquamarine-lollipop-4f3091.netlify.app/'>Tiffany Anglero</a></footer>
      </header>
    </div>
    </div>
    </div>
  );
}

