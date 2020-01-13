import React from 'react';
import './style.css';
import image from '../main.jpeg';

function Home(){
  return(
    <div id="home" className="home">
    <img className="main-img" src={image} alt="home"></img>
    <div className="desc">
      <h2>Hello, I'm a full-stack web developer</h2>
    </div>
    </div>
  )
}

export default Home;