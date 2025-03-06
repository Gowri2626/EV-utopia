import Navbar from '../nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import anime from 'animejs';
import './Payement.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardExpirationDate, setCardExpirationDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardType, setCardType] = useState("💳");
  const navigate = useNavigate();

  const flipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "180deg",
      duration: "100",
      easing: "linear"
    });
  };

  const unFlipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "360deg",
      duration: "100",
      easing: "linear"
    });
  };

  const checkSubstring = (length, match) => {
    return cardNumber.substring(0, length) === match;
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    if (value[0] === "4") {
      setCardType("Visa");
    } else if (checkSubstring(4, "6011")) {
      setCardType("Discover");
    } else if (checkSubstring(2, "51")) {
      setCardType("MasterCard");
    } else if (checkSubstring(2, "34")) {
      setCardType("American Express");
    } else if (checkSubstring(3, "300")) {
      setCardType("Diners Club");
    } else if (checkSubstring(2, "35")) {
      setCardType("JCB");
    } else {
      setCardType("💳");
    }
  };

  const handleNameChange = (e) => {
    setCardHolderName(e.target.value.toUpperCase());
  };

  const handleDateChange = (e) => {
    let data = e.target.value.split("");
    let expirationDate = data.map((x) => {
      return x === "-" ? "/" : x;
    }).join("");
    setCardExpirationDate(expirationDate);
  };

  const handleCVVChange = (e) => {
    setCardCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.trim() === "" && cardHolderName.trim() === "" && cardExpirationDate.trim() === "" && cardCVV.trim() === "") {
      alert("Please fill all required fields.");
    } else {
      alert("Payment Successful");
      navigate("/Complete");
    }
  };

  return (
    <>
      <Navbar />
      <div className="cont">
        <h1>Payment Form</h1>
        
        <h6>through credit card / </h6>
        <h6><Link to="/Payment2" className="upi">UPI</Link></h6>
        
        <form onSubmit={handleSubmit}>
          <div className="credit-card">
            <div className="credit-card-inner">
              <div className="credit-card-front">
                <div id="card-type">{cardType}</div>
                <div id="card-number">{cardNumber}</div>
                <div id="card-expiration">
                  {cardExpirationDate !== "" && <div id="validthru">Valid Thru</div>}
                  {cardExpirationDate}
                </div>
                <div id="card-holder-name">{cardHolderName}</div>
              </div>
              <div className="credit-card-back">
                <div className="card-stripe" />
                <div className="card-sig-container">
                  <div className="signature">{cardHolderName}</div>
                  CVC {cardCVV}
                </div>
              </div>
            </div>
          </div>
          <div className="card-form">
            <label className="p2">Credit Card Number</label>
            <input
              placeholder="Enter your credit card number"
              options={{ Payment: true }}
              id="number-input"
              name="number-input"
              className="text-input"
              maxLength="16"
              onChange={handleNumberChange}
              required
            />
            <label className="p2">Card Holder Name</label>
            <input
              type="text"
              placeholder="Enter card holder name"
              value={cardHolderName}
              onChange={handleNameChange}
              className="text-input"
              maxLength="30"
              required
            />
            <div className="date-and-csv" style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <label className="p2">Expiration Date</label>
                <input
                  type="month"
                  placeholder="Enter expiration date"
                  className="text-input"
                  onChange={handleDateChange}
                  required
                  style={{ height: "23px", fontSize: "16px", fontWeight: "100" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <label className="p2">CVC Security Code</label>
                <input
                  options={{ numeral: "true" }}
                  placeholder="Enter CVC"
                  maxLength="3"
                  value={cardCVV}
                  className="text-input"
                  onChange={handleCVVChange}
                  onFocus={flipCard}
                  onBlur={unFlipCard}
                  required
                />
                
                <div className='text-center'>
                  <button type="submit" className="bot">Pay now</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;


