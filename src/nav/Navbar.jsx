import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/js/bootstrap.min.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  const [color1, setColor1] = useState("⚡EV");
  const [textcolor,setTextcolor] = useState("white");

  const colorChange = () => {
    setColor1("Utopia🔌");
    setTextcolor("white");
    
  };
  return (
  
    <div className='backgroundchange' style={{ background: color1 ,color:textcolor}}>
    
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to='/Aboutus'>{color1}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page" href="#">Login
          </Link></li>
          <li className="nav-item">
            <Link to="/Aboutus" className="nav-link active" aria-current="page" href="#">Home
            </Link></li>
         
          <li className="nav-item">
          <Link to="/Appmenu" className="nav-link active" aria-current="page" href="#">Category
            </Link></li>
          <li className="nav-item">
          <Link to="/Payment" className="nav-link active" aria-current="page" href="#">Payment
            </Link></li>

          </ul>
          
          <h1 className="nav-item">
          <Link to="/Profilenew" className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
            </Link></h1>
            
         
          <button onClick={colorChange}>Try it!</button>
    
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar