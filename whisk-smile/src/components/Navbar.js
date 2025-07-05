import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Style/Navbar.css';
import logo from '../assest/logo.png';
import { useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <Link to="/" className="logo-container">
          <img src={logo} alt="SweetNest Logo" className="logo-img" />
          <span className="logo-text">Whisk & Smile</span>
        </Link>

        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/birthday">Birthday</Link></li>
          <li><Link to="/cookies">Cookies</Link></li>
          <li><Link to="/cakes">Cakes</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="cart-icon">
            <Link to="/checkout">
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-badge">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
          </li>

        </ul>
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>

  );
};

export default Navbar;
