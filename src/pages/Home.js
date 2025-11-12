import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import '../css/pages.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('kenya');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Scroll handler for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.feature, .testimonial-card, .stat-item');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing! We\'ll keep you updated with our latest offers.');
    setNewsletterEmail('');
  };

  const kenyaDestinations = [
    { id: 1, name: 'Maasai Mara', description: 'Experience the Great Migration and wildlife safaris.', image: '/images/Maasai mara.jpg' },
    { id: 2, name: 'Amboseli', description: 'View Mount Kilimanjaro and elephant herds.', image: '/images/Amboseli.jpg' },
    { id: 3, name: 'Diani Beach', description: 'Relax on pristine beaches with water sports.', image: '/images/Diani Beach.jpg' }
  ];

  const internationalDestinations = [
    { id: 4, name: 'Paris', description: 'Explore the City of Light and its iconic landmarks.', image: '/images/Paris.webp' },
    { id: 5, name: 'Dubai', description: 'Experience luxury and modern marvels.', image: '/images/Dubai.avif' },
    { id: 6, name: 'Bali', description: 'Discover temples, beaches, and rice terraces.', image: '/images/Bali.webp' }
  ];

  // Calculate opacity and transform based on scroll
  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const contentTransform = Math.min(scrollY * 0.5, 200);

  return (
    <div>
      <section className="hero" ref={heroRef}>
        <div className="hero-background-fixed">
          <img
            src="/images/hero-bg.jpg"
            alt="Stunning safari landscape showcasing African wildlife and adventure"
            className="hero-bg-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>
        <div
          className="hero-content"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${contentTransform}px)`
          }}
        >
          <h1>Embark on Extraordinary Adventures Across Kenya and Beyond</h1>
          <p>Experience world-class safaris, luxury charters, and unforgettable journeys crafted for the discerning traveler. Your dream destination awaits.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
          <div className="btn-group">
            <Link to="/tours" className="btn btn-primary">Start Your Journey</Link>
            <Link to="/charter-services" className="btn btn-secondary">Luxury Charters</Link>
          </div>
        </div>
        <div
          className="scroll-indicator"
          style={{ opacity: heroOpacity }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      <section className="featured-destinations">
        <div className="container">
          <h2>Explore Our Featured Destinations</h2>
          <p className="section-subtitle">Handpicked locations offering unparalleled experiences and breathtaking beauty</p>
          <div className="destination-tabs">
            <button
              className={`tab-btn ${activeTab === 'kenya' ? 'active' : ''}`}
              onClick={() => handleTabChange('kenya')}
            >
              Kenya & Africa
            </button>
            <button
              className={`tab-btn ${activeTab === 'international' ? 'active' : ''}`}
              onClick={() => handleTabChange('international')}
            >
              International
            </button>
          </div>
          <div className="destinations-content">
            <div className={`destinations-grid ${activeTab === 'kenya' ? 'active' : ''}`}>
              {kenyaDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
            <div className={`destinations-grid ${activeTab === 'international' ? 'active' : ''}`}>
              {internationalDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose SafariSphere Tours?</h2>
          <p className="section-subtitle">Experience unparalleled luxury and adventure with our world-class travel services</p>
          <div className="features">
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h3>Trusted Reliability</h3>
              <p>Over a decade of excellence in premium travel, with 99.8% satisfaction rate and 24/7 support.</p>
            </div>
            <div className="feature">
              <i className="fas fa-star"></i>
              <h3>Expert Local Knowledge</h3>
              <p>Our seasoned guides and personalized itineraries ensure authentic, unforgettable experiences.</p>
            </div>
            <div className="feature">
              <i className="fas fa-crown"></i>
              <h3>Ultimate Luxury</h3>
              <p>From private jet charters to exclusive safari lodges, every detail is crafted for perfection.</p>
            </div>
            <div className="feature">
              <i className="fas fa-globe"></i>
              <h3>Global Destinations</h3>
              <p>Access to over 100+ premium destinations worldwide, from African safaris to European capitals.</p>
            </div>
            <div className="feature">
              <i className="fas fa-clock"></i>
              <h3>Seamless Planning</h3>
              <p>Expert concierge services handle every aspect, from visas to bespoke experiences.</p>
            </div>
            <div className="feature">
              <i className="fas fa-heart"></i>
              <h3>Sustainable Travel</h3>
              <p>Committed to eco-friendly practices and supporting local communities worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Travelers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"SafariSphere exceeded all expectations. The Maasai Mara safari was breathtaking, and our private guide made it truly special."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">SM</div>
                  <div className="author-info">
                    <h4>Sarah Mitchell</h4>
                    <span>CEO, Tech Innovations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The private jet charter to Dubai was flawless. Professional service from start to finish. Highly recommend!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">JD</div>
                  <div className="author-info">
                    <h4>James Davidson</h4>
                    <span>Entrepreneur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Our family safari in Amboseli was magical. The children loved the elephant encounters. Thank you SafariSphere!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">AL</div>
                  <div className="author-info">
                    <h4>Anna Lopez</h4>
                    <span>Family Traveler</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="newsletter">
        <div className="container">
          <h2>Stay Connected</h2>
          <p>Subscribe to our newsletter for exclusive deals, travel tips, and destination highlights.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;