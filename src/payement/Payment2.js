import React, { useState } from 'react';
import Navbar from '../nav/Navbar';

import { Link } from 'react-router-dom';

function Payment2() {
  const [formData, setFormData] = useState({ Enter: '', Passcode: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: '30%', marginRight: '30%', verticalAlign: 'center', textAlign: 'center' }}>
        <fieldset style={{
          border: '3px solid',
          borderWidth: '50%',
        }}>
          <form><br />
            <h2><b>Payment Form</b></h2>
            <h5><b>using UPI</b></h5><br />
            <img src='https://miro.medium.com/v2/resize:fit:1400/1*94MvdhxeCQHoD7A4K1vlWg.png' height="300" width="500" alt="UPI QR Code" /><br /><br />
            <label><b>Select UPI app: </b></label>&emsp;
            <select>
              <option>Google Pay</option>
              <option>Paytm</option>
              <option>Phone pe</option>
              <option>Other</option>
            </select><br /><br />
            <label><b>Enter UPI ID: </b></label>&emsp;
            <input type='text' name='id' required /><br /><br />
            <label><b>Pin: </b></label>&emsp;
            <input type='password' name='password' required /><br /><br /><br />
            <button type="button" className="btn btn-success"><Link to="/Complete" style={{ color: "white" }}>Pay Now</Link></button>
          </form><br />
        </fieldset>
      </div>
    </div>
  );
}

export default Payment2;
