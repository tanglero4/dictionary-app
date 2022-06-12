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
        <footer>Coded by <a href='https://aquamarine-lollipop-4f3091.netlify.app/' target="_blank" rel="noreferrer" >Tiffany Anglero</a>
        <br/> 
        Open-sourced on <a href="https://github.com/tanglero4/dictionary-app" target="_blank" rel="noreferrer" >GitHub</a>
        <br/>
        Hosted on<a href="https://app.netlify.com/teams/tanglero4/overview?_ga=2.21182589.733901245.1647549891-1475953262.1647549891&_gac=1.191157720.1647549891.Cj0KCQjwuMuRBhCJARIsAHXdnqPc0QqXir1NymhInXx1kN-iVFS4uALmZt_0o6obiss4ncz6WFUGq74aApjsEALw_wcB&_gl=1%2A1eghec1%2A_gcl_aw%2AR0NMLjE2NDc1NDk4OTEuQ2owS0NRand1TXVSQmhDSkFSSXNBSFhkbnFQYzBRcVhpcjFOeW1oSW5YeDFrTi1pVkZTNHVBTG1adF8wbzZvYmlzczRuY3o2V0ZVR3E3NGFBcGpzRUFMd193Y0I" target="_blank" rel="noreferrer" > Netlify</a>
        </footer>
      </header>
    </div>
    </div>
    </div>
  );
}

