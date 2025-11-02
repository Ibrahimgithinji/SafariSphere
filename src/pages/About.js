import React from 'react';
import '../css/pages.css';

const About = () => {
  return (
    <div className="container">
      <section>
        <div className="about-content">
          <div>
            <h2>Our Story</h2>
            <p>SafariSphere Tours is a premier travel company specializing in luxury tours and charter services across Kenya and the world. With years of experience in the travel industry, we pride ourselves on delivering exceptional experiences tailored to our clients' unique needs.</p>
            <p>Our mission is to connect travelers with the world's most breathtaking destinations, providing seamless journeys that create lasting memories. From wildlife safaris in Kenya to cultural explorations in Europe, we ensure every trip is filled with adventure, comfort, and unparalleled service.</p>
          </div>
          <img src="/assets/about.jpg" alt="SafariSphere Tours Team" />
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Expert Team</h3>
            <p>Our experienced guides and travel specialists ensure every detail is perfect.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3>Customer Satisfaction</h3>
            <p>We prioritize your comfort and happiness, with 98% customer satisfaction rate.</p>
          </div>
          <div className="feature">
            <i className="fas fa-globe"></i>
            <h3>Global Reach</h3>
            <p>From local Kenyan safaris to international adventures, we cover it all.</p>
          </div>
        </div>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values">
          <div className="value">
            <i className="fas fa-leaf"></i>
            <h3>Sustainability</h3>
            <p>We are committed to eco-friendly practices that protect our planet and preserve wildlife habitats.</p>
          </div>
          <div className="value">
            <i className="fas fa-star"></i>
            <h3>Excellence</h3>
            <p>We strive for the highest standards in service, ensuring every journey exceeds expectations.</p>
          </div>
          <div className="value">
            <i className="fas fa-handshake"></i>
            <h3>Community</h3>
            <p>We support local communities and foster meaningful connections between travelers and destinations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;