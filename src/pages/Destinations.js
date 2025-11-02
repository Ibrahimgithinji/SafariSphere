import React from 'react';
import DestinationCard from '../components/DestinationCard';
import '../css/pages.css';

const Destinations = () => {
  const kenyaAfricaDestinations = [
  { id: 1, name: 'Maasai Mara', description: 'Experience the Great Migration and wildlife safaris.', image: '/images/Maasai mara.jpg' },
  { id: 2, name: 'Amboseli National Park', description: 'View Mount Kilimanjaro and elephant herds.', image: '/images/Amboseli.jpg' },
  { id: 3, name: 'Diani Beach', description: 'Relax on pristine beaches with water sports.', image: '/images/Diani Beach.jpg' },
  { id: 4, name: 'Zanzibar', description: 'Explore spice islands and beautiful coastlines.', image: '/images/Zanzibar.jpg' },
  { id: 5, name: 'Egypt', description: 'Discover ancient pyramids and the Nile River.', image: '/images/Egypt.jpg' }
  ];

  const internationalDestinations = [
  { id: 6, name: 'Paris', description: 'Explore the City of Light and its iconic landmarks.', image: '/images/Paris.webp' },
  { id: 7, name: 'Dubai', description: 'Experience luxury and modern marvels.', image: '/images/Dubai.avif' },
  { id: 8, name: 'Bali', description: 'Discover temples, beaches, and rice terraces.', image: '/images/Bali.webp' },
  { id: 9, name: 'Rome', description: 'Walk through ancient history and Italian culture.', image: '/images/Rome.jpg' },
  { id: 10, name: 'Thailand', description: 'Experience vibrant culture and stunning landscapes.', image: '/images/Thailand.webp' },
  { id: 11, name: 'Maldives', description: 'Relax in overwater bungalows and crystal waters.', image: '/images/Maldives.webp' }
  ];

  return (
    <div className="container">
      <section className="destinations-content">
        <h1>Our Destinations</h1>
        <p>Explore breathtaking locations across Kenya, Africa, and the world.</p>

        <div className="destination-groups">
          <div className="destination-group">
            <h2>Kenya & Africa</h2>
            <div className="destinations-grid">
              {kenyaAfricaDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>

          <div className="destination-group">
            <h2>International</h2>
            <div className="destinations-grid">
              {internationalDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;