import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Home/>
        <Portfolio/>
        <About/>
        <Contact/>
      </div>
    </Router>
   
  );
}

export default App;
