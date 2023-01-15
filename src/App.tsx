import React from 'react';
import './App.css';
import About from './components/About';
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
    </div>
  );
}

export default App;
