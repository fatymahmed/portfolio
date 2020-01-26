import React from 'react';
import image from '../my.png';

function About(){
  return(
    <div id="about" className="about container-fluid">
      <h1>ABOUT ME</h1>
      <div className="row">
        <div className="me w3-animate-left col-md-6 col-xs-12">
          <img src={image} alt="comp"></img>
          <h4>Who am I?</h4>
          <p>A full stack developer.</p>
          <p>I'm a computer engineer who enjoys writing code. I also love volunteering and mentoring people, I'm currently a mentor at Microverse and ALC Andela and an organiser at Rails Girls Mombasa.</p>
        </div>
        <div className="w3-animate-right col-md-6 col-xs-12 skills">
          <div className="skill">
            <div className="skill-percentage" style={{width:"80%"}}>
              <div className="language">HTML</div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill">
            <div className="skill-percentage" style={{width:"70%"}}>
              <div className="language">CSS</div>
            </div>
            <span>70%</span>
          </div>
          <div className="skill">
            <div className="skill-percentage" style={{width:"60%"}}>
              <div className="language">Ruby/Rails</div>
            </div>
            <span>60%</span>
          </div>
          <div className="skill">
            <div className="skill-percentage" style={{width:"40%"}}>
              <div className="language">React</div>
            </div>
            <span>40%</span>
          </div>
          <div className="skill">
            <div className="skill-percentage" style={{width:"50%"}}>
              <div className="language">JavaScript</div>
            </div>
            <span>50%</span>
          </div>
          <div className="skill">
            <div className="skill-percentage" style={{width:"40%"}}>
              <div className="language">Redux</div>
            </div>
            <span>40%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;