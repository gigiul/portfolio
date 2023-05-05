import { useState } from 'react'
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
