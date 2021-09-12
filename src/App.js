import './App.css';
import axios from 'axios'

import 'react-multistep';
import { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Mainmodal from './Component/Mainmodal';

var data = JSON.stringify({"clientid":"QOSTEST","msisdn":"22967222918"});

var config = {
  method: 'post',
  url: 'http://74.208.84.251:8221/QosicBridge/po/user/getaccountholderinfo',
  headers: { 
    'Authorization': 'Basic UVNVU1IzMTphZmNBZzJqbkNWazRhZmNnUk1nVw==', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

const App = () => {
  const [show, setShow] = useState(false);
 
  return (
    <Fragment>
      <div className="container-fluid">
        <Button id="button" shadow-none onClick={() => setShow(true)} >Checkout</Button>
        <Modal show={show}  onHide={() => setShow(false)} centered>
          <Mainmodal />
        </Modal>

      </div>
    </Fragment>
   
  )
}

export default App;
