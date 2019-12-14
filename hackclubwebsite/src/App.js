import React from 'react';
import download from './download.jpg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app">
      <img src={download} className="appLogo" alt="logo" />
      <header className="appHeader">
        <div className="headerText">PHS Hackclub</div>
      </header>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
