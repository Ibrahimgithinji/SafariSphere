import React from 'react';
import CharterCard from '../components/CharterCard';
import BookingForm from '../components/BookingForm';
import { charters } from '../data/charters';
import '../css/pages.css';

const CharterServices = () => {
  return (
    <div className="container">
      <section className="charter-intro">
        <h1>Luxury Charter Services</h1>
        <p>Experience unparalleled luxury with SafariSphere Tours' exclusive charter services. From private jets and helicopter safaris to luxury yachts and premium ground transfers, we offer bespoke travel solutions for the most discerning global travelers.</p>
      </section>

      <section>
        <div className="charter-services-grid">
          {charters.map(charter => (
            <CharterCard key={charter.id} charter={charter} />
          ))}
        </div>
      </section>

      <section className="charter-inquiry">
        <h2>Charter Inquiry</h2>
        <p>Ready to book your exclusive charter service? Fill out the form below and we'll get back to you with a personalized quote.</p>
        <BookingForm type="Charter" />
      </section>
    </div>
  );
};

export default CharterServices;