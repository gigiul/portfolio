import React from 'react';
import './App.css';
import About from './components/About';
import Career from './components/Career';
import Footer from './components/Footer';
import Home from './components/Home';
import Knowledge from './components/Knowledge';
import Navabar from './components/Navabar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Navabar />
      <Home />
      <About />
      <Knowledge />
      <Career />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
