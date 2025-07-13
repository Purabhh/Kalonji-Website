import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Kalonji Website";
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Kalonji Website</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <p className="basic">Hi!</p>
        <p className="basic">Hi!</p>
        <p className="basic">Hi!</p>
        <p className="basic">Hi!</p>
        <p className="basic">Hi!</p>
        <p className="basic">Hi!</p>
        <p className="basic">Hi!</p>
      </main>
    </div>
  );
}

export default App;
