import React from 'react';

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
        <p className="email-reach">REACH OUT TO ME AT</p>
        <div>
          <p className="email">fatima.ahmed.muhsin@gmail.com</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;