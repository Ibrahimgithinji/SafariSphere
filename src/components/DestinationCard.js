import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components.css';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img
  src={destination.image || "/images/Maasai mara.jpg"}
        alt={destination.name || "Destination Image"}
  onError={(e) => (e.target.src = "/images/Maasai mara.jpg")}
      />
      <div className="card-content">
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <Link to="/tours" className="btn">View Tours</Link>
      </div>
    </div>
  );
};

export default DestinationCard;