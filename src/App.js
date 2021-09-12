import './App.css';


import 'react-multistep';
import { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Mainmodal from './Component/Mainmodal';



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
