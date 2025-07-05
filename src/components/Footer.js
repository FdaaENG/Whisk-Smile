import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../Style/Footer.css';
import logo from '../assest/logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and tagline */}
        <div className="footer-logo">
          <img src={logo} alt="SweetNest Logo" />
          <p>Baking joy into every bite 🍰</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 1211 NE 9th Ave, Fort Lauderdale, FL 33304</p>
          <p>📞 (123) 456-7890</p>
          <p>✉️ hello@whisk&smile.com</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href='https://example.com'><FaFacebook /></a>
            <a href='https://example.com'><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Whisk & Smile. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
