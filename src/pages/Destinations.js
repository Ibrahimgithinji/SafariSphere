import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import '../css/pages.css';

const Destinations = () => {
  const destinations = [
    { 
      id: 1, 
      name: 'Maasai Mara', 
      description: 'Experience the Great Migration and witness the Big Five in their natural habitat.',
      image: '/images/Maasai mara.jpg'
    },
    { 
      id: 2, 
      name: 'Amboseli National Park', 
      description: 'View Mount Kilimanjaro and observe large elephant herds against stunning backdrops.',
      image: '/images/Amboseli.jpg'
    },
    { 
      id: 3, 
      name: 'Diani Beach', 
      description: 'Relax on pristine beaches with crystal waters and thrilling water sports activities.',
      image: '/images/Diani Beach.jpg'
    },
    { 
      id: 4, 
      name: 'Zanzibar', 
      description: 'Explore spice islands with rich culture, stunning beaches, and historic Stone Town.',
      image: '/images/Zanzibar.jpg'
    },
    { 
      id: 5, 
      name: 'Egypt', 
      description: 'Discover ancient pyramids, the Nile River, and millennia of Egyptian civilization.',
      image: '/images/Egypt.jpg'
    },
    { 
      id: 6, 
      name: 'Paris', 
      description: 'Explore the City of Light with iconic landmarks, world-class cuisine, and romantic charm.',
      image: '/images/Paris.webp'
    },
    { 
      id: 7, 
      name: 'Dubai', 
      description: 'Experience luxury shopping, modern architecture, and desert adventures in this global hub.',
      image: '/images/Dubai.avif'
    },
    { 
      id: 8, 
      name: 'Bali', 
      description: 'Discover ancient temples, pristine beaches, emerald rice terraces, and spiritual wellness.',
      image: '/images/Bali.webp'
    },
    { 
      id: 9, 
      name: 'Rome', 
      description: 'Walk through ancient history, enjoy world-renowned cuisine, and experience Italian culture.',
      image: '/images/Rome.jpg'
    },
    { 
      id: 10, 
      name: 'Thailand', 
      description: 'Experience vibrant culture, stunning beaches, ornate temples, and exceptional hospitality.',
      image: '/images/Thailand.webp'
    },
    { 
      id: 11, 
      name: 'Maldives', 
      description: 'Relax in overwater bungalows with crystal-clear waters and world-class diving.',
      image: '/images/Maldives.webp'
    }
  ];

  return (
    <div className="container">
      <section className="destinations-content">
        <h2>Our Destinations</h2>
        <p className="section-subtitle">Explore breathtaking locations across Kenya, Africa, and around the world.</p>
        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} destination={dest} index={index} />
          ))}
        </div>
        <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/tours" className="btn">View All Tours</Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;