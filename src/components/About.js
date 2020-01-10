import React from 'react';
import image from '../temp.jpeg';

function About(){
  return(
    <div id="about" className="about container-fluid">
      <div className="row">
        <div className="me col-md-6 col-xs-12">
          <img src={image} alt="comp"></img>
          <h4>Who am I?</h4>
          <p>A full stack developer.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident molestias nam laborum. Veniam esse dolore, non, a et vero ab doloremque fugiat voluptas ad magni labore rem perspiciatis placeat ipsam.</p>
        </div>
        <div className="col-md-6 col-xs-12 skills">
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