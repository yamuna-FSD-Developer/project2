import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
  
    <div class="row bg-light">
    <div class="col-4">
      <h3>Thank You</h3>
      <h3>Visit Us Again</h3>
    </div>
    
    <div className="col-4">
    
    <h1>Contact Us</h1><br></br>
    <p> <FontAwesomeIcon icon={faArrowRight}/>Email</p>
    <p> <FontAwesomeIcon icon={faArrowRight}/>Instagram</p>
    <p> <FontAwesomeIcon icon={faArrowRight}/>Twitter</p>



    </div>
  </div>
  )
}

export default Footer