import React from 'react';
import './style.css';
import image from '../main.jpeg';

function Home(){
  return(
    <div id="home" className="home">
    <img className="main-img" src={image} alt="home"></img>
    <div className="desc">
      <h2>Hello, I'm a <span className="desc-highlight">full-stack web developer</span></h2>
      <div className="contact-info">
          <div className="social-media icons">
            <a href="https://www.linkedin.com/in/fatimahmed" target="_blank" rel="noopener noreferrer">
              <div className="social-icon" >
              <i className="fab fa-linkedin-in"></i>
              </div>
            </a>
            <a href="https://twitter.com/fatymahmed" target="_blank" rel="noopener noreferrer">
              <div className="social-icon" >
              <i className="fab fa-twitter"></i>
              </div>
            </a>
            <a href="https://github.com/fatymahmed" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">
              <i className="fab fa-github"></i>
              </div>
            </a>
          </div>
        </div>
        <a href="./resume.pdf" className="resume" target="_blank" download>
           View My Resume
        </a>  
    </div>
    </div>
  )
}

export default Home;