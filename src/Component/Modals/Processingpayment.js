import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import Countdown, { zeroPad } from 'react-countdown';
import {  Button } from 'react-bootstrap';



//formatting the timer
const renderer = ({ minutes, seconds}) => {
    
    return(
      <span>
          {minutes}:{zeroPad(seconds)}
        </span>
    )
    
  };



export default class Processingpayment extends Component {
    //next modal function
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

      };
    render() {
        return (
            <div>
                <h4 className="text-center ">Processing Payment</h4>
                <h6 className="text-center mb-5">USSD push has been sent to your phone please approve</h6>
                <h4 className="text-center mb-3">Expires in <span><Countdown
                 date={Date.now() + 300000}
                 renderer={renderer}
                 /></span></h4>
               
                <Loader
                    className="text-center mb-3"
                    type="Oval"
                    color="#E09211"
                    height={150}
                    width={150}
                    timeout={300000} //3 secs
      />
                <h6 className="text-center mt-6">Do not close Page</h6>
                <Button className=" btn btn-prmary " id="button" onClick={this.continue}>
                     pay with mobile money
                    </Button>
            </div>
        )
    }
}
