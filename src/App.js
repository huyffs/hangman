import React from "react";
import "./App.css";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = alphabet.split("");

function App() {

  return (
    <div className="App">
      <header className="header">
      </header>
      <section>
        <div className="title">Welcome to my Hangman!</div>
        <div className="lives">1 guess remaining</div>
        <div className="word">_____</div>
        <div className="clue">This is a clue!</div>
        <div className="keyboard">
          <button>A</button>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
