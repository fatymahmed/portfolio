import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Home/>
        <Portfolio/>
        <About/>
        {/* <Blog/> */}
        <Contact/>
      </div>
    </Router>
   
  );
}

export default App;
