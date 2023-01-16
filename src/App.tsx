import React from 'react';
import './App.css';
import About from './components/About';
import Career from './components/Career';
import Home from './components/Home';
import Knowledge from './components/Knowledge';
import Navabar from './components/Navabar';

function App() {
  return (
    <div>
      <Navabar />
      <Home />
      <About />
      <Knowledge />
      <Career />
    </div>
  );
}

export default App;
