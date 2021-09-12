import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export default class Mobilemoney extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const {inputValues: {email, amount }} = this.props;
        return (
            <div>
                <h4 className="text-center mb-6">Pay with Mobile Money</h4>
                    <h6 className="mb-3 colored-text">PAY CHF {amount}</h6>
                    <p className="mb-3">{email}</p>
                    <Form>
                    <Form.Group className="mb-3" >
                    <Form.Label className="mb-2" >Mobile Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter mobile number" />
                        </Form.Group>
                    </Form>
                    <div className="d-flex justify-content-between ">
                    <Button className=" btn btn-prmary btn-block  " id="button" onClick={this.back}>
                    Back
                   </Button>
                    <Button className=" btn btn-prmary " id="button" onClick={this.continue}>
                     pay with mobile money
                    </Button>
                    </div>
                   
            </div>
        )
    }
}
