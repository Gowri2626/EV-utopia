import React from 'react'
import './Complete.css'
import Navbar from '../nav/Navbar';
import {Link} from 'react-router-dom';
const Complete = () => {
  return (
    <div>
    <Navbar/>
    <div class="pay">
  <div class="printer-top"></div>
    
  <div class="paper-container">
    <div class="printer-bottom"></div>

    <div class="paper">
      <div class="main-contents">
        <div class="success-icon">&#10004;</div>
        <div class="success-title">
          Payment Complete
        </div>
        <div class="success-description">
          Your payment for $N in USDT has been recieved and send to SHOPNAME.
        </div>
        <div class="order-details">
          <div class="order-number-label">Payment id</div>
          <div class="order-number">JPZZ1V-WQRR94-78E1VE</div>
        </div>
        <center><button type="button" class="btn btn-secondary"><Link to ="/Aboutus" className="pay2">Back to Home</Link></button></center>
      </div>
      <div class="jagged-edge"></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Complete