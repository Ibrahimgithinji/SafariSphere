import React from 'react';
import '../css/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SafariSphere Tours</h3>
            <p>Explore Kenya and the world with our premium travel services.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/tours">Tours</a></li>
              <li><a href="/charter-services">Charter Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Nairobi, Kenya</p>
            <p>Phone: +254 123 456 789</p>
            <p>Email: info@safarisphe retours.com</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 SafariSphere Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;