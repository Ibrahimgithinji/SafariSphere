import React from 'react';
import BookingForm from '../components/BookingForm';
import '../css/pages.css';

const Contact = () => {
  return (
    <div className="container">
      <section className="contact-section">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with SafariSphere Tours for all your travel needs.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Address</h3>
            <p>Nairobi, Kenya</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>+254 123 456 789</p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>info@safarispheretours.com</p>
          </div>
          <div className="contact-card">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="map-section">
          <h3>Our Location</h3>
          <div className="map-container">
            <p>Google Map placeholder - Nairobi HQ</p>
          </div>
        </div>
      </section>

      <section className="inquiry-section">
        <div className="inquiry-header">
          <h2>Book an Inquiry</h2>
          <p>Have a question or ready to plan your adventure? Fill out the form below.</p>
        </div>
        <BookingForm type="Inquiry" />
      </section>
    </div>
  );
};

export default Contact;