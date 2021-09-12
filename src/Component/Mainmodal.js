import React, { Component, Fragment } from 'react'
import {Modal} from 'react-bootstrap'
import Home from './Modals/Home';
import Mobilemoney from './Modals/Mobilemoney';
import Qos from '../Assets/img/Qos.png'
import Processingpayment from './Modals/Processingpayment';
import SuccessModal from "./Modals/SuccessModal";
import Footer from "./Footer"
import '../App.css'



export default class Mainmodal extends Component {
    state = {
        step: 1,
        amount: "",
        email: "",
        getStatus: true
       
      };
      
       // Process to Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  // Back to Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

 
  // Handle input fields changes
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})};
    render() {
        const { step, amount, email } = this.state;
        const inputValues = { amount, email};
        switch (step){
            case 1:
                return(
                    <Fragment>
                        <Modal.Header closeButton>
                          <img src={Qos} alt="Logo" />
                        </Modal.Header>
                        <Modal.Body>
                            <Home
                            nextStep={this.nextStep}
                            handleChange = {this.handleChange}
                            inputValues={inputValues} />
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Footer />
                        </Modal.Footer>

                    </Fragment>
                  
                );
            case 2:
                return(
                    <Fragment>
                    <Modal.Header closeButton>
                    <img src={Qos} alt="Logo" />
                    </Modal.Header>
                    <Modal.Body>
                        <Mobilemoney
                            nextStep={this.nextStep}
                            handleChange = {this.handleChange}
                            inputValues={inputValues}

                             prevStep={this. prevStep}
                            />
                    </Modal.Body>
                    <Modal.Footer>
                            <Footer />
                        </Modal.Footer>

                </Fragment>
                );
            case 3:
                return(
                
                    
                    <Fragment>
                    
                    <Modal.Header >
                    <img src={Qos} alt="Logo" />
                    </Modal.Header>
                    <Modal.Body>
                        <Processingpayment
                          nextStep={this.nextStep}
                           />
                    </Modal.Body>
                    <Modal.Footer>
                            <Footer />
                        </Modal.Footer>

                </Fragment>
                ) ;
            default:
                return(
                    <Fragment >
                        
                         <Modal.Header closeButton >
                    <img src={Qos} alt="Logo" />
                    </Modal.Header>
                    <Modal.Body>   
                        <SuccessModal  
                               inputValues={inputValues}
                                 prevStep={this. prevStep}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                            <Footer />
                        </Modal.Footer>
                    </Fragment>
                )       
        }
    }
}
