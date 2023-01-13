import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navabar from './components/Navabar';

function App() {
  return (
    <div>
      <Navabar />
      <Home />
      <About />
    </div>
  );
}

export default App;
