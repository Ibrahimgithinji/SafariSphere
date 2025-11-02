import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import '../css/pages.css';

const Home = () => {
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

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Explore Kenya and the World with SafariSphere Tours</h1>
          <p>Discover breathtaking destinations and create unforgettable memories.</p>
          <div className="btn-group">
            <Link to="/tours" className="btn">Book a Tour</Link>
            <Link to="/charter-services" className="btn">Book a Charter</Link>
          </div>
        </div>
      </section>

      <section className="featured-destinations">
        <div className="container">
          <h2>Featured Destinations</h2>
          <h3>Kenya & Africa</h3>
          <div className="destinations-grid">
            {kenyaDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
          <h3>International</h3>
          <div className="destinations-grid">
            {internationalDestinations.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose SafariSphere Tours?</h2>
          <div className="features">
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h3>Reliability</h3>
              <p>Trusted service with years of experience in premium travel.</p>
            </div>
            <div className="feature">
              <i className="fas fa-star"></i>
              <h3>Expertise</h3>
              <p>Local knowledge and personalized itineraries for every client.</p>
            </div>
            <div className="feature">
              <i className="fas fa-crown"></i>
              <h3>Luxury</h3>
              <p>High-end accommodations and exclusive experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;