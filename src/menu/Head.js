import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/Cartslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const Head = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };
    const cartQuantity = cartItems.length;
     const handleSearch = () => {
    console.log();
    };

    return (
        <div>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>CATEGORIES</h4>
                      {/*} <div className="search-box">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search.."
                        style={{ color: 'black' }} // Inline CSS for text color
                    />
                    
                            <button className="search-button" onClick={handleSearch}>
                                <i className="fas fa-search"></i>
                            </button> </div>*/}
                            <button type="button" class="btn btn-outline-light"><Link to="/Aboutus" style={{color:"white"}}>Back to Home</Link></button>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                            <FontAwesomeIcon icon={faShoppingBag} />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                            
                        </div>
                        
                    </div>
                   
                </div>
            </header>
        </div>
    );
};

export default Head;