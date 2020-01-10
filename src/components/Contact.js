import React from 'react';

function Contact(props){
  return(
    <div id="contact" className="Contact">
      <h1>Contact</h1>
      <div className="icons">
      <a href="https://www.linkedin.com/in/fatima-ahmed-46b01298">
        <div className="social-icon" >
        <i class="fab fa-linkedin-in"></i>
        </div>
      </a>
      <a href="https://twitter.com/fatymahmed">
        <div className="social-icon" >
        <i class="fab fa-twitter"></i>
        </div>
      </a>
      <a href="https://github.com/fatymahmed">
        <div className="social-icon">
        <i class="fab fa-github"></i>
        </div>
      </a>
    </div>
    </div>
  )
}

export default Contact;