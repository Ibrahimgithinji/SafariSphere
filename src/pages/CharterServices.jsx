import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { charters } from '../data/charters';
import './CharterServices.css';

/**
 * Premium Charter Services Component
 * Sophisticated luxury safari charter section with advanced animations and responsive design
 */
const CharterServices = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const inquiryRef = useRef(null);
  const navigate = useNavigate();

  // IntersectionObserver for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.observerId;
          
          switch (id) {
            case 'hero':
              setHeroVisible(true);
              break;
            case 'grid':
              // Stagger animation for service cards
              const cards = entry.target.querySelectorAll('.service-card');
              cards.forEach((card, index) => {
                setTimeout(() => {
                  setVisibleCards(prev => new Set([...prev, card.dataset.cardId]));
                }, index * 100);
              });
              break;
            case 'inquiry':
              entry.target.classList.add('fade-in');
              break;
            default:
              // No action needed for other cases
              break;
          }
        }
      });
    }, observerOptions);

    // Observe elements
    if (heroRef.current) observer.observe(heroRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    if (inquiryRef.current) observer.observe(inquiryRef.current);

    return () => observer.disconnect();
  }, []);

  const handleBookService = (serviceTitle) => {
    navigate('/booking', { state: { type: 'Charter', destination: serviceTitle } });
  };

  return (
    <section className="charter-services-section" role="main" aria-labelledby="charter-services-title">
      {/* Hero Section */}
      <header 
        ref={heroRef}
        className={`charter-hero ${heroVisible ? 'animate-hero' : ''}`}
        data-observer-id="hero"
        aria-describedby="charter-services-description"
      >
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="charter-services-title" className="hero-title">
              Charter Services
            </h1>
            <p id="charter-services-description" className="hero-description">
              Discover exclusive private and group safaris designed for your comfort and adventure
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Concierge Service</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Luxury Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid Section */}
      <section 
        ref={gridRef}
        className="services-grid-section"
        data-observer-id="grid"
        aria-labelledby="our-services-title"
      >
        <div className="container">
          <header className="section-header">
            <h2 id="our-services-title" className="section-title">
              Our Premium Charter Services
            </h2>
            <p className="section-description">
              Experience unparalleled luxury with our exclusive fleet of premium vehicles and aircraft, 
              tailored to exceed the expectations of the world's most discerning travelers.
            </p>
          </header>

          <div className="services-grid">
            {charters.map((charter, index) => (
              <article
                key={charter.id}
                className={`service-card ${visibleCards.has(`card-${index}`) ? 'card-visible' : ''}`}
                data-card-id={`card-${index}`}
                tabIndex="0"
                aria-labelledby={`service-title-${charter.id}`}
                aria-describedby={`service-description-${charter.id}`}
              >
                <div className="service-image-container">
                  <img
                    src={charter.image || "/images/Private Jet Charters.jpg"}
                    alt={`${charter.title} - Luxury charter service`}
                    loading="lazy"
                    onError={(e) => (e.target.src = "/images/Private Jet Charters.jpg")}
                  />
                  <div className="image-overlay">
                    <div className="badges">
                      {(charter.badges || []).map((badge, badgeIndex) => (
                        <span key={badgeIndex} className="service-badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-content">
                  <h3 id={`service-title-${charter.id}`} className="service-title">
                    {charter.title}
                  </h3>
                  <p 
                    id={`service-description-${charter.id}`}
                    className="service-description"
                  >
                    {charter.description}
                  </p>
                  <div className="service-features">
                    <ul className="features-list">
                      <li>Premium amenities</li>
                      <li>Professional service</li>
                      <li>Flexible scheduling</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => handleBookService(charter.title)}
                    className="service-cta"
                    aria-label={`Book ${charter.title} service`}
                  >
                    <span>Book Your Adventure</span>
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Charter Inquiry Section */}
      <section 
        ref={inquiryRef}
        className="charter-inquiry-section"
        data-observer-id="inquiry"
        aria-labelledby="charter-inquiry-title"
      >
        <div className="container">
          <div className="inquiry-content">
            <header className="inquiry-header">
              <h2 id="charter-inquiry-title" className="inquiry-title">
                Ready to Experience Luxury?
              </h2>
              <p className="inquiry-description">
                Ready to book your exclusive charter service? Our luxury travel specialists 
                are standing by to craft your perfect journey. Fill out the form below and 
                we'll get back to you with a personalized quote within 24 hours.
              </p>
            </header>
            
            <div className="inquiry-form-container">
              <BookingForm type="Charter" />
            </div>

            <div className="contact-benefits">
              <div className="benefit-item">
                <i className="fas fa-clock" aria-hidden="true"></i>
                <span>24-Hour Response Time</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                <span>Fully Insured & Licensed</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-headset" aria-hidden="true"></i>
                <span>24/7 Concierge Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CharterServices;