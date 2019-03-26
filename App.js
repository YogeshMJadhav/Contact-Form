import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

export default class Example extends React.Component {
  constructor(){
    super();
    this.state = {
      name : '',
      email : '',
      address : '',
      message : '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleChange(e){
    this.setState({[e.target.name] : e.target.value})
  }
  
  async handleSubmit(e){
      e.preventDefault();
      const { name, address, email, message } = this.state
      
      const form = await axios.post('http://localhost:3001/send',{
        name,
        address,
        email,
        message
      })
    }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} method="post" action="send">
    
        <FormGroup>
        <Col md={4}>
          <Label for="exampleName">Name</Label>
          <Input type="text" name="name" id="exampleName" placeholder="enter name" onChange={this.handleChange}/>
        </Col>
        </FormGroup>
    
          <Col md={4}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter email"onChange={this.handleChange} />
            </FormGroup>
          </Col>
       
        <FormGroup>
        <Col md={4}>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="Enter address"onChange={this.handleChange}/>
        </Col>
        </FormGroup>
    
        <FormGroup>
        <Col md={4}>
          <Label for="exampleMessage">Message</Label>
          <Input type="textarea" name="message" id="exampleMessage" placeholder="Enter message"onChange={this.handleChange}/>
        </Col>
        </FormGroup>
       
        <Button onClick={this.SignIn}>Submit</Button>
      </Form>
    );
  }
}

