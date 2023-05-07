import { useState } from 'react'
import { Navbar, Hero, About } from "./components";
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
    </div>
    </BrowserRouter>
  );
}

export default App;
