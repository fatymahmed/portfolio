import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Input } from 'reactstrap'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  
  handleSubmit(e) {
    e.preventDefault()    
    const { email, subject, message } = this.state;
    let templateParams = {
    from_name: email,
    to_name: '<user_OrYVufFTFVgy8rqdzCAAs>',
    subject: subject,
    message_html: message,
     }
    emailjs.send(
      'gmail',
      'template_sBtarZ5o',
      templateParams,
      'user_OrYVufFTFVgy8rqdzCAAs'
     )
    this.resetForm();
 }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
          <div id="contact" className="Contact">
          <h1 className="p-heading1">CONTACT</h1>
          <p> Have a question or want to work together? </p>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Input required 
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email"
              />
            </FormGroup><FormGroup controlId="formBasicName">
              <Input required
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup><FormGroup controlId="formBasicMessage">
              <Input required
                id="text"
                type="textarea"
                name="message"
                placeholder="Message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup><Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
          <hr/>
          <div className="icons">
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
        <p className="text-center pt-3">fatima.ahmed.muhsin@gmail.com</p>
    </div>
    )
  }
}
export default Contact;
