import React from 'react';
import image from '../my.png';

function About(){
  return(
    <div id="about" className="about container-fluid">
      <h1>ABOUT ME</h1>
      <div className="about-me">
        <h2>My name is Fatima Ahmed</h2>
        <p>I'm a full stack web developer who designs and builds applications</p>
        <p>I'm currently working as a Technical Support Engineer at Microverse</p>
        <p>I hold a bachelor's degree in computer engineering</p>
        <p>When I'm not building applications,I mentor people and organize or facilitate tech meetups</p>
        <div className="reach-me">
        <p className="email-reach">REACH OUT TO ME</p>
        <div className="contact-info">
          <div>
            <p className="email">fatima.ahmed.muhsin@gmail.com</p>
          </div>
          <div className="social-media icons">
            <a href="https://www.linkedin.com/in/fatima-ahmed-46b01298">
              <div className="social-icon" >
              <i className="fab fa-linkedin-in"></i>
              </div>
            </a>
            <a href="https://twitter.com/fatymahmed">
              <div className="social-icon" >
              <i className="fab fa-twitter"></i>
              </div>
            </a>
            <a href="https://github.com/fatymahmed">
              <div className="social-icon">
              <i className="fab fa-github"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="row">
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
      </div> */}
    </div>
  )
}

export default About;