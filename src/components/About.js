import React from 'react';

function About(){
  return(
    <div id="about" className="about container-fluid">
      <h1>ABOUT ME</h1>
      <div className="about-me">
        <p>My name is Fatima Ahmed. I'm currently living in Kenya, and I'm a full stack web developer who designs and builds applications using Ruby on Rails, React, Redux, HTML and CSS.
        I'm currently working as a Technical Support Engineer at Microverse where I provide code reviews to other developers.
        I hold a bachelor's degree in computer engineering.
        When I'm not building applications, I mentor people and organize or facilitate tech meetups.
        I enjoy spending my free time baking and travelling.</p>
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