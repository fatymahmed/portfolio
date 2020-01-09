import React from 'react';
import image from '../my.png';

function About(){
  return(
    <div id="about" className="About">
      About
      <img src={image} alt="comp"></img>
    </div>
  )
}

export default About;