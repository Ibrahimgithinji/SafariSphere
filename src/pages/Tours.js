import React, { useState, useEffect } from 'react';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';
import '../css/pages.css';

const Tours = () => {
  const [filteredTours, setFilteredTours] = useState(tours);
  const [filters, setFilters] = useState({
    destination: '',
    duration: '',
    priceRange: ''
  });

  useEffect(() => {
    let filtered = tours;

    if (filters.destination) {
      filtered = filtered.filter(tour => tour.destination.toLowerCase().includes(filters.destination.toLowerCase()));
    }

    if (filters.duration) {
      filtered = filtered.filter(tour => tour.duration === filters.duration);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(p => parseInt(p));
      filtered = filtered.filter(tour => tour.price >= min && tour.price <= max);
    }

    setFilteredTours(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <section className="tours-content">
        <h1>Our Tours</h1>
        <p>Discover amazing tour packages tailored for unforgettable experiences.</p>

        <div className="filters">
          <select name="destination" value={filters.destination} onChange={handleFilterChange}>
            <option value="">All Destinations</option>
            <option value="Kenya">Kenya</option>
            <option value="France">France</option>
            <option value="UAE">UAE</option>
            <option value="Indonesia">Indonesia</option>
          </select>

          <select name="duration" value={filters.duration} onChange={handleFilterChange}>
            <option value="">All Durations</option>
            <option value="3 days">3 days</option>
            <option value="4 days">4 days</option>
            <option value="5 days">5 days</option>
            <option value="6 days">6 days</option>
            <option value="7 days">7 days</option>
          </select>

          <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
            <option value="">All Prices</option>
            <option value="0-1000">Under $1000</option>
            <option value="1000-1500">$1000 - $1500</option>
            <option value="1500-2000">$1500 - $2000</option>
            <option value="2000-3000">Over $2000</option>
          </select>
        </div>

        <div className="tours-grid">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;