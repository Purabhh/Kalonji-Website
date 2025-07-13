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
      <section className ="bigphoto">
        <img src="/images/KalonjiIMG.jpg"></img>
        <div className="bpText">
            <h2 className="h2v1">Newly Created</h2>
            <button>Products</button>
        </div>
      </section>
    </div>
  );
}

export default App;
