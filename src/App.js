import React from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import './LogoTest.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Code from https://codepen.io/LindsayMac/pen/PKeVxx */}
        <div id="container">
          <div class="rebel-here">
            <div>s<span class="flicker">a</span>d <span class="arrow">n</span></div>
            <div> 1<span class="flicker">o</span>w <span class="arrow">&#8681;</span></div>
          </div>
        </div>
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
      </header>
    </div>
  );
}

export default App;
