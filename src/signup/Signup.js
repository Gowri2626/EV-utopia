import React, { useState } from 'react';
import Navbar from '../nav/Navbar';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [cpwdErr, setCpwdErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$');
  const validPassword = new RegExp('^(?=.*[A-Za-z])(?=.*\\d).{8,15}$');
  const validPhoneno = new RegExp('^[0-9]{10}$');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate the form fields
    let isValid = true;
    if (!validEmail.test(email)) {
      setEmailErr(true);
      isValid = false;
    } else {
      setEmailErr(false);
    }

    if (!validPassword.test(password)) {
      setPwdErr(true);
      isValid = false;
    } else {
      setPwdErr(false);
    }

    if (!validPhoneno.test(phoneno)) {
      setPhoneErr(true);
      isValid = false;
    } else {
      setPhoneErr(false);
    }

    if (cpassword !== password) {
      setCpwdErr(true);
      isValid = false;
    } else {
      setCpwdErr(false);
    }

    // If all fields are valid, navigate to the about us page
    if (isValid) {
      navigate('/Aboutus');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='newcss'>
        <div className="ring">
          <div className="login">
            <h2 className="login1"><center>Create your Account</center></h2>
            <h5 className="term2">If you are already registered, you can <Link to="/" className="form6">Sign in</Link></h5>

            <div className="inputBx">
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} className='col-2' />
              <label className="title">Username</label>
              <input type="text" name="user" required />
            </div>

            <div className="inputBx">
              <FontAwesomeIcon icon={faAddressBook} style={{ color: "#f9fafb" }} />
              <label className="title">Contact</label>
              <input
                type="text"
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                required
              />
            </div>
            
            <div className="inputBx">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f2f2f2" }} />
              <label className="title">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputBx">
              <FontAwesomeIcon icon={faLock} style={{ color: "#efe6e6" }} />
              <label className="title">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="inputBx">
              <FontAwesomeIcon icon={faLock} style={{ color: "#efe6e6" }} />
              <label className="title">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                required
              />
            </div>

            <div className="new">
              <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
              <b className="term3">&emsp;Remember me</b>
            </div>

            <h5 className="term">By creating an account you agree to our <Link>Terms & Privacy</Link></h5>

            <div className="inputBx">
              <button type="submit" onClick={handleSignup} value="Sign up">Signup</button>
            </div>
            {emailErr && <p className='text-danger'>Your email is invalid</p>}
            {pwdErr && <p className='text-danger'>Your password is invalid</p>}
            {cpwdErr && <p className='text-danger'>Your password is mismatched</p>}
            {phoneErr && <p className='text-danger'>Your phone number is invalid</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
