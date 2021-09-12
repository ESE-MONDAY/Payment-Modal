import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import "../../App.css"




export default class Home extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
      handleSubmit = e => {
        e.preventDefault();
        this.props.nextStep();
      }
      
    render() {
        return (
            <div className="container-fluid">
                <h4 className="text-center ">Checkout</h4>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group className="mb-3">
                <Form.Label>Enter Amount</Form.Label>
                <Form.Control type="number" min="1" placeholder="Enter amount"
                name="amount"
                onChange={this.props.handleChange}
                defaultValue={this.props.inputValues.amount}
                required = {true}
                 />
              </Form.Group>
              <Form.Group className="mb-3" >
                 <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" 
                       name="email"
                       onChange={this.props.handleChange}
                       defaultValue={this.props.inputValues.email}
                       required= {true}
                  />
            </Form.Group>
            </Form>
                   <Button  className=" btn button btn-prmary" id="button" type="submit" 
                onClick={this.continue}>
                pay with mobile money
                </Button>
            </div>
        )
    }
}
