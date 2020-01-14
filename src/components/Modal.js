import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from '@fortawesome/free-solid-svg-icons';

const Modal = ({ hideModal }) => {
    
    return (
      <div className="modal-main">
          <div className="modal-content">
            <div className="modal-info">
                <h2>Thank you for voting!</h2>
                <span onClick={hideModal}>
                    <FontAwesomeIcon icon ={faTimes}/>  
                </span>
            </div>
          </div>
      </div>
    );
  };

  export default Modal;