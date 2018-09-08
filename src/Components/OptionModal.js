import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
  <Modal className='modal'
    isOpen={!!props.selectedOption}
    closeTimeoutMS={200}
    onRequestClose = {props.handleModalClose}
    contentLabel = "Selected Option"

  >
  <h1 className='modeltitle'>
   Selected Option
  </h1>
  {props.selectedOption && <p className='modalbody'>{props.selectedOption}</p> }
  <button onClick={props.handleModalClose} className='button'>OKAY</button>
  </Modal>
)
export default OptionModal;
