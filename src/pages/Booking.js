import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import '../css/pages.css';

const Booking = () => {
  const location = useLocation();
  const state = location.state || {};
  const type = state.type || 'Tour';
  const initialData = { destination: state.destination || '' };

  return (
    <div className="container">
      <section>
        <BookingForm type={type} initialData={initialData} />
      </section>
    </div>
  );
};

export default Booking;
