import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input required 
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email"
              />
            </FormGroup><FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input required
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup><FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input required
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup><FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input required
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup><Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
          <div className="icons">
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
    )
  }
}
export default Contact;
