import { useState } from 'react'
import { Navbar, Hero, About, Knowledge, Experience, Projects } from "./components";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Knowledge />
      <Experience />
      <Projects />
    </div>
    </BrowserRouter>
  );
}

export default App;
