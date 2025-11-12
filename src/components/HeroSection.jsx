import React, { useState, useEffect, useRef } from 'react';
import '../css/HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 300);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-background">
        <img
          src="/images/hero-bg.jpg"
          alt="Stunning African safari landscape showcasing wildlife and adventure"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
        <h1 className="hero-title">SafariSphere Tours</h1>
        <p className="hero-subtitle">Explore the wild beauty of Africa — your journey begins here.</p>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;