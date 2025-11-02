import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/components.css';

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate('/booking', { state: { type: 'Tour', destination: tour.title } });
  };

  return (
    <div className="card">
      <img
        src={tour.image || "/images/Maasai mara.jpg"}
        alt={tour.title || "Tour Image"}
        onError={(e) => (e.target.src = "/images/Maasai mara.jpg")}
      />
      <div className="card-content">
        <h3>{tour.title}</h3>
        <p><strong>Duration:</strong> {tour.duration}</p>
        <p><strong>Price:</strong> ${tour.price}</p>
        <p>{tour.description}</p>
        <button onClick={handleBook} aria-label={`Book ${tour.title}`}>Book Now</button>
      </div>
    </div>
  );
};

export default TourCard;