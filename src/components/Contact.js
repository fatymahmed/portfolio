import React from 'react';
import image from '../pic.jpeg';

function Contact(props){
  return(
    <div id="contact" style={{height: "100vh",backgroundColor: "pink"}} className="Contact">
      Contact
      <img src={image} alt="comp"></img>
    </div>
  )
}

export default Contact;