import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">SafariSphere Tours</div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/destinations" className={location.pathname === '/destinations' ? 'active' : ''}>Destinations</Link></li>
          <li><Link to="/tours" className={location.pathname === '/tours' ? 'active' : ''}>Tours</Link></li>
          <li><Link to="/charter-services" className={location.pathname === '/charter-services' ? 'active' : ''}>Charter Services</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;