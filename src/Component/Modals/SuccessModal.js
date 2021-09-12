import React, { Component } from 'react'
import successicon from "../../Assets/img/successicon.svg";
import Lottie from "react-lottie";
import * as lottieSuccess from "../../lottieSuccess.json"


const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieSuccess.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
    }
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
            <div className="d-flex  flex-column align-items-center " >
                <h4 className="text-center mb-3">Transaction Successful</h4>
                    <h6 className="mb-3 colored-text text-center">CHF {amount}</h6>
                    <h6 className="text-center">{email}</h6>
                      <Lottie options={defaultOptions} height={300} width={300} className="m-0"/>   
                    <h6 className="text-center mt-3">Transaction Reference is  NFSHJ3</h6>
                  
                   
            </div>
        )
    }
}
